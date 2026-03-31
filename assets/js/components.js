// Shared components - Hybrid version
const Components = {
  // active: 'home'|'dest'|'ships'|'guide' / base: '' (root) or '../../' (2depth subdir)
  // lang: 'ko' (default) | 'zh-HK'
  header(active = 'home', base = '', lang = '') {
    // 언어 자동 감지 (lang 파라미터 없으면 html[lang] 속성으로 판단)
    const currentLang = lang || (typeof document !== 'undefined' ? document.documentElement.lang : 'ko') || 'ko';
    const isHK = currentLang === 'zh-HK';

    // 현재 파일명 기반 언어 전환 링크
    const koHref  = base + 'index.html';
    const hkHref  = base + 'index_hk.html';

    const navLinks = isHK ? [
      { href: koHref,                           label: '首頁',    key: 'home'  },
      { href: base + 'destinations.html',       label: '目的地',  key: 'dest'  },
      { href: base + 'ships.html',              label: '郵輪公司',key: 'ships' },
      { href: base + 'promotions.html',         label: '優惠',    key: 'promo' },
      { href: base + 'guide/',                  label: '遊輪指南',key: 'guide' },
      { href: 'https://pf.kakao.com/_xgYbJG', label: '查詢',    key: 'contact', external: true },
    ] : [
      { href: koHref,                           label: '홈',       key: 'home'  },
      { href: base + 'destinations.html',       label: '목적지',   key: 'dest'  },
      { href: base + 'ships.html',              label: '선사소개', key: 'ships' },
      { href: base + 'promotions.html',         label: '프로모션', key: 'promo' },
      { href: base + 'guide/',                  label: '크루즈 가이드', key: 'guide' },
      { href: 'https://pf.kakao.com/_xgYbJG', label: '문의',     key: 'contact', external: true },
    ];

    const navHtml = navLinks.map(l =>
      `<a href="${l.href}"${l.external ? ' target="_blank"' : ''} class="${active === l.key ? 'active' : ''}">${l.label}</a>`
    ).join('\n          ');

    return `
    <header class="header">
      <div class="container">
        <a href="${base}index.html" class="logo"><img src="${base}assets/images/logo.svg" alt="CruiseLink" style="height:36px"></a>
        <nav class="nav" id="mainNav">
          ${navHtml}
        </nav>
        <div style="display:flex;align-items:center;gap:10px">
          <div class="lang-switcher" style="display:flex;align-items:center;gap:4px;font-size:.8rem;font-weight:700">
            <a href="${koHref}" style="padding:4px 8px;border-radius:4px;text-decoration:none;color:${isHK ? '#999' : '#1a237e'};background:${isHK ? 'transparent' : '#e8eaf6'}">KO</a>
            <span style="color:#ccc">|</span>
            <a href="${hkHref}" style="padding:4px 8px;border-radius:4px;text-decoration:none;color:${isHK ? '#1a237e' : '#999'};background:${isHK ? '#e8eaf6' : 'transparent'}">繁中</a>
          </div>
          <a href="tel:02-3788-9119" class="header-phone">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            02-3788-9119
          </a>
        </div>
        <button class="mobile-menu-btn" onclick="document.getElementById('mainNav').classList.toggle('open')">☰</button>
      </div>
    </header>`;
  },

  footer(base = '') {
    return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-logo">크루즈 SaaS</div>
            <p class="footer-desc">전문가가 엄선한 크루즈 상품만을 소개합니다.<br>지중해부터 알래스카까지, 믿을 수 있는 크루즈 여행.</p>
            <p style="font-size:0.82rem;color:var(--gray-500)">📞 <a href="tel:02-3788-9119" style="color:var(--primary);font-weight:600">02-3788-9119</a></p>
            <p style="font-size:0.82rem;color:var(--gray-500);margin-top:4px">✉️ info@cruiselink.co.kr</p>
          </div>
          <div class="footer-col">
            <h4>목적지</h4>
            <ul>
              <li><a href="${base}destination.html?dest=mediterranean">지중해</a></li>
              <li><a href="${base}destination.html?dest=alaska">알래스카</a></li>
              <li><a href="${base}destination.html?dest=caribbean">카리브해</a></li>
              <li><a href="${base}destination.html?dest=northern-europe">북유럽</a></li>
              <li><a href="${base}destination.html?dest=korea">한국/일본</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>크루즈 선사</h4>
            <ul>
              <li><a href="${base}search.html?operators=MSC">MSC 크루즈</a></li>
              <li><a href="${base}search.html?operators=Norwegian">NCL 크루즈</a></li>
              <li><a href="${base}search.html?operators=Royal+Caribbean">로얄 캐리비안</a></li>
              <li><a href="${base}search.html?operators=Celebrity">셀러브리티</a></li>
              <li><a href="${base}search.html?operators=Explora">익스플로라 저니</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>고객지원</h4>
            <ul>
              <li><a href="${base}about.html">회사소개</a></li>
              <li><a href="https://pf.kakao.com/_xgYbJG" target="_blank">카카오톡 상담</a></li>
              <li><a href="${base}newsletter.html">뉴스레터 구독</a></li>
              <li><a href="${base}privacy.html">개인정보처리방침</a></li>
              <li><a href="${base}terms.html">이용약관</a></li>
              <li><a href="${base}admin/" style="color:#aaa;font-size:0.8rem">🔒 관리자</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>서울특별시 강서구 마곡서로 152, 두산 더 랜드타워 5층 | 사업자 104-81-84918</span>
          <span>© ${new Date().getFullYear()} 크루즈 SaaS. All rights reserved.</span>
        </div>
      </div>
    </footer>`;
  },

  ctaSection() {
    return `
    <section class="cta-section">
      <div class="container">
        <h2>크루즈 여행, 지금 상담하세요</h2>
        <p>전문 상담원이 최적의 크루즈를 찾아드립니다</p>
        <div class="cta-buttons cta-three">
          <a href="https://pf.kakao.com/_xgYbJG" target="_blank" class="btn btn-orange">💬 카카오톡 상담</a>
          <a href="tel:02-3788-9119" class="btn btn-white">📞 02-3788-9119</a>
          <button class="btn btn-white-solid" onclick="openInquiry()">📋 온라인 문의</button>
        </div>
      </div>
    </section>`;
  },

  loading() {
    return `<div class="loading"><div class="loading-spinner"></div><p>크루즈 정보를 불러오는 중...</p></div>`;
  },

  // Local JSON cruise card (for index/destination/ships pages)
  localCruiseCard(c) {
    const fromPrice = c.priceBalcony || c.priceOutside || c.priceInside;
    const priceLabel = fromPrice ? API.formatPrice(fromPrice, c.currency) : '문의';
    const opName = Translations.operatorName(c.operator) || c.operator;
    const dateStr = c.dateFrom ? c.dateFrom.substring(0, 10).replace(/-/g, '.') : '';
    const today = new Date().toISOString().slice(0, 10);
    const daysLeft = c.dateFrom ? Math.round((new Date(c.dateFrom) - new Date(today)) / 86400000) : 999;
    let badge = '', badgeClass = '';
    if (c.operator === 'Explora') { badge = '럭셔리'; badgeClass = 'badge-luxury'; }
    else if (daysLeft <= 45) { badge = '출발 임박'; badgeClass = 'badge-urgent'; }
    else if (fromPrice && fromPrice < 500) { badge = '특 가'; badgeClass = 'badge-sale'; }
    const opColor = { MSC:'#0066cc', Norwegian:'#d32f2f', 'Royal Caribbean':'#00829b', Carnival:'#e65100', Celebrity:'#37474f', Oceania:'#6a1b9a', Regent:'#880e4f', Explora:'#5d4037' }[c.operator] || '#1a73e8';
    return `
    <div class="cv2-card" onclick="location.href='cruise-view.html?ref=${c.ref}'">
      <div class="cv2-img">
        <img src="${c.image}" alt="${c.title}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 220%22><rect fill=%22%23cfe8fc%22 width=%22400%22 height=%22220%22/><text x=%2250%%22 y=%2250%%22 fill=%22%231a73e8%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2240%22>🚢</text></svg>'">
        ${badge ? `<span class="cv2-badge ${badgeClass}">${badge}</span>` : ''}
      </div>
      <div class="cv2-body">
        ${dateStr ? `<div class="cv2-date">📅 ${dateStr}</div>` : ''}
        <div class="cv2-operator" style="color:${opColor}">${opName}</div>
        <div class="cv2-title">${c.title}</div>
        <div class="cv2-footer">
          <span class="cv2-price">From ${priceLabel}</span>
          <a href="cruise-view.html?ref=${c.ref}" class="cv2-arrow-btn" onclick="event.stopPropagation()">→</a>
        </div>
      </div>
    </div>`;
  },

  // Local JSON cruise list item
  localCruiseItem(c) {
    const fromPrice = c.priceBalcony || c.priceOutside || c.priceInside;
    const region = c.regions?.[0] || '';
    return `
    <div class="cruise-item">
      <div class="cruise-item-img">
        <img src="${c.image}" alt="${c.shipTitle}" loading="lazy" onerror="this.style.display='none'">
        ${region ? `<span class="cruise-item-tag">${Translations.regionName(region)}</span>` : ''}
      </div>
      <div class="cruise-item-body">
        <div class="cruise-item-operator">${Translations.operatorName(c.operator)} · ${c.shipTitleKo || Translations.shipName(c.shipTitle)}</div>
        <div class="cruise-item-title">${c.title}</div>
        <div class="cruise-item-route">🚢 ${Translations.portRoute(c.portRouteKo || c.portRoute)}</div>
        <div class="cruise-item-hashtags">${(c.hashtags||[]).map(t => {
          if (!/[\uAC00-\uD7A3]/.test(t) && t.startsWith('#')) {
            const raw = t.slice(1);
            const ship = Translations.shipName(raw);
            if (ship !== raw) return `<span>#${ship}</span>`;
            const port = Translations.portName(raw);
            if (port !== raw) return `<span>#${port}</span>`;
            return ''; // 번역 불가 영문 태그 제거
          }
          return `<span>${t}</span>`;
        }).filter(Boolean).join('')}</div>
        <div class="cruise-item-footer">
          <div>
            <div class="cruise-item-date">📅 ${API.formatDate(c.dateFrom)} ~ ${API.formatDate(c.dateTo)} · ${c.nights}박</div>
            <div class="cruise-item-price">${API.formatPrice(fromPrice, c.currency)} <small style="font-weight:400;font-size:0.8rem;color:#888">/1인</small></div>
          </div>
          <div class="cruise-item-actions">
            <a href="cruise-view.html?ref=${c.ref}" class="btn btn-navy btn-sm">상세보기</a>
            <button class="btn btn-orange btn-sm" onclick="openInquiryWith('${(c.title||'').replace(/'/g,"\\'")}','${(c.operator||'').replace(/'/g,"\\'")}','${(c.shipTitleKo || Translations.shipName(c.shipTitle)||'').replace(/'/g,"\\'")}','${c.dateFrom||''}','${c.nights||''}','${String(fromPrice||'')}','${c.ref||''}','${c.currency||''}')">문의하기</button>
          </div>
        </div>
      </div>
    </div>`;
  },

  // New search result card — 3-col grid style (사장님 카드 디자인)
  searchCruiseCard(c) {
    const fromPrice = c.priceInside || c.priceOutside || c.priceBalcony;
    const opName = (Translations.operatorName(c.operator) || c.operator || '').toUpperCase();
    const destName = c.destination || (c.regions?.[0] ? Translations.regionName(c.regions[0]) : '');
    const dateStr = c.dateFrom ? c.dateFrom.substring(0,10).replace(/-/g,'. ') : '';
    const nights = c.nights || c.duration || '';
    const dateToStr = (() => {
      if (c.dateTo) return c.dateTo.substring(0,10).replace(/-/g,'. ');
      if (c.dateFrom && nights) {
        const d = new Date(c.dateFrom); d.setDate(d.getDate() + Number(nights));
        return d.toISOString().substring(0,10).replace(/-/g,'. ');
      }
      return '';
    })();
    const port = c.startsAt?.nameKo || c.startsAt?.name || c.portRoute?.split('→')[0]?.trim() || '';
    const arrPort = c.endsAt?.nameKo || c.endsAt?.name || '';
    const routeStr = c.portRoute ? (typeof Translations !== 'undefined' ? Translations.portRoute(c.portRoute) : c.portRoute) : '';
    const today = new Date().toISOString().slice(0,10);
    const daysLeft = c.dateFrom ? Math.round((new Date(c.dateFrom) - new Date(today)) / 86400000) : 999;
    // 배지
    let badge = '', badgeColor = '';
    if (c.operator === 'Explora' || c.operator === 'Regent' || (fromPrice && fromPrice >= 3000)) { badge = '럭셔리'; badgeColor = '#C9A84C'; }
    else if (daysLeft <= 30) { badge = '출발 임박'; badgeColor = '#d32f2f'; }
    else if (daysLeft <= 60) { badge = '얼리버드'; badgeColor = '#2e7d32'; }
    else if (fromPrice && fromPrice < 500) { badge = '특가'; badgeColor = '#c62828'; }
    else { badge = '인기'; badgeColor = '#1565C0'; }
    // 포함사항 태그
    const includes = [];
    if (c.includes?.meals !== false) includes.push('식사 포함');
    if (c.includes?.drinks) includes.push('음료 포함');
    if (c.includes?.entertainment !== false) includes.push('엔터');
    const tagsHtml = includes.map(t => `<span style="display:inline-block;padding:3px 10px;border:1px solid #e0e0e0;border-radius:4px;font-size:11px;color:#555;margin-right:4px">${t}</span>`).join('');
    const priceStr = fromPrice ? '$' + parseFloat(fromPrice).toLocaleString('en-US', {maximumFractionDigits:0}) : '문의';
    return `
    <div class="czn-card" onclick="location.href='cruise-view.html?ref=${c.ref}'" style="cursor:pointer">
      <div class="czn-card-img-wrap">
        <img src="${c.image}" alt="${c.title}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 240%22><rect fill=%22%23cfe8fc%22 width=%22400%22 height=%22240%22/><text x=%2250%%22 y=%2250%%22 fill=%22%231a73e8%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2248%22>🚢</text></svg>'">
        <span class="czn-badge" style="background:${badgeColor}">${badge}</span>
        <button class="czn-wish" data-ref="${c.ref}" onclick="event.stopPropagation();cznToggleWish(this,'${c.ref}')"><svg viewBox="0 0 24 24" width="16" height="16" class="czn-heart-svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></button>
      </div>
      <div class="czn-body">
        <div class="czn-operator">${opName}${destName ? ' · ' + destName : ''}</div>
        <div class="czn-title">🚢 ${c.title || ''}</div>
        <div class="czn-meta">
          ${port ? `<div>📍 ${port}${arrPort && arrPort !== port ? ' → ' + arrPort : ''}</div>` : ''}
          ${dateStr ? `<div>🗓️ ${dateStr}${dateToStr ? ' ~ ' + dateToStr : ''}</div>` : ''}
          ${nights ? `<div>🌙 ${nights}박 ${Number(nights)+1}일</div>` : ''}
          ${routeStr ? `<div style="font-size:11px;color:#777;line-height:1.6;margin-top:4px;">🗺️ ${routeStr}</div>` : ''}
        </div>
        ${includes.length ? `<div class="czn-tags">${tagsHtml}</div>` : ''}
        <div class="czn-footer">
          <div class="czn-price-wrap">
            <span class="czn-price" style="color:#E65100">${priceStr} ~</span>
            <span class="czn-unit">/ 1인</span>
          </div>
          <a href="cruise-view.html?ref=${c.ref}" class="czn-btn" onclick="event.stopPropagation()">자세히 보기</a>
        </div>
      </div>
    </div>`;
  },

  // Legacy: Live API cruise card (for cruise-view.html)
  cruiseCard(holiday, shipInfo) {
    const price = holiday.headline_prices?.cruise?.double;
    const fromPrice = price?.from_balcony || price?.from_inside || price?.from_outside;
    const route = API.shortRoute(holiday.itinerary, 4);
    const region = holiday.regions?.[0] || '';
    const img = shipInfo?.coverImage || holiday.images?.[0]?.href || '';
    return `
    <div class="cruise-card" onclick="location.href='cruise-view.html?ref=${holiday.date_ref}'">
      <div class="cruise-card-img">
        <img src="${img}" alt="${holiday.ship_title}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 200%22><rect fill=%22%23e0e0e0%22 width=%22400%22 height=%22200%22/><text x=%2250%%22 y=%2250%%22 fill=%22%239e9e9e%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2220%22>🚢</text></svg>'">
        ${region ? `<span class="cruise-card-tag">${Translations.regionName(region)}</span>` : ''}
      </div>
      <div class="cruise-card-body">
        <div class="cruise-card-operator">${Translations.operatorName(holiday.operator_title || shipInfo?.operator || '')} · ${Translations.shipName(holiday.ship_title || '')}</div>
        <div class="cruise-card-title">${Translations.portName(holiday.starts_at?.name || '')} 출발 ${holiday.cruise_nights || holiday.duration_days || ''}박 크루즈</div>
        <div class="cruise-card-route">${route}</div>
        <div class="cruise-card-meta">
          <span class="cruise-card-date">📅 ${API.formatDate(holiday.date_from)} · ${holiday.cruise_nights || holiday.duration_days || ''}박</span>
          <span class="cruise-card-price">${API.formatPrice(fromPrice)} <small style="font-weight:normal;font-size:.8em;opacity:.8">/1인</small></span>
        </div>
        <a href="cruise-view.html?ref=${holiday.date_ref}" class="cruise-card-btn">자세히 보기</a>
      </div>
    </div>`;
  },

  cruiseItem(holiday, shipInfo) {
    const price = holiday.headline_prices?.cruise?.double;
    const fromPrice = price?.from_balcony || price?.from_inside || price?.from_outside;
    const route = API.shortRoute(holiday.itinerary, 5);
    const region = holiday.regions?.[0] || '';
    const img = shipInfo?.coverImage || holiday.images?.[0]?.href || '';
    const tags = API.hashtags(holiday);
    return `
    <div class="cruise-item">
      <div class="cruise-item-img">
        <img src="${img}" alt="${holiday.ship_title}" loading="lazy" onerror="this.style.display='none'">
        ${region ? `<span class="cruise-item-tag">${Translations.regionName(region)}</span>` : ''}
      </div>
      <div class="cruise-item-body">
        <div class="cruise-item-operator">${Translations.operatorName(holiday.operator_title || '')} · ${Translations.shipName(holiday.ship_title || '')}</div>
        <div class="cruise-item-title">${Translations.portName(holiday.starts_at?.name || '')} 출발 ${holiday.cruise_nights || holiday.duration_days || ''}박 크루즈</div>
        <div class="cruise-item-route">🚢 ${route}</div>
        <div class="cruise-item-hashtags">${tags.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="cruise-item-footer">
          <div>
            <div class="cruise-item-date">📅 ${API.formatDate(holiday.date_from)} ~ ${API.formatDate(holiday.date_to)} · ${holiday.cruise_nights || holiday.duration_days || ''}박</div>
            <div class="cruise-item-price">${API.formatPrice(fromPrice)} <small style="font-weight:400;font-size:0.8rem;color:#888">/1인</small></div>
          </div>
          <div class="cruise-item-actions">
            <a href="cruise-view.html?ref=${holiday.date_ref}" class="btn btn-navy btn-sm">상세보기</a>
            <button class="btn btn-orange btn-sm" onclick="openInquiryWith('${(Translations.portName(holiday.starts_at?.name||'')+' 출발 '+(holiday.cruise_nights||holiday.duration_days||'')+'박 크루즈').replace(/'/g,"\\'")}','${(holiday.operator_title||'').replace(/'/g,"\\'")}','${(holiday.ship_title||'').replace(/'/g,"\\'")}','${holiday.date_from||''}','${holiday.cruise_nights||holiday.duration_days||''}','${String(fromPrice||'')}','${holiday.date_ref||''}','')">문의하기</button>
          </div>
        </div>
      </div>
    </div>`;
  },

  // 가이드 페이지 공유 바
  shareBar() {
    return `
    <div id="guideShareBar" style="position:fixed;bottom:0;left:0;right:0;z-index:900;background:#fff;border-top:1px solid #e0e0e0;padding:10px 16px;display:flex;align-items:center;justify-content:space-between;gap:10px;box-shadow:0 -2px 12px rgba(0,0,0,.08)">
      <span style="font-size:13px;color:#555;font-weight:500;flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis" id="gsb-title"></span>
      <div style="display:flex;gap:8px;flex-shrink:0">
        <button onclick="Components.doShare('kakao')" style="display:flex;align-items:center;gap:5px;background:#FEE500;color:#191919;border:none;padding:8px 14px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.477 3 2 6.477 2 10.909c0 2.804 1.635 5.268 4.1 6.8l-.82 3.02a.3.3 0 0 0 .44.34l3.54-2.33c.89.12 1.81.18 2.74.18 5.523 0 10-3.477 10-7.909S17.523 3 12 3z"/></svg>
          카카오
        </button>
        <button onclick="Components.doShare('copy')" style="display:flex;align-items:center;gap:5px;background:#1a237e;color:#fff;border:none;padding:8px 14px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/></svg>
          링크복사
        </button>
        <button onclick="Components.doShare('native')" style="display:flex;align-items:center;gap:5px;background:#ff6f00;color:#fff;border:none;padding:8px 14px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>
          공유
        </button>
      </div>
    </div>
    <div style="height:58px"></div>
    <div id="gsbToast" style="display:none;position:fixed;bottom:72px;left:50%;transform:translateX(-50%);background:#1a2540;color:#fff;padding:9px 22px;border-radius:20px;font-size:13px;font-weight:600;z-index:9999;white-space:nowrap"></div>
    <script>
    (function(){
      // 제목 세팅
      var el = document.querySelector('h1');
      if(el) document.getElementById('gsb-title').textContent = el.innerText;

      // Kakao SDK 로드 (미로드 시)
      if(typeof Kakao === 'undefined'){
        var s = document.createElement('script');
        s.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js';
        s.onload = function(){
          if(!Kakao.isInitialized()) Kakao.init('52a3a4296f48da88499c83f3be0312ef');
        };
        document.head.appendChild(s);
      } else if(!Kakao.isInitialized()){
        Kakao.init('52a3a4296f48da88499c83f3be0312ef');
      }
    })();
    </script>`;
  },

  doShare(type) {
    const url = location.href;
    const title = (document.querySelector('h1') || {innerText: document.title}).innerText;

    if (type === 'native' && navigator.share) {
      navigator.share({ title: '🚢 ' + title, url }).catch(() => {});
      return;
    }
    if (type === 'kakao') {
      try {
        if (typeof Kakao !== 'undefined' && Kakao.isInitialized()) {
          Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
              title: title,
              description: '크루즈 SaaS에서 확인하세요',
              imageUrl: 'https://www.cruiselink.co.kr/assets/images/og-default.jpg',
              link: { mobileWebUrl: url, webUrl: url }
            },
            buttons: [{ title: '자세히 보기', link: { mobileWebUrl: url, webUrl: url } }]
          });
          return;
        }
      } catch(e) {}
      window.open('https://pf.kakao.com/_xgYbJG', '_blank');
      return;
    }
    // 링크복사 or native fallback
    navigator.clipboard.writeText(url).then(() => {
      Components._gsbToast('🔗 링크가 복사됐습니다!');
    }).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = url; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy');
      document.body.removeChild(ta);
      Components._gsbToast('🔗 링크가 복사됐습니다!');
    });
  },

  _gsbToast(msg) {
    const t = document.getElementById('gsbToast');
    if (!t) return;
    t.textContent = msg; t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 2200);
  },


  localCruiseCard(c) {
    const fromPrice = c.priceBalcony || c.priceOutside || c.priceInside;
    const opName = (Translations.operatorName(c.operator) || c.operator || '').toUpperCase();
    const shipKo = c.shipTitleKo || Translations.shipName(c.shipTitle) || c.shipTitle || '';
    const destName = c.destination || '';
    const port = c.startsAt?.nameKo || Translations.portName(c.startsAt?.name||'') || c.startsAt?.name || '';
    const arrPort = c.endsAt?.nameKo || Translations.portName(c.endsAt?.name||'') || c.endsAt?.name || '';
    const routeStr = c.portRouteKo || (c.portRoute ? Translations.portRoute(c.portRoute) : '');
    const dateStr = c.dateFrom ? c.dateFrom.substring(0,10).replace(/-/g,'. ') : '';
    const nights = c.nights || c.duration || '';
    const dateToStr = (() => {
      if (c.dateTo) return c.dateTo.substring(0,10).replace(/-/g,'. ');
      if (c.dateFrom && nights) {
        const d = new Date(c.dateFrom); d.setDate(d.getDate() + Number(nights));
        return d.toISOString().substring(0,10).replace(/-/g,'. ');
      }
      return '';
    })();
    const today = new Date().toISOString().slice(0,10);
    const daysLeft = c.dateFrom ? Math.round((new Date(c.dateFrom)-new Date(today))/86400000) : 999;
    let badge='', badgeColor='';
    if (c.badge) { badge=c.badge; badgeColor=c.badgeColor||'#d32f2f'; }
    else if (c.operator==='Explora'||c.operator==='Regent'||(fromPrice&&fromPrice>=3000)){badge='럭셔리';badgeColor='#C9A84C';}
    else if (daysLeft<=30){badge='출발 임박';badgeColor='#d32f2f';}
    else if (daysLeft<=60){badge='얼리버드';badgeColor='#2e7d32';}
    else if (fromPrice&&fromPrice<500){badge='특가';badgeColor='#c62828';}
    else {badge='인기';badgeColor='#1565C0';}
    const priceStr = fromPrice ? '$'+parseFloat(fromPrice).toLocaleString('en-US',{maximumFractionDigits:0}) : '문의';
    return `
    <div class="czn-card" onclick="location.href='cruise-view.html?ref=${c.ref}'" style="cursor:pointer">
      <div class="czn-card-img-wrap">
        <img src="${c.image}" alt="${c.title||''}" loading="lazy" onerror="this.parentElement.style.background='#cfe8fc'">
        <span class="czn-badge" style="background:${badgeColor}">${badge}</span>
        <button class="czn-wish" data-ref="${c.ref}" onclick="event.stopPropagation();cznToggleWish(this,'${c.ref}')"><svg viewBox="0 0 24 24" width="16" height="16" class="czn-heart-svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></button>
      </div>
      <div class="czn-body">
        <div class="czn-operator">${opName}${destName?' · '+destName:''}</div>
        <div class="czn-title">🚢 ${c.title||shipKo}</div>
        <div class="czn-meta">
          ${port?`<div>📍 ${port}${arrPort&&arrPort!==port?' → '+arrPort:''}</div>`:''}
          ${dateStr?`<div>🗓️ ${dateStr}${dateToStr?' ~ '+dateToStr:''}</div>`:''}
          ${nights?`<div>🌙 ${nights}박 ${Number(nights)+1}일</div>`:''}
          ${routeStr?`<div style="font-size:11px;color:#777;line-height:1.6;margin-top:4px;">🗺️ ${routeStr}</div>`:''}
        </div>
        <div class="czn-footer">
          <div class="czn-price-wrap">
            <span class="czn-price" style="color:#E65100">${priceStr} ~</span>
            <span class="czn-unit">/ 1인</span>
          </div>
          <a href="cruise-view.html?ref=${c.ref}" class="czn-btn" onclick="event.stopPropagation()">자세히 보기</a>
        </div>
      </div>
    </div>`;
  },
};
function cznToggleWish(btn, ref) {
  try {
    const list = JSON.parse(localStorage.getItem('cl_wishlist')||'[]');
    const idx = list.indexOf(ref);
    const wished = idx < 0;
    if (wished) list.push(ref); else list.splice(idx,1);
    localStorage.setItem('cl_wishlist', JSON.stringify(list));
    btn.classList.toggle('wished', wished);
  } catch {}
}
