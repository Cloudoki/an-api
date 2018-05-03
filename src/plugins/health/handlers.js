exports = module.exports = {}

/** handler for /health endpoint */
exports.healthCheck = {
	handler: async (request, h) => {

		return h.response().code(200)

	},
	id: 'anapi-health-check',
	description: 'health check endpoint',
	notes: ['It checks if the api is able to connect to the database'],
	tags: ['api'],
	plugins: {
		'hapi-swagger': {
			'responses': {
				'200': { 'description': 'OK' },
				'503': { 'description': 'Service Unavailable' }
			}
		},
	}
}
