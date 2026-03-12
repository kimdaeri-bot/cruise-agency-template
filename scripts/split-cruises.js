#!/usr/bin/env node
// cruises.json → 목적지별 분할 + 필드 경량화
// 실행: node scripts/split-cruises.js
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'assets', 'data');

const raw = JSON.parse(fs.readFileSync(path.join(OUT, 'cruises.json'), 'utf8'));

// 필요한 필드만 유지 (list view 기준)
function slim(c) {
  return {
    ref: c.ref,
    shipSlug: c.shipSlug,
    shipTitle: c.shipTitle,
    shipTitleKo: c.shipTitleKo,
    operator: c.operator,
    operatorShort: c.operatorShort,
    dateFrom: c.dateFrom,
    nights: c.nights,
    destination: c.destination,
    startsAt: c.startsAt ? { name: c.startsAt.name, nameKo: c.startsAt.nameKo } : null,
    endsAt: c.endsAt ? { name: c.endsAt.name, nameKo: c.endsAt.nameKo } : null,
    portRoute: c.portRoute,
    countriesKo: c.countriesKo,
    priceInside: c.priceInside,
    priceOutside: c.priceOutside,
    priceBalcony: c.priceBalcony,
    priceSuite: c.priceSuite,
    currency: c.currency || 'USD',
    image: c.image,
    title: c.title,
    hashtags: c.hashtags,
  };
}

// 목적지별 분리
const byDest = {};
raw.forEach(c => {
  const d = c.destination || 'other';
  if (!byDest[d]) byDest[d] = [];
  byDest[d].push(slim(c));
});

// 저장
let totalSize = 0;
const manifest = { destinations: [], total: raw.length };
Object.entries(byDest).forEach(([dest, cruises]) => {
  const file = path.join(OUT, `cruises-${dest}.json`);
  const json = JSON.stringify(cruises, null, 0);
  fs.writeFileSync(file, json);
  const size = Buffer.byteLength(json);
  totalSize += size;
  manifest.destinations.push({ dest, count: cruises.length, sizeKB: Math.round(size/1024) });
  console.log(`cruises-${dest}.json: ${cruises.length}건, ${(size/1024).toFixed(0)}KB`);
});

// featured.json (추천 크루즈 9개)
const FEATURED_REFS = [
  'MSCBE20260510TYOTYO',
  'NCLENC-20260503-07-SEA-SEA',
  'MSCEU20260417BCNBCN',
  'MSCAM20260418MIAMIA',
  'MSCER20260502KELKEL',
  'MSCEU20261128DXBDXB',
  'NCLAME-20260502-07-HNL-HNL',
  'NCLJOY-20260425-18-MIA-SEA',
  'NCLSPR-20261212-11-SYD-SYD',
];
const refMap = {};
raw.forEach(c => { refMap[c.ref] = c; });
const featured = FEATURED_REFS.map(r => refMap[r]).filter(Boolean).map(slim);
fs.writeFileSync(path.join(OUT, 'featured.json'), JSON.stringify(featured, null, 0));
console.log(`\nfeatured.json: ${featured.length}건`);

// manifest
manifest.destinations.sort((a,b) => b.count - a.count);
fs.writeFileSync(path.join(OUT, 'cruises-manifest.json'), JSON.stringify(manifest, null, 2));

console.log(`\n✅ 총 ${raw.length}건 → ${Object.keys(byDest).length}개 파일 분할`);
console.log(`📦 합계: ${(totalSize/1024/1024).toFixed(1)}MB`);
console.log(`🚀 초기 로드: featured.json ${(Buffer.byteLength(JSON.stringify(featured))/1024).toFixed(0)}KB만 필요`);
