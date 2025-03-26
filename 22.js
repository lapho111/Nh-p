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

// Kích hoạt tất cả các tính năng Artist Pro
obj.features = [
    { "name": "offline_sync", "enabled": true },
    { "name": "no_audio_ads", "enabled": true },
    { "name": "hq_audio", "enabled": true },
    { "name": "system_playlist_in_library", "enabled": true },
    { "name": "ads_krux", "enabled": false },
    { "name": "new_home", "enabled": true },
    { "name": "spotlight", "enabled": true },  
    { "name": "unlimited_uploads", "enabled": true }, 
    { "name": "direct_monetization", "enabled": true }, 
    { "name": "advanced_stats", "enabled": true } 
];

// Chỉnh trạng thái tài khoản thành Artist Pro
obj.account = {
    "subscription": "artist_pro",
    "status": "active",
    "is_pro": true,
    "is_premium": true,
    "show_pro_badge": true,
    "expires_at": "2099-12-31T23:59:59Z",
    "plan_name": "Artist Pro"
};

// Hiện trạng thái "Đã đăng ký" trên trang Pro
obj.user = {
    "subscription": {
        "plan": "artist_pro",
        "status": "active",
        "expires_at": "2099-12-31T23:59:59Z"
    }
};

// Debug: Kiểm tra JSON phản hồi
console.log(JSON.stringify(obj, null, 2));

body = JSON.stringify(obj);
$done({body});
