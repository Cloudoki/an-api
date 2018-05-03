const boom = require('boom')

const persistence = require('./persistence')

exports = module.exports = {}

/**
 * Module responsbile for all counter functions.
 * @module services/counter
 */

/**
 * Increments an id value
 * @async
 * @param		{Number}	id	- id
 * @throws	{Error}				- an error if database query fails
 * @returns	{Void}				-
 */
exports.plusOne = async (id) => {

	const ok = await persistence.increment(id, 1)

	if (!ok) {
		throw boom.badRequest()
	}

}

/**
 * Get all ids values
 * @async
 * @param		{Number}	id	- id
 * @throws	{error}				- an error if database query fails
 * @returns	{Percentage}	- returns an object with the percentage
 */
exports.getPercentage = async (id) => {

	const entries = await persistence.getAll()

	let chosenValue = 0
	let total = 0

	for (const entry of entries) {

		if (entry.id === id) {
			chosenValue = entry.value
		}

		total += entry.value

	}

	const percentage = Math.round(chosenValue * 100 / total)

	return { 'percentage': percentage }

}

/**
* Entry Object
* @typedef	{Object}	Entry
* @property	{Number}	id		- ID
* @property	{Number}	value	- Value
*/

/**
* Percentage Object
* @typedef	{Object}	Percentage
* @property	{Number}	percentage	- percentage
*/
