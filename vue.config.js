module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assset': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}