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
 * Initializes a new instance of the DeltaNodesCheckHealthEvaluation class.
 * @constructor
 * The evaluation of the delta nodes check health
 * @member {array} [unhealthyEvaluations]
 * 
 * @member {number} [baselineErrorCount]
 * 
 * @member {number} [baselineTotalCount]
 * 
 * @member {number} [totalCount]
 * 
 * @member {number} [maxPercentDeltaUnhealthyNodes]
 * 
 */
function DeltaNodesCheckHealthEvaluation() {
  DeltaNodesCheckHealthEvaluation['super_'].call(this);
}

util.inherits(DeltaNodesCheckHealthEvaluation, models['HealthEvaluation']);

/**
 * Defines the metadata of DeltaNodesCheckHealthEvaluation
 *
 * @returns {object} metadata of DeltaNodesCheckHealthEvaluation
 *
 */
DeltaNodesCheckHealthEvaluation.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DeltaNodesCheck',
    type: {
      name: 'Composite',
      className: 'DeltaNodesCheckHealthEvaluation',
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
        unhealthyEvaluations: {
          required: false,
          serializedName: 'UnhealthyEvaluations',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'UnhealthyEvaluationElementType',
                type: {
                  name: 'Composite',
                  className: 'UnhealthyEvaluation'
                }
            }
          }
        },
        baselineErrorCount: {
          required: false,
          serializedName: 'BaselineErrorCount',
          type: {
            name: 'Number'
          }
        },
        baselineTotalCount: {
          required: false,
          serializedName: 'BaselineTotalCount',
          type: {
            name: 'Number'
          }
        },
        totalCount: {
          required: false,
          serializedName: 'TotalCount',
          type: {
            name: 'Number'
          }
        },
        maxPercentDeltaUnhealthyNodes: {
          required: false,
          serializedName: 'MaxPercentDeltaUnhealthyNodes',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = DeltaNodesCheckHealthEvaluation;