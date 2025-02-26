/******************************
📌 Tác Giả：Lạp Hộ  
📌 Cập Nhật：2025-2-17  
📌 Liên Lạc：Zalo: 0886632736  
📌 Face Book: https://www.facebook.com/lapho111
*******************************/

// Lấy và xử lý body
let body = $response.body.replace(/while.{7}\n/, "");
let obj = JSON.parse(body);

// Cập nhật trạng thái subscriber
obj.entitlement = {
  ...obj.entitlement,
  status: "subscriber",
  storage: {
    used: 0,
    limit: 1154487209165,      // ~1.15 TB
    display_limit: 1099511627776, // 1 TB
    warn: 992137445376         // ~992 GB
  }
};

// Cập nhật thông tin subscription
obj.current_subs = {
  product_id: "lightroom",
  store: "adobe",
  purchase_date: "2025-01-01T16:32:10.254954Z",
  sao: {
    inpkg_CCES: "0",
    inpkg_CCLE: "1",
    inpkg_CCSN: "0",
    inpkg_CCSV: "0",
    inpkg_LCCC: "0",
    inpkg_LPES: "0",
    inpkg_LRBRL: "0",
    inpkg_LRMAC: "0",
    inpkg_LRMC: "0",
    inpkg_LRMP: "0",
    inpkg_LRTB: "0",
    inpkg_PHLT: "0",
    inpkg_PHLT2: "0",
    inpkg_PLES: "0",
    storage_quota: "100"
  }
};

// Cập nhật avatar
obj.avatar = { ...obj.avatar, placeholder: true };

// Trả về kết quả
$done({ body: JSON.stringify(obj) });
