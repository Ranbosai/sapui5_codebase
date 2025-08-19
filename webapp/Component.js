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

      // sample data models for local testing
      var oSalesModel = new JSONModel();
      oSalesModel.loadData(sap.ui.require.toUrl("sap/ui/demo/dashboard/model/salesOrders.json"), null, false);
      var oEmployeesModel = new JSONModel();
      oEmployeesModel.loadData(sap.ui.require.toUrl("sap/ui/demo/dashboard/model/employees.json"), null, false);
      this.setModel(oSalesModel, "sales");
      this.setModel(oEmployeesModel, "employees");

      this.getRouter().initialize();
    }
  });
});
