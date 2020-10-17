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
     * Entry path relative to the project context.
     *
     * @property {String}
     */
    entry = null

    /**
     * Project context.
     *
     * @property {String}
     */
    context = null

    /**
     * Returns all dependencies
     *
     * @returns {Array}
     */
    dependencies () {
        if ('source' in this.list && typeof this.list['source'] == 'string') {
            this.entry = this.list['source'].replace(/^\//g, '').replace(/\/$/g, '')
            delete this.list['source']
        }

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
        this.context = `${config.context}/`
        this.output = Object.keys(config.entry)[0].replace(/^\//g, '')
        this.output = this.output.split('/')
        this.output.pop()
        this.output = this.output.join('/')

        if (this.entry == null) {
            this.entry = Object.values(config.entry)[0][0]
            this.entry = this.entry.replace(this.context, '')
            this.entry = this.entry.split('/')
            this.entry.pop()
            this.entry = this.entry.join('/')
        }

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
        Object.keys(this.list).forEach(key => {
            if (name in this.configs[key]) {
                this.mergeObjects(reference, this.configs[key][name](this.list[key], {
                    context: this.context,
                    entry:   this.entry,
                    output:  this.output,
                }))
            }
        })
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
