var body = $response.body; 
var obj = JSON.parse(body); 

// Giả lập tài khoản đã đăng ký Artist Pro
obj.subscription = {
    "plan": "artist_pro",
    "status": "active",
    "expires_at": "2099-12-31T23:59:59Z",  // Gia hạn vĩnh viễn
    "features": [
        "unlimited_uploads",
        "direct_monetization",
        "advanced_stats",
        "spotlight",
        "banner_customization"
    ]
};

// Cập nhật hiển thị gói Pro trong Library
obj.plan = {
    "vendor": "apple",
    "id": "artist_pro",
    "manageable": true,
    "plan_name": "Pro Unlimited",
    "plan_id": "artist-pro"
};

// Bật các tính năng của Pro
obj.features = [
    { "name": "offline_sync", "enabled": true },
    { "name": "no_audio_ads", "enabled": true },
    { "name": "hq_audio", "enabled": true },
    { "name": "system_playlist_in_library", "enabled": true },
    { "name": "ads_krux", "enabled": false },
    { "name": "new_home", "enabled": true },
    { "name": "spotlight", "enabled": true }
];

body = JSON.stringify(obj);
$done({body});
