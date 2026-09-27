// Initial rich data for Electro B2B Prototype
export const DEFAULT_SETTINGS = {
  companyName: "Đà Quang Electric",
  tradeName: "Công Ty Cổ Phần Thiết Bị Điện & Cơ Điện Miền Trung",
  slogan: "Nhà phân phối sỉ thiết bị điện công trình & công nghiệp hàng đầu Quảng Nam - Đà Nẵng",
  phone: "0905 888 999",
  hotline: "0236 3888 999",
  email: "kinhdoanh@daquangelectric.vn",
  address: "185 Nguyễn Hữu Thọ, Phường Hòa Thuận Tây, Quận Hải Châu, TP. Đà Nẵng",
  branchAddress: "Đường số 3, KCN Điện Nam - Điện Ngọc, Thị xã Điện Bàn, Tỉnh Quảng Nam",
  workingHours: "Thứ 2 - Thứ 7: 07:30 - 17:30 (Hỗ trợ kỹ thuật khẩn cấp 24/7)",
  zaloUrl: "https://zalo.me/0905888999",
  zaloPhone: "0905 888 999",
  zaloDisplayName: "Mr. Tuấn - Trưởng Phòng Dự Án & Bán Sỉ",
  zaloCtaText: "Tư vấn & Báo giá sỉ qua Zalo",
  enableFloatingZalo: true,
  siteDescription: "Chuyên cung cấp sỉ thiết bị đóng cắt, tủ điện, dây cáp điện, thiết bị tự động hóa cho công trình, nhà máy, nhà thầu M&E tại Đà Nẵng và Quảng Nam. Giao hàng tận công trình, hỗ trợ kỹ thuật và lắp đặt trực tiếp.",
  metaTitle: "Đà Quang Electric | Phân Phối Thiết Bị Điện Công Trình Đà Nẵng - Quảng Nam",
  metaKeywords: "thiết bị điện đà nẵng, thiết bị điện quảng nam, bán sỉ thiết bị điện, mcb mccb schneider ls cadivi, tủ điện công nghiệp, cáp điện công trình"
};

export const DEFAULT_CATEGORIES = [
  {
    id: "cat-1",
    name: "Thiết bị đóng cắt (MCB / MCCB / ACB)",
    slug: "thiet-bi-dong-cat",
    description: "Aptomat tép, aptomat khối, máy cắt không khí, chống giật RCBO/ELCB chính hãng Schneider, LS, ABB, Mitsubishi.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    status: "active",
    sortOrder: 1
  },
  {
    id: "cat-2",
    name: "Khởi động từ & Rơ le (Contactor & Relay)",
    slug: "contactor-relay",
    description: "Contactor điều khiển động cơ 3 pha, rơ le nhiệt, rơ le trung gian, rơ le bảo vệ quá dòng, chạm đất.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    status: "active",
    sortOrder: 2
  },
  {
    id: "cat-3",
    name: "Tủ điện công nghiệp & Vỏ tủ",
    slug: "tu-dien-cong-nghiep",
    description: "Gia công và phân phối tủ MSB, DB, ATS, tủ bù công suất, vỏ tủ sơn tĩnh điện và inox 304 ngoài trời.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    status: "active",
    sortOrder: 3
  },
  {
    id: "cat-4",
    name: "Dây & Cáp điện hạ thế, trung thế",
    slug: "day-cap-dien",
    description: "Cáp đồng trần, cáp treo, cáp ngầm chống cháy, dây dân dụng Cadivi, LS VINA, Taya phân phối số lượng lớn.",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=600&q=80",
    status: "active",
    sortOrder: 4
  },
  {
    id: "cat-5",
    name: "Thiết bị chiếu sáng công nghiệp",
    slug: "thiet-bi-chieu-sang",
    description: "Đèn Highbay LED nhà xưởng, đèn pha LED công trường, đèn chống nổ, đèn exit sự cố chuyên dụng dự án.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80",
    status: "active",
    sortOrder: 5
  },
  {
    id: "cat-6",
    name: "Biến tần & Tự động hóa",
    slug: "bien-tan-tu-dong-hoa",
    description: "Biến tần hạ thế tải nặng và tải bơm quạt, khởi động mềm (Soft Starter), PLC và màn hình HMI công nghiệp.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    status: "active",
    sortOrder: 6
  },
  {
    id: "cat-7",
    name: "Thiết bị đo lường & Đồng hồ giám sát",
    slug: "thiet-bi-do-luong",
    description: "Đồng hồ đa năng đo thông số điện tủ phân phối, biến dòng hạ thế CT, đồng hồ KWh điện tử công nghiệp.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80",
    status: "active",
    sortOrder: 7
  },
  {
    id: "cat-8",
    name: "Thiết bị chống sét & Tiếp địa",
    slug: "chong-set-tiep-dia",
    description: "Kim thu sét phát xạ sớm, van chống sét lan truyền SPD, cọc tiếp địa đồng đỏ, thuốc hàn hóa nhiệt mác ngoại.",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=600&q=80",
    status: "active",
    sortOrder: 8
  },
  {
    id: "cat-9",
    name: "Ổ cắm & Phích cắm công nghiệp",
    slug: "o-cam-phich-cam-cong-nghiep",
    description: "Ổ phích công nghiệp IP44, IP67 16A/32A/63A chống nước, chống bụi tiêu chuẩn IEC dùng nhà máy, công trường.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80",
    status: "active",
    sortOrder: 9
  },
  {
    id: "cat-10",
    name: "Vật tư phụ & Phụ kiện tủ bảng điện",
    slug: "phu-kien-tu-dien",
    description: "Thanh đồng cái Busbar, máng cáp nhựa, đầu cos đồng, domino đấu dây kẹp ray DIN, nút nhấn đèn báo 22mm.",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=600&q=80",
    status: "active",
    sortOrder: 10
  }
];

export const DEFAULT_BRANDS = [
  {
    id: "brand-1",
    name: "Schneider Electric",
    slug: "schneider-electric",
    origin: "Pháp / Toàn cầu",
    description: "Thương hiệu số 1 thế giới về thiết bị đóng cắt, quản lý năng lượng và tự động hóa.",
    status: "active"
  },
  {
    id: "brand-2",
    name: "LS Electric",
    slug: "ls-electric",
    origin: "Hàn Quốc",
    description: "Dòng thiết bị đóng cắt và biến tần phổ biến nhất tại các công trình và nhà máy Việt Nam.",
    status: "active"
  },
  {
    id: "brand-3",
    name: "Cadivi",
    slug: "cadivi",
    origin: "Việt Nam",
    description: "Nhà sản xuất dây và cáp điện hàng đầu Việt Nam, chất lượng đồng 99.99% đạt chuẩn quốc tế.",
    status: "active"
  },
  {
    id: "brand-4",
    name: "ABB",
    slug: "abb",
    origin: "Thụy Sĩ / Thụy Điển",
    description: "Giải pháp công nghệ điện cao cấp, thiết bị đóng cắt công suất lớn và độ tin cậy tuyệt đối.",
    status: "active"
  },
  {
    id: "brand-5",
    name: "Panasonic",
    slug: "panasonic",
    origin: "Nhật Bản",
    description: "Thiết bị điện dân dụng, công tắc ổ cắm, quạt hút công nghiệp chất lượng và thẩm mỹ hàng đầu.",
    status: "active"
  },
  {
    id: "brand-6",
    name: "Mitsubishi Electric",
    slug: "mitsubishi-electric",
    origin: "Nhật Bản",
    description: "Aptomat, contactor và thiết bị tự động hóa với độ bền siêu việt theo tiêu chuẩn công nghiệp Nhật Bản.",
    status: "active"
  }
];

export const DEFAULT_PRODUCTS = [
  {
    id: "prod-1",
    name: "Aptomat khối MCCB 3P 250A 36kA Schneider Easypact CVS",
    slug: "aptomat-mccb-3p-250a-schneider-cvs",
    sku: "LV525303",
    categoryId: "cat-1",
    brand: "Schneider Electric",
    shortDescription: "MCCB 3 cực dòng định mức 250A, dòng cắt ngắn mạch 36kA 415V, chuyên dụng cho tủ tổng phân phối MSB/DB.",
    description: "Dòng aptomat khối EasyPact CVS của Schneider Electric được thiết kế tối ưu cho các công trình công nghiệp và thương mại vừa và lớn. Đạt tiêu chuẩn IEC 60947-2, khả năng chịu tải liên tục bền bỉ, tích hợp bộ bảo vệ TMD quá tải và ngắn mạch.",
    technicalSpecifications: {
      "Số cực": "3 Pha (3P)",
      "Dòng định mức (In)": "250A",
      "Dòng cắt ngắn mạch (Icu)": "36 kA tại 415V AC",
      "Điện áp định mức (Ue)": "440V AC 50/60Hz",
      "Bộ bảo vệ trip": "TMD (Nhiệt - Từ)",
      "Tiêu chuẩn": "IEC 60947-2",
      "Bảo hành": "18 tháng chính hãng"
    },
    applications: "Lắp đặt tại tủ phân phối chính MSB của nhà xưởng, tòa nhà cao tầng, hệ thống cấp nguồn máy sản xuất công nghiệp.",
    images: [
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isNew: false,
    status: "active",
    sortOrder: 1
  },
  {
    id: "prod-2",
    name: "Aptomat tép MCB 2P 32A 6kA Acti9 iK60N Schneider",
    slug: "aptomat-mcb-2p-32a-schneider-acti9",
    sku: "A9K24232",
    categoryId: "cat-1",
    brand: "Schneider Electric",
    shortDescription: "Aptomat tép 2 cực bảo vệ quá tải và ngắn mạch mạch điện 1 pha 220V, dòng cắt 6kA tiêu chuẩn cao cấp.",
    description: "Aptomat tép MCB Acti9 iK60N của Schneider là sự lựa chọn hàng đầu cho các dự án khách sạn, căn hộ cao cấp và văn phòng tại Đà Nẵng. Cửa đóng tiếp điểm nhanh giúp dập hồ quang tức thì, tăng tuổi thọ thiết bị.",
    technicalSpecifications: {
      "Số cực": "2 Pha (2P - L+N)",
      "Dòng định mức (In)": "32A",
      "Dòng cắt (Icu)": "6 kA",
      "Đường cong trip": "Đặc tính C",
      "Điện áp hoạt động": "230V AC",
      "Tiêu chuẩn": "IEC/EN 60898-1"
    },
    applications: "Tủ điện tầng căn hộ, tủ phòng khách sạn, mạch nguồn máy lạnh công suất lớn, bếp từ công nghiệp.",
    images: [
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isNew: false,
    status: "active",
    sortOrder: 2
  },
  {
    id: "prod-3",
    name: "Khởi động từ Contactor 3P 40A cuộn coil 220V LS Metasol",
    slug: "contactor-3p-40a-ls-metasol-mc40a",
    sku: "MC-40a-220V",
    categoryId: "cat-2",
    brand: "LS Electric",
    shortDescription: "Khởi động từ 3 pha 40A công suất động cơ 18.5kW 380V, độ bền cơ học 12 triệu lần đóng cắt.",
    description: "Contactor Metasol series của LS Electric nổi tiếng tại thị trường miền Trung về độ bền bỉ, dễ lắp đặt và giá thành cạnh tranh cho nhà thầu M&E. Tương thích hoàn toàn với rơ le nhiệt MT-32.",
    technicalSpecifications: {
      "Dòng định mức (AC-3)": "40A (18.5kW / 25HP tại 380V)",
      "Điện áp cuộn hút (Coil)": "220V AC 50Hz",
      "Tiếp điểm phụ tích hợp": "1NO + 1NC",
      "Lắp đặt": "Cài thanh ray DIN hoặc bắt ốc tấm đế",
      "Xuất xứ": "Hàn Quốc (Made in Korea)"
    },
    applications: "Tủ điều khiển bơm nước cứu hỏa, tủ quạt thông gió nhà xưởng KCN, tủ máy nén khí và dây chuyền sản xuất.",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isNew: false,
    status: "active",
    sortOrder: 3
  },
  {
    id: "prod-4",
    name: "Cáp điện ngầm lực hạ thế Cu/XLPE/PVC/DSTA/PVC 3x70+1x35 Cadivi",
    slug: "cap-ngam-3x70-1x35-cadivi-dsta",
    sku: "CAD-DSTA-3X70-35",
    categoryId: "cat-4",
    brand: "Cadivi",
    shortDescription: "Cáp đồng bọc giáp băng thép 0.6/1kV chuyên chôn ngầm trực tiếp từ trạm biến áp vào tủ điện tổng nhà máy.",
    description: "Cáp ngầm DSTA của Cadivi có ruột dẫn đồng tinh chất 99.99%, cách điện XLPE chịu nhiệt 90 độ C, 2 lớp băng thép mạ kẽm chống va đập cơ học từ đất đá và xe cơ giới qua lại.",
    technicalSpecifications: {
      "Cấu tạo": "Cu / XLPE / PVC / DSTA / PVC",
      "Quy cách": "3 lõi pha 70mm² + 1 lõi trung tính 35mm²",
      "Cấp điện áp": "0.6/1 (1.2) kV",
      "Nhiệt độ làm việc cực đại": "90°C (ngắn mạch 250°C)",
      "Tiêu chuẩn áp dụng": "TCVN 5935-1 / IEC 60502-1",
      "Đóng gói": "Rulo cuộn theo chiều dài công trình yêu cầu"
    },
    applications: "Tuyến cáp nguồn chính từ trạm biến áp vào nhà máy KCN Điện Nam - Điện Ngọc, KCN Hòa Khánh, cấp nguồn tòa nhà cao tầng.",
    images: [
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isNew: true,
    status: "active",
    sortOrder: 4
  },
  {
    id: "prod-5",
    name: "Vỏ tủ điện ngoài trời 2 lớp cánh Inox 304 kích thước 1200x800x400",
    slug: "vo-tu-dien-ngoai-troi-inox-304",
    sku: "TD-IN304-1208040",
    categoryId: "cat-3",
    brand: "Đà Quang Electric",
    shortDescription: "Vỏ tủ điện phân phối ngoài trời 2 lớp cánh, Inox 304 độ dày 1.5mm chống ăn mòn muối biển khu vực duyên hải miền Trung.",
    description: "Được gia công theo tiêu chuẩn nghiêm ngặt cho khí hậu biển Đà Nẵng - Hội An. Mái che dốc thoát nước mưa, gioăng cao su đúc nguyên khối chống nước đạt tiêu chuẩn IP65, bản lề và khóa gạt inox chắc chắn.",
    technicalSpecifications: {
      "Vật liệu": "Inox SUS 304 chuẩn công nghiệp",
      "Kích thước": "Cao 1200mm x Rộng 800mm x Sâu 400mm",
      "Độ dày tôn": "1.5mm - 2.0mm theo yêu cầu tải trọng",
      "Cấp bảo vệ": "IP65 ngoài trời",
      "Cấu tạo": "2 lớp cánh (cánh ngoài kính mica / cánh trong panel đột lỗ)"
    },
    applications: "Tủ phân phối chiếu sáng bờ biển, tủ điều khiển trạm bơm resort ven biển Sơn Trà, tủ điện ngoài trời nhà máy KCN.",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isNew: false,
    status: "active",
    sortOrder: 5
  },
  {
    id: "prod-6",
    name: "Đèn LED Highbay nhà xưởng 150W Chip Philips bảo hành 3 năm",
    slug: "den-led-highbay-150w-nha-xuong",
    sku: "HB-150W-PL",
    categoryId: "cat-5",
    brand: "Đà Quang Electric",
    shortDescription: "Đèn LED treo trần nhà xưởng công nghiệp 150W quang thông 19.500lm, thân nhôm tản nhiệt đúc dày chịu nhiệt.",
    description: "Giải pháp chiếu sáng tiết kiệm 60% điện năng cho các xưởng cơ khí, may mặc và kho logistics. Nguồn Meanwell/Philips ổn định chống sét xung lan truyền 4kV, ánh sáng chuẩn không nhấp nháy mỏi mắt công nhân.",
    technicalSpecifications: {
      "Công suất": "150W",
      "Hiệu suất phát quang": "130 lm/W",
      "Nhiệt độ màu (CCT)": "6500K (Trắng ngày) / 4000K (Trung tính)",
      "Hệ số hoàn màu (CRI)": "> 80 Ra",
      "Cấp bảo vệ": "IP65 chống ẩm và bụi bẩn công nghiệp",
      "Tuổi thọ": "50.000 giờ chiếu sáng"
    },
    applications: "Chiếu sáng xưởng dệt may, xưởng lắp ráp linh kiện, nhà kho cảng Tiên Sa, bãi đỗ xe logistics.",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isNew: false,
    status: "active",
    sortOrder: 6
  },
  {
    id: "prod-7",
    name: "Biến tần tải nặng 3 Pha 380V 15kW/20HP LS iS7 Series",
    slug: "bien-tan-ls-is7-15kw-380v",
    sku: "SV150iS7-4NO",
    categoryId: "cat-6",
    brand: "LS Electric",
    shortDescription: "Biến tần vector kiểm soát mô-men xoắn cao chuyên trị tải nặng: cầu trục, băng tải đá, máy đùn nhựa.",
    description: "Dòng biến tần cao cấp iS7 mang lại hiệu suất vận hành vượt trội cho hệ thống công nghiệp nặng. Tích hợp sẵn bộ lọc EMC, card giao tiếp Modbus/RS485 và bàn phím cài đặt trực quan.",
    technicalSpecifications: {
      "Công suất": "15 kW (20 HP)",
      "Điện áp vào / ra": "3 Pha 380 ~ 480V AC 50/60Hz",
      "Khả năng quá tải": "150% trong 60 giây (Heavy duty)",
      "Tần số ngõ ra": "0 ~ 400 Hz",
      "Phương pháp điều khiển": "V/f, Sensorless Vector, Sensored Vector"
    },
    applications: "Hệ thống nâng hạ dầm cẩu, cẩu trục cảng biển, băng tải mỏ đá Quảng Nam, máy ép gạch Tuynel.",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isNew: true,
    status: "active",
    sortOrder: 7
  },
  {
    id: "prod-8",
    name: "Đồng hồ đa năng giám sát điện năng tử số Schneider PM5350",
    slug: "dong-ho-do-da-nang-schneider-pm5350",
    sku: "METSEPM5350",
    categoryId: "cat-7",
    brand: "Schneider Electric",
    shortDescription: "Đồng hồ đo lường điện đa chức năng V, A, Hz, PF, kW, kVA, THD sóng hài cao cấp, cổng RS485 Modbus.",
    description: "Đồng hồ phân tích chất lượng điện thế hệ mới Schneider PM5350 giúp kỹ sư trưởng quản lý tiêu thụ điện năng, phát hiện sóng hài gây nóng máy biến áp và tích hợp hệ thống SCADA/BMS giám sát từ xa.",
    technicalSpecifications: {
      "Màn hình": "LCD đồ họa đơn sắc có đèn nền",
      "Đo lường": "Điện áp, dòng điện, công suất, năng lượng, góc lệch pha",
      "Độ chính xác": "Cấp chính xác Class 0.5S tiêu chuẩn IEC 62053-22",
      "Truyền thông": "Cổng RS-485 giao thức Modbus RTU",
      "Kích thước khoét lỗ": "92 x 92 mm"
    },
    applications: "Tủ phân phối chính các nhà máy FDI, trạm biến áp doanh nghiệp, trung tâm thương mại Vincom/Lotte.",
    images: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isNew: false,
    status: "active",
    sortOrder: 8
  },
  {
    id: "prod-9",
    name: "Kim thu sét phát xạ sớm tiên phong Bakiral ALFAS ESE 60",
    slug: "kim-thu-set-bakiral-alfas-ese-60",
    sku: "BK-ALFAS-60",
    categoryId: "cat-8",
    brand: "Đà Quang Electric",
    shortDescription: "Kim thu sét tia tiên đạo bán kính bảo vệ cực đại 107m (cấp IV), vật liệu thép không gỉ mạ crôm bóng.",
    description: "Được kiểm nghiệm tại phòng thí nghiệm độc lập Châu Âu theo tiêu chuẩn NFC 17-102. Chống chịu sét đánh trực tiếp lên tới 200kA, độ bền vượt trội trước thời tiết giông lốc miền Trung.",
    technicalSpecifications: {
      "Thời gian phát tia tiên đạo (ΔT)": "60 micro-giây (µs)",
      "Bán kính bảo vệ tối đa": "107 mét tại độ cao h=5m",
      "Vật liệu chế tạo": "Thép không gỉ 316L cao cấp",
      "Tiêu chuẩn quốc tế": "NFC 17-102:2011",
      "Xuất xứ": "Thổ Nhĩ Kỳ (CO/CQ công chứng đầy đủ)"
    },
    applications: "Bảo vệ chống sét đánh thẳng cho nhà máy KCN Chu Lai, resort bãi biển, trường học và bệnh viện.",
    images: [
      "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isNew: false,
    status: "active",
    sortOrder: 9
  },
  {
    id: "prod-10",
    name: "Bộ phích cắm & Ổ cắm công nghiệp di động Mennekes 3P+N+E 32A IP67",
    slug: "phich-cam-o-cam-cong-nghiep-32a-ip67",
    sku: "MNK-32A-5P-IP67",
    categoryId: "cat-9",
    brand: "Đà Quang Electric",
    shortDescription: "Ổ phích công nghiệp 5 chấu (3 Pha + Trung tính + Tiếp địa) 380V chống nước ngập ngụa tại công trường xây dựng.",
    description: "Mennekes là chuẩn mực an toàn hàng đầu châu Âu. Thiết kế khóa vặn gioăng cao su kép kín nước tuyệt đối, chân tiếp điểm đồng mạ niken chống ăn mòn hóa chất và quá nhiệt.",
    technicalSpecifications: {
      "Cực đấu nối": "5 chân (3P + N + PE)",
      "Dòng định mức": "32A",
      "Điện áp làm việc": "400V (50/60Hz)",
      "Cấp bảo vệ": "IP67 (Chống ngâm nước tạm thời)",
      "Vật liệu vỏ": "Nhựa Polyamide PA6 chống va đập IK08"
    },
    applications: "Công trường xây dựng các tòa tháp ven sông Hàn, kết nối máy hàn công nghiệp, cấp nguồn xe cẩu.",
    images: [
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isNew: false,
    status: "active",
    sortOrder: 10
  },
  {
    id: "prod-11",
    name: "Máy cắt không khí ACB 3P 2000A Fix Schneider Masterpact MTZ2",
    slug: "may-cat-khong-khi-acb-3p-2000a-schneider",
    sku: "MTZ2-20H1-3P",
    categoryId: "cat-1",
    brand: "Schneider Electric",
    shortDescription: "ACB 3 cực 2000A dòng cắt 66kA, bộ điều khiển kỹ thuật số Micrologic X tích hợp đo đếm năng lượng chuẩn Class 1.",
    description: "Thiết bị đóng cắt cao cấp bậc nhất cho trạm biến áp và tủ phân phối tổng MSB của các nhà máy sản xuất linh kiện điện tử, bệnh viện tuyến trung ương.",
    technicalSpecifications: {
      "Số cực": "3 Pha",
      "Dòng định mức": "2000A",
      "Dòng cắt Icu = Ics": "66 kA / 415V",
      "Loại": "Cố định (Fixed) hoặc Kéo ra (Drawout)",
      "Trip Unit": "Micrologic 2.0X / 5.0X điện tử"
    },
    applications: "Tủ tổng trạm biến áp các khu công nghiệp Đà Nẵng, nhà máy bia, nhà máy lắp ráp ô tô Chu Lai.",
    images: [
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isNew: false,
    status: "active",
    sortOrder: 11
  },
  {
    id: "prod-12",
    name: "Rơ le nhiệt bảo vệ quá tải động cơ LS Metasol MT-32",
    slug: "ro-le-nhiet-ls-metasol-mt-32",
    sku: "MT-32-RELAY",
    categoryId: "cat-2",
    brand: "LS Electric",
    shortDescription: "Rơ le nhiệt lắp trực tiếp vào contactor MC-9b đến MC-32a, dải chỉnh dòng từ 0.1A đến 40A bảo vệ mất pha.",
    description: "Bộ bảo vệ nhiệt lưỡng kim độ nhạy cao của LS Electric, phản ứng tức thì khi động cơ kẹt trục, quá dòng hoặc sụt mất 1 pha, ngăn chặn cháy cuộn dây motor tốn kém chi phí sửa chữa.",
    technicalSpecifications: {
      "Dải dòng chỉnh": "Tùy chọn: 12-18A, 16-22A, 22-32A",
      "Số cực": "3 cực (bảo vệ 3 pha)",
      "Tính năng bảo vệ": "Quá tải + Mất pha (Phase failure protection)",
      "Cơ chế reset": "Manual (Bằng tay) hoặc Auto (Tự động)"
    },
    applications: "Tủ khởi động trực tiếp DOL hoặc Sao/Tam giác cho động cơ bơm, máy xay nghiền, quạt sấy.",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isNew: false,
    status: "active",
    sortOrder: 12
  },
  {
    id: "prod-13",
    name: "Aptomat chống rò chống giật RCBO 2P 25A 30mA Panasonic",
    slug: "aptomat-chong-ro-rcbo-panasonic-25a",
    sku: "BBDE22531CNV",
    categoryId: "cat-1",
    brand: "Panasonic",
    shortDescription: "Aptomat bảo vệ chống quá tải, ngắn mạch và rò điện dòng rò 30mA bảo vệ tính mạng con người tuyệt đối.",
    description: "Sản phẩm bảo vệ an toàn chuẩn Nhật Bản, thiết kế nhỏ gọn dạng thanh cài DIN rail, nút test rò hàng tháng dễ thao tác, độ nhạy cao dập nguồn ngay khi rò điện quá 0.03 giây.",
    technicalSpecifications: {
      "Dòng định mức": "25A",
      "Dòng rò tác động": "30 mA",
      "Dòng cắt ngắn mạch": "6 kA",
      "Số cực": "2P (1P+N)",
      "Tiêu chuẩn": "IEC 61009-1"
    },
    applications: "Hệ thống điện phòng tắm khách sạn, biệt thự nghỉ dưỡng Hội An, trường mầm non và phòng khám.",
    images: [
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isNew: false,
    status: "active",
    sortOrder: 13
  },
  {
    id: "prod-14",
    name: "Dây điện đơn ruột đồng bọc PVC Cadivi VCm 1x4.0mm²",
    slug: "day-dien-don-cadivi-vcm-4-0",
    sku: "CAD-VCM-4.0",
    categoryId: "cat-4",
    brand: "Cadivi",
    shortDescription: "Cuộn dây điện mềm nhiều sợi đồng nguyên chất 100m, chịu nhiệt 70°C dùng luồn ống gen công trình.",
    description: "Dây điện Cadivi VCm mềm dẻo dễ uốn luồn trong ống gen âm tường hoặc máng trunking. Vỏ cách điện PVC dẻo dai, chống cháy lan, đủ các màu đỏ, vàng, xanh, đen, tiếp địa vàng sọc xanh.",
    technicalSpecifications: {
      "Tiết diện danh định": "4.0 mm²",
      "Kết cấu ruột": "Nhiều sợi đồng mềm ủ sáng bóng",
      "Cấp điện áp": "450/750V",
      "Quy cách đóng gói": "Cuộn 100 mét chuẩn nhà máy",
      "Tiêu chuẩn": "TCVN 6610-3 / IEC 60227-3"
    },
    applications: "Hệ thống cấp nguồn ổ cắm, chiếu sáng công trình dân dụng và thương mại cao tầng.",
    images: [
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isNew: false,
    status: "active",
    sortOrder: 14
  },
  {
    id: "prod-15",
    name: "Đèn Pha LED công trường chống chói 200W IP66",
    slug: "den-pha-led-cong-truong-200w",
    sku: "FL-200W-PRO",
    categoryId: "cat-5",
    brand: "Đà Quang Electric",
    shortDescription: "Đèn pha rọi xa góc chiếu 60°/90°, vỏ nhôm đúc phủ sơn tĩnh điện chống ăn mòn hơi muối biển, chiếu sáng ban đêm.",
    description: "Được tin dùng tại hàng chục đại công trường thi công xuyên đêm tại Đà Nẵng và Quảng Nam. Độ sáng cực cao, tản nhiệt vây cánh tổ ong kéo dài tuổi thọ chip LED trên 50.000 giờ.",
    technicalSpecifications: {
      "Công suất": "200W",
      "Quang thông": "24.000 Lumen",
      "Góc chiếu sáng": "90 độ",
      "Kháng nước bụi": "IP66 / Chống va đập IK08",
      "Kính cường lực": "Dày 4mm chịu sốc nhiệt"
    },
    applications: "Chiếu sáng sân bãi công trường, kho bãi ngoài trời cảng Kỳ Hà, sân thể thao và facade tòa nhà.",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isNew: true,
    status: "active",
    sortOrder: 15
  },
  {
    id: "prod-16",
    name: "Tủ tụ bù tự động 6 cấp 150kVAR nâng cao hệ số công suất Cos Phi",
    slug: "tu-tu-bu-tu-dong-150kvar",
    sku: "TB-150KVAR-AUTO",
    categoryId: "cat-3",
    brand: "Đà Quang Electric",
    shortDescription: "Tủ bù công suất phản kháng tích hợp bộ điều khiển Mikro 6 cấp, tụ khô Samwha/Epcos tránh tiền phạt điện lực.",
    description: "Tủ được thiết kế lắp ráp tại xưởng kỹ thuật của Đà Quang Electric. Giúp các nhà máy và cơ sở sản xuất nâng cao hệ số Cos phi > 0.95, triệt tiêu hoàn toàn tiền phạt phản kháng hàng tháng của Điện Lực EVN.",
    technicalSpecifications: {
      "Dung lượng bù": "150 kVAR (chia 6 cấp bù thông minh)",
      "Bộ điều khiển tụ bù": "Mikro PFR60 kỹ thuật số",
      "Loại tụ điện": "Tụ khô 3 pha 440V Samwha (Hàn Quốc)",
      "Thiết bị đóng cắt tụ": "Contactor chuyên dụng cho tụ bù có điện trở xả nạp",
      "Cuộn kháng lọc sóng hài": "Tùy chọn cuộn kháng 7% khi có biến tần"
    },
    applications: "Các nhà máy gia công cơ khí, nhà máy may, nhà máy chế biến dăm gỗ tại Quảng Nam và KCN Hòa Cầm.",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: true,
    isNew: false,
    status: "active",
    sortOrder: 16
  },
  {
    id: "prod-17",
    name: "Thiết bị chống sét lan truyền 3 Pha SPD Type 2 ABB OVR T2",
    slug: "chong-set-lan-truyen-spd-abb-ovr-t2",
    sku: "OVR-T2-3N-40-275",
    categoryId: "cat-8",
    brand: "ABB",
    shortDescription: "Cắt lọc xung sét lan truyền đường nguồn 3 pha + trung tính 40kA, bảo vệ thiết bị điện tử nhạy cảm.",
    description: "Thiết bị triệt tiêu xung điện áp đột biến do sét đánh từ xa hoặc thao tác đóng cắt lưới điện cao thế. Mô đun cắm rút thay thế dễ dàng mà không cần tháo dây đấu nối, có cờ báo trạng thái hư hỏng.",
    technicalSpecifications: {
      "Dòng xả sét định mức (In)": "20 kA / pha",
      "Dòng xả cực đại (Imax)": "40 kA / pha",
      "Mức điện áp bảo vệ (Up)": "≤ 1.4 kV",
      "Số cực": "3P + N (Cấu hình 3+1)",
      "Tiêu chuẩn": "IEC 61643-11"
    },
    applications: "Bảo vệ tủ điện trung tâm dữ liệu Data Center, phòng máy chủ, hệ thống camera an ninh và thang máy.",
    images: [
      "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isNew: false,
    status: "active",
    sortOrder: 17
  },
  {
    id: "prod-18",
    name: "Công tắc ổ cắm mặt viền nhôm xước Panasonic Halumie / Refina",
    slug: "cong-tac-o-cam-panasonic-halumie",
    sku: "PANA-HALUMIE-SET",
    categoryId: "cat-10",
    brand: "Panasonic",
    shortDescription: "Bộ thiết bị công tắc ổ cắm cao cấp thiết kế sang trọng cho dự án căn hộ và resort ven biển.",
    description: "Chất liệu nhựa Urea đúc chống cháy và không bị ố vàng theo thời gian. Tiếp điểm mạ bạc dập hồ quang êm ái, ổ cắm có màng che an toàn tuyệt đối cho trẻ em.",
    technicalSpecifications: {
      "Dòng tải công tắc": "16A 250V AC",
      "Dòng tải ổ cắm": "16A 2 chấu có tiếp địa",
      "Màu sắc": "Trắng tuyết / Xám ánh kim / Vàng Champagne",
      "Tuổi thọ đóng cắt": "Trên 40.000 lần",
      "Tiêu chuẩn": "JIS C 8303 (Nhật Bản)"
    },
    applications: "Khách sạn 4-5 sao, căn hộ dịch vụ cao cấp dọc đường Võ Nguyên Giáp, biệt thự nghỉ dưỡng.",
    images: [
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isNew: false,
    status: "active",
    sortOrder: 18
  },
  {
    id: "prod-19",
    name: "Biến dòng đo lường hạ thế dạng đúc Epoxy OMEGA 400/5A",
    slug: "bien-dong-ha-the-omega-400-5a",
    sku: "CT-OMEGA-400-5A",
    categoryId: "cat-7",
    brand: "Đà Quang Electric",
    shortDescription: "Biến dòng hạ thế CT kiểu xuyên tâm xỏ thanh đồng cái Busbar, cấp chính xác Cl.0.5 đo lường hiển thị tủ điện.",
    description: "Vỏ nhựa chống cháy đúc keo epoxy chịu nhiệt và cách điện tuyệt đối, nắp che niêm chì kẹp chì kiểm định của trung tâm đo lường chất lượng 2 (Quatest 2 Đà Nẵng).",
    technicalSpecifications: {
      "Tỷ số biến đổi": "400/5A",
      "Cấp chính xác": "Class 0.5",
      "Dung lượng tải định mức": "5 VA ~ 10 VA",
      "Điện áp thử nghiệm cách điện": "3 kV / 1 phút",
      "Cửa sổ xỏ Busbar": "Phù hợp thanh cái đồng 40x10mm hoặc 50x10mm"
    },
    applications: "Lắp đặt tại tủ phân phối trạm biến áp, tủ đo đếm nội bộ các phân xưởng sản xuất.",
    images: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isNew: false,
    status: "active",
    sortOrder: 19
  },
  {
    id: "prod-20",
    name: "Cáp điều khiển nhiều lõi bọc lưới đồng chống nhiễu Altek Kabel 7x1.5mm²",
    slug: "cap-dieu-khien-chong-nhieu-altek-7x1-5",
    sku: "AK-SH-7X1.5",
    categoryId: "cat-4",
    brand: "Đà Quang Electric",
    shortDescription: "Cáp tín hiệu điều khiển có lưới đồng đan chống nhiễu từ trường cho hệ thống cảm biến và biến tần PLC.",
    description: "Ruột đồng mềm nhiều sợi bện xoắn, vỏ bọc PVC màu xám dẻo dai. Lớp lưới đồng mạ thiếc dệt đan kín trên 85% diện tích giúp tín hiệu analog 4-20mA và 0-10V truyền tải chính xác không bị sai số do nhiễu motor.",
    technicalSpecifications: {
      "Số lõi": "7 lõi đánh số thứ tự từ 1 đến 6 + 1 dây mass",
      "Tiết diện mỗi lõi": "1.5 mm²",
      "Lớp chống nhiễu": "Lưới đồng mạ thiếc đan bọc kín",
      "Điện áp làm việc": "300/500V",
      "Nhiệt độ hoạt động": "-15°C đến +70°C"
    },
    applications: "Tủ điều khiển PLC nhà máy gạch men, hệ thống cảm biến áp suất trạm cấp nước sạch Đà Nẵng.",
    images: [
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=800&q=80"
    ],
    isFeatured: false,
    isNew: false,
    status: "active",
    sortOrder: 20
  }
];

export const DEFAULT_PROJECTS = [
  {
    id: "proj-1",
    name: "Cung cấp trọn gói thiết bị tủ điện & cáp nguồn Nhà máy Điện tử Foster (KCN Hòa Khánh, Đà Nẵng)",
    slug: "nha-may-dien-tu-foster-kcn-hoa-khanh",
    location: "Khu Công Nghiệp Hòa Khánh, Quận Liên Chiểu, TP. Đà Nẵng",
    projectType: "Nhà máy công nghiệp FDI",
    suppliedScope: "Hệ thống tủ điện tổng MSB 3200A, cáp điện ngầm Cadivi 3x240, biến tần LS iS7 và thiết bị đóng cắt ACB Schneider.",
    description: "Đà Quang Electric vinh dự là nhà cung cấp vật tư thiết bị điện chính cho dự án mở rộng nhà xưởng phân kỳ 3. Toàn bộ hàng hóa nhập khẩu có đầy đủ chứng chỉ CO/CQ và được giao đúng tiến độ 45 ngày cam kết.",
    images: [
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
    ],
    status: "active",
    isFeatured: true
  },
  {
    id: "proj-2",
    name: "Tủ điện phân phối ngoài trời chống biển & Đèn cảnh quan Quần thể Resort 5 Sao Sơn Trà",
    slug: "resort-5-sao-son-tra-da-nang",
    location: "Bán đảo Sơn Trà, TP. Đà Nẵng",
    projectType: "Khách sạn & Khu nghỉ dưỡng ven biển",
    suppliedScope: "52 vỏ tủ điện Inox 304 chuẩn IP66 kháng muối biển, aptomat chống giật Panasonic RCBO, hệ thống chống sét Bakiral Thổ Nhĩ Kỳ.",
    description: "Môi trường ven biển có độ ăn mòn cực kỳ khốc liệt. Chúng tôi đã tư vấn giải pháp vỏ tủ Inox 304 chuyên biệt cùng phụ kiện chống gỉ sét, giúp chủ đầu tư an tâm vận hành suốt nhiều năm.",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    ],
    status: "active",
    isFeatured: true
  },
  {
    id: "proj-3",
    name: "Hệ thống điện động lực & Tụ bù tiết kiệm điện Cụm Nhà Xưởng Dệt May KCN Điện Nam - Điện Ngọc",
    slug: "nha-xuong-det-may-kcn-dien-nam-dien-ngoc",
    location: "KCN Điện Nam - Điện Ngọc, Thị xã Điện Bàn, Tỉnh Quảng Nam",
    projectType: "Cụm nhà xưởng sản xuất công nghiệp",
    suppliedScope: "Hệ thống tủ bù công suất 300kVAR, thiết bị đóng cắt khối MCCB Schneider CVS, đèn LED Highbay 150W nhà xưởng 12.000m².",
    description: "Giải pháp nâng cấp hệ thống bù công suất phản kháng giúp doanh nghiệp giảm chi phí hóa đơn tiền điện EVN hơn 35 triệu đồng mỗi tháng, nâng hệ số Cos Phi ổn định ở mức 0.98.",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
    ],
    status: "active",
    isFeatured: true
  },
  {
    id: "proj-4",
    name: "Cung cấp vật tư M&E Tòa nhà Văn phòng & Trung tâm Hội nghị Quốc tế Hải Châu Plaza",
    slug: "toa-nha-hai-chau-plaza-da-nang",
    location: "Đường Bạch Đằng, Quận Hải Châu, TP. Đà Nẵng",
    projectType: "Tòa nhà thương mại & văn phòng phức hợp",
    suppliedScope: "Cáp chống cháy Cadivi, tủ điện phân phối các tầng, công tắc ổ cắm cao cấp và thiết bị đo giám sát điện năng Schneider PM5350.",
    description: "Cung ứng tiến độ theo từng sàn xây dựng trong suốt 14 tháng thi công, hỗ trợ kỹ thuật nghiệm thu đo kiểm cách điện và đóng điện nghiệm thu PCCC.",
    images: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
    ],
    status: "active",
    isFeatured: false
  },
  {
    id: "proj-5",
    name: "Hệ thống trạm biến áp & Tủ phân phối Bệnh viện Đa khoa Khu vực Bắc Quảng Nam",
    slug: "benh-vien-da-khoa-bac-quang-nam",
    location: "Huyện Đại Lộc, Tỉnh Quảng Nam",
    projectType: "Công trình y tế & công cộng",
    suppliedScope: "Tủ chuyển nguồn tự động ATS 1200A 4P ABB, hệ thống chống sét lan truyền Type 1+2, cáp đồng nguyên chất.",
    description: "Đảm bảo tính liên tục cấp điện tuyệt đối cho khu vực phòng mổ và hồi sức tích cực với thời gian chuyển nguồn dự phòng dưới 3 giây.",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    ],
    status: "active",
    isFeatured: false
  }
];

export const DEFAULT_POLICIES = [
  {
    id: "pol-1",
    name: "Chính sách bán sỉ & Báo giá dự án công trình",
    slug: "chinh-sach-ban-hang-va-bao-gia",
    sortOrder: 1,
    status: "active",
    content: `
### 1. Nguyên tắc bán buôn & Cung cấp số lượng lớn
Đà Quang Electric là đơn vị phân phối chuyên nghiệp, ưu tiên tối đa cho các đối tượng khách hàng:
- Các nhà thầu cơ điện (M&E Contractors).
- Các công ty tư vấn thiết kế và thi công xây dựng công nghiệp.
- Ban quản lý dự án, chủ đầu tư nhà máy, resort, khách sạn.
- Các xưởng sản xuất tủ bảng điện và đơn vị dịch vụ bảo trì điện công nghiệp.

### 2. Chính sách chiết khấu thương mại
- Chiết khấu trực tiếp theo quy mô và giá trị gói thầu dựa trên bảng giá niêm yết của các hãng (Schneider, LS, Cadivi, ABB...).
- Cam kết giữ giá dự án trong suốt thời gian chào thầu và thực hiện hợp đồng.
- Cung cấp đầy đủ hồ sơ chào giá, bảng phân tích kỹ thuật tương đương để nhà thầu bảo vệ trước chủ đầu tư.

### 3. Phương thức báo giá nhanh qua Zalo & Email
- Báo giá nhanh trong vòng **30 - 60 phút** sau khi nhận danh mục vật tư (Bill of Quantities - BOQ).
- Báo giá bóc tách chi tiết từng chủng loại, xuất xứ và thời gian giao hàng.
`
  },
  {
    id: "pol-2",
    name: "Chính sách giao hàng tận nơi tại Đà Nẵng & Quảng Nam",
    slug: "chinh-sach-giao-hang-tan-cong-trinh",
    sortOrder: 2,
    status: "active",
    content: `
### 1. Phạm vi và thời gian giao hàng
- **Khu vực nội thành TP. Đà Nẵng**: Giao hàng miễn phí tận chân công trình hoặc kho khách hàng trong vòng 2 - 4 giờ làm việc.
- **Khu vực tỉnh Quảng Nam (Điện Bàn, Hội An, KCN Điện Nam - Điện Ngọc, Thăng Bình, Tam Kỳ, Núi Thành, Chu Lai)**: Giao xe tải chuyên dụng trong ngày hoặc theo lịch đổ bê tông / kéo cáp của công trường.
- Hỗ trợ giao hỏa tốc ban đêm hoặc ngày nghỉ đối với sự cố mất điện nhà xưởng cần vật tư thay thế gấp.

### 2. Quy chuẩn bốc dỡ và bảo quản
- Dây cáp điện được kích nâng hạ bằng xe cẩu chuyên dùng, đảm bảo không trầy xước vỏ cách điện.
- Tủ điện và thiết bị đóng cắt được quấn màng co PE và đệm xốp chống va đập.
- Bàn giao kèm theo Phiếu xuất kho, Biên bản giao nhận và bảng kê chi tiết có chữ ký hai bên.
`
  },
  {
    id: "pol-3",
    name: "Chính sách hỗ trợ kỹ thuật & Lắp đặt trực tiếp",
    slug: "chinh-sach-ho-tro-ky-thuat-va-lap-dat",
    sortOrder: 3,
    status: "active",
    content: `
### 1. Đội ngũ kỹ sư hỗ trợ tại chỗ
Khác biệt với các đại lý bán lẻ thông thường, Đà Quang Electric sở hữu đội ngũ kỹ sư điện - tự động hóa sẵn sàng:
- Khảo sát thực tế mặt bằng lắp đặt tủ điện, tuyến cáp và hệ thống tiếp địa tại công trình.
- Tư vấn chọn lựa thiết bị thay thế tương đương giúp tối ưu ngân sách mà vẫn đảm bảo tiêu chuẩn thiết kế.
- Hướng dẫn cài đặt thông số biến tần, đồng hồ đo điện đa năng, bộ điều khiển tụ bù tại hiện trường.

### 2. Dịch vụ thi công & Lắp ráp theo yêu cầu
- Nhận thiết kế và gia công lắp ráp hoàn thiện tủ điện MSB, DB, ATS, tủ điều khiển bơm theo sơ đồ nguyên lý của khách hàng.
- Thi công hệ thống chống sét trọn gói (đo điện trở đất, hàn hóa nhiệt mác ngoại, đóng cọc tiếp địa đạt chuẩn < 10 Ohm).
`
  },
  {
    id: "pol-4",
    name: "Chính sách bảo hành & Chứng chỉ xuất xứ (CO/CQ)",
    slug: "chinh-sach-bao-hanh-va-chung-chi-co-cq",
    sortOrder: 4,
    status: "active",
    content: `
### 1. Cam kết 100% hàng chính hãng
- Mọi thiết bị cung cấp bởi Đà Quang Electric đều mới 100%, nguyên đai nguyên kiện từ nhà sản xuất.
- Đầy đủ chứng nhận xuất xứ (CO) và chứng nhận chất lượng (CQ) công chứng hợp lệ để nhà thầu làm hồ sơ nghiệm thu thanh toán (KCS).
- Cung cấp kết quả thử nghiệm mẫu (Type Test Report) của phòng thí nghiệm quốc tế đối với các thiết bị đóng cắt và cáp điện trung hạ thế.

### 2. Thời hạn và điều kiện bảo hành
- Bảo hành tiêu chuẩn từ **12 đến 24 tháng** theo đúng chính sách của từng hãng sản xuất.
- Áp dụng cơ chế **1 đổi 1 ngay lập tức** trong 30 ngày đầu tiên nếu thiết bị phát sinh lỗi kỹ thuật do nhà sản xuất để không làm gián đoạn tiến độ công trình.
- Cử kỹ sư đến kiểm tra tại công trình trong vòng 24 giờ kể từ khi nhận được thông báo sự cố.
`
  },
  {
    id: "pol-5",
    name: "Chính sách đổi trả & Xử lý tồn đọng sau dự án",
    slug: "chinh-sach-doi-tra-hang-hoa",
    sortOrder: 5,
    status: "active",
    content: `
### 1. Hỗ trợ nhập lại hàng tồn dự án
Hiểu rõ đặc thù công trình xây dựng thường phát sinh dư thừa vật tư sau khi nghiệm thu hoàn công:
- Đà Quang Electric có chính sách hỗ trợ nhận lại các mặt hàng thiết bị tiêu chuẩn (MCB, Contactor, dây điện nguyên cuộn) còn nguyên hộp và tem mác.
- Mức phí hỗ trợ nhập lại cực kỳ hợp lý, giúp nhà thầu thu hồi dòng vốn nhanh chóng.

### 2. Đổi trả hàng do thay đổi thiết kế
- Khách hàng được đổi sang chủng loại thiết bị khác nếu phương án thiết kế của chủ đầu tư có sự điều chỉnh.
- Thủ tục đổi trả giải quyết nhanh gọn trong vòng 3 ngày làm việc.
`
  }
];

export const DEFAULT_CONTACTS = [
  {
    id: "cont-1",
    fullName: "Nguyễn Văn Hùng",
    company: "Công ty Cổ phần Xây Dựng & Cơ Điện M&E Sông Hàn",
    phone: "0914 123 456",
    email: "hung.me@songhanenc.com.vn",
    needSummary: "Cần báo giá sỉ thiết bị đóng cắt Schneider và 8 rulo cáp đồng hạ thế Cadivi cho dự án khách sạn 15 tầng",
    productInterest: "MCCB Schneider CVS, Dây cáp điện ngầm Cadivi",
    quantity: "Gói thầu ước tính 650 triệu đồng",
    notes: "Công trình khởi công vào tháng sau, cần bảng chào giá chiết khấu dự án gấp trong tuần này.",
    status: "NEW",
    createdAt: "2026-09-26T08:30:00Z"
  },
  {
    id: "cont-2",
    fullName: "Trần Minh Đức",
    company: "Nhà máy Sản Xuất Linh Kiện Nhựa KCN Điện Nam - Điện Ngọc",
    phone: "0905 556 789",
    email: "duc.tm@diennamplastic.vn",
    needSummary: "Khảo sát và tư vấn nâng cấp tủ tụ bù 200kVAR do hóa đơn điện lực phạt tiền Cos Phi cao",
    productInterest: "Tủ tụ bù tự động 6 cấp, Tụ khô Samwha",
    quantity: "01 Tủ tổng + thi công đấu nối trọn gói",
    notes: "Đã liên hệ điện thoại trao đổi sơ bộ, hẹn chiều thứ 3 qua đo đạc trực tiếp tại nhà máy.",
    status: "PROCESSING",
    createdAt: "2026-09-25T14:15:00Z"
  },
  {
    id: "cont-3",
    fullName: "Lê Hoàng Yến",
    company: "Xí nghiệp Lắp máy & Dịch vụ Kỹ thuật Chu Lai",
    phone: "0983 777 222",
    email: "yen.lh@chulai-machinery.com",
    needSummary: "Đặt hàng 4 bộ biến tần LS iS7 15kW và 20 contactor MC-40a giao về kho Tam Hiệp, Núi Thành",
    productInterest: "Biến tần tải nặng LS iS7, Contactor 40A",
    quantity: "4 chiếc biến tần + 20 bộ contactor",
    notes: "Đã chốt hợp đồng và giao hàng thành công, khách đã ký biên bản bàn giao và thanh toán chuyển khoản đợt 1.",
    status: "COMPLETED",
    createdAt: "2026-09-24T09:00:00Z"
  },
  {
    id: "cont-4",
    fullName: "Võ Quốc Cường",
    company: "Công ty TNHH Tư vấn & Thi công Điện Quảng Đà",
    phone: "0935 999 111",
    email: "cuong.vq@quangdaelectric.com",
    needSummary: "Hỏi giá đại lý kim thu sét Bakiral ALFAS 60 và phụ kiện cọc tiếp địa đồng đỏ phi 16",
    productInterest: "Kim thu sét phát xạ sớm Bakiral ALFAS ESE 60",
    quantity: "3 bộ kim thu sét + 30 cọc tiếp địa",
    notes: "Đã gửi bảng giá sỉ và chứng chỉ CO/CQ qua Zalo, đang chờ chủ đầu tư duyệt dự toán.",
    status: "CONTACTED",
    createdAt: "2026-09-23T16:45:00Z"
  },
  {
    id: "cont-5",
    fullName: "Phạm Hữu Long",
    company: "Tư nhân (Chủ xưởng gỗ Điện Bàn)",
    phone: "0903 444 888",
    email: "long.wood@gmail.com",
    needSummary: "Cần mua lẻ 1 chiếc aptomat cũ",
    productInterest: "Aptomat cũ giá rẻ",
    quantity: "1 cái",
    notes: "Bên mình chỉ phân phối hàng mới chính hãng bán sỉ dự án, đã giải thích và hủy yêu cầu.",
    status: "CANCELLED",
    createdAt: "2026-09-22T11:20:00Z"
  }
];
