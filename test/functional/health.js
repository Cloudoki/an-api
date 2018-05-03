const Code = require('code')
const expect = Code.expect
const Lab = require('lab')
const lab = exports.lab = Lab.script()

const describe = lab.describe
const it = lab.it
const after = lab.after

const server = require('../../src/index.js')

describe('functional tests - health', () => {

	it('should get health', async () => {

		const response = await server.inject({
			method: 'GET',
			url: '/health'
		})

		expect(response.statusCode).to.equal(200)
	})

})
