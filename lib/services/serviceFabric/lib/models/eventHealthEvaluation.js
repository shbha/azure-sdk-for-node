/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the EventHealthEvaluation class.
 * @constructor
 * The evaluation of the event health
 * @member {object} [unhealthyEvent]
 * 
 * @member {string} [unhealthyEvent.sourceId]
 * 
 * @member {string} [unhealthyEvent.property]
 * 
 * @member {string} [unhealthyEvent.healthState] Possible values include:
 * 'Invalid', 'Ok', 'Warning', 'Error', 'Unknown'
 * 
 * @member {string} [unhealthyEvent.timeToLiveInMilliSeconds]
 * 
 * @member {string} [unhealthyEvent.description]
 * 
 * @member {string} [unhealthyEvent.sequenceNumber]
 * 
 * @member {boolean} [unhealthyEvent.removeWhenExpired]
 * 
 * @member {string} [unhealthyEvent.sourceUtcTimestamp]
 * 
 * @member {string} [unhealthyEvent.lastModifiedUtcTimestamp]
 * 
 * @member {boolean} [unhealthyEvent.isExpired]
 * 
 * @member {string} [unhealthyEvent.lastOkTransitionAt]
 * 
 * @member {string} [unhealthyEvent.lastWarningTransitionAt]
 * 
 * @member {string} [unhealthyEvent.lastErrorTransitionAt]
 * 
 * @member {boolean} [considerWarningAsError]
 * 
 */
function EventHealthEvaluation() {
  EventHealthEvaluation['super_'].call(this);
}

util.inherits(EventHealthEvaluation, models['HealthEvaluation']);

/**
 * Defines the metadata of EventHealthEvaluation
 *
 * @returns {object} metadata of EventHealthEvaluation
 *
 */
EventHealthEvaluation.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Event',
    type: {
      name: 'Composite',
      className: 'EventHealthEvaluation',
      modelProperties: {
        description: {
          required: false,
          serializedName: 'Description',
          type: {
            name: 'String'
          }
        },
        aggregatedHealthState: {
          required: false,
          serializedName: 'AggregatedHealthState',
          type: {
            name: 'String'
          }
        },
        Kind: {
          required: true,
          serializedName: 'Kind',
          type: {
            name: 'String'
          }
        },
        unhealthyEvent: {
          required: false,
          serializedName: 'UnhealthyEvent',
          type: {
            name: 'Composite',
            className: 'HealthEvent'
          }
        },
        considerWarningAsError: {
          required: false,
          serializedName: 'ConsiderWarningAsError',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = EventHealthEvaluation;