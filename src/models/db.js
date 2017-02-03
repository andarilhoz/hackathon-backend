'use strict'

const db = require('mongoose'),
	      config = require('../../config/config')
      
db.Promise = require('bluebird');

db.connect('mongodb://test:test@ds056789.mlab.com:56789/hackathon')

module.export = db.connection




