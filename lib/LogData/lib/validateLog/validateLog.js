'use strict'

const getMessage = require('./getMessage')
const getPriority = require('./getPriority')
const getPermission = require('./getPermission')

const validateLog = compose(getMessage, getPriority, getPermission)

module.exports = validateLog
