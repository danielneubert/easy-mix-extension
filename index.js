const mix = require('laravel-mix')
const configs = require('./src/configs/index')
const mergeObjects = require('./src/functions/mergeObjects')

class EasyMixExtension {

    /**
     * List of all registered configurations.
     *
     * @property {Array}
     */
    list = {}

    /**
     * All available easy configurations.
     *
     * @property {Array}
     */
    configs = configs

    /**
     * Returns all dependencies
     *
     * @returns {Array}
     */
    dependencies () {
        let dependencies = []

        Object.keys(this.list).forEach(key => {
            if ('dependencies' in this.configs[key]) {
                dependencies = [
                    ...dependencies,
                    ...this.configs[key].dependencies
                ]
            }
        })

        return dependencies
    }

    /**
     * Register functionality
     *
     * @param options
     */
    register(options = {}, args) {
        if (typeof options == 'string') {
            options = {
                [options]: typeof args == 'undefined' ? null : args,
            }
        }

        if (Array.isArray(options)) {
            let converted = {}
            options.forEach(key => converted[key] = null)
            options = converted
        }

        Object.keys(options).forEach(key => {
            if (key in this.configs) {
                this.list = {...this.list, ...{
                    [key]: options[key],
                }}
            }
        })
    }

    /**
     * Returns the babel config for all registered configurations.
     * 
     * @returns {Object}
     */
    babelConfig() {
        let reference = {}

        this.executeList('babelConfig', reference)

        return reference
    }

    /**
     * Executes all webpack configurations.
     * 
     * @param {Object} config 
     */
    webpackConfig(config) {
        this.executeList('webpackBefore', {})
        this.executeList('webpackConfig', config)
    }

    /**
     * Executes the function for a registered configuration.
     * 
     * @param {String} name
     * @param {Object} reference
     */
    executeList(name, reference) {
        let merging = {}

        Object.keys(this.list).forEach(key => {
            if (name in this.configs[key]) {
                merging = {
                    ...merging,
                    ...this.configs[key][name](this.list[key])
                }
            }
        })

        this.mergeObjects(reference, merging)
    }

    /**
     * Appends the given properties of an object to another one.
     * 
     * @param {Object} original
     * @param {Object} append
     */
    mergeObjects = mergeObjects
}

mix.extend('easy', new EasyMixExtension())
