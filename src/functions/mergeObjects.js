/**
 * Merge the contents of the given object with the merging
 * one instead of overwriting the original values.
 * 
 * @param {Object} original
 * @param {Object} merge
 */
module.exports = function (original, merge) {
    if (typeof original == 'object' && typeof merge == 'object') {
        Object.keys(merge).forEach(key => {
            if (typeof merge[key] == 'undefined') {
                return true
            }

            switch (typeof merge[key]) {
                case 'array':
                case 'object':
                    if (Array.isArray(merge[key])) {
                        if (!(key in original)) {
                            original[key] = []
                        }

                        original[key] = [
                            ...original[key],
                            ...merge[key]
                        ]
                    } else {
                        if (!(key in original)) {
                            original[key] = {}
                        }

                        original[key] = {
                            ...original[key],
                            ...merge[key]
                        }
                    }
                    break;

                default:
                    original[key] = merging[key]
                    break;
            }
        })
    }
}
