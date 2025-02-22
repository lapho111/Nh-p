var response = JSON.parse($response.body);

response.subscriber = {
    entitlements: {
        business: {
            expires_date: "2100-01-01T00:00:01Z",
            product_identifier: "com.background.business.yearly",
            purchase_date: "2025-01-01T00:00:01Z"
        }
    },
    original_purchase_date: "2025-01-01T00:00:01Z",
    subscriptions: {
        "com.background.business.yearly": {
            expires_date: "2100-01-01T00:00:01Z",
            original_purchase_date: "2023-02-23T03:33:33Z",
            purchase_date: "2025-01-01T00:00:01Z",
            ownership_type: "PURCHASED",
            store: "app_store"
        }
    }
};

$done({ body: JSON.stringify(response) });
