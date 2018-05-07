const joi = require('joi')

const counterSrvc = require('../../services/counter')

exports = module.exports = {}

/** handler for POST /counter endpoint */
exports.counter = {
	validate: {
		options: {
			stripUnknown: {
				objects: true
			}
		},
		payload: joi.object({
			correct: joi.number().integer().min(0).required().example(1)
		}).label('idInfo')
	},
	response: {
		status: {
			200: joi.object({
				percentage: joi.number().integer().positive().required().example(10)
			}).label('percentage')
		}
	},
	handler: async (request, h) => {

		await counterSrvc.plusOne(request.payload.correct + 1)

		const percentage = await counterSrvc.getPercentage(request.payload.correct + 1)

		return h.response(percentage).code(200)

	},
	id: 'anapi-counter-increment',
	description: 'counter endpoint',
	notes: ['It increments by 1 an id value'],
	tags: ['api'],
	plugins: {
		'hapi-swagger': {
			'responses': {
				'200': { 'description': 'OK' },
				'400': { 'description': 'Bad Request' }
			}
		},
	}
}
