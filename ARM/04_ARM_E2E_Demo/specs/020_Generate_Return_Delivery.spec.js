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
  await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step2:Naviaget to edit page.", async function() {
    await browser.sleep(3000);
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
	"elementProperties":{"metadata":"sap.m.ColumnListItem","mProperties":{"type":"Navigation"}},
	"parentProperties":{"metadata":"sap.m.Table","mProperties":{"sticky":["ColumnHeaders","HeaderToolbar"],"items":[{"path":"/C_CustomerReturn"}]}},
	"prevSiblingProperties":{"metadata":"sap.m.Column","mProperties":{}},
};
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(1000);
  });

  it("step3:Process flow tab click.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Process Flow"}},
  	"parentProperties":{"metadata":"sap.uxap.AnchorBar","mProperties":{}},
  	"prevSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Attachments"}},
  	"nextSiblingProperties":{"metadata":"sap.ui.layout.HorizontalLayout","mProperties":{}},
  	"childProperties":{}
  };
//  await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(10000);
  });

  it("step4:Get delivery number.", async function() {
  //----------------------- Block for sap.suite.ui.commons.ProcessFlowNode - Perform Click -----------------------
  var elem = await non_ui5.common.locator.getElementByCss("span[id*='PFCustomerReturn-2-nodeid-anchor-title-inner']");
  debugger;
  var soNumber = await elem.getText();
  var deliveryNumber = soNumber.slice(20,29);
  references.deliveryNumber = deliveryNumber;
  console.log("Delivery number:  " + deliveryNumber);
  await non_ui5.common.locator.highlightElement(elem,1000);
  });

  it("Step5: Logout", async function() {
		await ui5.common.session.logout();
	});

});
