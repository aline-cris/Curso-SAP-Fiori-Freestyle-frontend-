sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("zovaline.controller.View1", {
        onInit: function () {

        },

        onPress: function(){
            alert("Hello World");
        }
    });
});
