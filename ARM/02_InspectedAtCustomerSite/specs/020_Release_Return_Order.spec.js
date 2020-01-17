/* eslint-disable no-undef */
"use strict";

describe("Generate return delivery and get generated return order number & return delivery number.", function () {

  var references = require("../data/references.json");  //Store global variant

  it("step1:Save and release on edit object page.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
    var ui5ControlProperties = {
    	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"type":"Emphasized","text":[{"path":"i18n>SaveAndRelease"}],"enabled":[{"path":"editObjectView>/containsItems"}]}},
    	"parentProperties":{"metadata":"sap.m.OverflowToolbar","mProperties":{}},
    	"prevSiblingProperties":{"metadata":"sap.m.ToolbarSpacer","mProperties":{}},
    	"nextSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":[{"path":"i18n>Save"}]}},
    	"childProperties":{}
    };
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(15000);
  });

});
