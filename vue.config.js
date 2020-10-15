module.exports = {
    // 基本路径  
    publicPath: './',
    // 输出路径   
    outputDir: 'dist',
    // 静态资源    
    assetsDir: './',
    // eslint-loader是否在保存时候检查  
    lintOnSave: true,
    // 服务项配置    
    devServer: {
        host: 'localhost',
        port: 8080,
        https: false,
        open: true,
　　 // 设置代理proxy
        proxy: {
           '/api':{
               'target':'http://elm.cangdu.org',//localhost:3000',
               changeOrigin:true,    //表示是否跨域，
               pathRewrite:{           //表示需要rewrite重写的
                   '^/api':' ',
               }
           }
        }
    }
}
//  module.exports = {
//     devServer:{
//     // 开启https 访问时使用https://172.31.120.61:8081 
//     // https://localhost:8081 也可以访问，不过自带info请求会报错 不清楚具体原因
//     https: true,
//     host:'0.0.0.0',
//     port: '8080',
//     proxy:{
//       '/api':{
//         //target:'http://wapi.local.tongyi.com/', //对应自己的接口
//         target: 'http://127.0.0.1:8080/api/private/v1', //对应自己的接口
//         changeOrigin: true,
//         ws: true,
//         pathRewrite: {
//         '^/api': ''
//         }
//       }
//     }
//   },
// }