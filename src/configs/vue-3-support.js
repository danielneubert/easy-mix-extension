/**
 * vue-3-support
 * 
 * Fixes the Laravel Mix bug for Vue 3 dev-tools.
 * 
 * Note: This will be removed as soon as Laravel Mix will
 *       include full Vue 3 support and fix this issue.
 * 
 * @example mix.easy('vue-3-support', mix) // Requires the mix reference
 * 
 * @author Daniel Neubert <git@danielneubert.com>
 * @since  0.1.0 (2020-10-12)
 */
module.exports = {
    webpackBefore (mix) {
        mix.webpackConfig(webpack => {
            return {
                plugins: [
                    new webpack.DefinePlugin({
                        '__VUE_OPTIONS_API__': 'true',
                        '__VUE_PROD_DEVTOOLS__': 'false'
                    })
                ],
            }
        })
    },
}
