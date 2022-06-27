const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        'http://ai.shangyuninfo.com',
        createProxyMiddleware({
            target: process.env.REACT_APP_PROXY_ENDPOINT,
            changeOrigin: true,
        }),
    )
}
