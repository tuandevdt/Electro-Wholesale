# Requirements --- Prototype Website Thiết Bị Điện B2B

## 1. Tổng quan dự án

Xây dựng prototype website giới thiệu và kinh doanh **thiết bị điện cho
công trình, nhà máy, doanh nghiệp và các đơn vị dịch vụ**, trong đó mô
hình kinh doanh chính là **bán sỉ / cung cấp số lượng lớn**.

Website tập trung vào thị trường **Quảng Nam -- Đà Nẵng**, nhấn mạnh các
giá trị:

-   Uy tín.
-   Sản phẩm rõ ràng, thông tin minh bạch.
-   Cung cấp thiết bị điện cho công trình, nhà máy, công ty và đơn vị
    dịch vụ.
-   Bán sỉ là trọng tâm.
-   Tư vấn trực tiếp.
-   Giao hàng và lắp đặt trực tiếp tại khu vực phục vụ.
-   Khách hàng xem sản phẩm trên website, sau đó liên hệ qua **Zalo** để
    được tư vấn, báo giá và chốt đơn trực tiếp.
-   Website hiện tại là **website giới thiệu + catalog sản phẩm + kênh
    tạo nhu cầu liên hệ**, không phải sàn thương mại điện tử.

Prototype phải có giao diện hoàn chỉnh, responsive và các chức năng
chính phải **thực sự hoạt động được**, đặc biệt là các thao tác quản trị
dữ liệu.

------------------------------------------------------------------------

# 2. Mục tiêu prototype

Prototype cần mô phỏng một website doanh nghiệp thật, có thể dùng để:

1.  Giới thiệu công ty.
2.  Giới thiệu năng lực cung cấp thiết bị điện.
3.  Giới thiệu khu vực phục vụ.
4.  Trưng bày danh mục sản phẩm.
5.  Cho khách hàng tìm kiếm và lọc sản phẩm.
6.  Xem chi tiết từng sản phẩm.
7.  Khuyến khích khách hàng liên hệ Zalo để hỏi giá / lấy sỉ.
8.  Giới thiệu dịch vụ giao hàng và lắp đặt.
9.  Quản lý sản phẩm, danh mục và nội dung website từ Admin.
10. Quản lý thông tin liên hệ Zalo từ Admin.
11. Quản lý thông tin công ty, chính sách và thông tin footer.
12. Có dashboard Admin để demo tổng quan hệ thống.

------------------------------------------------------------------------

# 3. Định hướng giao diện

## 3.1. Phong cách

Thiết kế theo phong cách:

-   Modern B2B.
-   Chuyên nghiệp.
-   Tin cậy.
-   Có cảm giác là doanh nghiệp cung cấp thiết bị điện lâu năm.
-   Không quá giống website thương mại điện tử bán lẻ.
-   Ưu tiên hình ảnh sản phẩm lớn, rõ ràng.
-   CTA liên hệ nổi bật nhưng không gây khó chịu.
-   Responsive tốt trên Desktop, Tablet và Mobile.

## 3.2. Màu sắc

Có thể sử dụng:

-   Màu chủ đạo: xanh dương đậm / navy.
-   Màu phụ: xanh điện hoặc vàng/cam làm điểm nhấn.
-   Nền: trắng và xám rất nhạt.
-   Text: xám đậm / gần đen.

Không bắt buộc phải giữ đúng các mã màu trên nếu AI thiết kế nhận thấy
một hệ màu thương hiệu phù hợp hơn.

## 3.3. Typography

Ưu tiên font hiện đại, dễ đọc.

Ví dụ:

-   Inter.
-   Be Vietnam Pro.
-   Roboto.

------------------------------------------------------------------------

# 4. Đối tượng người dùng

## 4.1. Khách hàng doanh nghiệp

Ví dụ:

-   Công ty xây dựng.
-   Nhà máy.
-   Xưởng sản xuất.
-   Đơn vị thi công M&E.
-   Đơn vị cơ điện.
-   Nhà thầu điện.
-   Công ty dịch vụ.
-   Đại lý / đơn vị mua số lượng lớn.

## 4.2. Khách hàng cá nhân / hộ kinh doanh

Có thể xem catalog và liên hệ mua hàng, nhưng website ưu tiên thông điệp
**B2B / bán sỉ / dự án**.

## 4.3. Admin

Nhân viên doanh nghiệp dùng Admin để:

-   Quản lý danh mục.
-   Quản lý sản phẩm.
-   Quản lý thông tin liên hệ.
-   Quản lý Zalo.
-   Quản lý nội dung giới thiệu.
-   Quản lý chính sách.
-   Quản lý thông tin công ty.
-   Quản lý hình ảnh/banner.

------------------------------------------------------------------------

# 5. Sitemap phía User

Website phải có tối thiểu các trang:

``` text
/
├── Trang chủ
├── Giới thiệu
├── Sản phẩm
│   ├── Danh sách sản phẩm
│   └── Chi tiết sản phẩm
├── Dịch vụ
├── Dự án / Năng lực cung cấp
├── Chính sách
│   ├── Chính sách bán hàng
│   ├── Chính sách giao hàng
│   ├── Chính sách lắp đặt
│   └── Chính sách bảo hành
├── Liên hệ
└── 404
```

Có thể bổ sung:

``` text
├── Tìm kiếm
└── FAQ
```

nếu phù hợp với prototype.

------------------------------------------------------------------------

# 6. Trang chủ

Trang chủ là trang quan trọng nhất.

## 6.1. Header

Header gồm:

-   Logo.
-   Tên doanh nghiệp.
-   Trang chủ.
-   Giới thiệu.
-   Sản phẩm.
-   Dịch vụ.
-   Dự án / Năng lực.
-   Chính sách.
-   Liên hệ.
-   CTA `Liên hệ Zalo`.

Header phải responsive.

Mobile sử dụng menu hamburger.

------------------------------------------------------------------------

## 6.2. Hero section

Hero phải truyền tải nhanh:

> Cung cấp thiết bị điện cho công trình, nhà máy và doanh nghiệp.

Nội dung gợi ý:

-   Thiết bị điện chính hãng.
-   Cung cấp số lượng lớn.
-   Tư vấn theo nhu cầu công trình.
-   Giao hàng và lắp đặt tại Quảng Nam -- Đà Nẵng.

CTA:

-   `Xem sản phẩm`
-   `Liên hệ Zalo`

Có thể sử dụng hình ảnh:

-   Tủ điện.
-   Thiết bị đóng cắt.
-   Cáp điện.
-   Thiết bị điện công nghiệp.
-   Công trình / nhà máy.

------------------------------------------------------------------------

# 7. USP / Điểm mạnh doanh nghiệp

Hiển thị 4--6 điểm nổi bật.

Ví dụ:

### Sản phẩm chất lượng

Nguồn hàng rõ ràng, thông tin sản phẩm minh bạch.

### Giá sỉ cạnh tranh

Phù hợp cho công trình, nhà máy và đơn hàng số lượng lớn.

### Tư vấn trực tiếp

Hỗ trợ lựa chọn thiết bị theo nhu cầu thực tế.

### Giao hàng tận nơi

Hỗ trợ giao hàng trong khu vực phục vụ.

### Lắp đặt trực tiếp

Có đội ngũ hỗ trợ lắp đặt theo nhu cầu.

### Đồng hành công trình

Hỗ trợ khách hàng từ khâu lựa chọn đến triển khai.

------------------------------------------------------------------------

# 8. Danh mục sản phẩm nổi bật

Trang chủ hiển thị các category.

Ví dụ:

-   Thiết bị đóng cắt.
-   Aptomat / MCB / MCCB.
-   Contactor / Relay.
-   Tủ điện.
-   Cáp điện.
-   Dây điện.
-   Thiết bị chiếu sáng.
-   Thiết bị điện công nghiệp.
-   Thiết bị điều khiển.
-   Phụ kiện điện.
-   Thiết bị bảo vệ.
-   Thiết bị khác.

Danh mục phải được lấy từ dữ liệu Admin, không hard-code hoàn toàn.

------------------------------------------------------------------------

# 9. Sản phẩm nổi bật

Hiển thị grid sản phẩm.

Mỗi card gồm:

-   Ảnh.
-   Tên sản phẩm.
-   Mã sản phẩm.
-   Danh mục.
-   Thương hiệu.
-   Mô tả ngắn.
-   Badge nếu có:
    -   Nổi bật.
    -   Mới.
    -   Bán chạy.
-   CTA:
    -   `Xem chi tiết`
    -   `Liên hệ lấy sỉ`

Không bắt buộc hiển thị giá công khai.

Thay vào đó có thể hiển thị:

> Liên hệ để nhận báo giá

hoặc:

> Giá sỉ theo số lượng

------------------------------------------------------------------------

# 10. Khu vực phục vụ

Hiển thị rõ:

## Quảng Nam -- Đà Nẵng

Nội dung nhấn mạnh:

-   Cung cấp thiết bị.
-   Giao hàng.
-   Hỗ trợ công trình.
-   Lắp đặt trực tiếp.

Có thể hiển thị bản đồ khu vực ở mức prototype.

Không cần tích hợp Google Maps API thật nếu không cần thiết.

------------------------------------------------------------------------

# 11. Dịch vụ

Trang `/dich-vu`.

Các dịch vụ:

### Cung cấp thiết bị điện

Cung cấp thiết bị theo nhu cầu công trình, nhà máy và doanh nghiệp.

### Tư vấn thiết bị

Hỗ trợ lựa chọn sản phẩm phù hợp.

### Báo giá số lượng lớn

Khách hàng gửi nhu cầu, doanh nghiệp tư vấn và báo giá trực tiếp.

### Giao hàng

Giao hàng đến công trình / nhà máy / doanh nghiệp.

### Lắp đặt

Hỗ trợ lắp đặt trực tiếp theo phạm vi dịch vụ.

------------------------------------------------------------------------

# 12. Giới thiệu

Trang `/gioi-thieu`.

Bao gồm:

-   Giới thiệu doanh nghiệp.
-   Lĩnh vực hoạt động.
-   Khu vực phục vụ.
-   Năng lực cung cấp.
-   Kinh nghiệm.
-   Cam kết.
-   Hình ảnh kho hàng / công trình / đội ngũ.
-   Thông tin liên hệ.

Có section:

> Vì sao khách hàng lựa chọn chúng tôi?

------------------------------------------------------------------------

# 13. Dự án / Năng lực cung cấp

Trang `/du-an`.

Hiển thị các dự án / công trình mẫu.

Mỗi project:

-   Hình ảnh.
-   Tên dự án.
-   Địa điểm.
-   Loại công trình.
-   Hạng mục cung cấp.
-   Mô tả.

Ví dụ dữ liệu demo:

-   Nhà máy sản xuất.
-   Công trình dân dụng.
-   Công trình thương mại.
-   Xưởng sản xuất.
-   Hệ thống điện doanh nghiệp.

Admin có thể quản lý các project này.

------------------------------------------------------------------------

# 14. Trang sản phẩm

URL:

``` text
/san-pham
```

Chức năng:

-   Tìm kiếm.
-   Lọc theo danh mục.
-   Lọc theo thương hiệu.
-   Lọc theo trạng thái.
-   Sắp xếp.
-   Pagination hoặc load more.

Search theo:

-   Tên sản phẩm.
-   Mã sản phẩm.
-   Thương hiệu.

------------------------------------------------------------------------

# 15. Product Detail

URL:

``` text
/san-pham/:slug
```

Thông tin:

-   Gallery hình ảnh.
-   Tên sản phẩm.
-   Mã sản phẩm.
-   Thương hiệu.
-   Danh mục.
-   Mô tả.
-   Thông số kỹ thuật.
-   Ứng dụng.
-   Tình trạng cung cấp.
-   Nội dung ghi chú.

CTA lớn:

``` text
Liên hệ Zalo để hỏi giá
```

Có thêm:

``` text
Gọi điện
```

và:

``` text
Gửi yêu cầu
```

Nếu sản phẩm phù hợp để bán sỉ:

> Hỗ trợ báo giá theo số lượng và nhu cầu công trình.

------------------------------------------------------------------------

# 16. Zalo CTA

Đây là chức năng quan trọng.

Website phải có CTA Zalo tại:

-   Header.
-   Hero.
-   Product card.
-   Product detail.
-   Contact.
-   Footer.
-   Floating button góc màn hình.

Admin có thể thay đổi:

-   Zalo URL.
-   Số điện thoại.
-   Tên người phụ trách.
-   Nội dung CTA.
-   Trạng thái bật/tắt nút Zalo.

Ví dụ:

``` text
https://zalo.me/XXXXXXXXXX
```

Không hard-code URL Zalo trong nhiều component.

Tất cả phải lấy từ một cấu hình website.

------------------------------------------------------------------------

# 17. Liên hệ

Trang `/lien-he`.

Thông tin:

-   Tên công ty.
-   Địa chỉ.
-   Hotline.
-   Zalo.
-   Email.
-   Giờ làm việc.
-   Khu vực phục vụ.
-   Bản đồ.
-   CTA liên hệ.

Form liên hệ:

``` text
Họ tên
Công ty
Số điện thoại
Email
Nhu cầu
Sản phẩm quan tâm
Số lượng dự kiến
Ghi chú
```

Submit form phải có feedback thành công.

Prototype có thể lưu dữ liệu contact vào localStorage hoặc mock
database.

------------------------------------------------------------------------

# 18. Chính sách

Trang `/chinh-sach`.

Có navigation các chính sách:

-   Chính sách bán hàng.
-   Chính sách giao hàng.
-   Chính sách lắp đặt.
-   Chính sách bảo hành.
-   Chính sách đổi trả.
-   Điều khoản sử dụng.

Nội dung phải là dữ liệu Admin có thể chỉnh sửa.

------------------------------------------------------------------------

# 19. Footer

Footer gồm:

-   Logo.
-   Tên công ty.
-   Mô tả ngắn.
-   Địa chỉ.
-   Hotline.
-   Zalo.
-   Email.
-   Link nhanh.
-   Danh mục sản phẩm.
-   Chính sách.
-   Khu vực phục vụ.
-   Copyright.

------------------------------------------------------------------------

# 20. Admin

Admin phải có route riêng:

``` text
/admin
```

Nếu prototype có authentication:

``` text
/admin/login
```

------------------------------------------------------------------------

# 21. Admin Dashboard

Dashboard hiển thị:

-   Tổng sản phẩm.
-   Tổng danh mục.
-   Tổng lượt liên hệ.
-   Tổng dự án.
-   Sản phẩm nổi bật.
-   Sản phẩm mới.
-   Contact gần đây.
-   Thống kê đơn giản.

Có thể dùng chart:

-   Số sản phẩm theo danh mục.
-   Lượt liên hệ theo thời gian.

Dữ liệu có thể là mock nhưng phải được render từ state/data thật.

------------------------------------------------------------------------

# 22. Admin --- Quản lý danh mục

Route:

``` text
/admin/categories
```

CRUD đầy đủ:

-   Danh sách.
-   Thêm.
-   Sửa.
-   Xóa.
-   Tìm kiếm.
-   Bật/tắt trạng thái.
-   Sắp xếp thứ tự.

Category fields:

``` text
id
name
slug
description
image
status
sortOrder
createdAt
updatedAt
```

Không cho xóa category nếu đang có sản phẩm thuộc category, hoặc phải có
confirm xử lý sản phẩm liên quan.

------------------------------------------------------------------------

# 23. Admin --- Quản lý sản phẩm

Route:

``` text
/admin/products
```

CRUD đầy đủ.

Fields:

``` text
id
name
slug
sku
categoryId
brand
shortDescription
description
technicalSpecifications
applications
images
isFeatured
isNew
status
sortOrder
createdAt
updatedAt
```

Chức năng:

-   Thêm sản phẩm.
-   Sửa.
-   Xóa.
-   Duplicate.
-   Tìm kiếm.
-   Lọc category.
-   Lọc brand.
-   Lọc status.
-   Đánh dấu nổi bật.
-   Đánh dấu sản phẩm mới.
-   Upload / chọn ảnh.
-   Preview product.
-   Quản lý thứ tự.

------------------------------------------------------------------------

# 24. Product Editor

Form sản phẩm phải có:

### Thông tin cơ bản

-   Tên sản phẩm.
-   SKU.
-   Slug.
-   Thương hiệu.
-   Danh mục.

### Nội dung

-   Mô tả ngắn.
-   Mô tả đầy đủ.
-   Ứng dụng.

### Thông số kỹ thuật

Cho phép nhập dạng key/value:

``` text
Điện áp: 220V
Dòng điện: 32A
Số cực: 2P
Tiêu chuẩn: IEC
```

### Hình ảnh

-   Ảnh chính.
-   Gallery.
-   Preview.
-   Xóa ảnh.

### Trạng thái

-   Active.
-   Draft.
-   Featured.
-   New.

------------------------------------------------------------------------

# 25. Admin --- Quản lý thương hiệu

Route:

``` text
/admin/brands
```

CRUD:

-   Tên thương hiệu.
-   Logo.
-   Mô tả.
-   Website.
-   Trạng thái.

Brand được dùng để filter sản phẩm.

------------------------------------------------------------------------

# 26. Admin --- Quản lý dự án

Route:

``` text
/admin/projects
```

CRUD:

-   Tên dự án.
-   Slug.
-   Địa điểm.
-   Loại công trình.
-   Mô tả.
-   Hình ảnh.
-   Hạng mục cung cấp.
-   Trạng thái.
-   Featured.

------------------------------------------------------------------------

# 27. Admin --- Quản lý liên hệ

Route:

``` text
/admin/contacts
```

Danh sách lead:

-   Họ tên.
-   Công ty.
-   SĐT.
-   Email.
-   Nhu cầu.
-   Sản phẩm.
-   Số lượng.
-   Ngày gửi.
-   Trạng thái.

Status:

``` text
NEW
CONTACTED
PROCESSING
COMPLETED
CANCELLED
```

Admin có thể:

-   Xem detail.
-   Đánh dấu đã liên hệ.
-   Cập nhật trạng thái.
-   Xóa.
-   Tìm kiếm.
-   Filter.

------------------------------------------------------------------------

# 28. Admin --- Cấu hình Zalo / Liên hệ

Route:

``` text
/admin/settings/contact
```

Fields:

``` text
companyName
phone
email
address
zaloUrl
zaloPhone
zaloDisplayName
workingHours
contactCTA
```

Cho phép:

-   Cập nhật Zalo.
-   Cập nhật hotline.
-   Cập nhật email.
-   Cập nhật địa chỉ.
-   Bật/tắt floating Zalo.
-   Thay đổi text CTA.

Sau khi lưu, toàn bộ website User phải sử dụng dữ liệu mới.

Đây là yêu cầu bắt buộc để chứng minh prototype có hệ thống quản trị
thật.

------------------------------------------------------------------------

# 29. Admin --- Cấu hình website

Route:

``` text
/admin/settings/general
```

Fields:

``` text
siteName
logo
favicon
siteDescription
metaTitle
metaDescription
keywords
```

------------------------------------------------------------------------

# 30. Admin --- Nội dung trang

Route:

``` text
/admin/content
```

Có thể quản lý:

-   Hero.
-   USP.
-   Giới thiệu.
-   Cam kết.
-   Khu vực phục vụ.
-   Dịch vụ.
-   Footer.
-   CTA.

Prototype không cần xây CMS quá phức tạp.

Có thể sử dụng các form textarea / rich text đơn giản.

------------------------------------------------------------------------

# 31. Admin --- Chính sách

Route:

``` text
/admin/policies
```

CRUD:

-   Tên policy.
-   Slug.
-   Nội dung.
-   Status.
-   Sort order.

User page tự động render policy từ dữ liệu Admin.

------------------------------------------------------------------------

# 32. Admin --- Media

Nếu prototype cần quản lý hình ảnh:

``` text
/admin/media
```

Có thể:

-   Upload image.
-   Preview.
-   Delete.
-   Copy image URL.
-   Chọn image khi tạo sản phẩm.

Nếu không triển khai backend upload thật, prototype có thể dùng:

-   Local mock data.
-   LocalStorage.
-   URL ảnh demo.

Nhưng UI phải mô phỏng đúng workflow.

------------------------------------------------------------------------

# 33. Authentication Admin

Prototype cần có login:

``` text
/admin/login
```

Demo account:

``` text
Email: admin@example.com
Password: admin123
```

Sau login:

``` text
/admin
```

Nếu logout:

``` text
/admin/login
```

Không cho truy cập trực tiếp các route Admin khi chưa đăng nhập.

Prototype có thể dùng localStorage để mô phỏng authentication.

------------------------------------------------------------------------

# 34. Data Architecture cho Prototype

Nếu chưa xây backend, sử dụng mock data + localStorage.

Không nên hard-code toàn bộ dữ liệu trực tiếp trong UI component.

Nên tách:

``` text
data/
├── categories
├── products
├── brands
├── projects
├── policies
├── contacts
└── settings
```

và tạo service:

``` text
services/
├── productService
├── categoryService
├── projectService
├── contactService
└── settingsService
```

Có thể dùng localStorage làm persistence.

Ví dụ:

``` text
localStorage:
app_products
app_categories
app_brands
app_projects
app_contacts
app_settings
app_policies
app_auth
```

Khi Admin thêm/sửa/xóa dữ liệu:

1.  Update state.
2.  Persist localStorage.
3.  User page đọc lại dữ liệu.
4.  Refresh trình duyệt vẫn giữ dữ liệu.

------------------------------------------------------------------------

# 35. Yêu cầu chức năng quan trọng

Prototype KHÔNG được chỉ là giao diện tĩnh.

Các chức năng sau phải hoạt động:

## User

-   Navigation.
-   Search sản phẩm.
-   Filter sản phẩm.
-   Sort sản phẩm.
-   Pagination/load more.
-   Category filtering.
-   Product detail.
-   Related products.
-   CTA Zalo.
-   Hotline.
-   Contact form.
-   Form validation.
-   Submit contact.
-   Policy navigation.
-   Responsive menu.

## Admin

-   Login.
-   Logout.
-   Dashboard.
-   CRUD category.
-   CRUD product.
-   CRUD brand.
-   CRUD project.
-   CRUD policy.
-   CRUD contact.
-   Update company settings.
-   Update Zalo settings.
-   Update website settings.
-   Search.
-   Filter.
-   Confirm delete.
-   Toast notification.
-   Persistence bằng localStorage.

------------------------------------------------------------------------

# 36. Form Validation

Tất cả form phải có validation.

Ví dụ:

Product:

-   Tên bắt buộc.
-   Category bắt buộc.
-   SKU hợp lệ.
-   Slug không trùng.
-   Ảnh hợp lệ.

Contact:

-   Họ tên bắt buộc.
-   Số điện thoại bắt buộc.
-   Số điện thoại đúng format.
-   Nội dung bắt buộc.

Settings:

-   Zalo URL hợp lệ.
-   Email hợp lệ.
-   Hotline hợp lệ.

------------------------------------------------------------------------

# 37. UX States

Các màn hình phải xử lý:

-   Loading.
-   Empty.
-   Error.
-   Success.
-   Confirm delete.
-   Form validation.
-   No search result.
-   Product not found.
-   404. 

Không để màn hình trống khi không có data.

------------------------------------------------------------------------

# 38. Responsive

Phải hỗ trợ:

### Desktop

``` text
>= 1200px
```

### Tablet

``` text
768px - 1199px
```

### Mobile

``` text
< 768px
```

Mobile phải đặc biệt chú ý:

-   Header.
-   Product grid.
-   Product detail.
-   Admin table.
-   Form.
-   Floating Zalo.
-   CTA.
-   Filter sản phẩm.

Admin table trên mobile có thể chuyển sang card/list.

------------------------------------------------------------------------

# 39. SEO cơ bản

Các trang public cần:

-   Title.
-   Meta description.
-   Semantic heading.
-   Slug đẹp.
-   Alt image.
-   Open Graph cơ bản.

Ví dụ:

``` text
/san-pham
/san-pham/aptomat-mccb-3p-250a
/danh-muc/thiet-bi-dong-cat
/gioi-thieu
/dich-vu
/lien-he
```

------------------------------------------------------------------------

# 40. Nội dung demo

Prototype phải có dữ liệu mẫu đủ để demo.

Tối thiểu:

``` text
10+ categories
20+ products
5+ brands
5+ projects
5+ policies
5+ contact records
1 company settings
1 Zalo configuration
```

Tên sản phẩm demo có thể là các nhóm thiết bị phổ biến:

-   MCB.
-   MCCB.
-   Contactor.
-   Relay.
-   Tủ điện.
-   Cáp điện.
-   Dây điện.
-   Đèn công nghiệp.
-   Thiết bị chống sét.
-   Thiết bị điều khiển.

Không cần cam kết thương hiệu hoặc thông số kỹ thuật ngoài đời thực nếu
chưa có dữ liệu chính thức.

------------------------------------------------------------------------

# 41. Luồng User chính

## Flow 1 --- Tìm sản phẩm

``` text
Trang chủ
    ↓
Danh mục
    ↓
Danh sách sản phẩm
    ↓
Filter / Search
    ↓
Product detail
    ↓
Liên hệ Zalo
```

## Flow 2 --- Khách hàng công trình

``` text
Trang chủ
    ↓
Giới thiệu năng lực
    ↓
Dịch vụ
    ↓
Dự án
    ↓
Liên hệ
    ↓
Gửi nhu cầu
```

## Flow 3 --- Khách lấy sỉ

``` text
Product detail
    ↓
Liên hệ lấy sỉ
    ↓
Mở Zalo
    ↓
Tư vấn trực tiếp
```

------------------------------------------------------------------------

# 42. Luồng Admin

## Thêm category

``` text
Admin login
    ↓
Categories
    ↓
Add category
    ↓
Save
    ↓
Category xuất hiện User
```

## Thêm product

``` text
Admin
    ↓
Products
    ↓
Add product
    ↓
Chọn category
    ↓
Nhập thông tin
    ↓
Save
    ↓
Product xuất hiện trên website
```

## Thay đổi Zalo

``` text
Admin
    ↓
Settings
    ↓
Contact
    ↓
Update Zalo URL
    ↓
Save
    ↓
Floating Zalo/User CTA thay đổi
```

## Quản lý contact

``` text
User
    ↓
Contact form
    ↓
Submit
    ↓
Contact lưu vào localStorage
    ↓
Admin Contacts
    ↓
Admin xem / cập nhật status
```

------------------------------------------------------------------------

# 43. Navigation Admin

Sidebar:

``` text
Dashboard

Catalog
├── Products
├── Categories
└── Brands

Business
├── Projects
└── Contacts

Content
├── Homepage
├── About
├── Services
└── Policies

Settings
├── General
└── Contact / Zalo

Logout
```

------------------------------------------------------------------------

# 44. Quy tắc UI Admin

Admin phải có:

-   Sidebar.
-   Topbar.
-   Breadcrumb.
-   Page title.
-   Search.
-   Filter.
-   Table.
-   Pagination.
-   Add button.
-   Edit action.
-   Delete action.
-   Confirmation modal.
-   Toast.
-   Empty state.

Dashboard có:

-   KPI cards.
-   Charts.
-   Recent contacts.
-   Featured products.

------------------------------------------------------------------------

# 45. Prototype Technology

Nếu AI được yêu cầu trực tiếp tạo prototype HTML, ưu tiên:

``` text
HTML5
CSS3
JavaScript
```

Có thể dùng CDN:

-   Tailwind CSS hoặc CSS thuần.
-   Font Awesome / Lucide.
-   Chart.js nếu cần dashboard chart.

Nếu cần nhiều trang:

``` text
index.html
about.html
products.html
product-detail.html
services.html
projects.html
policies.html
contact.html

admin/
├── login.html
├── index.html
├── products.html
├── categories.html
├── brands.html
├── projects.html
├── contacts.html
├── policies.html
└── settings.html
```

Nếu AI chọn React/Vue/Next/Nuxt thay vì HTML thuần thì vẫn phải đảm bảo
prototype có thể chạy được và dễ demo.

------------------------------------------------------------------------

# 46. Yêu cầu prototype hoạt động

Đây là yêu cầu bắt buộc.

Không tạo prototype chỉ gồm mockup hoặc HTML tĩnh.

Phải có:

-   Navigation hoạt động.
-   Link giữa các page hoạt động.
-   Search hoạt động.
-   Filter hoạt động.
-   Product detail hoạt động.
-   Admin login hoạt động.
-   CRUD hoạt động.
-   Data persistence hoạt động.
-   Contact form hoạt động.
-   Zalo button sử dụng URL cấu hình.
-   Settings thay đổi được.
-   Refresh không làm mất dữ liệu demo.
-   Delete có confirmation.
-   Form có validation.
-   Toast/feedback sau action.
-   Responsive.

------------------------------------------------------------------------

# 47. Không cần trong phiên bản Prototype

Không cần triển khai:

-   Thanh toán online.
-   Giỏ hàng.
-   Checkout.
-   Đăng ký khách hàng.
-   ERP.
-   CRM hoàn chỉnh.
-   Quản lý tồn kho thật.
-   Quản lý nhập hàng.
-   Quản lý công nợ.
-   Đơn hàng online hoàn chỉnh.
-   API backend thật.
-   Database server thật.
-   Google Maps API bắt buộc.
-   Zalo API integration thật.

Zalo trong prototype chỉ cần mở đúng URL Zalo đã cấu hình.

------------------------------------------------------------------------

# 48. Acceptance Criteria

Prototype được xem là đạt khi:

### Public Website

-   [ ] Có đầy đủ trang chủ.
-   [ ] Có trang giới thiệu.
-   [ ] Có trang sản phẩm.
-   [ ] Có product detail.
-   [ ] Có dịch vụ.
-   [ ] Có dự án / năng lực.
-   [ ] Có chính sách.
-   [ ] Có liên hệ.
-   [ ] Có responsive.
-   [ ] Có floating Zalo.
-   [ ] Có search.
-   [ ] Có filter.
-   [ ] Có CTA lấy sỉ.

### Admin

-   [ ] Admin login.
-   [ ] Dashboard.
-   [ ] CRUD category.
-   [ ] CRUD product.
-   [ ] CRUD brand.
-   [ ] CRUD project.
-   [ ] CRUD policy.
-   [ ] Quản lý contact.
-   [ ] Quản lý company information.
-   [ ] Quản lý Zalo.
-   [ ] Quản lý CTA.
-   [ ] Persistence localStorage.
-   [ ] Validation.
-   [ ] Confirmation.
-   [ ] Toast notification.

### Business flow

-   [ ] User xem sản phẩm.
-   [ ] User tìm sản phẩm.
-   [ ] User xem chi tiết.
-   [ ] User bấm Zalo.
-   [ ] User gửi contact.
-   [ ] Admin nhận contact.
-   [ ] Admin cập nhật trạng thái contact.
-   [ ] Admin thêm sản phẩm.
-   [ ] Sản phẩm mới xuất hiện ở User.
-   [ ] Admin sửa Zalo.
-   [ ] CTA User sử dụng Zalo mới.
-   [ ] Admin sửa nội dung chính sách.
-   [ ] User thấy policy mới.

------------------------------------------------------------------------

# 49. Nguyên tắc quan trọng cho AI triển khai

1.  Không hard-code dữ liệu sản phẩm vào từng HTML component.
2.  Tách data và UI.
3.  Dùng một source of truth cho settings.
4.  Zalo URL phải lấy từ settings.
5.  Product phải liên kết với category bằng ID.
6.  Slug phải unique.
7.  CRUD phải update UI ngay sau khi thao tác.
8.  Dữ liệu phải persist sau refresh.
9.  Không để button giả không có action.
10. Không tạo link chết.
11. Mọi modal phải có close/cancel.
12. Mọi delete phải có confirm.
13. Mọi form phải có validation.
14. Hiển thị loading/empty/error state khi phù hợp.
15. Ưu tiên UX giống sản phẩm thật thay vì chỉ tạo giao diện đẹp.
16. Dữ liệu demo phải đủ phong phú để toàn bộ màn hình có nội dung.
17. Không hiển thị giá giả nếu doanh nghiệp chưa cung cấp bảng giá; sử
    dụng CTA `Liên hệ lấy sỉ`.
18. Thông điệp website phải tập trung vào **thiết bị điện + công trình +
    doanh nghiệp + bán sỉ + Quảng Nam -- Đà Nẵng + giao hàng/lắp đặt +
    uy tín**.
19. Không biến website thành marketplace hoặc ecommerce B2C.
20. Prototype phải chạy được ngay sau khi mở/chạy project theo hướng
    dẫn.

------------------------------------------------------------------------

# 50. Deliverable AI cần tạo

AI triển khai prototype phải cung cấp:

``` text
1. Source code prototype
2. Public website
3. Admin dashboard
4. Mock data
5. LocalStorage persistence
6. Responsive UI
7. README hướng dẫn chạy
8. Demo account Admin
```

README phải có:

``` text
- Cách chạy prototype
- Demo Admin account
- Cấu trúc project
- Cách reset dữ liệu demo
- Cách thay đổi thông tin Zalo
- Cách thêm sản phẩm
```

------------------------------------------------------------------------

# 51. Mục tiêu cuối cùng

Prototype phải tạo cảm giác đây là một **website doanh nghiệp cung cấp
thiết bị điện B2B thực tế**, chứ không phải một template ecommerce.

Khách hàng truy cập phải nhanh chóng hiểu:

> Doanh nghiệp này cung cấp thiết bị điện cho công trình, nhà máy và
> doanh nghiệp tại Quảng Nam -- Đà Nẵng.

Khách hàng có thể:

``` text
Xem sản phẩm
    ↓
Xem thông số
    ↓
Xác định nhu cầu
    ↓
Liên hệ Zalo
    ↓
Tư vấn
    ↓
Báo giá
    ↓
Giao hàng / lắp đặt
```

Admin có thể:

``` text
Đăng nhập
    ↓
Quản lý sản phẩm
    ↓
Quản lý danh mục
    ↓
Quản lý thương hiệu
    ↓
Quản lý dự án
    ↓
Quản lý nội dung
    ↓
Quản lý Zalo / Contact
    ↓
Theo dõi khách hàng quan tâm
```

Đây là **prototype phase 1**, tập trung vào việc chứng minh mô hình
website, UX và luồng quản trị. Không cần triển khai ecommerce/đặt
hàng/thanh toán trong giai đoạn này.
