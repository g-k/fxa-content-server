/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Some help text explaining to the user why they
 * should connect another device.
 */
define(function (require, exports, module) {
  'use strict';

  const BackMixin = require('views/mixins/back-mixin');
  const BaseView = require('views/base');
  const Cocktail = require('cocktail');
  const ModalPanelMixin = require('views/mixins/modal-panel-mixin');
  const Template = require('stache!templates/why_connect_another_device');

  const View = BaseView.extend({
    template: Template,

    triggers: {
      'modal-cancel': 'back'
    },

    afterRender () {
      this.openPanel();
    }
  });

  Cocktail.mixin(
    View,
    BackMixin,
    ModalPanelMixin
  );

  module.exports = View;
});
