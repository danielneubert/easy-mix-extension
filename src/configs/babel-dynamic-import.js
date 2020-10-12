/**
 * babel-dynamic-import
 * 
 * Configuration for the @babel/plugin-syntax-dynamic-import
 * plugin. By default this will place all dynamic import
 * chunks into a separate folder.
 * 
 * @default 'public/js/chunks'
 * @example mix.easy('babel-dynamic-import')
 * @example mix.easy('babel-dynamic-import', 'public/js/chunks')
 * 
 * @author Daniel Neubert <git@danielneubert.com>
 * @since  0.1.0 (2020-10-12)
 */
module.exports = {
    dependencies: [
        '@babel/plugin-syntax-dynamic-import',
    ],

    babelConfig () {
        return {
            plugins: [
                '@babel/plugin-syntax-dynamic-import',
            ],
        }
    },

    webpackConfig (dir) {
        return {
            resolve: {
                symlinks: false,
            },
            watchOptions: {
                ignored: /node_modules/,
            },
            output: {
                publicPath: '/',
                chunkFilename: (chunk) => {
                    let name = chunk.chunk.id
                    let path = typeof dir == 'string'
                                    ? dir.replace(/\/$/g, '')
                                    : 'public/js/chunks'

                    if (typeof name == 'string') {
                        name = name.replace('resources_js_', '')
                    }

                    return `${path}/${name}.js`
                },
            },
        }
    },
}
