import { storage } from "../services/storage.js";
import { toast } from "../components/toast.js";
import { modal } from "../components/modal.js";

export const adminViews = {
  // Helper to render Admin Shell (Sidebar + Topbar + Content Container)
  renderAdminShell(contentHtml, activeRoute = "") {
    const user = storage.getCurrentUser();
    const settings = storage.getSettings();
    const newContactsCount = storage.getContacts().filter(c => c.status === "NEW").length;

    return `
      <div class="admin-layout" id="admin-layout">
        <!-- Backdrop overlay for mobile sidebar -->
        <div class="admin-sidebar-backdrop" id="admin-sidebar-backdrop"></div>

        <!-- Admin Sidebar -->
        <aside class="admin-sidebar" id="admin-sidebar">
          <div class="sidebar-header">
            <a href="#/admin/dashboard" class="sidebar-brand">
              <span class="brand-bolt">⚡</span>
              <div>
                <strong>${settings.companyName}</strong>
                <span class="sub-portal">B2B Management Portal</span>
              </div>
            </a>
            <button class="sidebar-close-mobile-btn" id="btn-close-sidebar-mobile" aria-label="Đóng">&times;</button>
          </div>

          <div class="sidebar-nav">
            <div class="nav-section-title">TỔNG QUAN</div>
            <a href="#/admin/dashboard" class="sidebar-link ${activeRoute === "/admin/dashboard" || activeRoute === "/admin" ? "active" : ""}">
              <span class="link-icon">📊</span>
              <span>Dashboard Tổng Quan</span>
            </a>

            <div class="nav-section-title">QUẢN LÝ DANH MỤC & KHO</div>
            <a href="#/admin/products" class="sidebar-link ${activeRoute === "/admin/products" ? "active" : ""}">
              <span class="link-icon">📦</span>
              <span>Sản Phẩm Thiết Bị</span>
              <span class="sidebar-badge">${storage.getProducts().length}</span>
            </a>
            <a href="#/admin/categories" class="sidebar-link ${activeRoute === "/admin/categories" ? "active" : ""}">
              <span class="link-icon">📂</span>
              <span>Nhóm Danh Mục</span>
              <span class="sidebar-badge">${storage.getCategories().length}</span>
            </a>
            <a href="#/admin/brands" class="sidebar-link ${activeRoute === "/admin/brands" ? "active" : ""}">
              <span class="link-icon">🏷️</span>
              <span>Hãng / Thương Hiệu</span>
              <span class="sidebar-badge">${storage.getBrands().length}</span>
            </a>

            <div class="nav-section-title">KINH DOANH & KHÁCH HÀNG</div>
            <a href="#/admin/contacts" class="sidebar-link ${activeRoute === "/admin/contacts" ? "active" : ""}">
              <span class="link-icon">👥</span>
              <span>Khách Báo Giá & Lead</span>
              ${newContactsCount > 0 ? `<span class="sidebar-badge badge-danger">${newContactsCount} MỚI</span>` : `<span class="sidebar-badge">${storage.getContacts().length}</span>`}
            </a>
            <a href="#/admin/projects" class="sidebar-link ${activeRoute === "/admin/projects" ? "active" : ""}">
              <span class="link-icon">🏗️</span>
              <span>Hồ Sơ Dự Án</span>
              <span class="sidebar-badge">${storage.getProjects().length}</span>
            </a>

            <div class="nav-section-title">NỘI DUNG & HỆ THỐNG</div>
            <a href="#/admin/policies" class="sidebar-link ${activeRoute === "/admin/policies" ? "active" : ""}">
              <span class="link-icon">📜</span>
              <span>Chính Sách & Quy Định</span>
            </a>
            <a href="#/admin/settings" class="sidebar-link ${activeRoute === "/admin/settings" ? "active" : ""}">
              <span class="link-icon">⚙️</span>
              <span>Cấu Hình Zalo & Công Ty</span>
            </a>

            <div class="sidebar-divider"></div>

            <a href="#/" class="sidebar-link sidebar-link-client" target="_blank" rel="noopener">
              <span class="link-icon">🌐</span>
              <span>Xem Website Phía Khách ↗</span>
            </a>
            <button class="sidebar-link sidebar-btn-reset" id="btn-admin-reset-data">
              <span class="link-icon">🔄</span>
              <span>Reset Dữ Liệu Demo Gốc</span>
            </button>
            <button class="sidebar-link sidebar-btn-logout" id="btn-admin-logout">
              <span class="link-icon">🚪</span>
              <span>Đăng Xuất Admin</span>
            </button>
          </div>
        </aside>

        <!-- Admin Main Area -->
        <div class="admin-main">
          <!-- Topbar -->
          <header class="admin-topbar">
            <div class="topbar-left">
              <button class="sidebar-toggle-btn" id="btn-toggle-sidebar" aria-label="Toggle Sidebar">☰</button>
              <div class="breadcrumb-admin">
                <span>Hệ Thống Quản Trị</span> <span>/</span> <strong id="topbar-current-page">B2B Portal</strong>
              </div>
            </div>
            <div class="topbar-right">
              <a href="#/admin/contacts" class="topbar-notice-badge" title="${newContactsCount} yêu cầu báo giá mới">
                🔔 ${newContactsCount > 0 ? `<span class="notice-dot"></span> Có ${newContactsCount} liên hệ mới` : `0 liên hệ mới`}
              </a>
              <div class="user-profile-badge">
                <span class="user-avatar">👨‍💼</span>
                <div class="user-info">
                  <strong>${user ? user.name : "Admin"}</strong>
                  <span class="user-role">${user ? user.role : "Quản Trị Viên"}</span>
                </div>
              </div>
            </div>
          </header>

          <!-- Content Body -->
          <main class="admin-content-inner">
            ${contentHtml}
          </main>
        </div>
      </div>
    `;
  },

  // 1. Admin Login View
  renderLogin() {
    return `
      <div class="admin-login-screen">
        <div class="login-card-container">
          <div class="login-brand">
            <div class="login-bolt">⚡</div>
            <h2>Đà Quang Electric</h2>
            <p>Hệ Thống Quản Trị Website & Danh Mục B2B</p>
          </div>

          <div class="login-alert-info">
            <strong>Tài khoản Demo có sẵn:</strong><br>
            Email: <code>admin@example.com</code><br>
            Mật khẩu: <code>admin123</code>
          </div>

          <form id="admin-login-form" class="b2b-form">
            <div class="form-group">
              <label for="login-email">Email quản trị viên:</label>
              <input type="email" id="login-email" class="form-input" value="admin@example.com" required placeholder="admin@example.com">
            </div>

            <div class="form-group">
              <label for="login-password">Mật khẩu:</label>
              <input type="password" id="login-password" class="form-input" value="admin123" required placeholder="••••••••">
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-submit-login">
              🔐 Đăng Nhập Hệ Thống
            </button>

            <div class="login-footer-links">
              <a href="#/">← Quay về trang chủ website khách hàng</a>
            </div>
          </form>
        </div>
      </div>
    `;
  },

  // 2. Admin Dashboard View
  renderDashboard() {
    const products = storage.getProducts();
    const categories = storage.getCategories();
    const projects = storage.getProjects();
    const contacts = storage.getContacts();
    const settings = storage.getSettings();

    const featuredCount = products.filter(p => p.isFeatured).length;
    const newContacts = contacts.filter(c => c.status === "NEW");
    const recentContacts = contacts.slice(0, 5);

    const contentHtml = `
      <div class="dashboard-container">
        <div class="page-title-row">
          <div>
            <h1 class="page-title">Bảng Điều Khiển Tổng Quan</h1>
            <p class="page-subtitle">Theo dõi tình hình danh mục sản phẩm, cấu hình bán sỉ và danh sách khách hàng gửi yêu cầu báo giá.</p>
          </div>
          <div class="page-title-actions">
            <a href="#/admin/products" class="btn btn-primary">+ Thêm Sản Phẩm Mới</a>
            <a href="#/admin/settings" class="btn btn-outline">⚙ Cập Nhật Zalo</a>
          </div>
        </div>

        <!-- KPI Cards Grid -->
        <div class="kpi-grid">
          <div class="kpi-card kpi-blue">
            <div class="kpi-content">
              <span class="kpi-label">Tổng Sản Phẩm Trong Kho</span>
              <span class="kpi-value">${products.length}</span>
              <span class="kpi-note">${featuredCount} sản phẩm gán nhãn Nổi bật</span>
            </div>
            <div class="kpi-icon">📦</div>
          </div>

          <div class="kpi-card kpi-green">
            <div class="kpi-content">
              <span class="kpi-label">Khách Gửi Yêu Cầu Báo Giá</span>
              <span class="kpi-value">${contacts.length}</span>
              <span class="kpi-note font-weight-bold text-danger">${newContacts.length} lead mới cần phản hồi</span>
            </div>
            <div class="kpi-icon">👥</div>
          </div>

          <div class="kpi-card kpi-amber">
            <div class="kpi-content">
              <span class="kpi-label">Nhóm Danh Mục Thiết Bị</span>
              <span class="kpi-value">${categories.length}</span>
              <span class="kpi-note">Thiết bị đóng cắt, cáp điện, tủ điện...</span>
            </div>
            <div class="kpi-icon">📂</div>
          </div>

          <div class="kpi-card kpi-purple">
            <div class="kpi-content">
              <span class="kpi-label">Hồ Sơ Dự Án Đã Thực Hiện</span>
              <span class="kpi-value">${projects.length}</span>
              <span class="kpi-note">Nhà máy KCN, Resort, Tòa nhà</span>
            </div>
            <div class="kpi-icon">🏗️</div>
          </div>
        </div>

        <!-- Dynamic Zalo & Contact Quick Status Bar -->
        <div class="quick-status-banner">
          <div class="qs-item">
            <span class="qs-badge">Zalo Báo Giá Hiện Tại:</span>
            <strong>${settings.zaloPhone}</strong> (${settings.zaloDisplayName})
          </div>
          <div class="qs-item">
            <span class="qs-badge">Hotline Kinh Doanh:</span>
            <strong>${settings.phone}</strong>
          </div>
          <div class="qs-item">
            <span class="qs-badge">Nút Zalo Nổi (Floating):</span>
            <span class="${settings.enableFloatingZalo ? 'text-success' : 'text-danger'} font-weight-bold">
              ${settings.enableFloatingZalo ? 'Đang bật' : 'Đang tắt'}
            </span>
          </div>
          <a href="#/admin/settings" class="btn btn-sm btn-outline">Chỉnh sửa nhanh</a>
        </div>

        <!-- 2 Columns: Recent Contacts & Category Distribution -->
        <div class="dashboard-split-grid mt-4">
          <!-- Recent Contacts Table -->
          <div class="dashboard-panel">
            <div class="panel-header">
              <div class="panel-header-title">
                <h3>Yêu Cầu Báo Giá Gần Đây</h3>
                <span class="panel-sub">Khách hàng gửi qua Website</span>
              </div>
              <a href="#/admin/contacts" class="btn btn-sm btn-outline">Xem tất cả (${contacts.length}) →</a>
            </div>

            <div class="table-responsive">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th class="col-customer" style="min-width: 250px; width: 280px;">Khách hàng / Công ty</th>
                    <th style="min-width: 140px;">Số điện thoại</th>
                    <th style="min-width: 220px;">Nhu cầu / Sản phẩm</th>
                    <th style="min-width: 130px;">Trạng thái</th>
                    <th style="min-width: 110px;">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  ${recentContacts.map(c => `
                    <tr>
                      <td class="col-customer">
                        <div class="customer-name">${c.fullName}</div>
                        <div class="customer-company">${c.company || 'Cá nhân'}</div>
                      </td>
                      <td>
                        <a href="tel:${c.phone}" class="phone-link">${c.phone}</a>
                      </td>
                      <td>
                        <span class="text-truncate-cell" title="${c.needSummary}">${c.needSummary}</span>
                      </td>
                      <td>
                        ${this.renderContactStatusBadge(c.status)}
                      </td>
                      <td>
                        <button class="btn btn-xs btn-outline btn-view-contact" data-id="${c.id}">Chi tiết</button>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Featured Products Quick Preview -->
          <div class="dashboard-panel">
            <div class="panel-header">
              <div class="panel-header-title">
                <h3>Sản Phẩm Trọng Tâm Bán Sỉ</h3>
                <span class="panel-sub">Hiển thị nổi bật ngoài trang chủ</span>
              </div>
              <a href="#/admin/products" class="btn btn-sm btn-outline">Quản lý kho →</a>
            </div>

            <div class="dashboard-mini-list">
              ${products.slice(0, 5).map(p => `
                <div class="mini-prod-item">
                  <img src="${p.images[0]}" alt="${p.name}" class="mini-prod-thumb">
                  <div class="mini-prod-info">
                    <h4>${p.name}</h4>
                    <div class="mini-prod-meta">
                      <span class="badge-sku">${p.sku}</span>
                      <span>${p.brand}</span>
                    </div>
                  </div>
                  <div class="mini-prod-actions">
                    <a href="#/san-pham/${p.slug}" target="_blank" class="btn btn-xs btn-outline" title="Xem trên web">Xem</a>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `;

    return this.renderAdminShell(contentHtml, "/admin/dashboard");
  },

  // Helper for Status Badge
  renderContactStatusBadge(status) {
    switch (status) {
      case "NEW":
        return `<span class="status-pill pill-new">Mới nhận</span>`;
      case "CONTACTED":
        return `<span class="status-pill pill-contacted">Đã liên hệ</span>`;
      case "PROCESSING":
        return `<span class="status-pill pill-processing">Đang xử lý</span>`;
      case "COMPLETED":
        return `<span class="status-pill pill-completed">Hoàn tất / Đã chốt</span>`;
      case "CANCELLED":
        return `<span class="status-pill pill-cancelled">Đã hủy</span>`;
      default:
        return `<span class="status-pill">${status}</span>`;
    }
  },

  // 3. Admin Products Management View
  renderProductsList(filterParams = {}) {
    const products = storage.getProducts();
    const categories = storage.getCategories();
    const brands = storage.getBrands();

    const catFilter = filterParams.category || "";
    const brandFilter = filterParams.brand || "";
    const searchFilter = (filterParams.search || "").toLowerCase().trim();

    let filtered = products.filter(p => {
      if (catFilter && p.categoryId !== catFilter) return false;
      if (brandFilter && p.brand !== brandFilter) return false;
      if (searchFilter) {
        const matchName = p.name.toLowerCase().includes(searchFilter);
        const matchSku = p.sku.toLowerCase().includes(searchFilter);
        if (!matchName && !matchSku) return false;
      }
      return true;
    });

    const contentHtml = `
      <div class="admin-page-container">
        <div class="page-title-row">
          <div>
            <h1 class="page-title">Quản Lý Sản Phẩm Thiết Bị</h1>
            <p class="page-subtitle">Thêm mới, sửa thông số kỹ thuật, nhân bản hoặc điều chỉnh trạng thái hiển thị.</p>
          </div>
          <button class="btn btn-primary" id="btn-add-product">+ Thêm Sản Phẩm Mới</button>
        </div>

        <!-- Filter Bar -->
        <div class="admin-filter-bar">
          <div class="admin-search-box">
            <input type="text" id="admin-product-search" class="form-input" placeholder="Tìm theo tên thiết bị, mã SKU..." value="${filterParams.search || ""}">
            <button class="btn btn-outline" id="btn-search-product">Tìm</button>
          </div>
          <div class="admin-select-filter">
            <select id="admin-prod-cat-filter" class="form-select">
              <option value="">Tất cả danh mục (${categories.length})</option>
              ${categories.map(c => `<option value="${c.id}" ${catFilter === c.id ? "selected" : ""}>${c.name}</option>`).join("")}
            </select>
            <select id="admin-prod-brand-filter" class="form-select">
              <option value="">Tất cả thương hiệu</option>
              ${brands.map(b => `<option value="${b.name}" ${brandFilter === b.name ? "selected" : ""}>${b.name}</option>`).join("")}
            </select>
          </div>
        </div>

        <!-- Products Table -->
        <div class="admin-panel mt-3">
          <div class="table-responsive">
            <table class="admin-table">
              <thead>
                <tr>
                  <th width="70">Ảnh</th>
                  <th>Tên Sản Phẩm & SKU</th>
                  <th>Danh Mục</th>
                  <th>Thương Hiệu</th>
                  <th>Huy Hiệu</th>
                  <th>Trạng Thái</th>
                  <th width="200" class="text-right">Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.length > 0 ? filtered.map(p => {
                  const cat = storage.getCategoryById(p.categoryId);
                  return `
                    <tr>
                      <td>
                        <img src="${p.images[0]}" alt="${p.name}" class="admin-table-thumb">
                      </td>
                      <td>
                        <div class="fw-bold">${p.name}</div>
                        <div class="text-muted small">SKU: <strong>${p.sku}</strong> • Slug: <code>${p.slug}</code></div>
                      </td>
                      <td>${cat ? cat.name : "N/A"}</td>
                      <td><span class="badge-brand">${p.brand}</span></td>
                      <td>
                        ${p.isFeatured ? '<span class="badge badge-featured">Nổi bật</span>' : ''}
                        ${p.isNew ? '<span class="badge badge-new">Mới</span>' : ''}
                      </td>
                      <td>
                        <span class="status-pill ${p.status === 'active' ? 'pill-completed' : 'pill-cancelled'}">
                          ${p.status === 'active' ? 'Đang bán' : 'Ẩn'}
                        </span>
                      </td>
                      <td class="text-right">
                        <button class="btn btn-xs btn-outline btn-edit-product" data-id="${p.id}" title="Sửa">✏ Sửa</button>
                        <button class="btn btn-xs btn-outline btn-duplicate-product" data-id="${p.id}" title="Nhân bản">📋 Sao chép</button>
                        <button class="btn btn-xs btn-danger btn-delete-product" data-id="${p.id}" title="Xóa">🗑 Xóa</button>
                      </td>
                    </tr>
                  `;
                }).join("") : `
                  <tr>
                    <td colspan="7" class="text-center py-4 text-muted">
                      Không có sản phẩm nào phù hợp với bộ lọc tìm kiếm.
                    </td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    return this.renderAdminShell(contentHtml, "/admin/products");
  },

  // Modal: Add or Edit Product
  openProductEditor(productId = null) {
    const isEdit = !!productId;
    const product = isEdit ? storage.getProductById(productId) : {
      name: "",
      sku: "",
      slug: "",
      categoryId: storage.getCategories()[0]?.id || "",
      brand: storage.getBrands()[0]?.name || "Schneider Electric",
      shortDescription: "",
      description: "",
      applications: "",
      images: ["https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"],
      technicalSpecifications: {
        "Tiêu chuẩn": "IEC 60947",
        "Bảo hành": "12 tháng"
      },
      isFeatured: false,
      isNew: true,
      status: "active",
      sortOrder: 1
    };

    const categories = storage.getCategories();
    const brands = storage.getBrands();

    // Render Specs Rows
    const renderSpecsInputs = (specsObj) => {
      return Object.entries(specsObj).map(([k, v], idx) => `
        <div class="spec-input-row" data-index="${idx}">
          <input type="text" class="form-input spec-key" placeholder="Tên thông số (Vd: Dòng cắt Icu)" value="${k}">
          <input type="text" class="form-input spec-val" placeholder="Giá trị (Vd: 36 kA)" value="${v}">
          <button type="button" class="btn btn-xs btn-danger btn-remove-spec">&times;</button>
        </div>
      `).join("");
    };

    const contentHtml = `
      <form id="product-editor-form" class="b2b-form">
        <div class="form-row-2">
          <div class="form-group">
            <label class="required">Tên thiết bị:</label>
            <input type="text" id="p-name" class="form-input" value="${product.name}" required placeholder="Ví dụ: Aptomat khối MCCB 3P 250A Schneider">
          </div>
          <div class="form-group">
            <label class="required">Mã SKU:</label>
            <input type="text" id="p-sku" class="form-input" value="${product.sku}" required placeholder="LV525303">
          </div>
        </div>

        <div class="form-row-2">
          <div class="form-group">
            <label class="required">Danh mục thiết bị:</label>
            <select id="p-category" class="form-select" required>
              ${categories.map(c => `
                <option value="${c.id}" ${product.categoryId === c.id ? "selected" : ""}>${c.name}</option>
              `).join("")}
            </select>
          </div>
          <div class="form-group">
            <label class="required">Thương hiệu / Hãng:</label>
            <select id="p-brand" class="form-select" required>
              ${brands.map(b => `
                <option value="${b.name}" ${product.brand === b.name ? "selected" : ""}>${b.name}</option>
              `).join("")}
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="required">Đường dẫn thân thiện (Slug):</label>
          <input type="text" id="p-slug" class="form-input" value="${product.slug}" required placeholder="aptomat-mccb-3p-250a-schneider">
        </div>

        <div class="form-group">
          <label>Mô tả ngắn (Hiển thị ngoài card sản phẩm):</label>
          <textarea id="p-short-desc" rows="2" class="form-textarea" placeholder="Mô tả tóm tắt tính năng chính...">${product.shortDescription || ""}</textarea>
        </div>

        <div class="form-group">
          <label>Mô tả chi tiết kỹ thuật:</label>
          <textarea id="p-desc" rows="4" class="form-textarea" placeholder="Đặc điểm cấu tạo, tiêu chuẩn...">${product.description || ""}</textarea>
        </div>

        <div class="form-group">
          <label>Ứng dụng thực tế công trình:</label>
          <textarea id="p-app" rows="2" class="form-textarea" placeholder="Lắp đặt tủ MSB nhà máy, công trình khách sạn...">${product.applications || ""}</textarea>
        </div>

        <!-- Technical Specifications Key-Value Builder -->
        <div class="form-group">
          <div class="d-flex justify-between align-center mb-2">
            <label><strong>Thông số kỹ thuật chi tiết:</strong></label>
            <button type="button" class="btn btn-xs btn-outline" id="btn-add-spec-row">+ Thêm thông số</button>
          </div>
          <div class="specs-editor-container" id="specs-editor-container">
            ${renderSpecsInputs(product.technicalSpecifications || {})}
          </div>
        </div>

        <div class="form-group">
          <label class="required">URL Hình ảnh chính (Phân tách bằng dấu phẩy nếu nhiều ảnh):</label>
          <input type="text" id="p-images" class="form-input" value="${product.images.join(", ")}" required placeholder="https://...">
        </div>

        <div class="form-row-3">
          <div class="form-group">
            <label>Thứ tự hiển thị:</label>
            <input type="number" id="p-sort" class="form-input" value="${product.sortOrder || 1}">
          </div>
          <div class="form-group">
            <label>Trạng thái:</label>
            <select id="p-status" class="form-select">
              <option value="active" ${product.status === "active" ? "selected" : ""}>Đang hiển thị</option>
              <option value="draft" ${product.status === "draft" ? "selected" : ""}>Bản nháp (Ẩn)</option>
            </select>
          </div>
          <div class="form-group pt-4">
            <label class="checkbox-label">
              <input type="checkbox" id="p-featured" ${product.isFeatured ? "checked" : ""}>
              <span>Đánh dấu NỔI BẬT</span>
            </label>
            <label class="checkbox-label mt-1">
              <input type="checkbox" id="p-new" ${product.isNew ? "checked" : ""}>
              <span>Đánh dấu HÀNG MỚI</span>
            </label>
          </div>
        </div>

        <div class="modal-actions-right mt-4">
          <button type="button" class="btn btn-outline" id="btn-cancel-product-modal">Hủy</button>
          <button type="submit" class="btn btn-primary">${isEdit ? "Cập nhật sản phẩm" : "Lưu sản phẩm mới"}</button>
        </div>
      </form>
    `;

    modal.open({
      title: isEdit ? `Chỉnh Sửa Sản Phẩm: ${product.name}` : "Thêm Sản Phẩm Thiết Bị Mới",
      content: contentHtml,
      onRender: (overlay) => {
        // Auto-slug generator when typing name
        const nameInput = overlay.querySelector("#p-name");
        const slugInput = overlay.querySelector("#p-slug");
        nameInput.addEventListener("input", () => {
          if (!isEdit) {
            slugInput.value = nameInput.value
              .toLowerCase()
              .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
              .replace(/[đĐ]/g, "d")
              .replace(/[^a-z0-9\s-]/g, "")
              .replace(/\s+/g, "-")
              .replace(/-+/g, "-");
          }
        });

        // Add Spec Row
        const specsContainer = overlay.querySelector("#specs-editor-container");
        overlay.querySelector("#btn-add-spec-row").addEventListener("click", () => {
          const row = document.createElement("div");
          row.className = "spec-input-row";
          row.innerHTML = `
            <input type="text" class="form-input spec-key" placeholder="Tên thông số (Vd: Dòng tải)">
            <input type="text" class="form-input spec-val" placeholder="Giá trị (Vd: 100A)">
            <button type="button" class="btn btn-xs btn-danger btn-remove-spec">&times;</button>
          `;
          row.querySelector(".btn-remove-spec").addEventListener("click", () => row.remove());
          specsContainer.appendChild(row);
        });

        // Remove existing spec rows
        overlay.querySelectorAll(".btn-remove-spec").forEach(btn => {
          btn.addEventListener("click", (e) => e.target.closest(".spec-input-row").remove());
        });

        // Cancel
        overlay.querySelector("#btn-cancel-product-modal").addEventListener("click", () => modal.close());

        // Submit form
        const form = overlay.querySelector("#product-editor-form");
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          const name = overlay.querySelector("#p-name").value.trim();
          const sku = overlay.querySelector("#p-sku").value.trim();
          const slug = overlay.querySelector("#p-slug").value.trim();
          const categoryId = overlay.querySelector("#p-category").value;
          const brand = overlay.querySelector("#p-brand").value;
          const shortDescription = overlay.querySelector("#p-short-desc").value.trim();
          const description = overlay.querySelector("#p-desc").value.trim();
          const applications = overlay.querySelector("#p-app").value.trim();
          const imagesRaw = overlay.querySelector("#p-images").value.trim();
          const sortOrder = parseInt(overlay.querySelector("#p-sort").value, 10) || 1;
          const status = overlay.querySelector("#p-status").value;
          const isFeatured = overlay.querySelector("#p-featured").checked;
          const isNew = overlay.querySelector("#p-new").checked;

          if (!name || !sku || !slug) {
            toast.error("Vui lòng điền đầy đủ Tên, SKU và Slug của sản phẩm!");
            return;
          }

          // Gather specs
          const specs = {};
          specsContainer.querySelectorAll(".spec-input-row").forEach(r => {
            const k = r.querySelector(".spec-key").value.trim();
            const v = r.querySelector(".spec-val").value.trim();
            if (k) specs[k] = v;
          });

          const images = imagesRaw.split(",").map(url => url.trim()).filter(Boolean);

          storage.saveProduct({
            id: productId,
            name,
            sku,
            slug,
            categoryId,
            brand,
            shortDescription,
            description,
            applications,
            technicalSpecifications: specs,
            images: images.length > 0 ? images : ["https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"],
            isFeatured,
            isNew,
            status,
            sortOrder
          });

          modal.close();
          toast.success(isEdit ? "Đã cập nhật sản phẩm thành công!" : "Đã thêm sản phẩm mới vào danh mục!");
          window.location.hash = "#/admin/products";
          // Trigger view re-render
          window.dispatchEvent(new CustomEvent("hashchange"));
        });
      }
    });
  },

  // 4. Admin Categories CRUD
  renderCategoriesList() {
    const categories = storage.getCategories();
    const products = storage.getProducts();

    const contentHtml = `
      <div class="admin-page-container">
        <div class="page-title-row">
          <div>
            <h1 class="page-title">Quản Lý Nhóm Danh Mục Thiết Bị</h1>
            <p class="page-subtitle">Tổ chức phân loại thiết bị điện, kiểm soát hình ảnh đại diện và thứ tự hiển thị.</p>
          </div>
          <button class="btn btn-primary" id="btn-add-category">+ Thêm Danh Mục Mới</button>
        </div>

        <div class="admin-panel mt-3">
          <div class="table-responsive">
            <table class="admin-table">
              <thead>
                <tr>
                  <th width="70">Ảnh</th>
                  <th>Tên Danh Mục & Đường Dẫn (Slug)</th>
                  <th>Mô Tả Nhóm</th>
                  <th>Số Lượng Sản Phẩm</th>
                  <th>Thứ Tự</th>
                  <th>Trạng Thái</th>
                  <th width="150" class="text-right">Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                ${categories.map(c => {
                  const count = products.filter(p => p.categoryId === c.id).length;
                  return `
                    <tr>
                      <td>
                        <img src="${c.image}" alt="${c.name}" class="admin-table-thumb">
                      </td>
                      <td>
                        <div class="fw-bold">${c.name}</div>
                        <code class="text-muted small">/san-pham?category=${c.id}</code>
                      </td>
                      <td><span class="text-truncate-cell">${c.description}</span></td>
                      <td>
                        <span class="badge badge-brand">${count} sản phẩm</span>
                      </td>
                      <td>${c.sortOrder || 1}</td>
                      <td>
                        <span class="status-pill ${c.status === 'active' ? 'pill-completed' : 'pill-cancelled'}">
                          ${c.status === 'active' ? 'Hiển thị' : 'Ẩn'}
                        </span>
                      </td>
                      <td class="text-right">
                        <button class="btn btn-xs btn-outline btn-edit-category" data-id="${c.id}">✏ Sửa</button>
                        <button class="btn btn-xs btn-danger btn-delete-category" data-id="${c.id}">🗑 Xóa</button>
                      </td>
                    </tr>
                  `;
                }).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    return this.renderAdminShell(contentHtml, "/admin/categories");
  },

  // Modal: Category Editor
  openCategoryEditor(categoryId = null) {
    const isEdit = !!categoryId;
    const category = isEdit ? storage.getCategoryById(categoryId) : {
      name: "",
      slug: "",
      description: "",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
      status: "active",
      sortOrder: storage.getCategories().length + 1
    };

    const content = `
      <form id="cat-editor-form" class="b2b-form">
        <div class="form-group">
          <label class="required">Tên nhóm danh mục:</label>
          <input type="text" id="cat-name" class="form-input" value="${category.name}" required placeholder="Ví dụ: Thiết bị đóng cắt (MCB/MCCB)">
        </div>

        <div class="form-group">
          <label class="required">Đường dẫn Slug:</label>
          <input type="text" id="cat-slug" class="form-input" value="${category.slug}" required placeholder="thiet-bi-dong-cat">
        </div>

        <div class="form-group">
          <label>Mô tả ngắn gọn về nhóm thiết bị:</label>
          <textarea id="cat-desc" rows="3" class="form-textarea" placeholder="Aptomat, rơ le, contactor...">${category.description}</textarea>
        </div>

        <div class="form-group">
          <label class="required">URL Ảnh đại diện danh mục:</label>
          <input type="text" id="cat-image" class="form-input" value="${category.image}" required>
        </div>

        <div class="form-row-2">
          <div class="form-group">
            <label>Thứ tự hiển thị:</label>
            <input type="number" id="cat-sort" class="form-input" value="${category.sortOrder || 1}">
          </div>
          <div class="form-group">
            <label>Trạng thái:</label>
            <select id="cat-status" class="form-select">
              <option value="active" ${category.status === "active" ? "selected" : ""}>Hiển thị</option>
              <option value="inactive" ${category.status === "inactive" ? "selected" : ""}>Tạm ẩn</option>
            </select>
          </div>
        </div>

        <div class="modal-actions-right mt-4">
          <button type="button" class="btn btn-outline" id="btn-cancel-cat">Hủy</button>
          <button type="submit" class="btn btn-primary">${isEdit ? "Lưu thay đổi" : "Tạo danh mục"}</button>
        </div>
      </form>
    `;

    modal.open({
      title: isEdit ? `Sửa Danh Mục: ${category.name}` : "Thêm Danh Mục Thiết Bị Mới",
      content,
      onRender: (overlay) => {
        overlay.querySelector("#btn-cancel-cat").addEventListener("click", () => modal.close());
        overlay.querySelector("#cat-editor-form").addEventListener("submit", (e) => {
          e.preventDefault();
          const name = overlay.querySelector("#cat-name").value.trim();
          const slug = overlay.querySelector("#cat-slug").value.trim();
          const description = overlay.querySelector("#cat-desc").value.trim();
          const image = overlay.querySelector("#cat-image").value.trim();
          const sortOrder = parseInt(overlay.querySelector("#cat-sort").value, 10) || 1;
          const status = overlay.querySelector("#cat-status").value;

          storage.saveCategory({
            id: categoryId,
            name,
            slug,
            description,
            image,
            sortOrder,
            status
          });

          modal.close();
          toast.success(isEdit ? "Cập nhật danh mục thành công!" : "Tạo mới danh mục thành công!");
          window.dispatchEvent(new CustomEvent("hashchange"));
        });
      }
    });
  },

  // 5. Admin Brands CRUD
  renderBrandsList() {
    const brands = storage.getBrands();

    const contentHtml = `
      <div class="admin-page-container">
        <div class="page-title-row">
          <div>
            <h1 class="page-title">Quản Lý Thương Hiệu & Hãng Sản Xuất</h1>
            <p class="page-subtitle">Danh sách các hãng đối tác cung ứng thiết bị điện chính hãng.</p>
          </div>
          <button class="btn btn-primary" id="btn-add-brand">+ Thêm Thương Hiệu</button>
        </div>

        <div class="admin-panel mt-3">
          <div class="table-responsive">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Tên Hãng</th>
                  <th>Xuất Xứ</th>
                  <th>Mô Tả Năng Lực & Uy Tín</th>
                  <th>Trạng Thái</th>
                  <th width="150" class="text-right">Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                ${brands.map(b => `
                  <tr>
                    <td><strong>${b.name}</strong></td>
                    <td><span class="badge badge-brand">${b.origin}</span></td>
                    <td>${b.description}</td>
                    <td>
                      <span class="status-pill ${b.status === 'active' ? 'pill-completed' : 'pill-cancelled'}">
                        ${b.status === 'active' ? 'Đang hợp tác' : 'Tạm dừng'}
                      </span>
                    </td>
                    <td class="text-right">
                      <button class="btn btn-xs btn-outline btn-edit-brand" data-id="${b.id}">✏ Sửa</button>
                      <button class="btn btn-xs btn-danger btn-delete-brand" data-id="${b.id}">🗑 Xóa</button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    return this.renderAdminShell(contentHtml, "/admin/brands");
  },

  // Modal: Brand Editor
  openBrandEditor(brandId = null) {
    const isEdit = !!brandId;
    const brand = isEdit ? storage.getBrandById(brandId) : {
      name: "",
      origin: "Việt Nam",
      description: "",
      status: "active"
    };

    const content = `
      <form id="brand-editor-form" class="b2b-form">
        <div class="form-group">
          <label class="required">Tên thương hiệu:</label>
          <input type="text" id="b-name" class="form-input" value="${brand.name}" required placeholder="Schneider Electric, LS, Cadivi...">
        </div>
        <div class="form-group">
          <label class="required">Quốc gia xuất xứ:</label>
          <input type="text" id="b-origin" class="form-input" value="${brand.origin}" required placeholder="Pháp, Hàn Quốc, Nhật Bản, Việt Nam...">
        </div>
        <div class="form-group">
          <label>Mô tả ngắn gọn:</label>
          <textarea id="b-desc" rows="3" class="form-textarea">${brand.description}</textarea>
        </div>
        <div class="form-group">
          <label>Trạng thái:</label>
          <select id="b-status" class="form-select">
            <option value="active" ${brand.status === "active" ? "selected" : ""}>Hoạt động</option>
            <option value="inactive" ${brand.status === "inactive" ? "selected" : ""}>Tạm ẩn</option>
          </select>
        </div>
        <div class="modal-actions-right mt-4">
          <button type="button" class="btn btn-outline" id="btn-cancel-brand">Hủy</button>
          <button type="submit" class="btn btn-primary">Lưu Thương Hiệu</button>
        </div>
      </form>
    `;

    modal.open({
      title: isEdit ? `Sửa Hãng: ${brand.name}` : "Thêm Hãng Sản Xuất Mới",
      content,
      onRender: (overlay) => {
        overlay.querySelector("#btn-cancel-brand").addEventListener("click", () => modal.close());
        overlay.querySelector("#brand-editor-form").addEventListener("submit", (e) => {
          e.preventDefault();
          const name = overlay.querySelector("#b-name").value.trim();
          const origin = overlay.querySelector("#b-origin").value.trim();
          const description = overlay.querySelector("#b-desc").value.trim();
          const status = overlay.querySelector("#b-status").value;

          storage.saveBrand({
            id: brandId,
            name,
            origin,
            description,
            status
          });

          modal.close();
          toast.success("Đã lưu thông tin thương hiệu thành công!");
          window.dispatchEvent(new CustomEvent("hashchange"));
        });
      }
    });
  },

  // 6. Admin Contacts / Leads Management
  renderContactsList(filterStatus = "ALL") {
    const contacts = storage.getContacts();
    let filtered = contacts;
    if (filterStatus !== "ALL") {
      filtered = contacts.filter(c => c.status === filterStatus);
    }

    const contentHtml = `
      <div class="admin-page-container">
        <div class="page-title-row">
          <div>
            <h1 class="page-title">Quản Lý Yêu Cầu Báo Giá & Lead Khách Hàng</h1>
            <p class="page-subtitle">Theo dõi quy trình tư vấn và báo giá thiết bị cho nhà thầu, công ty và chủ xưởng sản xuất.</p>
          </div>
        </div>

        <!-- Status Filter Tabs -->
        <div class="contact-status-tabs">
          <button class="status-tab-btn ${filterStatus === 'ALL' ? 'active' : ''}" data-status="ALL">Tất Cả (${contacts.length})</button>
          <button class="status-tab-btn ${filterStatus === 'NEW' ? 'active' : ''}" data-status="NEW">Mới Nhận (${contacts.filter(c => c.status === 'NEW').length})</button>
          <button class="status-tab-btn ${filterStatus === 'CONTACTED' ? 'active' : ''}" data-status="CONTACTED">Đã Liên Hệ</button>
          <button class="status-tab-btn ${filterStatus === 'PROCESSING' ? 'active' : ''}" data-status="PROCESSING">Đang Xử Lý / Báo Giá</button>
          <button class="status-tab-btn ${filterStatus === 'COMPLETED' ? 'active' : ''}" data-status="COMPLETED">Đã Hoàn Tất / Chốt Đơn</button>
          <button class="status-tab-btn ${filterStatus === 'CANCELLED' ? 'active' : ''}" data-status="CANCELLED">Đã Hủy</button>
        </div>

        <div class="admin-panel mt-3">
          <div class="table-responsive">
            <table class="admin-table">
              <thead>
                <tr>
                  <th style="min-width: 120px; width: 120px;">Thời Gian</th>
                  <th class="col-customer" style="min-width: 270px; width: 290px;">Họ Tên & Đơn Vị</th>
                  <th style="min-width: 190px;">Số Điện Thoại / Email</th>
                  <th style="min-width: 230px;">Sản Phẩm & Nhu Cầu</th>
                  <th style="min-width: 130px;">Quy Mô / SL</th>
                  <th style="min-width: 130px;">Trạng Thái</th>
                  <th class="text-right" style="min-width: 160px; width: 160px;">Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                ${filtered.length > 0 ? filtered.map(c => `
                  <tr>
                    <td class="text-muted small" style="white-space: nowrap;">
                      <strong>${new Date(c.createdAt).toLocaleDateString('vi-VN')}</strong><br>
                      <span>${new Date(c.createdAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</span>
                    </td>
                    <td class="col-customer">
                      <div class="customer-name">${c.fullName}</div>
                      <div class="customer-company">${c.company || 'Cá nhân / Hộ KD'}</div>
                    </td>
                    <td>
                      <div><a href="tel:${c.phone}" class="fw-bold phone-link">${c.phone}</a></div>
                      <div class="text-muted small">${c.email || 'Chưa cung cấp email'}</div>
                    </td>
                    <td>
                      <div class="fw-bold text-accent">${c.productInterest || 'Tư vấn tổng thể'}</div>
                      <div class="contact-need-desc text-muted small">${c.needSummary}</div>
                    </td>
                    <td><span class="badge badge-brand">${c.quantity || 'N/A'}</span></td>
                    <td>${this.renderContactStatusBadge(c.status)}</td>
                    <td class="text-right">
                      <button class="btn btn-xs btn-primary btn-view-contact-detail" data-id="${c.id}">Xem & Cập nhật</button>
                      <button class="btn btn-xs btn-danger btn-delete-contact" data-id="${c.id}">Xóa</button>
                    </td>
                  </tr>
                `).join("") : `
                  <tr>
                    <td colspan="7" class="text-center py-4 text-muted">
                      Không có liên hệ nào ở trạng thái này.
                    </td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    return this.renderAdminShell(contentHtml, "/admin/contacts");
  },

  // Modal: View & Update Contact Lead
  openContactDetail(contactId) {
    const contact = storage.getContactById(contactId);
    if (!contact) return;

    const content = `
      <div class="lead-detail-modal">
        <div class="lead-meta-header mb-3">
          <div class="d-flex justify-between align-center">
            <div>
              <h3>${contact.fullName}</h3>
              <p class="text-muted">${contact.company || 'Không có tên công ty'}</p>
            </div>
            <div>
              ${this.renderContactStatusBadge(contact.status)}
            </div>
          </div>
        </div>

        <div class="lead-info-grid">
          <div class="lead-info-item">
            <span class="label">Số điện thoại (Zalo):</span>
            <strong><a href="tel:${contact.phone}">${contact.phone}</a></strong>
          </div>
          <div class="lead-info-item">
            <span class="label">Email:</span>
            <strong>${contact.email || "Chưa có"}</strong>
          </div>
          <div class="lead-info-item">
            <span class="label">Sản phẩm quan tâm:</span>
            <strong class="text-accent">${contact.productInterest || "Chưa chọn cụ thể"}</strong>
          </div>
          <div class="lead-info-item">
            <span class="label">Số lượng / Giá trị ước tính:</span>
            <strong>${contact.quantity || "Chưa xác định"}</strong>
          </div>
        </div>

        <div class="lead-box-section mt-3">
          <label><strong>Nội dung yêu cầu từ khách hàng:</strong></label>
          <div class="quote-text-box">
            ${contact.needSummary}
          </div>
        </div>

        <form id="update-lead-form" class="b2b-form mt-4">
          <div class="form-group">
            <label class="required">Cập nhật trạng thái xử lý:</label>
            <select id="lead-status-select" class="form-select">
              <option value="NEW" ${contact.status === "NEW" ? "selected" : ""}>Mới nhận (NEW)</option>
              <option value="CONTACTED" ${contact.status === "CONTACTED" ? "selected" : ""}>Đã liên hệ tư vấn (CONTACTED)</option>
              <option value="PROCESSING" ${contact.status === "PROCESSING" ? "selected" : ""}>Đang bóc tách BOQ / Báo giá (PROCESSING)</option>
              <option value="COMPLETED" ${contact.status === "COMPLETED" ? "selected" : ""}>Đã chốt đơn / Hoàn tất (COMPLETED)</option>
              <option value="CANCELLED" ${contact.status === "CANCELLED" ? "selected" : ""}>Hủy bỏ (CANCELLED)</option>
            </select>
          </div>

          <div class="form-group">
            <label>Ghi chú nội bộ chuyên viên:</label>
            <textarea id="lead-notes-input" rows="3" class="form-textarea" placeholder="Ghi chú về tiến độ trao đổi với khách...">${contact.notes || ""}</textarea>
          </div>

          <div class="modal-actions-right mt-3">
            <button type="button" class="btn btn-outline" id="btn-close-lead-modal">Đóng</button>
            <button type="submit" class="btn btn-primary">Lưu Cập Nhật</button>
          </div>
        </form>
      </div>
    `;

    modal.open({
      title: `Chi Tiết Yêu Cầu Báo Giá: ${contact.fullName}`,
      content,
      onRender: (overlay) => {
        overlay.querySelector("#btn-close-lead-modal").addEventListener("click", () => modal.close());
        overlay.querySelector("#update-lead-form").addEventListener("submit", (e) => {
          e.preventDefault();
          const newStatus = overlay.querySelector("#lead-status-select").value;
          const notes = overlay.querySelector("#lead-notes-input").value.trim();

          storage.updateContactStatus(contactId, newStatus, notes);
          modal.close();
          toast.success("Đã cập nhật trạng thái yêu cầu khách hàng!");
          window.dispatchEvent(new CustomEvent("hashchange"));
        });
      }
    });
  },

  // 7. Admin Projects CRUD
  renderProjectsList() {
    const projects = storage.getProjects();

    const contentHtml = `
      <div class="admin-page-container">
        <div class="page-title-row">
          <div>
            <h1 class="page-title">Quản Lý Hồ Sơ Dự Án Đã Thực Hiện</h1>
            <p class="page-subtitle">Trưng bày các công trình, nhà máy đã cung cấp vật tư cơ điện làm hồ sơ năng lực.</p>
          </div>
          <button class="btn btn-primary" id="btn-add-project">+ Thêm Dự Án Mới</button>
        </div>

        <div class="admin-panel mt-3">
          <div class="table-responsive">
            <table class="admin-table">
              <thead>
                <tr>
                  <th width="80">Ảnh</th>
                  <th>Tên Dự Án</th>
                  <th>Địa Điểm</th>
                  <th>Loại Công Trình</th>
                  <th>Trạng Thái</th>
                  <th width="150" class="text-right">Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                ${projects.map(proj => `
                  <tr>
                    <td><img src="${proj.images[0]}" alt="${proj.name}" class="admin-table-thumb"></td>
                    <td>
                      <div class="fw-bold">${proj.name}</div>
                      <div class="text-muted small">${proj.suppliedScope}</div>
                    </td>
                    <td>${proj.location}</td>
                    <td><span class="badge badge-brand">${proj.projectType}</span></td>
                    <td>
                      <span class="status-pill ${proj.status === 'active' ? 'pill-completed' : 'pill-cancelled'}">
                        ${proj.status === 'active' ? 'Hiển thị' : 'Ẩn'}
                      </span>
                    </td>
                    <td class="text-right">
                      <button class="btn btn-xs btn-outline btn-edit-project" data-id="${proj.id}">✏ Sửa</button>
                      <button class="btn btn-xs btn-danger btn-delete-project" data-id="${proj.id}">🗑 Xóa</button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    return this.renderAdminShell(contentHtml, "/admin/projects");
  },

  // Modal: Project Editor
  openProjectEditor(projectId = null) {
    const isEdit = !!projectId;
    const project = isEdit ? storage.getProjectById(projectId) : {
      name: "",
      slug: "",
      location: "Đà Nẵng",
      projectType: "Nhà máy công nghiệp",
      suppliedScope: "",
      description: "",
      images: ["https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"],
      status: "active",
      isFeatured: true
    };

    const content = `
      <form id="project-editor-form" class="b2b-form">
        <div class="form-group">
          <label class="required">Tên dự án / Công trình:</label>
          <input type="text" id="pj-name" class="form-input" value="${project.name}" required placeholder="Ví dụ: Nhà máy sản xuất Foster KCN Hòa Khánh">
        </div>

        <div class="form-row-2">
          <div class="form-group">
            <label class="required">Địa điểm thi công:</label>
            <input type="text" id="pj-loc" class="form-input" value="${project.location}" required placeholder="Đà Nẵng / Quảng Nam...">
          </div>
          <div class="form-group">
            <label class="required">Loại hình công trình:</label>
            <input type="text" id="pj-type" class="form-input" value="${project.projectType}" required placeholder="Nhà máy, Khách sạn, Bệnh viện...">
          </div>
        </div>

        <div class="form-group">
          <label class="required">Hạng mục vật tư thiết bị cung cấp:</label>
          <input type="text" id="pj-scope" class="form-input" value="${project.suppliedScope}" required placeholder="Tủ tổng MSB 2500A, cáp ngầm Cadivi 3x70...">
        </div>

        <div class="form-group">
          <label>Mô tả chi tiết dự án:</label>
          <textarea id="pj-desc" rows="3" class="form-textarea">${project.description}</textarea>
        </div>

        <div class="form-group">
          <label class="required">URL Hình ảnh công trình:</label>
          <input type="text" id="pj-image" class="form-input" value="${project.images[0]}" required>
        </div>

        <div class="form-row-2">
          <div class="form-group">
            <label>Trạng thái:</label>
            <select id="pj-status" class="form-select">
              <option value="active" ${project.status === "active" ? "selected" : ""}>Hiển thị</option>
              <option value="inactive" ${project.status === "inactive" ? "selected" : ""}>Ẩn</option>
            </select>
          </div>
          <div class="form-group pt-4">
            <label class="checkbox-label">
              <input type="checkbox" id="pj-featured" ${project.isFeatured ? "checked" : ""}>
              <span>Hiển thị nổi bật trang chủ</span>
            </label>
          </div>
        </div>

        <div class="modal-actions-right mt-4">
          <button type="button" class="btn btn-outline" id="btn-cancel-project">Hủy</button>
          <button type="submit" class="btn btn-primary">Lưu Dự Án</button>
        </div>
      </form>
    `;

    modal.open({
      title: isEdit ? `Sửa Dự Án: ${project.name}` : "Thêm Dự Án Mới",
      content,
      onRender: (overlay) => {
        overlay.querySelector("#btn-cancel-project").addEventListener("click", () => modal.close());
        overlay.querySelector("#project-editor-form").addEventListener("submit", (e) => {
          e.preventDefault();
          const name = overlay.querySelector("#pj-name").value.trim();
          const location = overlay.querySelector("#pj-loc").value.trim();
          const projectType = overlay.querySelector("#pj-type").value.trim();
          const suppliedScope = overlay.querySelector("#pj-scope").value.trim();
          const description = overlay.querySelector("#pj-desc").value.trim();
          const image = overlay.querySelector("#pj-image").value.trim();
          const status = overlay.querySelector("#pj-status").value;
          const isFeatured = overlay.querySelector("#pj-featured").checked;

          const slug = name.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/[đĐ]/g, "d")
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-");

          storage.saveProject({
            id: projectId,
            name,
            slug,
            location,
            projectType,
            suppliedScope,
            description,
            images: [image],
            status,
            isFeatured
          });

          modal.close();
          toast.success("Đã lưu thông tin dự án thành công!");
          window.dispatchEvent(new CustomEvent("hashchange"));
        });
      }
    });
  },

  // 8. Admin Policies CRUD
  renderPoliciesList() {
    const policies = storage.getPolicies();

    const contentHtml = `
      <div class="admin-page-container">
        <div class="page-title-row">
          <div>
            <h1 class="page-title">Quản Lý Chính Sách B2B</h1>
            <p class="page-subtitle">Biên tập nội dung chính sách giao hàng, bảo hành CO/CQ, đổi trả hàng hoàn công.</p>
          </div>
          <button class="btn btn-primary" id="btn-add-policy">+ Thêm Chính Sách Mới</button>
        </div>

        <div class="admin-panel mt-3">
          <div class="table-responsive">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Tên Chính Sách</th>
                  <th>Đường Dẫn Slug</th>
                  <th>Thứ Tự</th>
                  <th>Trạng Thái</th>
                  <th width="150" class="text-right">Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                ${policies.map(p => `
                  <tr>
                    <td><strong>${p.name}</strong></td>
                    <td><code>#/chinh-sach?slug=${p.slug}</code></td>
                    <td>${p.sortOrder || 1}</td>
                    <td>
                      <span class="status-pill ${p.status === 'active' ? 'pill-completed' : 'pill-cancelled'}">
                        ${p.status === 'active' ? 'Hiển thị' : 'Ẩn'}
                      </span>
                    </td>
                    <td class="text-right">
                      <button class="btn btn-xs btn-outline btn-edit-policy" data-id="${p.id}">✏ Sửa</button>
                      <button class="btn btn-xs btn-danger btn-delete-policy" data-id="${p.id}">🗑 Xóa</button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;

    return this.renderAdminShell(contentHtml, "/admin/policies");
  },

  // Modal: Policy Editor
  openPolicyEditor(policyId = null) {
    const isEdit = !!policyId;
    const policy = isEdit ? storage.getPolicyById(policyId) : {
      name: "",
      slug: "",
      sortOrder: storage.getPolicies().length + 1,
      status: "active",
      content: "### 1. Điều khoản mới\nNội dung chính sách..."
    };

    const content = `
      <form id="policy-editor-form" class="b2b-form">
        <div class="form-group">
          <label class="required">Tên chính sách:</label>
          <input type="text" id="pol-name" class="form-input" value="${policy.name}" required placeholder="Ví dụ: Chính sách bán hàng & báo giá dự án">
        </div>

        <div class="form-group">
          <label class="required">Slug:</label>
          <input type="text" id="pol-slug" class="form-input" value="${policy.slug}" required placeholder="chinh-sach-ban-hang">
        </div>

        <div class="form-row-2">
          <div class="form-group">
            <label>Thứ tự hiển thị:</label>
            <input type="number" id="pol-sort" class="form-input" value="${policy.sortOrder || 1}">
          </div>
          <div class="form-group">
            <label>Trạng thái:</label>
            <select id="pol-status" class="form-select">
              <option value="active" ${policy.status === "active" ? "selected" : ""}>Hiển thị</option>
              <option value="inactive" ${policy.status === "inactive" ? "selected" : ""}>Ẩn</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="required">Nội dung chi tiết (Định dạng Markdown):</label>
          <textarea id="pol-content" rows="10" class="form-textarea font-mono" required>${policy.content}</textarea>
        </div>

        <div class="modal-actions-right mt-4">
          <button type="button" class="btn btn-outline" id="btn-cancel-policy">Hủy</button>
          <button type="submit" class="btn btn-primary">Lưu Nội Dung</button>
        </div>
      </form>
    `;

    modal.open({
      title: isEdit ? `Sửa Chính Sách: ${policy.name}` : "Tạo Chính Sách Mới",
      content,
      onRender: (overlay) => {
        overlay.querySelector("#btn-cancel-policy").addEventListener("click", () => modal.close());
        overlay.querySelector("#policy-editor-form").addEventListener("submit", (e) => {
          e.preventDefault();
          const name = overlay.querySelector("#pol-name").value.trim();
          const slug = overlay.querySelector("#pol-slug").value.trim();
          const sortOrder = parseInt(overlay.querySelector("#pol-sort").value, 10) || 1;
          const status = overlay.querySelector("#pol-status").value;
          const contentText = overlay.querySelector("#pol-content").value;

          storage.savePolicy({
            id: policyId,
            name,
            slug,
            sortOrder,
            status,
            content: contentText
          });

          modal.close();
          toast.success("Đã lưu chính sách thành công!");
          window.dispatchEvent(new CustomEvent("hashchange"));
        });
      }
    });
  },

  // 9. Admin Settings (Company & Zalo & General)
  renderSettings() {
    const settings = storage.getSettings();

    const contentHtml = `
      <div class="admin-page-container">
        <div class="page-title-row">
          <div>
            <h1 class="page-title">Cấu Hình Thông Tin & Kênh Zalo B2B</h1>
            <p class="page-subtitle">Mọi thay đổi tại đây sẽ được đồng bộ và cập nhật ngay lập tức trên toàn bộ website phía khách hàng.</p>
          </div>
        </div>

        <div class="admin-settings-layout">
          <form id="admin-settings-form" class="b2b-form">
            <!-- Box 1: Zalo & Floating Widget (Critical Requirement) -->
            <div class="settings-card-section">
              <div class="settings-card-header">
                <h3>💬 Cấu Hình Kênh Tư Vấn Zalo Trọng Tâm</h3>
                <p>Kênh chốt đơn sỉ chính của website doanh nghiệp.</p>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label class="required">Đường dẫn Zalo (Zalo URL):</label>
                  <input type="url" id="st-zalo-url" class="form-input" value="${settings.zaloUrl}" required placeholder="https://zalo.me/0905888999">
                  <small class="text-muted">Được gán vào toàn bộ nút Zalo trên Header, Product Card, Chi tiết, và Footer.</small>
                </div>
                <div class="form-group">
                  <label class="required">Số điện thoại Zalo trực tuyến:</label>
                  <input type="text" id="st-zalo-phone" class="form-input" value="${settings.zaloPhone}" required placeholder="0905 888 999">
                </div>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label class="required">Tên / Chức danh người phụ trách Zalo:</label>
                  <input type="text" id="st-zalo-name" class="form-input" value="${settings.zaloDisplayName}" required placeholder="Mr. Tuấn - Trưởng Phòng Dự Án">
                </div>
                <div class="form-group">
                  <label>Nhãn nút Zalo (CTA Text):</label>
                  <input type="text" id="st-zalo-cta" class="form-input" value="${settings.zaloCtaText}" placeholder="Tư vấn & Báo giá sỉ qua Zalo">
                </div>
              </div>

              <div class="form-group pt-2">
                <label class="checkbox-label">
                  <input type="checkbox" id="st-enable-floating" ${settings.enableFloatingZalo ? "checked" : ""}>
                  <strong>Bật nút Zalo & Hotline nổi (Floating Button) ở góc dưới màn hình</strong>
                </label>
              </div>
            </div>

            <!-- Box 2: Enterprise Contact & Warehouse Info -->
            <div class="settings-card-section mt-4">
              <div class="settings-card-header">
                <h3>🏢 Thông Tin Doanh Nghiệp & Địa Bàn Phục Vụ</h3>
                <p>Địa chỉ trụ sở Đà Nẵng và hệ thống kho vận chuyển Quảng Nam.</p>
              </div>

              <div class="form-row-2">
                <div class="form-group">
                  <label class="required">Tên thương hiệu doanh nghiệp:</label>
                  <input type="text" id="st-company-name" class="form-input" value="${settings.companyName}" required>
                </div>
                <div class="form-group">
                  <label class="required">Tên pháp nhân công ty:</label>
                  <input type="text" id="st-trade-name" class="form-input" value="${settings.tradeName}" required>
                </div>
              </div>

              <div class="form-group">
                <label>Khẩu hiệu / Slogan doanh nghiệp:</label>
                <input type="text" id="st-slogan" class="form-input" value="${settings.slogan}">
              </div>

              <div class="form-row-3">
                <div class="form-group">
                  <label class="required">Hotline di động (Kỹ sư dự án):</label>
                  <input type="text" id="st-phone" class="form-input" value="${settings.phone}" required>
                </div>
                <div class="form-group">
                  <label>Hotline bàn văn phòng:</label>
                  <input type="text" id="st-hotline" class="form-input" value="${settings.hotline}">
                </div>
                <div class="form-group">
                  <label class="required">Email nhận bản vẽ & báo giá:</label>
                  <input type="email" id="st-email" class="form-input" value="${settings.email}" required>
                </div>
              </div>

              <div class="form-group">
                <label class="required">Địa chỉ trụ sở chính (TP. Đà Nẵng):</label>
                <input type="text" id="st-address" class="form-input" value="${settings.address}" required>
              </div>

              <div class="form-group">
                <label class="required">Địa chỉ kho hàng / Chi nhánh (Tỉnh Quảng Nam):</label>
                <input type="text" id="st-branch" class="form-input" value="${settings.branchAddress}" required>
              </div>

              <div class="form-group">
                <label>Giờ tiếp nhận và hỗ trợ kỹ thuật:</label>
                <input type="text" id="st-hours" class="form-input" value="${settings.workingHours}">
              </div>
            </div>

            <!-- Box 3: SEO & Meta Info -->
            <div class="settings-card-section mt-4">
              <div class="settings-card-header">
                <h3>🌐 Tối Ưu SEO & Thẻ Meta</h3>
                <p>Tiêu đề và mô tả hiển thị trên công cụ tìm kiếm.</p>
              </div>

              <div class="form-group">
                <label>Tiêu đề trang (Meta Title):</label>
                <input type="text" id="st-meta-title" class="form-input" value="${settings.metaTitle}">
              </div>

              <div class="form-group">
                <label>Mô tả trang (Meta Description):</label>
                <textarea id="st-meta-desc" rows="3" class="form-textarea">${settings.siteDescription}</textarea>
              </div>
            </div>

            <div class="settings-submit-bar mt-4">
              <button type="submit" class="btn btn-primary btn-lg" id="btn-save-settings">
                💾 Lưu & Áp Dụng Thay Đổi Toàn Website
              </button>
            </div>
          </form>
        </div>
      </div>
    `;

    return this.renderAdminShell(contentHtml, "/admin/settings");
  }
};
