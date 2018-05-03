const hapiswagger = require('hapi-swagger')

/**
 * Swagger hapi plugin to auto generate swagger documentation based on code. Should be disabled in production.
 * @module plugins/internal/swagger
 */

/** Plugin with its configurations to be loaded into hapi */
module.exports = {
	plugin: hapiswagger,
	options: {
		info: {
			title: 'an-api API Documentation',
			version: '1.0.0'
		},
		documentationPath: '/info/swagger'
	}
}
