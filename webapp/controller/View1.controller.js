sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"

], function (Controller,MessageBox) {
    "use strict";

    return Controller.extend("creatingtwoips.controller.View1", {
        onInit() {
        },
        onSubmit: function(){
            var inputbox1 = this.getView().byId("input1").getValue();
            var inputbox2 = this.getView().byId("input2").getValue();

            if (inputbox1 ==="" || inputbox2 ===""){
                
                alert("Both inputs are required!");
            }
            else {
                
                sap.m.MessageBox.success("Data submitted successfully");
            }

        }
    });
});