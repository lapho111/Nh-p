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

// Cập nhật UI hiển thị Artist Pro
obj.subscription = {
    "plan": "artist_pro",
    "status": "active",
    "expires_at": "2099-12-31T23:59:59Z", // Vĩnh viễn
    "features": [
        "unlimited_uploads",
        "direct_monetization",
        "advanced_stats",
        "spotlight",
        "banner_customization"
    ]
};

body = JSON.stringify(obj);
$done({body});
