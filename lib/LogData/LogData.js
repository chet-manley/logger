'use strict'

const LogError = require('../LogError')
const {is} = require('../../../Toolbox')

const LogDataPrototype = {
  LogError,
  is,
  emit () {
    return prepareLog()
      .then(emitLog)
      .catch(emitError)
    /*
    {
      if (this.instance.levels.error <= this.priority) {
        this.instance.log(e.toString(), this.instance.levels.error)
      }
      if (this.instance.throw) {throw e}
      return e
    }
    // not allowed to log this message
    if (!log.allowed) {return false}

    // emit the log
    console.log(`<${log.priority}>${log.message}`)
    */
  },
}

// the LogData Promise Factory
function LogData (data = {}) {
  return new Promise(resolve => {
    const logData = Object.create(LogDataPrototype)
    Object.assign(logData, {
      defaults: this.defaults,
      enabled: this.enabled,
      setPrio: this.priority,
      throw: this.throw,
    }, data)
    return resolve(prepareLog())
  })
}

module.exports = LogData
