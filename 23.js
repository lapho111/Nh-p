var body = $response.body; 
var obj = JSON.parse(body);

// Giữ nguyên SoundCloud Go+ và thêm Artist Pro
obj.plan = {
    "vendor": "apple",
    "id": "artist_pro",
    "manageable": true,
    "plan_name": "SoundCloud Go+ & Artist Pro",
    "plan_id": "artist_pro"
};

// Kích hoạt đầy đủ tính năng Artist Pro
obj.features = obj.features || [];
obj.features.push(
    { "name": "unlimited_uploads", "enabled": true },
    { "name": "direct_monetization", "enabled": true },
    { "name": "advanced_stats", "enabled": true },
    { "name": "hq_audio", "enabled": true },
    { "name": "no_audio_ads", "enabled": true },
    { "name": "offline_sync", "enabled": true }
);

// Giả mạo thông tin tài khoản thành Artist Pro
obj.account = {
    "subscription": "artist_pro",
    "status": "active",
    "is_pro": true,
    "is_premium": true,
    "show_pro_badge": true,
    "expires_at": "2099-12-31T23:59:59Z",
    "plan_name": "Artist Pro"
};

// Giả mạo dữ liệu user (nếu có)
obj.user = obj.user || {};
obj.user.subscription = {
    "plan": "artist_pro",
    "status": "active",
    "expires_at": "2099-12-31T23:59:59Z"
};
obj.user.is_pro = true;
obj.user.is_premium = true;
obj.user.show_pro_badge = true;

// Kiểm tra JSON trước khi trả về
console.log("Modified Response:", JSON.stringify(obj, null, 2));

body = JSON.stringify(obj);
$done({body});
