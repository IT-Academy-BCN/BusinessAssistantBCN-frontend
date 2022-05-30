const PROXY_CONFIG = [
  {
    context: [
      "/contactos.json"
    ],
    target: "https://fakecontactsspq.z6.web.core.windows.net",
    //changeOrigin: true,
    secure: true
  }
]

module.exports = PROXY_CONFIG;
