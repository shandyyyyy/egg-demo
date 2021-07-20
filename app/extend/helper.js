const moment = require('moment');

exports.relativeTime = time => moment(time*1000).fromNow();