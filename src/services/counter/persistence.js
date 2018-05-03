const knex = require('../../utils/knex')

exports = module.exports = {}

/**
 * Insert a user into the database
 * @async
 * @param		{Number}		id		- ID
 * @param		{Number}		value	-	Value to increment
 * @throws	{Error}						- an error if password hash fails or if database query fails
 * @returns	{number[]}				- returns an array containg the id of the created user
 */
exports.increment = async (id, value) => {
	return await knex('counter').increment('value', value).where({ 'id': id })
}

/**
 * Count users by email
 * @async
 * @throws	{error}					- an error if database query fails
 * @returns	{object[]}			- returns and array containg an object with the count
 */
exports.getAll = async () => {
	return await knex('counter').select()
}
