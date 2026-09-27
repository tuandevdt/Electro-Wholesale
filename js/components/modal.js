// Modal service for confirmations and dialogs

class ModalService {
  constructor() {
    this.overlay = null;
    this.ensureOverlay();
  }

  ensureOverlay() {
    this.overlay = document.getElementById("modal-overlay");
    if (!this.overlay) {
      this.overlay = document.createElement("div");
      this.overlay.id = "modal-overlay";
      this.overlay.className = "modal-overlay hidden";
      this.overlay.innerHTML = `
        <div class="modal-card">
          <div class="modal-header">
            <h3 class="modal-title" id="modal-title">Thông báo</h3>
            <button class="modal-close-btn" id="modal-close-btn">&times;</button>
          </div>
          <div class="modal-body" id="modal-body"></div>
          <div class="modal-footer" id="modal-footer"></div>
        </div>
      `;
      document.body.appendChild(this.overlay);

      // Close on background click or ESC key
      this.overlay.addEventListener("click", (e) => {
        if (e.target === this.overlay) this.close();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !this.overlay.classList.contains("hidden")) {
          this.close();
        }
      });
      this.overlay.querySelector("#modal-close-btn").addEventListener("click", () => this.close());
    }
  }

  open({ title, content, footerHtml = "", onRender = null }) {
    this.ensureOverlay();
    document.getElementById("modal-title").innerText = title;
    const bodyEl = document.getElementById("modal-body");
    const footerEl = document.getElementById("modal-footer");

    if (typeof content === "string") {
      bodyEl.innerHTML = content;
    } else if (content instanceof HTMLElement) {
      bodyEl.innerHTML = "";
      bodyEl.appendChild(content);
    }

    footerEl.innerHTML = footerHtml;
    this.overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    if (onRender) onRender(this.overlay);
  }

  close() {
    if (this.overlay) {
      this.overlay.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  confirm({ title = "Xác nhận hành động", message, confirmText = "Xác nhận", cancelText = "Hủy", isDanger = false }) {
    return new Promise((resolve) => {
      this.open({
        title,
        content: `<p class="modal-confirm-msg">${message}</p>`,
        footerHtml: `
          <button class="btn btn-outline" id="modal-cancel-btn">${cancelText}</button>
          <button class="btn ${isDanger ? 'btn-danger' : 'btn-primary'}" id="modal-ok-btn">${confirmText}</button>
        `,
        onRender: (overlay) => {
          overlay.querySelector("#modal-cancel-btn").addEventListener("click", () => {
            this.close();
            resolve(false);
          });
          overlay.querySelector("#modal-ok-btn").addEventListener("click", () => {
            this.close();
            resolve(true);
          });
        }
      });
    });
  }
}

export const modal = new ModalService();
