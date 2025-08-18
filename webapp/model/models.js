sap.ui.define([
  "sap/ui/model/odata/v2/ODataModel",
  "sap/ui/model/json/JSONModel"
], function (ODataModel, JSONModel) {
  "use strict";

  return {
    createDeviceModel: function () {
      var oModel = new JSONModel({
        isTouch: sap.ui.Device.support.touch
      });
      oModel.setDefaultBindingMode("OneWay");
      return oModel;
    },
    createS4Model: function () {
      return new ODataModel({
        serviceUrl: "/sap/opu/odata/sap/API_SALES_ORDER_SRV/",
        useBatch: false
      });
    },
    createSFModel: function () {
      return new ODataModel({
        serviceUrl: "/sfapi/v1/",
        useBatch: false
      });
    }
  };
});
