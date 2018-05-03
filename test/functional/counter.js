const Code = require('code')
const expect = Code.expect
const Lab = require('lab')
const lab = exports.lab = Lab.script()

const describe = lab.describe
const it = lab.it
const after = lab.after

const server = require('../../src/index.js')

describe('functional tests - counter', () => {

	it('should get percentage', async () => {

		let response = await server.inject({
			method: 'POST',
			url: '/counter',
			payload: {
				correct: 6
			}
		})

		expect(response.statusCode).to.equal(400)

		response = await server.inject({
			method: 'POST',
			url: '/counter',
			payload: {
				correct: 1
			}
		})

		expect(response.statusCode).to.equal(200)

		let body = JSON.parse(response.payload)

		expect(body.percentage).to.equal(100)

		response = await server.inject({
			method: 'POST',
			url: '/counter',
			payload: {
				correct: 2
			}
		})

		expect(response.statusCode).to.equal(200)

		body = JSON.parse(response.payload)

		expect(body.percentage).to.equal(50)

		response = await server.inject({
			method: 'POST',
			url: '/counter',
			payload: {
				correct: 3
			}
		})

		expect(response.statusCode).to.equal(200)

		body = JSON.parse(response.payload)

		expect(body.percentage).to.equal(33)

		response = await server.inject({
			method: 'POST',
			url: '/counter',
			payload: {
				correct: 4
			}
		})

		expect(response.statusCode).to.equal(200)

		body = JSON.parse(response.payload)

		expect(body.percentage).to.equal(25)

		response = await server.inject({
			method: 'POST',
			url: '/counter',
			payload: {
				correct: 5
			}
		})

		expect(response.statusCode).to.equal(200)

		body = JSON.parse(response.payload)

		expect(body.percentage).to.equal(20)

	})

})
