'use strict';

/**
 * `isLocalNetwork` policy.
 */

module.exports = async (ctx, next) => {
  // Add your own logic here.
  console.log('In isLocalNetwork policy.');

  await next();
};
