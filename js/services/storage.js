import {
  DEFAULT_SETTINGS,
  DEFAULT_CATEGORIES,
  DEFAULT_BRANDS,
  DEFAULT_PRODUCTS,
  DEFAULT_PROJECTS,
  DEFAULT_POLICIES,
  DEFAULT_CONTACTS
} from "../data/initialData.js";

const STORAGE_KEYS = {
  SETTINGS: "electro_settings",
  CATEGORIES: "electro_categories",
  BRANDS: "electro_brands",
  PRODUCTS: "electro_products",
  PROJECTS: "electro_projects",
  POLICIES: "electro_policies",
  CONTACTS: "electro_contacts",
  AUTH: "electro_auth_session",
  INITIALIZED: "electro_db_v1_init"
};

class StorageService {
  constructor() {
    this.initDatabase();
  }

  initDatabase(forceReset = false) {
    if (forceReset || !localStorage.getItem(STORAGE_KEYS.INITIALIZED)) {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(DEFAULT_SETTINGS));
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(DEFAULT_CATEGORIES));
      localStorage.setItem(STORAGE_KEYS.BRANDS, JSON.stringify(DEFAULT_BRANDS));
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(DEFAULT_PRODUCTS));
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(DEFAULT_PROJECTS));
      localStorage.setItem(STORAGE_KEYS.POLICIES, JSON.stringify(DEFAULT_POLICIES));
      localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(DEFAULT_CONTACTS));
      localStorage.setItem(STORAGE_KEYS.INITIALIZED, "true");
      this.dispatchChange("all");
    } else {
      // Auto-update Zalo phone and URL if still pointing to old default
      const currentSettings = this.get(STORAGE_KEYS.SETTINGS, null);
      if (currentSettings && (currentSettings.zaloPhone === "0905 888 999" || currentSettings.zaloUrl.includes("0905888999"))) {
        currentSettings.zaloPhone = DEFAULT_SETTINGS.zaloPhone;
        currentSettings.zaloUrl = DEFAULT_SETTINGS.zaloUrl;
        currentSettings.phone = DEFAULT_SETTINGS.phone;
        this.set(STORAGE_KEYS.SETTINGS, currentSettings, "settings");
      }
    }
  }

  dispatchChange(entity) {
    window.dispatchEvent(new CustomEvent("electro-data-changed", { detail: { entity } }));
  }

  get(key, defaultValue = []) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error(`Error reading ${key} from storage:`, e);
      return defaultValue;
    }
  }

  set(key, value, entityName = "") {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      if (entityName) {
        this.dispatchChange(entityName);
      }
    } catch (e) {
      console.error(`Error saving ${key} to storage:`, e);
    }
  }

  // Settings
  getSettings() {
    return this.get(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS);
  }

  updateSettings(newSettings) {
    const current = this.getSettings();
    const updated = { ...current, ...newSettings };
    this.set(STORAGE_KEYS.SETTINGS, updated, "settings");
    return updated;
  }

  // Categories
  getCategories() {
    return this.get(STORAGE_KEYS.CATEGORIES, []).sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  }

  getCategoryById(id) {
    return this.getCategories().find(c => c.id === id);
  }

  getCategoryBySlug(slug) {
    return this.getCategories().find(c => c.slug === slug);
  }

  saveCategory(category) {
    const categories = this.getCategories();
    const now = new Date().toISOString();
    let updated;
    if (category.id) {
      updated = categories.map(c => c.id === category.id ? { ...c, ...category, updatedAt: now } : c);
    } else {
      const newCategory = {
        ...category,
        id: "cat-" + Date.now(),
        createdAt: now,
        updatedAt: now,
        sortOrder: category.sortOrder || (categories.length + 1)
      };
      updated = [...categories, newCategory];
    }
    this.set(STORAGE_KEYS.CATEGORIES, updated, "categories");
    return updated;
  }

  deleteCategory(id) {
    // Check if products are using this category
    const products = this.getProducts();
    const hasProducts = products.some(p => p.categoryId === id);
    if (hasProducts) {
      throw new Error("Không thể xóa danh mục này vì đang có sản phẩm liên kết! Vui lòng chuyển danh mục sản phẩm trước.");
    }
    const categories = this.getCategories().filter(c => c.id !== id);
    this.set(STORAGE_KEYS.CATEGORIES, categories, "categories");
    return true;
  }

  // Brands
  getBrands() {
    return this.get(STORAGE_KEYS.BRANDS, []);
  }

  getBrandById(id) {
    return this.getBrands().find(b => b.id === id);
  }

  saveBrand(brand) {
    const brands = this.getBrands();
    let updated;
    if (brand.id) {
      updated = brands.map(b => b.id === brand.id ? { ...b, ...brand } : b);
    } else {
      const newBrand = {
        ...brand,
        id: "brand-" + Date.now()
      };
      updated = [...brands, newBrand];
    }
    this.set(STORAGE_KEYS.BRANDS, updated, "brands");
    return updated;
  }

  deleteBrand(id) {
    const brands = this.getBrands().filter(b => b.id !== id);
    this.set(STORAGE_KEYS.BRANDS, brands, "brands");
    return true;
  }

  // Products
  getProducts() {
    return this.get(STORAGE_KEYS.PRODUCTS, []).sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  }

  getProductById(id) {
    return this.getProducts().find(p => p.id === id);
  }

  getProductBySlug(slug) {
    return this.getProducts().find(p => p.slug === slug);
  }

  saveProduct(product) {
    const products = this.getProducts();
    const now = new Date().toISOString();
    let updated;
    if (product.id) {
      updated = products.map(p => p.id === product.id ? { ...p, ...product, updatedAt: now } : p);
    } else {
      const newProduct = {
        ...product,
        id: "prod-" + Date.now(),
        createdAt: now,
        updatedAt: now,
        sortOrder: product.sortOrder || (products.length + 1)
      };
      updated = [newProduct, ...products];
    }
    this.set(STORAGE_KEYS.PRODUCTS, updated, "products");
    return updated;
  }

  duplicateProduct(id) {
    const product = this.getProductById(id);
    if (!product) return null;
    const duplicated = {
      ...product,
      id: "prod-" + Date.now(),
      name: `${product.name} (Bản sao)`,
      slug: `${product.slug}-copy-${Date.now().toString().slice(-4)}`,
      sku: `${product.sku}-CP`,
      isFeatured: false,
      isNew: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const products = [duplicated, ...this.getProducts()];
    this.set(STORAGE_KEYS.PRODUCTS, products, "products");
    return duplicated;
  }

  deleteProduct(id) {
    const products = this.getProducts().filter(p => p.id !== id);
    this.set(STORAGE_KEYS.PRODUCTS, products, "products");
    return true;
  }

  // Projects
  getProjects() {
    return this.get(STORAGE_KEYS.PROJECTS, []);
  }

  getProjectById(id) {
    return this.getProjects().find(p => p.id === id);
  }

  getProjectBySlug(slug) {
    return this.getProjects().find(p => p.slug === slug);
  }

  saveProject(project) {
    const projects = this.getProjects();
    let updated;
    if (project.id) {
      updated = projects.map(p => p.id === project.id ? { ...p, ...project } : p);
    } else {
      const newProject = {
        ...project,
        id: "proj-" + Date.now(),
        createdAt: new Date().toISOString()
      };
      updated = [newProject, ...projects];
    }
    this.set(STORAGE_KEYS.PROJECTS, updated, "projects");
    return updated;
  }

  deleteProject(id) {
    const projects = this.getProjects().filter(p => p.id !== id);
    this.set(STORAGE_KEYS.PROJECTS, projects, "projects");
    return true;
  }

  // Policies
  getPolicies() {
    return this.get(STORAGE_KEYS.POLICIES, []).sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  }

  getPolicyById(id) {
    return this.getPolicies().find(p => p.id === id);
  }

  getPolicyBySlug(slug) {
    return this.getPolicies().find(p => p.slug === slug);
  }

  savePolicy(policy) {
    const policies = this.getPolicies();
    let updated;
    if (policy.id) {
      updated = policies.map(p => p.id === policy.id ? { ...p, ...policy } : p);
    } else {
      const newPolicy = {
        ...policy,
        id: "pol-" + Date.now(),
        sortOrder: policy.sortOrder || (policies.length + 1)
      };
      updated = [...policies, newPolicy];
    }
    this.set(STORAGE_KEYS.POLICIES, updated, "policies");
    return updated;
  }

  deletePolicy(id) {
    const policies = this.getPolicies().filter(p => p.id !== id);
    this.set(STORAGE_KEYS.POLICIES, policies, "policies");
    return true;
  }

  // Contacts / Leads
  getContacts() {
    return this.get(STORAGE_KEYS.CONTACTS, []).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  getContactById(id) {
    return this.getContacts().find(c => c.id === id);
  }

  saveContact(contactData) {
    const contacts = this.getContacts();
    const newContact = {
      ...contactData,
      id: "cont-" + Date.now(),
      status: "NEW",
      createdAt: new Date().toISOString()
    };
    const updated = [newContact, ...contacts];
    this.set(STORAGE_KEYS.CONTACTS, updated, "contacts");
    return newContact;
  }

  updateContactStatus(id, newStatus, notes = null) {
    const contacts = this.getContacts();
    const updated = contacts.map(c => {
      if (c.id === id) {
        return {
          ...c,
          status: newStatus,
          notes: notes !== null ? notes : c.notes,
          updatedAt: new Date().toISOString()
        };
      }
      return c;
    });
    this.set(STORAGE_KEYS.CONTACTS, updated, "contacts");
    return updated;
  }

  deleteContact(id) {
    const contacts = this.getContacts().filter(c => c.id !== id);
    this.set(STORAGE_KEYS.CONTACTS, contacts, "contacts");
    return true;
  }

  // Authentication
  login(email, password) {
    if (email === "admin@example.com" && password === "admin123") {
      const session = {
        email: "admin@example.com",
        name: "Quản Trị Viên Kỹ Thuật",
        role: "Administrator",
        loggedInAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(session));
      return { success: true, session };
    }
    return { success: false, message: "Email hoặc mật khẩu không chính xác! (Demo: admin@example.com / admin123)" };
  }

  logout() {
    localStorage.removeItem(STORAGE_KEYS.AUTH);
    this.dispatchChange("auth");
  }

  isAuthenticated() {
    return !!localStorage.getItem(STORAGE_KEYS.AUTH);
  }

  getCurrentUser() {
    return this.get(STORAGE_KEYS.AUTH, null);
  }

  // Reset all to demo initial
  resetAllData() {
    this.initDatabase(true);
    return true;
  }
}

export const storage = new StorageService();
