const handlers = require('./handlers')

exports = module.exports = {}

/**
 * hapi plugin with counter endpoint.
 * @module plugins/counter
 */

/** Configuration object for counter endpoint */
exports.plugin = {
	register: (server) => {
		server.route([
			{
				method: 'POST',
				path: '/counter',
				options: handlers.counter
			}
		])
	},
	name: 'anapi-counter'
}
