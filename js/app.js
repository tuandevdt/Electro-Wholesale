import { storage } from "./services/storage.js?v=4";
import { toast } from "./components/toast.js?v=4";
import { modal } from "./components/modal.js?v=4";
import { publicViews } from "./views/publicViews.js?v=4";
import { adminViews } from "./views/adminViews.js?v=4";

class App {
  constructor() {
    this.appRoot = document.getElementById("app");
    this.initEventListeners();
    this.handleRoute();
  }

  initEventListeners() {
    window.addEventListener("hashchange", () => this.handleRoute());
    window.addEventListener("electro-data-changed", () => {
      // Re-render current route to reflect immediate changes
      this.handleRoute();
    });

    // Mobile nav toggle delegation & Admin sidebar controls
    document.addEventListener("click", (e) => {
      const toggleBtn = e.target.closest("#mobile-toggle-btn");
      if (toggleBtn) {
        const nav = document.getElementById("main-nav");
        const iconSpan = document.getElementById("mobile-toggle-icon");
        if (nav) {
          const isOpen = nav.classList.toggle("open");
          toggleBtn.classList.toggle("active", isOpen);
          if (iconSpan) iconSpan.textContent = isOpen ? "✕" : "☰";
        }
        return;
      }

      // Close mobile nav when clicking a link
      if (e.target.closest(".nav-link") || e.target.closest(".dropdown-item")) {
        const nav = document.getElementById("main-nav");
        const toggleBtn = document.getElementById("mobile-toggle-btn");
        const iconSpan = document.getElementById("mobile-toggle-icon");
        if (nav && nav.classList.contains("open")) {
          nav.classList.remove("open");
          if (toggleBtn) toggleBtn.classList.remove("active");
          if (iconSpan) iconSpan.textContent = "☰";
        }
      }

      // Close mobile nav when clicking outside of header
      if (!e.target.closest("#site-header")) {
        const nav = document.getElementById("main-nav");
        const toggleBtn = document.getElementById("mobile-toggle-btn");
        const iconSpan = document.getElementById("mobile-toggle-icon");
        if (nav && nav.classList.contains("open")) {
          nav.classList.remove("open");
          if (toggleBtn) toggleBtn.classList.remove("active");
          if (iconSpan) iconSpan.textContent = "☰";
        }
      }

      // Admin sidebar open on mobile
      const sideToggle = e.target.closest("#btn-toggle-sidebar");
      if (sideToggle) {
        const sidebar = document.getElementById("admin-sidebar");
        const backdrop = document.getElementById("admin-sidebar-backdrop");
        if (sidebar) sidebar.classList.add("open");
        if (backdrop) backdrop.classList.add("open");
      }

      // Admin sidebar close button or backdrop click or sidebar link click on mobile
      if (e.target.closest("#btn-close-sidebar-mobile") || e.target.closest("#admin-sidebar-backdrop") || e.target.closest(".sidebar-link")) {
        const sidebar = document.getElementById("admin-sidebar");
        const backdrop = document.getElementById("admin-sidebar-backdrop");
        if (sidebar && sidebar.classList.contains("open")) {
          sidebar.classList.remove("open");
        }
        if (backdrop && backdrop.classList.contains("open")) {
          backdrop.classList.remove("open");
        }
      }
    });

    // Scroll header effect
    window.addEventListener("scroll", () => {
      const header = document.getElementById("site-header");
      if (header) {
        if (window.scrollY > 40) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    });
  }

  // Parse Hash Route
  parseRoute() {
    const rawHash = window.location.hash.slice(1) || "/";
    const [pathPart, queryPart] = rawHash.split("?");
    const path = pathPart.replace(/\/$/, "") || "/";

    const params = {};
    if (queryPart) {
      const pairs = queryPart.split("&");
      for (const pair of pairs) {
        const [k, v] = pair.split("=");
        if (k) params[decodeURIComponent(k)] = decodeURIComponent(v || "");
      }
    }

    return { path, params };
  }

  // Route Dispatcher
  handleRoute() {
    window.scrollTo(0, 0);
    const { path, params } = this.parseRoute();

    // 1. Admin Routes Guard
    if (path.startsWith("/admin")) {
      if (path === "/admin/login") {
        if (storage.isAuthenticated()) {
          window.location.hash = "#/admin/dashboard";
          return;
        }
        this.renderAdminLogin();
        return;
      }

      // Must be authenticated
      if (!storage.isAuthenticated()) {
        toast.info("Vui lòng đăng nhập quyền Quản trị viên để tiếp tục.");
        window.location.hash = "#/admin/login";
        return;
      }

      // Authenticated Admin Pages
      if (path === "/admin" || path === "/admin/dashboard") {
        this.renderAdminDashboard();
      } else if (path === "/admin/products") {
        this.renderAdminProducts(params);
      } else if (path === "/admin/categories") {
        this.renderAdminCategories();
      } else if (path === "/admin/brands") {
        this.renderAdminBrands();
      } else if (path === "/admin/contacts") {
        this.renderAdminContacts(params.status || "ALL");
      } else if (path === "/admin/projects") {
        this.renderAdminProjects();
      } else if (path === "/admin/policies") {
        this.renderAdminPolicies();
      } else if (path === "/admin/settings") {
        this.renderAdminSettings();
      } else {
        window.location.hash = "#/admin/dashboard";
      }
      return;
    }

    // 2. Public Client Routes
    let pageContentHtml = "";

    if (path === "/" || path === "") {
      pageContentHtml = publicViews.renderHome();
    } else if (path === "/gioi-thieu") {
      pageContentHtml = publicViews.renderAbout();
    } else if (path === "/san-pham") {
      pageContentHtml = publicViews.renderProducts(params);
    } else if (path.startsWith("/san-pham/")) {
      const slug = path.replace("/san-pham/", "");
      pageContentHtml = publicViews.renderProductDetail(slug);
    } else if (path === "/dich-vu") {
      pageContentHtml = publicViews.renderServices();
    } else if (path === "/du-an") {
      pageContentHtml = publicViews.renderProjects();
    } else if (path === "/chinh-sach") {
      pageContentHtml = publicViews.renderPolicies(params.slug || "");
    } else if (path === "/lien-he") {
      pageContentHtml = publicViews.renderContact();
    } else {
      // 404 Public Page
      pageContentHtml = `
        <div class="container py-5 text-center">
          <div class="empty-state-box">
            <div class="empty-icon">404</div>
            <h2>Không tìm thấy trang yêu cầu</h2>
            <p>Đường dẫn bạn vừa truy cập không tồn tại hoặc đã thay đổi.</p>
            <a href="#/" class="btn btn-primary mt-3">Quay về Trang Chủ</a>
          </div>
        </div>
      `;
    }

    this.renderPublicLayout(pageContentHtml, path);
    this.bindPublicEvents(path, params);
  }

  // Render Public Shell
  renderPublicLayout(contentHtml, currentRoute) {
    this.appRoot.innerHTML = `
      ${publicViews.renderHeader(currentRoute)}
      <main class="site-main" id="site-main">
        ${contentHtml}
      </main>
      ${publicViews.renderFooter()}
      ${publicViews.renderFloatingWidget()}
    `;
  }

  // Bind Public Interactive Events
  bindPublicEvents(path, params) {
    // Catalog Filter Events
    if (path === "/san-pham") {
      const searchInput = document.getElementById("catalog-search");
      const btnDoSearch = document.getElementById("btn-do-search");
      const selectCat = document.getElementById("filter-category");
      const selectBrand = document.getElementById("filter-brand");
      const selectStatus = document.getElementById("filter-status");
      const selectSort = document.getElementById("filter-sort");
      const btnResetFilters = document.getElementById("btn-reset-filters");
      const btnClearEmpty = document.getElementById("btn-clear-empty-filters");

      const updateCatalogUrl = () => {
        const query = new URLSearchParams();
        if (searchInput && searchInput.value.trim()) query.set("search", searchInput.value.trim());
        if (selectCat && selectCat.value) query.set("category", selectCat.value);
        if (selectBrand && selectBrand.value) query.set("brand", selectBrand.value);
        if (selectStatus && selectStatus.value !== "all") query.set("status", selectStatus.value);
        if (selectSort && selectSort.value !== "sortOrder") query.set("sort", selectSort.value);

        const qs = query.toString();
        window.location.hash = qs ? `#/san-pham?${qs}` : "#/san-pham";
      };

      if (btnDoSearch) btnDoSearch.addEventListener("click", updateCatalogUrl);
      if (searchInput) {
        searchInput.addEventListener("keypress", (e) => {
          if (e.key === "Enter") updateCatalogUrl();
        });
      }
      if (selectCat) selectCat.addEventListener("change", updateCatalogUrl);
      if (selectBrand) selectBrand.addEventListener("change", updateCatalogUrl);
      if (selectStatus) selectStatus.addEventListener("change", updateCatalogUrl);
      if (selectSort) selectSort.addEventListener("change", updateCatalogUrl);

      const resetAction = () => {
        window.location.hash = "#/san-pham";
      };
      if (btnResetFilters) btnResetFilters.addEventListener("click", resetAction);
      if (btnClearEmpty) btnClearEmpty.addEventListener("click", resetAction);
    }

    // Product Detail Page Events (Thumbnail click)
    if (path.startsWith("/san-pham/")) {
      const mainImg = document.getElementById("detail-main-img");
      const thumbBtns = document.querySelectorAll(".thumb-btn");
      thumbBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          thumbBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          if (mainImg) mainImg.src = btn.dataset.img;
        });
      });
    }
  }

  // ================= ADMIN CONTROLLERS =================

  // Admin Login
  renderAdminLogin() {
    this.appRoot.innerHTML = adminViews.renderLogin();
    const loginForm = document.getElementById("admin-login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("login-email").value.trim();
        const pass = document.getElementById("login-password").value.trim();

        const res = storage.login(email, pass);
        if (res.success) {
          toast.success("Đăng nhập thành công! Chào mừng trở lại hệ thống quản trị.");
          window.location.hash = "#/admin/dashboard";
        } else {
          toast.error(res.message);
        }
      });
    }
  }

  // Bind Common Admin Nav (Logout, Reset Demo Data)
  bindAdminCommonEvents(currentTitle = "") {
    const titleEl = document.getElementById("topbar-current-page");
    if (titleEl && currentTitle) titleEl.innerText = currentTitle;

    const logoutBtn = document.getElementById("btn-admin-logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", async () => {
        const confirmed = await modal.confirm({
          title: "Đăng xuất tài khoản",
          message: "Bạn có chắc chắn muốn đăng xuất khỏi trang quản trị?"
        });
        if (confirmed) {
          storage.logout();
          modal.close();
          toast.info("Đã đăng xuất tài khoản.");
          window.location.hash = "#/admin/login";
        }
      });
    }

    const resetBtn = document.getElementById("btn-admin-reset-data");
    if (resetBtn) {
      resetBtn.addEventListener("click", async () => {
        const confirmed = await modal.confirm({
          title: "Khôi phục dữ liệu Demo gốc",
          message: "Thao tác này sẽ nạp lại toàn bộ 20+ sản phẩm mẫu, danh mục, dự án, thông tin Zalo ban đầu. Bạn có muốn tiếp tục?",
          confirmText: "Khôi phục ngay",
          isDanger: true
        });
        if (confirmed) {
          storage.resetAllData();
          modal.close();
          toast.success("Đã khôi phục toàn bộ dữ liệu mẫu demo thành công!");
          window.location.hash = "#/admin/dashboard";
        }
      });
    }
  }

  // Admin Dashboard
  renderAdminDashboard() {
    this.appRoot.innerHTML = adminViews.renderDashboard();
    this.bindAdminCommonEvents("Dashboard Tổng Quan");

    // Quick contact detail clicks
    document.querySelectorAll(".btn-view-contact").forEach(btn => {
      btn.addEventListener("click", () => {
        adminViews.openContactDetail(btn.dataset.id);
      });
    });
  }

  // Admin Products
  renderAdminProducts(params) {
    this.appRoot.innerHTML = adminViews.renderProductsList(params);
    this.bindAdminCommonEvents("Quản Lý Sản Phẩm Thiết Bị");

    // Filter controls
    const searchInput = document.getElementById("admin-product-search");
    const btnSearch = document.getElementById("btn-search-product");
    const catSelect = document.getElementById("admin-prod-cat-filter");
    const brandSelect = document.getElementById("admin-prod-brand-filter");

    const updateFilter = () => {
      const q = new URLSearchParams();
      if (searchInput.value.trim()) q.set("search", searchInput.value.trim());
      if (catSelect.value) q.set("category", catSelect.value);
      if (brandSelect.value) q.set("brand", brandSelect.value);
      const str = q.toString();
      window.location.hash = str ? `#/admin/products?${str}` : "#/admin/products";
    };

    if (btnSearch) btnSearch.addEventListener("click", updateFilter);
    if (searchInput) {
      searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") updateFilter();
      });
    }
    if (catSelect) catSelect.addEventListener("change", updateFilter);
    if (brandSelect) brandSelect.addEventListener("change", updateFilter);

    // Add Product
    const btnAdd = document.getElementById("btn-add-product");
    if (btnAdd) {
      btnAdd.addEventListener("click", () => adminViews.openProductEditor());
    }

    // Edit Product
    document.querySelectorAll(".btn-edit-product").forEach(btn => {
      btn.addEventListener("click", () => adminViews.openProductEditor(btn.dataset.id));
    });

    // Duplicate Product
    document.querySelectorAll(".btn-duplicate-product").forEach(btn => {
      btn.addEventListener("click", () => {
        const copy = storage.duplicateProduct(btn.dataset.id);
        if (copy) {
          toast.success(`Đã nhân bản sản phẩm: ${copy.name}!`);
          window.location.hash = "#/admin/products";
          this.handleRoute();
        }
      });
    });

    // Delete Product
    document.querySelectorAll(".btn-delete-product").forEach(btn => {
      btn.addEventListener("click", async () => {
        const prod = storage.getProductById(btn.dataset.id);
        if (!prod) return;
        const confirmed = await modal.confirm({
          title: "Xác nhận xóa sản phẩm",
          message: `Bạn có chắc chắn muốn xóa vĩnh viễn thiết bị <strong>"${prod.name}"</strong> (SKU: ${prod.sku}) khỏi hệ thống?`,
          confirmText: "Xóa sản phẩm",
          isDanger: true
        });
        if (confirmed) {
          storage.deleteProduct(btn.dataset.id);
          modal.close();
          toast.success("Đã xóa sản phẩm khỏi danh mục!");
          this.handleRoute();
        }
      });
    });
  }

  // Admin Categories
  renderAdminCategories() {
    this.appRoot.innerHTML = adminViews.renderCategoriesList();
    this.bindAdminCommonEvents("Quản Lý Danh Mục Thiết Bị");

    const btnAdd = document.getElementById("btn-add-category");
    if (btnAdd) {
      btnAdd.addEventListener("click", () => adminViews.openCategoryEditor());
    }

    document.querySelectorAll(".btn-edit-category").forEach(btn => {
      btn.addEventListener("click", () => adminViews.openCategoryEditor(btn.dataset.id));
    });

    document.querySelectorAll(".btn-delete-category").forEach(btn => {
      btn.addEventListener("click", async () => {
        const cat = storage.getCategoryById(btn.dataset.id);
        if (!cat) return;

        const confirmed = await modal.confirm({
          title: "Xác nhận xóa danh mục",
          message: `Bạn có chắc chắn muốn xóa danh mục <strong>"${cat.name}"</strong>?`,
          confirmText: "Xóa danh mục",
          isDanger: true
        });

        if (confirmed) {
          try {
            storage.deleteCategory(btn.dataset.id);
            modal.close();
            toast.success("Đã xóa danh mục!");
            this.handleRoute();
          } catch (err) {
            modal.close();
            toast.error(err.message);
          }
        }
      });
    });
  }

  // Admin Brands
  renderAdminBrands() {
    this.appRoot.innerHTML = adminViews.renderBrandsList();
    this.bindAdminCommonEvents("Quản Lý Hãng Sản Xuất");

    const btnAdd = document.getElementById("btn-add-brand");
    if (btnAdd) {
      btnAdd.addEventListener("click", () => adminViews.openBrandEditor());
    }

    document.querySelectorAll(".btn-edit-brand").forEach(btn => {
      btn.addEventListener("click", () => adminViews.openBrandEditor(btn.dataset.id));
    });

    document.querySelectorAll(".btn-delete-brand").forEach(btn => {
      btn.addEventListener("click", async () => {
        const b = storage.getBrandById(btn.dataset.id);
        if (!b) return;

        const confirmed = await modal.confirm({
          title: "Xác nhận xóa thương hiệu",
          message: `Bạn có chắc muốn xóa thương hiệu <strong>"${b.name}"</strong>?`,
          isDanger: true
        });
        if (confirmed) {
          storage.deleteBrand(btn.dataset.id);
          modal.close();
          toast.success("Đã xóa thương hiệu!");
          this.handleRoute();
        }
      });
    });
  }

  // Admin Contacts Pipeline
  renderAdminContacts(statusFilter) {
    this.appRoot.innerHTML = adminViews.renderContactsList(statusFilter);
    this.bindAdminCommonEvents("Quản Lý Khách Báo Giá & Lead");

    // Status filter tabs
    document.querySelectorAll(".status-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const s = btn.dataset.status;
        window.location.hash = s === "ALL" ? "#/admin/contacts" : `#/admin/contacts?status=${s}`;
      });
    });

    // View & Update Lead
    document.querySelectorAll(".btn-view-contact-detail").forEach(btn => {
      btn.addEventListener("click", () => adminViews.openContactDetail(btn.dataset.id));
    });

    // Delete lead
    document.querySelectorAll(".btn-delete-contact").forEach(btn => {
      btn.addEventListener("click", async () => {
        const contact = storage.getContactById(btn.dataset.id);
        if (!contact) return;
        const confirmed = await modal.confirm({
          title: "Xác nhận xóa yêu cầu",
          message: `Bạn có chắc muốn xóa yêu cầu báo giá của <strong>"${contact.fullName}"</strong>?`,
          isDanger: true
        });
        if (confirmed) {
          storage.deleteContact(btn.dataset.id);
          modal.close();
          toast.success("Đã xóa yêu cầu báo giá!");
          this.handleRoute();
        }
      });
    });
  }

  // Admin Projects
  renderAdminProjects() {
    this.appRoot.innerHTML = adminViews.renderProjectsList();
    this.bindAdminCommonEvents("Hồ Sơ Năng Lực Dự Án");

    const btnAdd = document.getElementById("btn-add-project");
    if (btnAdd) btnAdd.addEventListener("click", () => adminViews.openProjectEditor());

    document.querySelectorAll(".btn-edit-project").forEach(btn => {
      btn.addEventListener("click", () => adminViews.openProjectEditor(btn.dataset.id));
    });

    document.querySelectorAll(".btn-delete-project").forEach(btn => {
      btn.addEventListener("click", async () => {
        const proj = storage.getProjectById(btn.dataset.id);
        if (!proj) return;
        const confirmed = await modal.confirm({
          title: "Xác nhận xóa dự án",
          message: `Xóa dự án <strong>"${proj.name}"</strong> khỏi danh sách hồ sơ năng lực?`,
          isDanger: true
        });
        if (confirmed) {
          storage.deleteProject(btn.dataset.id);
          modal.close();
          toast.success("Đã xóa dự án!");
          this.handleRoute();
        }
      });
    });
  }

  // Admin Policies
  renderAdminPolicies() {
    this.appRoot.innerHTML = adminViews.renderPoliciesList();
    this.bindAdminCommonEvents("Biên Tập Chính Sách B2B");

    const btnAdd = document.getElementById("btn-add-policy");
    if (btnAdd) btnAdd.addEventListener("click", () => adminViews.openPolicyEditor());

    document.querySelectorAll(".btn-edit-policy").forEach(btn => {
      btn.addEventListener("click", () => adminViews.openPolicyEditor(btn.dataset.id));
    });

    document.querySelectorAll(".btn-delete-policy").forEach(btn => {
      btn.addEventListener("click", async () => {
        const pol = storage.getPolicyById(btn.dataset.id);
        if (!pol) return;
        const confirmed = await modal.confirm({
          title: "Xác nhận xóa chính sách",
          message: `Xóa chính sách <strong>"${pol.name}"</strong>?`,
          isDanger: true
        });
        if (confirmed) {
          storage.deletePolicy(btn.dataset.id);
          modal.close();
          toast.success("Đã xóa chính sách!");
          this.handleRoute();
        }
      });
    });
  }

  // Admin Settings
  renderAdminSettings() {
    this.appRoot.innerHTML = adminViews.renderSettings();
    this.bindAdminCommonEvents("Cấu Hình Zalo & Thông Tin Doanh Nghiệp");

    const form = document.getElementById("admin-settings-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const zaloUrl = document.getElementById("st-zalo-url").value.trim();
        const zaloPhone = document.getElementById("st-zalo-phone").value.trim();
        const zaloDisplayName = document.getElementById("st-zalo-name").value.trim();
        const zaloCtaText = document.getElementById("st-zalo-cta").value.trim();
        const enableFloatingZalo = document.getElementById("st-enable-floating").checked;

        const companyName = document.getElementById("st-company-name").value.trim();
        const tradeName = document.getElementById("st-trade-name").value.trim();
        const slogan = document.getElementById("st-slogan").value.trim();
        const phone = document.getElementById("st-phone").value.trim();
        const hotline = document.getElementById("st-hotline").value.trim();
        const email = document.getElementById("st-email").value.trim();
        const address = document.getElementById("st-address").value.trim();
        const branchAddress = document.getElementById("st-branch").value.trim();
        const workingHours = document.getElementById("st-hours").value.trim();

        const metaTitle = document.getElementById("st-meta-title").value.trim();
        const siteDescription = document.getElementById("st-meta-desc").value.trim();

        storage.updateSettings({
          zaloUrl,
          zaloPhone,
          zaloDisplayName,
          zaloCtaText,
          enableFloatingZalo,
          companyName,
          tradeName,
          slogan,
          phone,
          hotline,
          email,
          address,
          branchAddress,
          workingHours,
          metaTitle,
          siteDescription
        });

        toast.success("Đã lưu và cập nhật cấu hình thành công! Mọi thay đổi về Zalo và Hotline đã được đồng bộ lên toàn bộ website.");
      });
    }
  }
}

// Start application on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  window.electroApp = new App();
});
