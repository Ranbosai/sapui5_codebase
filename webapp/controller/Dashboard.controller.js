sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("sap.ui.demo.dashboard.controller.Dashboard", {
    onInit: function () {
      // bind sample sales order data
      var oSalesModel = this.getOwnerComponent().getModel("sales");
      this.getView().setModel(oSalesModel);
    }
  });
});
