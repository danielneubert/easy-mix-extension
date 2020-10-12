/**
 * babel-root-import
 * 
 * Configuration for the 'babel-plugin-root-import' plugin.
 * This will reference the root directory (of the javascript
 * resources) with a given character.
 * 
 * @default '@'
 * @example mix.easy('babel-root-import')
 * @example mix.easy('babel-root-import', '@')
 * 
 * @author Daniel Neubert <git@danielneubert.com>
 * @since  0.1.0 (2020-10-12)
 */
module.exports = {
    dependencies: [
        'babel-plugin-root-import',
    ],

    babelConfig (char) {
        return {
            plugins: [
                [
                    'babel-plugin-root-import',
                    {
                        'paths': [
                            {
                                'rootPathPrefix': typeof char == 'string' ? char : '@',
                                'rootPathSuffix': './resources/js/',
                            },
                        ],
                    },
                ],
            ],
        }
    },
}
