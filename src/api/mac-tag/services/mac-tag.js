'use strict';

/**
 * mac-tag service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mac-tag.mac-tag');
