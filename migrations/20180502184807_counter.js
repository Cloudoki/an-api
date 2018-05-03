exports.up = function (knex) {
	return Promise.all([
		knex.schema.createTable('counter', function (table) {
			table.increments('id').primary()
			table.integer('value')
		}).then(function () {
			return knex('counter').insert([
				{ value: 0 },
				{ value: 0 },
				{ value: 0 },
				{ value: 0 },
				{ value: 0 },
			])
		})
	])
}

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('counter')
}
