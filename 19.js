var body = $response.body; 
var obj = JSON.parse(body); 

// Chỉnh sửa gói SoundCloud Go+
obj.plan = {
    "vendor" : "apple",
    "id" : "high_tier",
    "manageable" : true,
    "plan_upsells" : [],
    "plan_id" : "go-plus",
    "upsells" : [],
    "plan_name" : "SoundCloud Go+"
};

// Kích hoạt các tính năng cao cấp
obj.features = [
    {
        "name" : "offline_sync",
        "enabled" : true,
        "plans" : ["mid_tier", "high_tier"]
    },
    {
        "name" : "no_audio_ads",
        "enabled" : true,
        "plans" : ["mid_tier", "high_tier"]
    },
    {
        "name" : "hq_audio",
        "enabled" : true,
        "plans" : ["high_tier"]
    },
    {
        "name" : "system_playlist_in_library",
        "enabled" : true,
        "plans" : []
    },
    {
        "name" : "ads_krux",
        "enabled" : false,
        "plans" : []
    },
    {
        "name" : "new_home",
        "enabled" : true,
        "plans" : []
    },
    {
        "name" : "spotlight",
        "enabled" : true, // Kích hoạt tính năng spotlight (dành cho nghệ sĩ)
        "plans" : []
    }
];

// Thêm quyền Artist Pro
obj.artist_pro = {
    "is_pro" : true,
    "plan_name" : "Pro Unlimited",
    "features" : ["advanced_stats", "banner_customization", "spotlight"]
};

// Gửi phản hồi đã chỉnh sửa
body = JSON.stringify(obj);
$done({body});
