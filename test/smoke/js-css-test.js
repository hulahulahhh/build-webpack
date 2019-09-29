const glob = require('glob-all')

describe('checking generated css/js files', () => {
    it('should generate css/js files', (done) => {
        const files = glob.sync([
            './dist/app_*.js'
        ])

        if (files.length > 0) {
            done()
            return
        }

        throw new Error('no jss/cs files generated')
    })
})