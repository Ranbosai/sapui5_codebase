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

      if (!sEmpId) {
        MessageToast.show("Please enter Employee ID");
        return;
      }

      var aEmployees = this.getOwnerComponent().getModel("employees").getProperty("/Employees");
      var bValid = aEmployees.some(function (oEmp) {
        return oEmp.EmployeeID === sEmpId && oEmp.Password === sPassword;
      });

      if (bValid) {
        this.getOwnerComponent().getRouter().navTo("dashboard");
      } else {
        MessageToast.show("Invalid Employee ID");
      }
    }
  });
});
