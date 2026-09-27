# Prototype Website Doanh Nghiệp B2B Thiết Bị Điện (Quảng Nam - Đà Nẵng)

Hệ thống prototype hoàn chỉnh cho doanh nghiệp phân phối sỉ thiết bị điện công trình & công nghiệp tại địa bàn **Quảng Nam – Đà Nẵng**. 

Được xây dựng thuần túy bằng **HTML5 + Modern CSS + Vanilla JavaScript (ES Modules)**, không cần cài đặt build tool phức tạp, hỗ trợ xem trực tiếp hoặc deploy tức thì lên **Vercel, GitHub Pages, Netlify**.

---

## 1. Thông Tin Tài Khoản Quản Trị (Admin Demo)

* **URL Trang Đăng Nhập:** [#/admin/login](#/admin/login)
* **Email:** `admin@example.com`
* **Mật khẩu:** `admin123`

---

## 2. Hướng Dẫn Chạy & Deploy

### A. Chạy cục bộ (Local Server)
Do dự án sử dụng chuẩn ES Modules (`import`/`export`), nên cần một web server tĩnh đơn giản để phục vụ:

```bash
# Cách 1: Sử dụng npx serve (Nhanh nhất nếu có Node.js)
npx serve .

# Cách 2: Sử dụng Python
python -m http.server 3000

# Cách 3: Sử dụng extension "Live Server" trên VS Code / Antigravity IDE
# Chuột phải vào file index.html -> Chọn "Open with Live Server"
```

Sau đó truy cập: `http://localhost:3000` (hoặc cổng tương ứng).

### B. Deploy lên Vercel
Dự án đã có sẵn file `index.html` và `vercel.json` ở thư mục gốc:
1. Đẩy code lên GitHub repository của bạn.
2. Đăng nhập [vercel.com](https://vercel.com) -> Chọn **Add New Project** -> Chọn repo vừa đẩy.
3. Bấm **Deploy** mà không cần cấu hình thêm bất kỳ Build Command hay Framework nào.

---

## 3. Cấu Trúc Thư Mục Dự Án

```text
electro-wholesale/
├── index.html                           # Entrypoint chính (SPA Hash Router)
├── vercel.json                          # Cấu hình deploy tĩnh cho Vercel
├── README.md                            # Tài liệu hướng dẫn sử dụng và kiểm thử
├── electro-b2b-prototype-requirements.md# Đặc tả yêu cầu gốc của dự án
├── css/
│   └── styles.css                       # Design System B2B, layout, responsive
└── js/
    ├── app.js                           # Router điều hướng, controller chính
    ├── data/
    │   └── initialData.js               # Mock data phong phú (20+ SP, 10 Danh mục, 6 Hãng, 5 Dự án, 5 Leads...)
    ├── services/
    │   └── storage.js                   # Quản lý LocalStorage, CRUD helpers, auth session
    ├── components/
    │   ├── toast.js                     # Thông báo Toast tự động tắt (Success, Error, Info)
    │   └── modal.js                     # Modal xác nhận xóa, form báo giá nhanh, dialog
    └── views/
        ├── publicViews.js               # Giao diện phía Khách hàng (Trang chủ, SP, Chi tiết, Dịch vụ, Dự án...)
        └── adminViews.js                # Toàn bộ phân hệ Quản trị Admin (Dashboard, CRUD Kho & Lead, Cấu hình Zalo)
```

---

## 4. Các Tính Năng Đã Hoàn Thiện Đầy Đủ Theo Requirements

### Phân Hệ Khách Hàng (Public Website):
- [x] **Trang chủ (`#/`)**: Hero banner mạnh mẽ B2B, 6 điểm mạnh USP doanh nghiệp, nhóm danh mục chủ lực, sản phẩm nổi bật, section bản đồ & năng lực giao hàng 2-4h tại **Quảng Nam - Đà Nẵng**, hồ sơ dự án tiêu biểu, đối tác thương hiệu (Schneider, LS, Cadivi, ABB, Panasonic, Mitsubishi).
- [x] **Trang Giới Thiệu (`#/gioi-thieu`)**: Năng lực cung ứng M&E, cơ sở vật chất kho bãi, cam kết chất lượng 100% CO/CQ, hỗ trợ đổi trả vật tư thừa sau hoàn công.
- [x] **Trang Danh Mục Sản Phẩm (`#/san-pham`)**: Bộ lọc đa chiều (theo danh mục, theo hãng, theo trạng thái Mới/Nổi bật), tìm kiếm thời gian thực (tên, mã SKU, hãng), sắp xếp theo tên hoặc thứ tự.
- [x] **Trang Chi Tiết Sản Phẩm (`#/san-pham/:slug`)**: Thư viện ảnh thumbnail, bảng thông số kỹ thuật (Specs) dạng Key-Value chi tiết, phạm vi ứng dụng, cam kết cung ứng dự án, nút **"Nhận Báo Giá Sỉ Qua Zalo"** mở kèm tin nhắn định dạng sẵn, nút Gọi Hotline, modal gửi form báo giá nhanh, sản phẩm liên quan.
- [x] **Trang Dịch Vụ (`#/dich-vu`)**: 4 dịch vụ cốt lõi (Cung cấp gói thầu, tư vấn giải pháp tương đương, giao hàng xe cẩu, lắp ráp tủ điện theo yêu cầu).
- [x] **Trang Dự Án (`#/du-an`)**: 5 dự án thực tế tại KCN Hòa Khánh, KCN Điện Nam - Điện Ngọc, Resort Sơn Trà, Bệnh viện Bắc Quảng Nam...
- [x] **Trang Chính Sách (`#/chinh-sach`)**: Bán sỉ & báo giá, giao hàng tận chân công trình, hỗ trợ kỹ thuật, bảo hành CO/CQ, đổi trả tồn đọng dự án.
- [x] **Trang Liên Hệ (`#/lien-he`)**: Thông tin trụ sở Đà Nẵng & kho Quảng Nam, form gửi yêu cầu báo giá B2B có validation số điện thoại, tự động lưu vào hệ thống Lead của Admin.
- [x] **Nút Zalo & Hotline Nổi (Floating Widget)**: Luôn hiển thị ở góc màn hình, có thể bật/tắt hoặc đổi thông tin tức thời từ Admin.

### Phân Hệ Quản Trị (Admin Portal):
- [x] **Xác thực bảo vệ (`#/admin/login`)**: Yêu cầu đăng nhập mới được truy cập các trang quản trị, tự động bảo vệ route (Route Guard).
- [x] **Dashboard Tổng Quan (`#/admin/dashboard`)**: KPI cards (Tổng sản phẩm, danh mục, dự án, số lead mới cần phản hồi), bảng yêu cầu báo giá gần đây, thanh trạng thái Zalo hiện hành.
- [x] **Quản lý Sản phẩm (`#/admin/products`)**: Thêm mới, chỉnh sửa, xóa có modal xác nhận, **nhân bản sản phẩm (Duplicate)** chỉ với 1 click, bộ công cụ nhập thông số kỹ thuật (Key/Value) linh hoạt.
- [x] **Quản lý Danh mục (`#/admin/categories`)**: CRUD đầy đủ, có cơ chế an toàn ngăn chặn xóa danh mục khi đang có sản phẩm liên kết.
- [x] **Quản lý Thương hiệu (`#/admin/brands`)**: CRUD danh sách hãng sản xuất và quốc gia xuất xứ.
- [x] **Quản lý Yêu Cầu Báo Giá & Lead (`#/admin/contacts`)**: Pipeline lọc theo trạng thái (`NEW` -> `CONTACTED` -> `PROCESSING` -> `COMPLETED` -> `CANCELLED`), modal xem chi tiết và cập nhật ghi chú nội bộ.
- [x] **Quản lý Hồ sơ Dự án (`#/admin/projects`)**: CRUD danh sách công trình mẫu.
- [x] **Quản lý Chính sách (`#/admin/policies`)**: Soạn thảo nội dung chính sách định dạng Markdown.
- [x] **Cấu hình Zalo & Công ty (`#/admin/settings`)**: Đổi link Zalo, SĐT Zalo, tên người phụ trách, bật/tắt Floating widget, đổi hotline và địa chỉ công ty. **Mọi thay đổi cập nhật tức thì 100% lên giao diện khách hàng**.
- [x] **Nút Khôi Phục Dữ Liệu Gốc (Reset Demo Data)**: Tiện ích ở sidebar giúp nạp lại toàn bộ dữ liệu mẫu ban đầu bất kỳ lúc nào để demo lại từ đầu.

---

## 5. Quy Trình Kiểm Thử Nhanh (Demo Flow)

1. **Thử nghiệm đồng bộ Zalo từ Admin ra ngoài Website:**
   * Vào `#/admin/settings` -> Đổi "Số điện thoại Zalo" thành số của bạn và đổi link Zalo.
   * Bấm **Lưu & Áp Dụng**.
   * Bấm "Xem Website Phía Khách ↗" -> Kiểm tra nút Zalo ở Header, Footer, Nút nổi và trong trang chi tiết sản phẩm: tất cả đều đã trỏ sang link Zalo mới vừa cấu hình!

2. **Thử nghiệm gửi Form Báo Giá & Quản lý Lead:**
   * Vào `#/lien-he` -> Điền thông tin vào form yêu cầu báo giá -> Bấm Gửi.
   * Quay lại `#/admin/contacts` -> Lead mới vừa gửi sẽ xuất hiện ngay ở tab "Mới Nhận".
   * Bấm "Xem & Cập nhật" -> Chuyển trạng thái sang "Đang xử lý / Báo giá", nhập ghi chú -> Bấm Lưu.

3. **Thử nghiệm thêm sản phẩm mới:**
   * Vào `#/admin/products` -> Bấm "+ Thêm Sản Phẩm Mới".
   * Nhập tên, mã SKU, chọn danh mục, thêm vài dòng thông số kỹ thuật (vd: *Điện áp: 380V*, *Dòng tải: 100A*).
   * Bấm Lưu -> Ra trang `#/san-pham` tìm kiếm sản phẩm vừa tạo để xem chi tiết.
