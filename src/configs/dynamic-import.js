/**
 * dynamic-import
 * 
 * Configuration for the @babel/plugin-syntax-dynamic-import
 * plugin. The given directory will be relative to your
 * output directory.
 * 
 * @default 'chunks'
 * @example mix.easy('dynamic-import')
 * @example mix.easy('dynamic-import', 'chunks')
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

    webpackConfig (dir, project) {
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
                                    ? `${project.output}/${dir.replace(/\/$/g, '').replace(/^\//g, '')}`
                                    : `${project.output}/chunks`

                    if (typeof name == 'string') {
                        name = name.replace(`${project.entry.replace(/\//g, '_')}_`, '')
                    }

                    return `${path}/${name}.js`
                },
            },
        }
    },
}
