const schema = {
	env: {
		doc: 'The API environment.',
		format: ['production', 'staging', 'test', 'development'],
		default: 'production',
		env: 'AN_API_NODE_ENV'
	},
	server: {
		host: {
			doc: 'The IP address to bind.',
			format: 'ipaddress',
			default: '0.0.0.0',
			env: 'AN_API_IP_ADDRESS',
		},
		port: {
			doc: 'The port to bind.',
			format: 'port',
			default: 3000,
			env: 'AN_API_PORT'
		},
		routes: {
			cors: {
				origin: {
					doc: 'Server default CORS origin',
					format: Array,
					env: 'AN_API_DEFAULT_CORS_ORIGINS',
					default: []
				},
				additionalHeaders: {
					doc: 'Server default CORS headers',
					format: Array,
					env: 'AN_API_DEFAULT_CORS_HEADERS',
					default: []
				}
			}
		}
	},
	database: {
		options: {
			host: {
				doc: 'database hostname',
				format: String,
				env: 'AN_API_DATABASE_HOST',
				default: 'localhost'
			},
			port: {
				doc: 'database connection port',
				format: Number,
				env: 'AN_API_DATABASE_PORT',
				default: 3306
			},
			database: {
				doc: 'database schema',
				format: String,
				env: 'AN_API_DATABASE_SCHEMA',
				default: 'anapi'
			},
			user: {
				doc: 'database user',
				format: String,
				env: 'AN_API_DATABASE_USER',
				default: 'root'
			},
			password: {
				doc: 'database password',
				format: String,
				env: 'AN_API_DATABASE_PASSWORD',
				default: 'cloudoki'
			}
		},
		pool: {
			min: {
				doc: 'minimum number of connection with the database',
				format: Number,
				env: 'AN_API_MODULE_USER_DB_POOL_MIN',
				default: 2
			},
			max: {
				doc: 'maximum number of connection with the database',
				format: Number,
				env: 'AN_API_MODULE_USER_DB_POOL_MAX',
				default: 10
			},
			refreshIdle: {
				doc: 'Specifies whether idle resources at or below the min threshold should be destroyed/re-created',
				format: Boolean,
				env: 'AN_API_MODULE_USER_DB_POOL_REFRESH_IDLE',
				default: false
			}
		},
		acquireConnectionTimeout: {
			doc: 'Time in ms to throw a timeout error when acquiring a connection is not possible',
			format: Number,
			env: 'AN_API_MODULE_USER_DB_CONN_TIMEOUT',
			default: 5000
		}
	},
	logger: {
		name: {
			doc: 'API logger name',
			format: String,
			default: 'an-api'
		},
		level: {
			doc: 'Logger level',
			format: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
			env: 'AN_API_LOG_LEVEL',
			default: 'trace'
		}
	},
	plugins: {
		doc: 'Plugins to load',
		format: Array,
		env: 'AN_API_ENABLED_PLUGINS',
		default: [
			'inert',
			'vision',
			'./plugins/internal/swagger',
			'./plugins/internal/good',
			'./plugins/health'
		]
	}
}

module.exports = schema
