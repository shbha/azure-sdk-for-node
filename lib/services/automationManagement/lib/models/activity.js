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

const models = require('./index');

/**
 * Definition of the activity.
 *
 */
class Activity {
  /**
   * Create a Activity.
   * @member {string} [id] Gets or sets the id of the resource.
   * @member {string} [name] Gets the name of the activity.
   * @member {string} [definition] Gets or sets the user name of the activity.
   * @member {array} [parameterSets] Gets or sets the parameter sets of the
   * activity.
   * @member {array} [outputTypes] Gets or sets the output types of the
   * activity.
   * @member {date} [creationTime] Gets or sets the creation time.
   * @member {date} [lastModifiedTime] Gets or sets the last modified time.
   * @member {string} [description] Gets or sets the description.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Activity
   *
   * @returns {object} metadata of Activity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Activity',
      type: {
        name: 'Composite',
        className: 'Activity',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          definition: {
            required: false,
            serializedName: 'properties.definition',
            type: {
              name: 'String'
            }
          },
          parameterSets: {
            required: false,
            serializedName: 'properties.parameterSets',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActivityParameterSetElementType',
                  type: {
                    name: 'Composite',
                    className: 'ActivityParameterSet'
                  }
              }
            }
          },
          outputTypes: {
            required: false,
            serializedName: 'properties.outputTypes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActivityOutputTypeElementType',
                  type: {
                    name: 'Composite',
                    className: 'ActivityOutputType'
                  }
              }
            }
          },
          creationTime: {
            required: false,
            serializedName: 'properties.creationTime',
            type: {
              name: 'DateTime'
            }
          },
          lastModifiedTime: {
            required: false,
            serializedName: 'properties.lastModifiedTime',
            type: {
              name: 'DateTime'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Activity;