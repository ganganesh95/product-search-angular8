const PROXY_CONFIG = {
    "/backend/search/products": {
        "target": "https://www.blibli.com",
        "secure": true,
        "changeOrigin": true,
        "https": true,
        "bypass": function (req, res, proxyOptions) {
            
        }
    }
}

module.exports = PROXY_CONFIG;