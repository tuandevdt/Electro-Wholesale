import { storage } from "../services/storage.js";
import { toast } from "../components/toast.js";
import { modal } from "../components/modal.js";

export const publicViews = {
  // Utility to create Zalo quote link with product name
  getZaloLink(customText = "") {
    const settings = storage.getSettings();
    const baseUrl = settings.zaloUrl || "https://zalo.me/0905888999";
    return baseUrl;
  },

  // Render Site Header
  renderHeader(currentRoute = "") {
    const settings = storage.getSettings();
    const categories = storage.getCategories().filter(c => c.status === "active").slice(0, 6);

    return `
      <!-- Top announcement bar -->
      <div class="top-announcement-bar">
        <div class="container announcement-inner">
          <div class="announcement-left">
            <span>📍 Khu vực phục vụ trọng tâm: <strong>Đà Nẵng & Quảng Nam</strong></span>
            <span class="divider-dot">•</span>
            <span>⚡ Chuyên phân phối sỉ & cấp dự án công trình</span>
          </div>
          <div class="announcement-right">
            <span class="phone-link">📞 Hotline: <strong>${settings.phone}</strong></span>
            <span class="divider-dot">•</span>
            <a href="#/admin/dashboard" class="admin-quick-link">⚙ Vào trang Quản trị (Admin)</a>
          </div>
        </div>
      </div>

      <!-- Main Navigation Bar -->
      <header class="site-header" id="site-header">
        <div class="container header-container">
          <a href="#/" class="brand-logo-group">
            <div class="brand-symbol">⚡</div>
            <div class="brand-text">
              <span class="brand-title">${settings.companyName}</span>
              <span class="brand-subtitle">Thiết Bị Điện B2B Miền Trung</span>
            </div>
          </a>

          <nav class="main-nav" id="main-nav">
            <ul class="nav-list">
              <li><a href="#/" class="nav-link ${currentRoute === "" || currentRoute === "/" ? "active" : ""}">Trang chủ</a></li>
              <li><a href="#/gioi-thieu" class="nav-link ${currentRoute === "/gioi-thieu" ? "active" : ""}">Giới thiệu</a></li>
              <li class="nav-dropdown">
                <a href="#/san-pham" class="nav-link ${currentRoute.startsWith("/san-pham") ? "active" : ""}">Sản phẩm ▾</a>
                <div class="dropdown-menu">
                  <a href="#/san-pham" class="dropdown-item fw-bold">👉 Tất cả sản phẩm</a>
                  <div class="dropdown-divider"></div>
                  ${categories.map(cat => `
                    <a href="#/san-pham?category=${cat.id}" class="dropdown-item">${cat.name}</a>
                  `).join("")}
                </div>
              </li>
              <li><a href="#/dich-vu" class="nav-link ${currentRoute === "/dich-vu" ? "active" : ""}">Dịch vụ</a></li>
              <li><a href="#/du-an" class="nav-link ${currentRoute === "/du-an" ? "active" : ""}">Dự án</a></li>
              <li><a href="#/chinh-sach" class="nav-link ${currentRoute.startsWith("/chinh-sach") ? "active" : ""}">Chính sách</a></li>
              <li><a href="#/lien-he" class="nav-link ${currentRoute === "/lien-he" ? "active" : ""}">Liên hệ</a></li>
            </ul>
          </nav>

          <div class="header-actions">
            <a href="${settings.zaloUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-zalo-nav">
              <span class="zalo-icon-badge">Zalo</span>
              <span>Báo giá sỉ</span>
            </a>
            <button class="mobile-toggle-btn" id="mobile-toggle-btn" aria-label="Mở menu điều hướng">
              <span id="mobile-toggle-icon">☰</span>
            </button>
          </div>
        </div>
      </header>
    `;
  },

  // Render Footer
  renderFooter() {
    const settings = storage.getSettings();
    const categories = storage.getCategories().slice(0, 6);
    const policies = storage.getPolicies().slice(0, 5);

    return `
      <footer class="site-footer">
        <div class="container footer-grid">
          <!-- Col 1: About & Info -->
          <div class="footer-col footer-about">
            <div class="brand-logo-group light">
              <div class="brand-symbol">⚡</div>
              <div class="brand-text">
                <span class="brand-title">${settings.companyName}</span>
                <span class="brand-subtitle">Cung Cấp Sỉ Thiết Bị Điện Công Trình</span>
              </div>
            </div>
            <p class="footer-desc">${settings.siteDescription}</p>
            <div class="footer-contact-items">
              <p><strong>🏢 Trụ sở chính:</strong> ${settings.address}</p>
              <p><strong>🏭 Kho Quảng Nam:</strong> ${settings.branchAddress}</p>
              <p><strong>📞 Hotline kinh doanh:</strong> <a href="tel:${settings.phone}">${settings.phone}</a> - ${settings.hotline}</p>
              <p><strong>✉ Email dự án:</strong> <a href="mailto:${settings.email}">${settings.email}</a></p>
              <p><strong>⏰ Giờ làm việc:</strong> ${settings.workingHours}</p>
            </div>
          </div>

          <!-- Col 2: Categories -->
          <div class="footer-col">
            <h4 class="footer-title">Danh Mục Thiết Bị</h4>
            <ul class="footer-links">
              ${categories.map(c => `
                <li><a href="#/san-pham?category=${c.id}">${c.name}</a></li>
              `).join("")}
              <li><a href="#/san-pham" class="text-accent">→ Xem tất cả danh mục</a></li>
            </ul>
          </div>

          <!-- Col 3: Policies -->
          <div class="footer-col">
            <h4 class="footer-title">Chính Sách & Hỗ Trợ</h4>
            <ul class="footer-links">
              ${policies.map(p => `
                <li><a href="#/chinh-sach?slug=${p.slug}">${p.name}</a></li>
              `).join("")}
              <li><a href="#/dich-vu">Dịch vụ lắp đặt & hỗ trợ M&E</a></li>
              <li><a href="#/du-an">Hồ sơ năng lực dự án</a></li>
            </ul>
          </div>

          <!-- Col 4: Regional Service Area & Zalo CTA -->
          <div class="footer-col footer-cta-col">
            <h4 class="footer-title">Khu Vực Phục Vụ</h4>
            <div class="service-area-card">
              <p class="service-area-heading">📍 Đà Nẵng & Quảng Nam</p>
              <p class="service-area-sub">Giao hàng miễn phí tận chân công trình, kỹ sư hỗ trợ kỹ thuật tại hiện trường trong ngày.</p>
              <div class="footer-zalo-box">
                <div class="zalo-box-avatar">👤</div>
                <div class="zalo-box-info">
                  <span class="zalo-box-name">${settings.zaloDisplayName}</span>
                  <span class="zalo-box-status">Đang trực tuyến hỗ trợ</span>
                </div>
              </div>
              <a href="${settings.zaloUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-zalo-full">
                💬 Nhắn Zalo Báo Giá Nhanh
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container footer-bottom-inner">
            <p>© ${new Date().getFullYear()} ${settings.companyName}. Bảo lưu mọi quyền. Prototype B2B Enterprise System.</p>
            <div class="footer-bottom-links">
              <a href="#/chinh-sach">Điều khoản & Chính sách</a>
              <span>•</span>
              <a href="#/lien-he">Liên hệ hỗ trợ</a>
              <span>•</span>
              <a href="#/admin/dashboard" class="text-warning">Khu vực Quản trị Admin</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  },

  // Floating Zalo and Hotline widget
  renderFloatingWidget() {
    const settings = storage.getSettings();
    if (!settings.enableFloatingZalo) return "";

    return `
      <div class="floating-contact-group" id="floating-contact-group">
        <a href="tel:${settings.phone.replace(/\s+/g, '')}" class="floating-btn floating-phone" title="Gọi Hotline: ${settings.phone}">
          <span class="floating-icon">📞</span>
          <span class="floating-label">${settings.phone}</span>
        </a>
        <a href="${settings.zaloUrl}" target="_blank" rel="noopener noreferrer" class="floating-btn floating-zalo" title="Chat Zalo báo giá nhanh">
          <span class="floating-icon-zalo">Zalo</span>
          <span class="floating-label">${settings.zaloCtaText || "Báo giá Zalo"}</span>
        </a>
      </div>
    `;
  },

  // Page 1: Home View
  renderHome() {
    const settings = storage.getSettings();
    const categories = storage.getCategories().filter(c => c.status === "active").slice(0, 8);
    const featuredProducts = storage.getProducts().filter(p => p.status === "active" && p.isFeatured).slice(0, 8);
    const brands = storage.getBrands().filter(b => b.status === "active");
    const featuredProjects = storage.getProjects().filter(p => p.status === "active" && p.isFeatured).slice(0, 3);

    return `
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-bg-overlay"></div>
        <div class="container hero-container">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="pulse-indicator"></span>
              <span>PHÂN PHỐI SỈ THIẾT BỊ ĐIỆN B2B - ĐÀ NẴNG & QUẢNG NAM</span>
            </div>
            <h1 class="hero-title">
              Cung Cấp Thiết Bị Điện <span class="highlight-electric">Công Trình & Nhà Máy</span>
            </h1>
            <p class="hero-subtitle">
              Đà Quang Electric là đối tác cung ứng vật tư cơ điện (M&E) uy tín hàng đầu khu vực miền Trung.
              Trọng tâm bán sỉ số lượng lớn, chiết khấu dự án cạnh tranh, tư vấn kỹ thuật chuyên sâu và giao hàng tận chân công trình.
            </p>
            <div class="hero-cta-group">
              <a href="#/san-pham" class="btn btn-primary btn-lg">
                📦 Xem Danh Mục Thiết Bị
              </a>
              <a href="${settings.zaloUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-zalo-hero btn-lg">
                💬 Nhận Báo Giá Sỉ Qua Zalo
              </a>
            </div>
            <div class="hero-trust-bar">
              <div class="trust-item">
                <span class="trust-icon">✓</span>
                <span>100% Chính Hãng (CO/CQ)</span>
              </div>
              <div class="trust-item">
                <span class="trust-icon">✓</span>
                <span>Giá Sỉ Nhà Thầu Tốt Nhất</span>
              </div>
              <div class="trust-item">
                <span class="trust-icon">✓</span>
                <span>Giao Tận Nơi 2-4 Giờ</span>
              </div>
              <div class="trust-item">
                <span class="trust-icon">✓</span>
                <span>Kỹ Sư Khảo Sát Tại Chỗ</span>
              </div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-card-featured">
              <div class="card-badge-top">⭐ TIÊU BIỂU DỰ ÁN</div>
              <img src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=700&q=80" alt="Thiết bị điện công trình" class="hero-img">
              <div class="hero-card-info">
                <h3>Thiết Bị Đóng Cắt & Tủ Điện Phân Phối</h3>
                <p>Schneider Electric • LS Electric • ABB • Cadivi</p>
                <div class="hero-card-specs">
                  <span>Dòng định mức tới 6300A</span>
                  <span>Chuẩn IEC quốc tế</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- USP / Core Strengths Section -->
      <section class="usp-section">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-tag">THẾ MẠNH DOANH NGHIỆP</span>
            <h2 class="section-title">Tại Sao Các Nhà Thầu & Doanh Nghiệp Chọn Chúng Tôi?</h2>
            <p class="section-desc">Chúng tôi hiểu rõ áp lực tiến độ, tiêu chuẩn kỹ thuật và nghiệm thu khắt khe của các công trình công nghiệp.</p>
          </div>

          <div class="usp-grid">
            <div class="usp-card">
              <div class="usp-icon-wrap icon-blue">🏢</div>
              <h3 class="usp-title">Bán Sỉ Là Trọng Tâm</h3>
              <p class="usp-text">Chính sách chiết khấu trực tiếp theo quy mô đơn hàng, hỗ trợ giá thầu tối đa cho nhà thầu M&E và chủ đầu tư.</p>
            </div>
            <div class="usp-card">
              <div class="usp-icon-wrap icon-amber">📜</div>
              <h3 class="usp-title">Minh Bạch CO/CQ</h3>
              <p class="usp-text">Cung cấp đầy đủ chứng chỉ xuất xứ, chất lượng, hồ sơ kiểm định kỹ thuật phục vụ nghiệm thu quyết toán công trình.</p>
            </div>
            <div class="usp-card">
              <div class="usp-icon-wrap icon-cyan">👨‍🔧</div>
              <h3 class="usp-title">Tư Vấn Kỹ Thuật Trực Tiếp</h3>
              <p class="usp-text">Đội ngũ kỹ sư cơ điện khảo sát thực tế, hỗ trợ bóc tách khối lượng BOQ và tư vấn thiết bị thay thế tương đương tối ưu ngân sách.</p>
            </div>
            <div class="usp-card">
              <div class="usp-icon-wrap icon-green">🚚</div>
              <h3 class="usp-title">Giao Hàng Tận Chân Công Trình</h3>
              <p class="usp-text">Đội xe cẩu tải chuyên dụng giao hàng tận chân công trường tại Đà Nẵng và các KCN Quảng Nam trong vòng 2 - 4 giờ.</p>
            </div>
            <div class="usp-card">
              <div class="usp-icon-wrap icon-purple">⚡</div>
              <h3 class="usp-title">Hỗ Trợ Lắp Đặt & Xử Lý Sự Cố</h3>
              <p class="usp-text">Nhận gia công đấu nối tủ điện theo bản vẽ, hỗ trợ cài đặt thông số biến tần, đồng hồ đo đếm và đóng cọc tiếp địa đạt chuẩn.</p>
            </div>
            <div class="usp-card">
              <div class="usp-icon-wrap icon-red">🤝</div>
              <h3 class="usp-title">Đồng Hành & Hỗ Trợ Đổi Hàng Dư</h3>
              <p class="usp-text">Chính sách đặc biệt hỗ trợ thu hồi vật tư tiêu chuẩn dư thừa sau hoàn công, giúp nhà thầu giảm thiểu tồn đọng dòng vốn.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Categories Section -->
      <section class="categories-section">
        <div class="container">
          <div class="section-header-flex">
            <div>
              <span class="section-tag">CATALOG DANH MỤC</span>
              <h2 class="section-title">Nhóm Thiết Bị Phân Phối Chủ Lực</h2>
            </div>
            <a href="#/san-pham" class="btn btn-outline">Xem Toàn Bộ Danh Mục →</a>
          </div>

          <div class="categories-grid">
            ${categories.map(cat => `
              <a href="#/san-pham?category=${cat.id}" class="category-card">
                <div class="category-img-wrap">
                  <img src="${cat.image}" alt="${cat.name}" loading="lazy">
                </div>
                <div class="category-card-body">
                  <h3 class="category-name">${cat.name}</h3>
                  <p class="category-desc">${cat.description}</p>
                  <span class="category-link-text">Xem chi tiết sản phẩm ➔</span>
                </div>
              </a>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Featured Products Section -->
      <section class="products-preview-section">
        <div class="container">
          <div class="section-header-flex">
            <div>
              <span class="section-tag">SẢN PHẨM NỔI BẬT</span>
              <h2 class="section-title">Thiết Bị Công Nghiệp Được Tin Dùng Nhất</h2>
              <p class="section-desc">Giá sỉ ưu đãi theo số lượng. Liên hệ Zalo hoặc gửi yêu cầu báo giá dự án để nhận chiết khấu tốt nhất.</p>
            </div>
            <a href="#/san-pham" class="btn btn-outline">Xem Tất Cả Sản Phẩm (${storage.getProducts().length}) →</a>
          </div>

          <div class="products-grid">
            ${featuredProducts.map(prod => this.renderProductCard(prod)).join("")}
          </div>
        </div>
      </section>

      <!-- Regional Focus: Da Nang - Quang Nam -->
      <section class="regional-focus-section">
        <div class="container">
          <div class="regional-grid">
            <div class="regional-content">
              <span class="section-tag text-white">TRỌNG TÂM ĐỊA BÀN PHỤC VỤ</span>
              <h2 class="regional-title">Đà Nẵng & Tỉnh Quảng Nam</h2>
              <p class="regional-desc">
                Với trụ sở tại Quận Hải Châu (Đà Nẵng) và kho vận chuyển tại KCN Điện Nam - Điện Ngọc (Quảng Nam), 
                Đà Quang Electric đảm bảo cung cấp hàng hóa nhanh chóng, kịp tiến độ đổ bê tông, kéo cáp ngầm của mọi công trình.
              </p>
              <div class="regional-badges">
                <div class="regional-badge-item">
                  <span class="rb-icon">📍</span>
                  <div>
                    <strong>TP. Đà Nẵng</strong>
                    <span>KCN Hòa Khánh, KCN Hòa Cầm, Liên Chiểu, Hải Châu, Sơn Trà, Cảng Tiên Sa...</span>
                  </div>
                </div>
                <div class="regional-badge-item">
                  <span class="rb-icon">📍</span>
                  <div>
                    <strong>Tỉnh Quảng Nam</strong>
                    <span>KCN Điện Nam - Điện Ngọc, KCN Đông Quế Sơn, KCN Chu Lai, TP. Hội An, Tam Kỳ...</span>
                  </div>
                </div>
              </div>
              <div class="regional-cta">
                <a href="#/lien-he" class="btn btn-warning btn-lg">Xem Địa Chỉ Kho & Trụ Sở</a>
                <a href="${settings.zaloUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-zalo-outline btn-lg">Tư Vấn Vận Chuyển Qua Zalo</a>
              </div>
            </div>
            <div class="regional-map-box">
              <div class="map-card-mockup">
                <div class="map-header">
                  <span class="map-dot"></span>
                  <strong>Mạng Lưới Cung Ứng Vật Tư Miền Trung</strong>
                </div>
                <div class="map-visual-placeholder">
                  <div class="map-pin da-nang-pin">
                    <span class="pin-marker">🏢</span>
                    <span class="pin-tooltip">Đà Nẵng (Trụ sở & Kho tổng)</span>
                  </div>
                  <div class="map-pin quang-nam-pin">
                    <span class="pin-marker">🏭</span>
                    <span class="pin-tooltip">Quảng Nam (Kho trung chuyển KCN)</span>
                  </div>
                  <div class="map-connection-line"></div>
                </div>
                <div class="map-footer-stats">
                  <div><strong>1.500+</strong><span>Đơn hàng công trình</span></div>
                  <div><strong>2 - 4h</strong><span>Giao hàng nội thành</span></div>
                  <div><strong>100%</strong><span>Đúng tiến độ cam kết</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Projects Showcase -->
      <section class="projects-preview-section">
        <div class="container">
          <div class="section-header-flex">
            <div>
              <span class="section-tag">HỒ SƠ NĂNG LỰC</span>
              <h2 class="section-title">Dự Án Đã Cung Cấp Vật Tư Thiết Bị</h2>
            </div>
            <a href="#/du-an" class="btn btn-outline">Xem Tất Cả Dự Án →</a>
          </div>

          <div class="projects-grid">
            ${featuredProjects.map(proj => `
              <div class="project-card">
                <div class="project-img-wrap">
                  <img src="${proj.images[0]}" alt="${proj.name}" loading="lazy">
                  <span class="project-type-tag">${proj.projectType}</span>
                </div>
                <div class="project-card-body">
                  <span class="project-location">📍 ${proj.location}</span>
                  <h3 class="project-name">${proj.name}</h3>
                  <div class="project-scope">
                    <strong>Hạng mục:</strong> ${proj.suppliedScope}
                  </div>
                  <p class="project-desc">${proj.description}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Partner Brands Strip -->
      <section class="brands-section">
        <div class="container">
          <p class="brands-heading">ĐỐI TÁC THƯƠNG HIỆU HÀNG ĐẦU</p>
          <div class="brands-grid">
            ${brands.map(b => `
              <div class="brand-item" title="${b.description}">
                <span class="brand-name-tag">${b.name}</span>
                <span class="brand-origin">${b.origin}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Bottom High-Impact Consultation Banner -->
      <section class="cta-banner-section">
        <div class="container">
          <div class="cta-banner-card">
            <div class="cta-banner-content">
              <h2>Bạn Cần Báo Giá Sỉ Cho Dự Án Hoặc Công Trình?</h2>
              <p>Gửi bảng danh mục vật tư (BOQ) hoặc yêu cầu kỹ thuật qua Zalo, chúng tôi sẽ phản hồi bảng báo giá chiết khấu sâu chỉ trong vòng 30 - 60 phút.</p>
              <div class="cta-banner-buttons">
                <a href="${settings.zaloUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-zalo-white btn-lg">
                  💬 Gửi BOQ / Báo Giá Qua Zalo Ngay
                </a>
                <a href="#/lien-he" class="btn btn-outline-white btn-lg">
                  📍 Xem Địa Chỉ Kho & Trụ Sở
                </a>
              </div>
            </div>
            <div class="cta-banner-contact-pill">
              <span>Hotline kỹ sư dự án:</span>
              <a href="tel:${settings.phone}" class="pill-number">${settings.phone}</a>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Helper for single product card
  renderProductCard(prod) {
    const settings = storage.getSettings();
    const category = storage.getCategoryById(prod.categoryId);
    const catName = category ? category.name : "Thiết bị điện";
    const zaloMsg = encodeURIComponent(`Xin chào Đà Quang Electric, tôi quan tâm sản phẩm [${prod.sku}] ${prod.name}. Xin vui lòng tư vấn và báo giá sỉ cho công trình của tôi.`);
    const zaloLink = `${settings.zaloUrl}?text=${zaloMsg}`;

    return `
      <div class="product-card">
        <div class="product-card-top">
          <a href="#/san-pham/${prod.slug}" class="product-img-link">
            <img src="${prod.images[0]}" alt="${prod.name}" loading="lazy">
          </a>
          <div class="product-badges">
            ${prod.isFeatured ? '<span class="badge badge-featured">Nổi bật</span>' : ''}
            ${prod.isNew ? '<span class="badge badge-new">Mới</span>' : ''}
          </div>
          <span class="product-brand-tag">${prod.brand}</span>
        </div>
        <div class="product-card-body">
          <span class="product-category-name">${catName}</span>
          <h3 class="product-title">
            <a href="#/san-pham/${prod.slug}" title="${prod.name}">${prod.name}</a>
          </h3>
          <div class="product-sku-row">
            <span class="sku-label">Mã SKU:</span>
            <span class="sku-value">${prod.sku}</span>
          </div>
          <p class="product-short-desc">${prod.shortDescription}</p>
          <div class="product-price-box">
            <span class="price-label">Giá sỉ công trình:</span>
            <span class="price-text">Liên hệ nhận báo giá</span>
          </div>
        </div>
        <div class="product-card-footer">
          <a href="#/san-pham/${prod.slug}" class="btn btn-sm btn-outline">Xem chi tiết</a>
          <a href="${zaloLink}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-zalo">
            💬 Hỏi giá Zalo
          </a>
        </div>
      </div>
    `;
  },

  // Page 2: About View
  renderAbout() {
    const settings = storage.getSettings();

    return `
      <div class="page-header-bar">
        <div class="container">
          <div class="breadcrumb">
            <a href="#/">Trang chủ</a> <span>/</span> <span>Giới thiệu doanh nghiệp</span>
          </div>
          <h1 class="page-title">Về Đà Quang Electric</h1>
          <p class="page-subtitle">Nhà phân phối sỉ thiết bị điện & cơ điện công nghiệp hàng đầu khu vực Quảng Nam - Đà Nẵng</p>
        </div>
      </div>

      <div class="container py-5">
        <div class="about-grid">
          <div class="about-text-content">
            <span class="section-tag">TỔNG QUAN NĂNG LỰC</span>
            <h2>Đối Tác Cung Ứng Cơ Điện (M&E) Đáng Tin Cậy Của Mọi Công Trình</h2>
            <p>
              Được thành lập với sứ mệnh đồng hành cùng sự phát triển hạ tầng và công nghiệp mạnh mẽ tại khu vực kinh tế trọng điểm miền Trung, 
              <strong>${settings.companyName}</strong> chuyên phân phối số lượng lớn các dòng thiết bị điện đóng cắt, tủ điện công nghiệp, cáp điện lực và thiết bị điều khiển tự động hóa.
            </p>
            <p>
              Chúng tôi không đơn thuần là đơn vị thương mại bán buôn. Với đội ngũ kỹ sư điện giàu kinh nghiệm, chúng tôi mang tới cho khách hàng 
              <strong>giải pháp đồng bộ</strong>: từ khâu bóc tách dự toán bản vẽ, đề xuất giải pháp kỹ thuật tối ưu chi phí, cam kết đầy đủ chứng chỉ CO/CQ, 
              đến giao hàng đúng hẹn tại công trường và hỗ trợ lắp đặt, cài đặt thông số tại chỗ.
            </p>

            <div class="about-stats-grid">
              <div class="stat-box">
                <span class="stat-number">10+</span>
                <span class="stat-label">Năm kinh nghiệm cung ứng M&E</span>
              </div>
              <div class="stat-box">
                <span class="stat-number">100%</span>
                <span class="stat-label">Hàng chính hãng CO/CQ chuẩn</span>
              </div>
              <div class="stat-box">
                <span class="stat-number">200+</span>
                <span class="stat-label">Nhà thầu & Nhà máy thân thiết</span>
              </div>
              <div class="stat-box">
                <span class="stat-number">2.000m²</span>
                <span class="stat-label">Tổng diện tích kho bãi dự trữ</span>
              </div>
            </div>
          </div>
          <div class="about-media-card">
            <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" alt="Kho hàng thiết bị điện Đà Quang" class="about-img">
            <div class="about-quote-box">
              <p>"Chúng tôi tin tưởng rằng uy tín doanh nghiệp được xây dựng từ sự minh bạch nguồn gốc sản phẩm và sự tận tâm hỗ trợ kỹ thuật tại hiện trường."</p>
              <strong>- Ban Giám Đốc Đà Quang Electric</strong>
            </div>
          </div>
        </div>

        <!-- Vision and Commitments -->
        <div class="commitments-section mt-5">
          <div class="section-header text-center">
            <span class="section-tag">CAM KẾT CỦA CHÚNG TÔI</span>
            <h2>5 Trụ Cột Giá Trị Cốt Lõi</h2>
          </div>
          <div class="commitments-grid">
            <div class="commit-card">
              <span class="commit-num">01</span>
              <h3>Chất lượng tuyệt đối</h3>
              <p>Cam kết 100% sản phẩm chính hãng mới nguyên kiện, đầy đủ chứng chỉ CO/CQ từ nhà sản xuất, hoàn tiền 200% nếu phát hiện hàng nhái.</p>
            </div>
            <div class="commit-card">
              <span class="commit-num">02</span>
              <h3>Bảo vệ giá nhà thầu</h3>
              <p>Mức chiết khấu sỉ sâu và chính sách bảo lưu giá dự án trong suốt thời gian đấu thầu, giúp nhà thầu giữ vững biên lợi nhuận.</p>
            </div>
            <div class="commit-card">
              <span class="commit-num">03</span>
              <h3>Tốc độ giao hàng vượt trội</h3>
              <p>Kho hàng luôn sẵn số lượng lớn tại Đà Nẵng và KCN Điện Nam - Điện Ngọc, đáp ứng cấp bách cho các đợt đổ sàn, kéo cáp công trường.</p>
            </div>
            <div class="commit-card">
              <span class="commit-num">04</span>
              <h3>Kỹ thuật thực chiến</h3>
              <p>Đội ngũ kỹ sư sẵn sàng có mặt tại hiện trường để giải đáp các vướng mắc đấu nối, cài đặt thiết bị và phối hợp nghiệm thu.</p>
            </div>
            <div class="commit-card">
              <span class="commit-num">05</span>
              <h3>Đồng hành sau dự án</h3>
              <p>Bảo hành 1 đổi 1 nhanh chóng và hỗ trợ nhận lại vật tư tiêu chuẩn dư thừa sau hoàn công theo chính sách linh hoạt.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Page 3: Products Catalog View
  renderProducts(currentParams = {}) {
    const products = storage.getProducts();
    const categories = storage.getCategories().filter(c => c.status === "active");
    const brands = storage.getBrands().filter(b => b.status === "active");

    const categoryFilter = currentParams.category || "";
    const brandFilter = currentParams.brand || "";
    const searchQuery = (currentParams.search || "").toLowerCase().trim();
    const sortFilter = currentParams.sort || "sortOrder";
    const statusFilter = currentParams.status || "all";

    // Filter logic
    let filtered = products.filter(p => {
      if (p.status !== "active") return false;
      if (categoryFilter && p.categoryId !== categoryFilter) return false;
      if (brandFilter && p.brand !== brandFilter) return false;
      if (statusFilter === "featured" && !p.isFeatured) return false;
      if (statusFilter === "new" && !p.isNew) return false;

      if (searchQuery) {
        const matchName = p.name.toLowerCase().includes(searchQuery);
        const matchSku = p.sku.toLowerCase().includes(searchQuery);
        const matchBrand = p.brand.toLowerCase().includes(searchQuery);
        const matchDesc = (p.shortDescription || "").toLowerCase().includes(searchQuery);
        if (!matchName && !matchSku && !matchBrand && !matchDesc) return false;
      }
      return true;
    });

    // Sort logic
    if (sortFilter === "name-asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name, "vi"));
    } else if (sortFilter === "name-desc") {
      filtered.sort((a, b) => b.name.localeCompare(a.name, "vi"));
    } else {
      filtered.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
    }

    const currentCatObj = categories.find(c => c.id === categoryFilter);

    return `
      <div class="page-header-bar">
        <div class="container">
          <div class="breadcrumb">
            <a href="#/">Trang chủ</a> <span>/</span> <span>Danh mục sản phẩm</span>
            ${currentCatObj ? `<span>/</span> <span>${currentCatObj.name}</span>` : ""}
          </div>
          <h1 class="page-title">${currentCatObj ? currentCatObj.name : "Thiết Bị Điện Công Nghiệp & Công Trình"}</h1>
          <p class="page-subtitle">${currentCatObj ? currentCatObj.description : "Catalog đầy đủ các dòng thiết bị đóng cắt, cáp điện, tủ điện, thiết bị tự động hóa phân phối sỉ tại Quảng Nam - Đà Nẵng."}</p>
        </div>
      </div>

      <div class="container py-5">
        <!-- Filter and Search Bar -->
        <div class="catalog-filter-bar">
          <div class="search-input-group">
            <input type="text" id="catalog-search" class="form-input" placeholder="Tìm theo tên thiết bị, mã SKU, thương hiệu..." value="${currentParams.search || ""}">
            <button class="btn btn-primary" id="btn-do-search">🔍 Tìm kiếm</button>
          </div>
          <div class="filters-row">
            <div class="filter-item">
              <label for="filter-category">Danh mục:</label>
              <select id="filter-category" class="form-select">
                <option value="">Tất cả danh mục (${categories.length})</option>
                ${categories.map(c => `
                  <option value="${c.id}" ${categoryFilter === c.id ? "selected" : ""}>${c.name}</option>
                `).join("")}
              </select>
            </div>
            <div class="filter-item">
              <label for="filter-brand">Thương hiệu:</label>
              <select id="filter-brand" class="form-select">
                <option value="">Tất cả thương hiệu</option>
                ${brands.map(b => `
                  <option value="${b.name}" ${brandFilter === b.name ? "selected" : ""}>${b.name}</option>
                `).join("")}
              </select>
            </div>
            <div class="filter-item">
              <label for="filter-status">Trạng thái:</label>
              <select id="filter-status" class="form-select">
                <option value="all" ${statusFilter === "all" ? "selected" : ""}>Tất cả sản phẩm</option>
                <option value="featured" ${statusFilter === "featured" ? "selected" : ""}>Sản phẩm nổi bật</option>
                <option value="new" ${statusFilter === "new" ? "selected" : ""}>Sản phẩm mới</option>
              </select>
            </div>
            <div class="filter-item">
              <label for="filter-sort">Sắp xếp:</label>
              <select id="filter-sort" class="form-select">
                <option value="sortOrder" ${sortFilter === "sortOrder" ? "selected" : ""}>Thứ tự mặc định</option>
                <option value="name-asc" ${sortFilter === "name-asc" ? "selected" : ""}>Tên A → Z</option>
                <option value="name-desc" ${sortFilter === "name-desc" ? "selected" : ""}>Tên Z → A</option>
              </select>
            </div>
            ${(categoryFilter || brandFilter || searchQuery || statusFilter !== "all") ? `
              <button class="btn btn-outline btn-reset-filters" id="btn-reset-filters">✕ Xóa bộ lọc</button>
            ` : ""}
          </div>
        </div>

        <!-- Result Status Counter -->
        <div class="catalog-result-header">
          <p class="result-count">Hiển thị <strong>${filtered.length}</strong> sản phẩm phù hợp</p>
          <div class="notice-b2b">
            <span>💡 <em>Lưu ý: Báo giá sỉ theo số lượng & quy mô gói thầu, vui lòng bấm nút "Hỏi giá Zalo" để nhận chiết khấu.</em></span>
          </div>
        </div>

        <!-- Products Grid or Empty State -->
        ${filtered.length > 0 ? `
          <div class="products-grid">
            ${filtered.map(p => this.renderProductCard(p)).join("")}
          </div>
        ` : `
          <div class="empty-state-box">
            <div class="empty-icon">🔍</div>
            <h3>Không tìm thấy sản phẩm phù hợp</h3>
            <p>Vui lòng thử tìm kiếm với từ khóa khác hoặc xóa bớt các bộ lọc danh mục/thương hiệu.</p>
            <button class="btn btn-primary" id="btn-clear-empty-filters">Xóa bộ lọc và xem tất cả</button>
          </div>
        `}
      </div>
    `;
  },

  // Page 4: Product Detail View
  renderProductDetail(slug) {
    const product = storage.getProductBySlug(slug);
    const settings = storage.getSettings();

    if (!product) {
      return `
        <div class="container py-5 text-center">
          <div class="empty-state-box">
            <div class="empty-icon">⚠️</div>
            <h2>Không tìm thấy sản phẩm</h2>
            <p>Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã được cập nhật lại mã.</p>
            <a href="#/san-pham" class="btn btn-primary mt-3">Quay lại danh mục sản phẩm</a>
          </div>
        </div>
      `;
    }

    const category = storage.getCategoryById(product.categoryId);
    const catName = category ? category.name : "Thiết bị điện";
    const relatedProducts = storage.getProducts()
      .filter(p => p.categoryId === product.categoryId && p.id !== product.id && p.status === "active")
      .slice(0, 4);

    const zaloMsg = encodeURIComponent(`Chào Đà Quang Electric, tôi cần tư vấn và báo giá sỉ cho sản phẩm: [SKU: ${product.sku}] ${product.name}.`);
    const zaloQuoteUrl = `${settings.zaloUrl}?text=${zaloMsg}`;

    return `
      <div class="page-header-bar compact">
        <div class="container">
          <div class="breadcrumb">
            <a href="#/">Trang chủ</a> <span>/</span> 
            <a href="#/san-pham">Sản phẩm</a> <span>/</span> 
            ${category ? `<a href="#/san-pham?category=${category.id}">${category.name}</a> <span>/</span> ` : ""}
            <span>${product.name}</span>
          </div>
        </div>
      </div>

      <div class="container py-5">
        <div class="product-detail-layout">
          <!-- Left: Gallery -->
          <div class="detail-gallery-col">
            <div class="main-gallery-view">
              <img id="detail-main-img" src="${product.images[0]}" alt="${product.name}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80';">
            </div>
            ${product.images.length > 1 ? `
              <div class="gallery-thumbs-row">
                ${product.images.map((img, idx) => `
                  <button class="thumb-btn ${idx === 0 ? "active" : ""}" data-img="${img}">
                    <img src="${img}" alt="Thumbnail">
                  </button>
                `).join("")}
              </div>
            ` : ""}

            <div class="delivery-guarantee-card mt-4">
              <h4>🛡️ Cam Kết Cung Ứng Dự Án</h4>
              <ul>
                <li><strong>Chính hãng 100%:</strong> Đầy đủ chứng chỉ CO/CQ chuẩn nhà sản xuất.</li>
                <li><strong>Kho sẵn sàng:</strong> Cung cấp nhanh chóng tại Đà Nẵng & Quảng Nam.</li>
                <li><strong>Hỗ trợ kỹ thuật:</strong> Hỗ trợ khảo sát, bóc tách khối lượng BOQ.</li>
                <li><strong>Bảo hành:</strong> Đổi mới 1:1 trong 30 ngày nếu phát sinh lỗi kỹ thuật.</li>
              </ul>
            </div>
          </div>

          <!-- Right: Info & Pricing CTA -->
          <div class="detail-info-col">
            <div class="detail-brand-row">
              <span class="brand-tag-large">${product.brand}</span>
              <span class="sku-tag">SKU: <strong>${product.sku}</strong></span>
              ${product.isFeatured ? '<span class="badge badge-featured">Nổi bật</span>' : ''}
              ${product.isNew ? '<span class="badge badge-new">Hàng mới</span>' : ''}
            </div>

            <h1 class="detail-title">${product.name}</h1>
            <p class="detail-category-ref">Danh mục: <strong>${catName}</strong></p>

            <div class="b2b-price-box-large">
              <div class="price-header">
                <span class="price-label-lg">Chính sách giá B2B:</span>
                <span class="price-val-lg">Báo giá sỉ theo số lượng & dự án</span>
              </div>
              <p class="price-note">
                Doanh nghiệp áp dụng mức chiết khấu riêng biệt cho đơn hàng số lượng lớn, gói thầu nhà máy, dự án M&E. 
                Vui lòng liên hệ trực tiếp với bộ phận dự án để nhận bảng báo giá chi tiết và ưu đãi tốt nhất.
              </p>
              <div class="detail-cta-actions">
                <a href="${zaloQuoteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-zalo-big">
                  💬 Nhận Báo Giá Sỉ Qua Zalo (Ưu tiên)
                </a>
                <a href="tel:${settings.phone.replace(/\s+/g, '')}" class="btn btn-call-big">
                  📞 Gọi Hotline Dự Án: ${settings.phone}
                </a>
              </div>
            </div>

            <div class="detail-short-desc mt-4">
              <h3>Mô Tả Tổng Quan</h3>
              <p>${product.description || product.shortDescription}</p>
            </div>

            <!-- Applications -->
            ${product.applications ? `
              <div class="detail-applications mt-4">
                <h3>Phạm Vi Ứng Dụng</h3>
                <div class="app-content-box">
                  ${product.applications}
                </div>
              </div>
            ` : ""}

            <!-- Specs Table -->
            <div class="detail-specs-section mt-4">
              <h3>Thông Số Kỹ Thuật Chi Tiết</h3>
              <div class="table-responsive">
                <table class="specs-table">
                  <tbody>
                    ${product.technicalSpecifications ? Object.entries(product.technicalSpecifications).map(([key, val]) => `
                      <tr>
                        <td class="spec-label">${key}</td>
                        <td class="spec-value">${val}</td>
                      </tr>
                    `).join("") : `
                      <tr><td>Thông số</td><td>Theo tiêu chuẩn nhà sản xuất</td></tr>
                    `}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Related Products Section -->
        ${relatedProducts.length > 0 ? `
          <div class="related-products-section mt-5">
            <h2 class="section-title">Sản Phẩm Cùng Nhóm Thiết Bị</h2>
            <div class="products-grid mt-4">
              ${relatedProducts.map(p => this.renderProductCard(p)).join("")}
            </div>
          </div>
        ` : ""}
      </div>
    `;
  },

  // Page 5: Services View
  renderServices() {
    const settings = storage.getSettings();

    return `
      <div class="page-header-bar">
        <div class="container">
          <div class="breadcrumb">
            <a href="#/">Trang chủ</a> <span>/</span> <span>Dịch vụ & Giải pháp</span>
          </div>
          <h1 class="page-title">Dịch Vụ Cung Cấp & Hỗ Trợ Kỹ Thuật M&E</h1>
          <p class="page-subtitle">Giải pháp toàn diện từ tư vấn lựa chọn thiết bị đến giao hàng tận nơi và hỗ trợ kỹ thuật tại công trình.</p>
        </div>
      </div>

      <div class="container py-5">
        <div class="services-list-vertical">
          <!-- Service 1 -->
          <div class="service-item-card">
            <div class="service-number">01</div>
            <div class="service-body">
              <h2>Cung Cấp Thiết Bị Điện Sỉ & Gói Thầu Dự Án</h2>
              <p>
                Phân phối số lượng lớn thiết bị đóng cắt (MCB, MCCB, ACB), dây cáp điện hạ thế/trung thế, thiết bị tự động hóa và đèn chiếu sáng công nghiệp. 
                Chúng tôi cung cấp trọn gói vật tư theo danh mục bóc tách (BOQ) của công trình, cam kết 100% hàng chính hãng đầy đủ chứng chỉ xuất xứ CO/CQ.
              </p>
              <div class="service-highlights">
                <span>✓ Chiết khấu nhà thầu cao</span>
                <span>✓ Cố định giá chào thầu</span>
                <span>✓ Hợp đồng minh bạch</span>
              </div>
            </div>
            <div class="service-action">
              <a href="${settings.zaloUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-zalo">Báo giá sỉ qua Zalo</a>
            </div>
          </div>

          <!-- Service 2 -->
          <div class="service-item-card">
            <div class="service-number">02</div>
            <div class="service-body">
              <h2>Tư Vấn Kỹ Thuật & Đề Xuất Giải Pháp Tương Đương</h2>
              <p>
                Nhiều công trình gặp tình trạng thiết bị thiết kế ban đầu hết hàng hoặc vượt ngân sách. Đội ngũ kỹ sư của Đà Quang Electric sẽ phân tích thông số kỹ thuật 
                để tư vấn các dòng sản phẩm thay thế tương đương từ các hãng uy tín (ví dụ chuyển đổi tương đương Schneider - LS - ABB) giúp tiết kiệm 15 - 25% chi phí mà vẫn đảm bảo tiêu chuẩn nghiệm thu.
              </p>
              <div class="service-highlights">
                <span>✓ Bóc tách bản vẽ M&E</span>
                <span>✓ Bảng so sánh thông số</span>
                <span>✓ Bảo vệ phương án kỹ thuật</span>
              </div>
            </div>
            <div class="service-action">
              <a href="tel:${settings.phone.replace(/\s+/g, '')}" class="btn btn-outline">Liên hệ kỹ sư tư vấn</a>
            </div>
          </div>

          <!-- Service 3 -->
          <div class="service-item-card">
            <div class="service-number">03</div>
            <div class="service-body">
              <h2>Giao Hàng Chuyên Dụng Tận Chân Công Trình</h2>
              <p>
                Sở hữu đội xe tải gắn cẩu và xe bán tải cơ động, chúng tôi hỗ trợ vận chuyển an toàn các rulo cáp điện nặng hàng tấn, tủ điện cồng kềnh tới tận chân công trình 
                tại TP. Đà Nẵng và tất cả các khu công nghiệp thuộc tỉnh Quảng Nam (Điện Nam - Điện Ngọc, Hòa Khánh, Chu Lai, Tam Kỳ...).
              </p>
              <div class="service-highlights">
                <span>✓ Giao trong 2-4 giờ nội thành</span>
                <span>✓ Bốc dỡ cẩu hạ chuyên nghiệp</span>
                <span>✓ Hỗ trợ giao ca đêm cấp bách</span>
              </div>
            </div>
            <div class="service-action">
              <a href="#/chinh-sach?slug=chinh-sach-giao-hang-tan-cong-trinh" class="btn btn-outline">Xem chính sách giao nhận</a>
            </div>
          </div>

          <!-- Service 4 -->
          <div class="service-item-card">
            <div class="service-number">04</div>
            <div class="service-body">
              <h2>Thiết Kế & Gia Công Lắp Ráp Tủ Điện Theo Yêu Cầu</h2>
              <p>
                Xưởng cơ điện của chúng tôi nhận thiết kế, chế tạo và lắp ráp hoàn thiện các loại tủ điện phân phối tổng MSB, tủ nhánh DB, tủ chuyển nguồn ATS, tủ điều khiển biến tần bơm/quạt và tủ tụ bù tự động 
                đạt cấp bảo vệ IP54 - IP65 chống ăn mòn ven biển.
              </p>
              <div class="service-highlights">
                <span>✓ Vỏ tủ sơn tĩnh điện / Inox 304</span>
                <span>✓ Đấu nối busbar chuẩn mực</span>
                <span>✓ Test thử tải trước khi xuất xưởng</span>
              </div>
            </div>
            <div class="service-action">
              <a href="${settings.zaloUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-zalo">Đặt làm tủ điện theo yêu cầu</a>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Page 6: Projects View
  renderProjects() {
    const projects = storage.getProjects().filter(p => p.status === "active");

    return `
      <div class="page-header-bar">
        <div class="container">
          <div class="breadcrumb">
            <a href="#/">Trang chủ</a> <span>/</span> <span>Dự án & Năng lực cung ứng</span>
          </div>
          <h1 class="page-title">Dự Án Đã Thực Hiện</h1>
          <p class="page-subtitle">Minh chứng năng lực cung ứng thiết bị điện công nghiệp & công trình xây dựng thực tế tại Quảng Nam - Đà Nẵng.</p>
        </div>
      </div>

      <div class="container py-5">
        <div class="projects-full-grid">
          ${projects.map(proj => `
            <div class="project-card-horizontal">
              <div class="proj-img-wrap">
                <img src="${proj.images[0]}" alt="${proj.name}" loading="lazy">
                <span class="proj-tag-badge">${proj.projectType}</span>
              </div>
              <div class="proj-body">
                <div class="proj-location-row">📍 ${proj.location}</div>
                <h2 class="proj-name">${proj.name}</h2>
                <div class="proj-scope-box">
                  <strong>Hạng mục cung ứng:</strong>
                  <p>${proj.suppliedScope}</p>
                </div>
                <p class="proj-desc">${proj.description}</p>
                <div class="proj-footer-action">
                  <a href="#/lien-he" class="btn btn-outline btn-sm">Liên hệ tư vấn dự án tương tự</a>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  },

  // Page 7: Policies View
  renderPolicies(activeSlug = "") {
    const policies = storage.getPolicies().filter(p => p.status === "active");
    const current = policies.find(p => p.slug === activeSlug) || policies[0] || null;

    if (!current) {
      return `
        <div class="container py-5 text-center">
          <h2>Chính sách đang được cập nhật</h2>
        </div>
      `;
    }

    // Simple markdown-to-HTML parser for policy content
    const parseMarkdown = (text) => {
      if (!text) return "";
      let html = text
        .replace(/### (.*?)\n/g, '<h3 class="policy-h3">$1</h3>')
        .replace(/## (.*?)\n/g, '<h2 class="policy-h2">$1</h2>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/- (.*?)\n/g, '<li>$1</li>');
      html = html.replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>');
      return html.replace(/\n\n/g, '<p></p>');
    };

    return `
      <div class="page-header-bar">
        <div class="container">
          <div class="breadcrumb">
            <a href="#/">Trang chủ</a> <span>/</span> <span>Chính sách hoạt động</span>
          </div>
          <h1 class="page-title">Chính Sách & Quy Định B2B</h1>
          <p class="page-subtitle">Minh bạch quyền lợi và trách nhiệm của khách hàng doanh nghiệp & nhà thầu.</p>
        </div>
      </div>

      <div class="container py-5">
        <div class="policies-layout">
          <!-- Policy Nav Sidebar -->
          <div class="policies-sidebar">
            <h3 class="sidebar-title">Danh Mục Chính Sách</h3>
            <div class="policies-nav-list">
              ${policies.map(p => `
                <a href="#/chinh-sach?slug=${p.slug}" class="policy-nav-item ${p.slug === current.slug ? "active" : ""}">
                  <span>${p.name}</span>
                </a>
              `).join("")}
            </div>
          </div>

          <!-- Policy Content -->
          <div class="policies-content-panel">
            <h2 class="current-policy-title">${current.name}</h2>
            <div class="policy-body-content">
              ${parseMarkdown(current.content)}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // Page 8: Contact View (Prioritize Zalo & Direct Info, No Form)
  renderContact() {
    const settings = storage.getSettings();

    return `
      <div class="page-header-bar">
        <div class="container">
          <div class="breadcrumb">
            <a href="#/">Trang chủ</a> <span>/</span> <span>Thông tin liên hệ & Đặt hàng</span>
          </div>
          <h1 class="page-title">Thông Tin Liên Hệ & Báo Giá Trực Tiếp</h1>
          <p class="page-subtitle">Ưu tiên tiếp nhận và phản hồi nhanh báo giá sỉ qua Zalo và Hotline kỹ sư dự án.</p>
        </div>
      </div>

      <div class="container py-5">
        <!-- Prominent Zalo Direct Connect Header Card -->
        <div class="contact-zalo-hero-card">
          <div class="zalo-hero-inner">
            <div class="zalo-hero-icon-col">
              <div class="zalo-giant-badge">Zalo</div>
              <span class="pulse-online"></span>
            </div>
            <div class="zalo-hero-text-col">
              <span class="zalo-badge-pill">KÊNH TƯ VẤN & BÁO GIÁ NHANH NHẤT (ƯU TIÊN)</span>
              <h2>Kết Nối Zalo Với Bộ Phận Dự Án & Bán Sỉ</h2>
              <p>
                Quý khách hàng, nhà thầu cơ điện (M&E) và chủ đầu tư vui lòng gửi trực tiếp 
                <strong>Danh mục vật tư (BOQ)</strong>, bảng mã thiết bị hoặc bản vẽ kỹ thuật qua Zalo. 
                Đội ngũ kỹ sư sẽ kiểm tra tồn kho, bóc tách và phản hồi bảng báo giá chiết khấu sâu sau <strong>30 - 60 phút</strong>.
              </p>
              <div class="zalo-hero-meta">
                <div class="meta-item">
                  <span class="label">Người phụ trách:</span>
                  <strong>${settings.zaloDisplayName}</strong>
                </div>
                <div class="meta-item">
                  <span class="label">Số điện thoại Zalo:</span>
                  <strong>${settings.zaloPhone}</strong>
                </div>
                <div class="meta-item">
                  <span class="label">Thời gian phản hồi:</span>
                  <strong class="text-success">Trực tuyến 24/7</strong>
                </div>
              </div>
            </div>
            <div class="zalo-hero-action-col">
              <a href="${settings.zaloUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-zalo btn-zalo-giant">
                💬 Nhắn Zalo Báo Giá Ngay
              </a>
              <a href="tel:${settings.phone.replace(/\s+/g, '')}" class="btn btn-outline btn-call-giant">
                📞 Gọi Hotline: ${settings.phone}
              </a>
            </div>
          </div>
        </div>

        <!-- 4-Card Contact & Facility Grid -->
        <div class="contact-facilities-grid mt-5">
          <!-- Card 1: Headquarters Da Nang -->
          <div class="facility-card">
            <div class="facility-icon">🏢</div>
            <div class="facility-body">
              <span class="facility-tag">TRỤ SỞ CHÍNH</span>
              <h3>Văn Phòng Điều Hành & Tiếp Khách (TP. Đà Nẵng)</h3>
              <p class="facility-address">📍 <strong>${settings.address}</strong></p>
              <ul class="facility-bullets">
                <li>Tiếp đón khách hàng, nhà thầu đàm phán hợp đồng cung ứng.</li>
                <li>Bàn giao hồ sơ chất lượng CO/CQ, hóa đơn VAT và nghiệm thu.</li>
                <li>Phục vụ các quận: Hải Châu, Sơn Trà, Cẩm Lệ, Thanh Khê, Liên Chiểu, Ngũ Hành Sơn.</li>
              </ul>
              <div class="facility-action mt-3">
                <a href="https://maps.google.com/?q=${encodeURIComponent(settings.address)}" target="_blank" rel="noopener" class="btn btn-sm btn-outline">
                  🗺 Xem trên Google Maps ↗
                </a>
              </div>
            </div>
          </div>

          <!-- Card 2: Warehouse Quang Nam -->
          <div class="facility-card">
            <div class="facility-icon">🏭</div>
            <div class="facility-body">
              <span class="facility-tag">KHO TRUNG CHUYỂN</span>
              <h3>Kho Vận Chuyển Dự Án (Tỉnh Quảng Nam)</h3>
              <p class="facility-address">📍 <strong>${settings.branchAddress}</strong></p>
              <ul class="facility-bullets">
                <li>Tổng kho lưu trữ cáp điện cuộn lớn, tủ điện, thiết bị đóng cắt có sẵn.</li>
                <li>Đội xe cẩu tải gắn cẩu chuyên dụng giao hàng tận chân công trường.</li>
                <li>Giao nhanh trong ngày tới KCN Điện Nam - Điện Ngọc, KCN Đông Quế Sơn, KCN Chu Lai, TP. Tam Kỳ, Hội An...</li>
              </ul>
              <div class="facility-action mt-3">
                <a href="${settings.zaloUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-zalo">
                  🚚 Kiểm Tra Tồn Kho Qua Zalo
                </a>
              </div>
            </div>
          </div>

          <!-- Card 3: Hotline & Email -->
          <div class="facility-card">
            <div class="facility-icon">📞</div>
            <div class="facility-body">
              <span class="facility-tag">HOTLINE TRỰC TIẾP</span>
              <h3>Đường Dây Nóng Kỹ Sư & Báo Giá</h3>
              <div class="facility-contact-details">
                <div class="f-item">
                  <span>Hotline dự án (Di động / Zalo):</span>
                  <a href="tel:${settings.phone}" class="f-phone-lg">${settings.phone}</a>
                </div>
                <div class="f-item">
                  <span>Điện thoại bàn văn phòng:</span>
                  <strong>${settings.hotline}</strong>
                </div>
                <div class="f-item">
                  <span>Email nhận BOQ & hồ sơ chào thầu:</span>
                  <a href="mailto:${settings.email}">${settings.email}</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: Working Hours & Support Commitment -->
          <div class="facility-card">
            <div class="facility-icon">⏰</div>
            <div class="facility-body">
              <span class="facility-tag">THỜI GIAN & CAM KẾT</span>
              <h3>Giờ Làm Việc & Hỗ Trợ Kỹ Thuật 24/7</h3>
              <p class="facility-desc">
                <strong>Giờ hành chính:</strong> ${settings.workingHours}
              </p>
              <div class="emergency-support-box mt-3">
                <strong>⚡ Hỗ trợ sự cố khẩn cấp 24/7:</strong>
                <p>Đối với các công trình đang đổ bê tông hoặc nhà máy gặp sự cố mất điện cần vật tư đóng cắt thay thế gấp ngoài giờ, vui lòng gọi trực tiếp hotline di động để được xuất kho khẩn cấp.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Regional Map & Delivery Logistics Bar -->
        <div class="contact-map-info-panel mt-5">
          <div class="map-info-header">
            <div>
              <span class="section-tag">MẠNG LƯỚI PHỤC VỤ</span>
              <h2>Mạng Lưới Cung Ứng & Giao Hàng Quảng Nam - Đà Nẵng</h2>
              <p class="text-muted">Chúng tôi cam kết phục vụ tận tâm, hỗ trợ kỹ thuật tận chân công trình trên toàn địa bàn.</p>
            </div>
            <a href="${settings.zaloUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-zalo">
              💬 Liên Hệ Nhận Báo Giá Vận Chuyển Qua Zalo
            </a>
          </div>

          <div class="regional-hubs-grid mt-4">
            <div class="hub-item">
              <span class="hub-pin">📍</span>
              <h4>KCN Hòa Khánh & Hòa Cầm (Đà Nẵng)</h4>
              <p>Giao hàng hỏa tốc trong 1 - 2 giờ, hỗ trợ xe cẩu hạ rulo cáp đồng và vỏ tủ điện nặng.</p>
            </div>
            <div class="hub-item">
              <span class="hub-pin">📍</span>
              <h4>KCN Điện Nam - Điện Ngọc (Quảng Nam)</h4>
              <p>Kho hàng nằm sát KCN, sẵn sàng cấp vật tư trong vòng 30 phút cho các nhà máy sản xuất.</p>
            </div>
            <div class="hub-item">
              <span class="hub-pin">📍</span>
              <h4>Khu Vực Bán Đảo Sơn Trà & Resort Ven Biển</h4>
              <p>Chuyên cung cấp vỏ tủ Inox 304 kháng muối biển và thiết bị chống rò RCBO Panasonic.</p>
            </div>
            <div class="hub-item">
              <span class="hub-pin">📍</span>
              <h4>KCN Tam Thăng & KCN Chu Lai (Núi Thành)</h4>
              <p>Tuyến xe giao định kỳ hàng ngày, cung ứng gói thầu thiết bị điện cho tổ hợp công nghiệp nặng.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
