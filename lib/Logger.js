/* eslint-disable no-console */
'use strict'

const config = require('./config')
const LogData = require('./lib/LogData')

const LoggerPrototype = {
  get name () {return this.name},
  get level () {
    return this.priority
  },
  set level (prio) {
    return this.priority = prio
  },

  async log (message, priority = config.priority) {
    // message is required
    if (arguments.length === 0) {return false}

    // return log promise
    return await LogData.call({message, priority})
  }
}

// add default configuration to prototype
Object.assign(LoggerPrototype, {
  enabled: config.enabled,
  priority: config.priority,
  throw: config.throw,
},
{defaults: Object.freeze(config)},)

// create unary wrapper methods for each priority's level(s)
for (const [level, priority] of Object.entries(config.levels)) {
  LoggerPrototype[level] = function (message) {
    return this.log(message, priority)
  }
}

// the Logger Factory
function Logger (cfg = {}) {
  const logger = Object.create(LoggerPrototype)
  Object.assign(logger, cfg)
  return logger
}

module.exports = Logger
