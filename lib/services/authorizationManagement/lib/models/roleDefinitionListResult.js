/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the RoleDefinitionListResult class.
 * @constructor
 * Role definition list operation result.
 *
 * @member {string} [nextLink] Gets or sets the URL to get the next set of
 * role definitions results.
 * 
 */
function RoleDefinitionListResult() {
}

util.inherits(RoleDefinitionListResult, Array);

/**
 * Defines the metadata of RoleDefinitionListResult
 *
 * @returns {object} metadata of RoleDefinitionListResult
 *
 */
RoleDefinitionListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'RoleDefinitionListResult',
    type: {
      name: 'Composite',
      className: 'RoleDefinitionListResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'RoleDefinitionElementType',
                type: {
                  name: 'Composite',
                  className: 'RoleDefinition'
                }
            }
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = RoleDefinitionListResult;