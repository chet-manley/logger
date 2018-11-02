'use strict'

const getMessage = require('./getMessage')
const getPriority = require('./getPriority')

const ableToLog = compose(getMessage, getPriority)

module.exports = ableToLog
