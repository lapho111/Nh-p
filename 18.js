var body = $response.body; 
var obj = JSON.parse(body); 

// Giữ nguyên SoundCloud Go+ (Premium)
obj.plan = {
    "vendor": "apple",
    "id": "high_tier",
    "manageable": true,
    "plan_name": "SoundCloud Go+",
    "plan_id": "go-plus"
};

// Bật tất cả các tính năng Premium + Artist Pro
obj.features = [
    { "name": "offline_sync", "enabled": true },
    { "name": "no_audio_ads", "enabled": true },
    { "name": "hq_audio", "enabled": true },
    { "name": "system_playlist_in_library", "enabled": true },
    { "name": "ads_krux", "enabled": false },
    { "name": "new_home", "enabled": true },
    { "name": "spotlight", "enabled": true },  // Bật spotlight của Artist Pro
    { "name": "unlimited_uploads", "enabled": true }, // Cho phép tải lên không giới hạn
    { "name": "direct_monetization", "enabled": true }, // Mở khóa kiếm tiền
    { "name": "advanced_stats", "enabled": true } // Bật phân tích nâng cao
];

// **Hiển thị nút "Get Artist Pro" thành "Artist Pro Active"**
obj.account = {
    "subscription": "artist_pro",
    "status": "active",
    "is_pro": true,
    "is_premium": true,
    "show_pro_badge": true,  // Hiện huy hiệu Pro
    "expires_at": "2099-12-31T23:59:59Z",
    "plan_name": "Artist Pro"
};

// **Hiển thị trạng thái Đã Đăng Ký trên trang Artist Pro**
obj.user = {
    "subscription": {
        "plan": "artist_pro",
        "status": "active",
        "expires_at": "2099-12-31T23:59:59Z"
    }
};

// Gửi lại dữ liệu
body = JSON.stringify(obj);
$done({body});
