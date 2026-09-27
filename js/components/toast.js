// Modern toast notification system

class ToastService {
  constructor() {
    this.container = null;
    this.ensureContainer();
  }

  ensureContainer() {
    this.container = document.getElementById("toast-container");
    if (!this.container) {
      this.container = document.createElement("div");
      this.container.id = "toast-container";
      this.container.className = "toast-container";
      document.body.appendChild(this.container);
    }
  }

  show(message, type = "info", duration = 3500) {
    this.ensureContainer();
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let icon = "✓";
    if (type === "error") icon = "✕";
    if (type === "warning") icon = "⚠";
    if (type === "info") icon = "ℹ";

    toast.innerHTML = `
      <div class="toast-icon">${icon}</div>
      <div class="toast-message">${message}</div>
      <button class="toast-close" aria-label="Đóng">&times;</button>
    `;

    const closeBtn = toast.querySelector(".toast-close");
    const removeToast = () => {
      toast.classList.add("toast-leaving");
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 300);
    };

    closeBtn.addEventListener("click", removeToast);
    this.container.appendChild(toast);

    setTimeout(removeToast, duration);
  }

  success(msg) {
    this.show(msg, "success");
  }

  error(msg) {
    this.show(msg, "error", 4500);
  }

  warning(msg) {
    this.show(msg, "warning");
  }

  info(msg) {
    this.show(msg, "info");
  }
}

export const toast = new ToastService();
