sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/demo/dashboard/model/models"
], function (UIComponent, JSONModel, models) {
  "use strict";

  return UIComponent.extend("sap.ui.demo.dashboard.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
      this.setModel(models.createDeviceModel(), "device");
      this.setModel(models.createS4Model(), "s4");
      this.setModel(models.createSFModel(), "sf");
      this.getRouter().initialize();
    }
  });
});
