exports.logging = {
    // http://www.senchalabs.org/connect/middleware-logger.html
    express_format: '[:date] ":method :url HTTP/:http-version" :status :res[content-length] - :response-time ms ":referrer" :remote-addr'
};

exports.app = {
	dropit: {
		port : 3000
	}
};

exports.db = {
    url: 'mongodb://drop_master:qwerty123@localhost:27017/dropit',
    opts: {}
};

