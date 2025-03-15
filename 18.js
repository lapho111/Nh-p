let body = $response.body;
if (body.includes('"YouTube"')) {
    body = body.replace(/"YouTube"/g, '"YouTube Premium"');
}
$done({body});
