'use strict'

/**
 * Parse input for a non-empty String, or a
 * toString method that returns a non-empty String.
 * @param {Object} log    - Log Data object.
 * @param {*} log.message - The requested message.
 * @returns {Object} log  - Log Data object.
 */
function getMessage () {
  // fail if input cannot create a string
  if (!this.is.toString(this.message)) {
    throw new LogError('message:type', typeof this.message)
  }

  this.message = String(this.message)
  // message is empty
  if (this.is.emptyString(this.message)) {
    throw new LogError('message:empty')
  }

  return log
}

module.exports = getMessage
