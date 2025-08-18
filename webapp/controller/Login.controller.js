sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("sap.ui.demo.dashboard.controller.Login", {
    onLogin: function () {
      var oView = this.getView();
      var sEmpId = oView.byId("empId").getValue();
      var sPassword = oView.byId("password").getValue();
      var oSFModel = this.getOwnerComponent().getModel("sf");

      if (!sEmpId) {
        MessageToast.show("Please enter Employee ID");
        return;
      }

      var that = this;
      oSFModel.read("/Employee('" + sEmpId + "')", {
        success: function () {
          // SuccessFactors validation succeeded
          that.getOwnerComponent().getRouter().navTo("dashboard");
        },
        error: function () {
          MessageToast.show("Invalid Employee ID");
        }
      });
    }
  });
});
