module.exports  = {
    // 配置生产环境加载路径
    publicPath: process.env.NODE_ENV  ===  'production'  ?  './'  :  '/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                // 配置窗体标题
                args[0].title = "Electron 模版项目";
                return args;
            })
      }
}