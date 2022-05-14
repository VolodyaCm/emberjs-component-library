'use strict';

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  included(app, parentAddon) {
    this.options = {
      ...this.options,
      ...(app || parentAddon).options,
    };

    this._super.included.apply(this, arguments);
  },
};
