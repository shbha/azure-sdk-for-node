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
 * Properties of a network interface.
 *
 */
class NetworkInterfaceProperties {
  /**
   * Create a NetworkInterfaceProperties.
   * @member {string} [virtualNetworkId] The resource ID of the virtual
   * network.
   * @member {string} [subnetId] The resource ID of the sub net.
   * @member {string} [publicIpAddressId] The resource ID of the public IP
   * address.
   * @member {string} [publicIpAddress] The public IP address.
   * @member {string} [privateIpAddress] The private IP address.
   * @member {string} [dnsName] The DNS name.
   * @member {string} [rdpAuthority] The RdpAuthority property is a server DNS
   * host name or IP address followed by the service port number for RDP
   * (Remote Desktop Protocol).
   * @member {string} [sshAuthority] The SshAuthority property is a server DNS
   * host name or IP address followed by the service port number for SSH.
   * @member {object} [sharedPublicIpAddressConfiguration] The configuration
   * for sharing a public IP address across multiple virtual machines.
   * @member {array} [sharedPublicIpAddressConfiguration.inboundNatRules] The
   * incoming NAT rules
   */
  constructor() {
  }

  /**
   * Defines the metadata of NetworkInterfaceProperties
   *
   * @returns {object} metadata of NetworkInterfaceProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkInterfaceProperties',
      type: {
        name: 'Composite',
        className: 'NetworkInterfaceProperties',
        modelProperties: {
          virtualNetworkId: {
            required: false,
            serializedName: 'virtualNetworkId',
            type: {
              name: 'String'
            }
          },
          subnetId: {
            required: false,
            serializedName: 'subnetId',
            type: {
              name: 'String'
            }
          },
          publicIpAddressId: {
            required: false,
            serializedName: 'publicIpAddressId',
            type: {
              name: 'String'
            }
          },
          publicIpAddress: {
            required: false,
            serializedName: 'publicIpAddress',
            type: {
              name: 'String'
            }
          },
          privateIpAddress: {
            required: false,
            serializedName: 'privateIpAddress',
            type: {
              name: 'String'
            }
          },
          dnsName: {
            required: false,
            serializedName: 'dnsName',
            type: {
              name: 'String'
            }
          },
          rdpAuthority: {
            required: false,
            serializedName: 'rdpAuthority',
            type: {
              name: 'String'
            }
          },
          sshAuthority: {
            required: false,
            serializedName: 'sshAuthority',
            type: {
              name: 'String'
            }
          },
          sharedPublicIpAddressConfiguration: {
            required: false,
            serializedName: 'sharedPublicIpAddressConfiguration',
            type: {
              name: 'Composite',
              className: 'SharedPublicIpAddressConfiguration'
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkInterfaceProperties;
