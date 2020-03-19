/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const crowdFunding = require('./lib/crowdFunding');

module.exports.crowdFunding = crowdFunding;
module.exports.contracts = [ crowdFunding ];
