/**
 * alias
 * 
 * Easy configuration for import aliases starting from the
 * entry file.
 * 
 * @default { '@': '/' }
 * @example mix.easy('alias')
 * @example mix.easy('alias', { '@': 'components' })
 * 
 * @author Daniel Neubert <git@danielneubert.com>
 * @since  0.2.0 (2020-10-17)
 */
module.exports = {
    webpackConfig (config, project) {
        let alias = {}

        if (typeof config == 'object' && config != null) {
            Object.keys(config).forEach(key => {
                alias[key] = `${project.context}${project.entry}/${config[key].replace(/^\//g, '')}`
            })
        }

        if (!('@' in alias)) {
            alias['@'] = `${project.context}${project.entry}/`
        }

        return {
            resolve: {
                alias: alias,
            },
        }
    },
}
