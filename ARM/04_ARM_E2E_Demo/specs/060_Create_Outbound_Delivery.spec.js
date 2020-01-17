/* eslint-disable no-undef */
"use strict";

describe("Create outbound delivery.", function () {

  var url         = require("../data/URL.json");
  var user        = require("../data/user.json");
  var references  = require("../data/references.json");

  it("step 1: Navigate to create outbound delivery app.", async function() {
		await browser.sleep(3000);
		await ui5.common.navigation.navigateToUrl(url.createOutboundDelivery_app);
	});

	it("step 2: Login to System", async function() {
		await ui5.common.session.loginSapCloud(user.shipping_specialist,"Welcome1!");
	});

  it("step3:Fill Document number.", async function() {
  //----------------------- Block for sap.m.MultiInput - Perform Set-Value -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.MultiInput","mProperties":{"value":[{"path":"fi1t3rM0d31>/SDDocument/value"}]}},
  	"parentProperties":{"metadata":"sap.ui.layout.VerticalLayout","mProperties":{}},
  	"prevSiblingProperties":{"metadata":"sap.m.Label","mProperties":{"text":"Sales Document"}},
  	"nextSiblingProperties":{},
  	"childProperties":{"metadata":"sap.m.Tokenizer","mProperties":{}}
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
  await common.userInteraction.clearAndFill(ui5ControlProperties, references.replacementDeliveryOrder);
	await browser.sleep(3000);
  });

  it("step4:Click [Go] button to search.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Go","type":"Emphasized"}},
  	"parentProperties":{"metadata":"sap.ui.layout.HorizontalLayout","mProperties":{}},
  	"prevSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Adapt Filters (2)","type":"Transparent"}},
  	"nextSiblingProperties":{},
  	"childProperties":{}
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
  await common.userInteraction.click(ui5ControlProperties);
	await browser.sleep(3000);
  });

  it("step5:Select one item.", async function() {
  //----------------------- Block for sap.m.ColumnListItem - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.CheckBox","mProperties":{"id":"*selectMulti"}}
  };
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step6:Click [Create Delivery] button.", async function() {
    //----------------------- Block for sap.m.Button - Perform Click -----------------------
    var ui5ControlProperties = {
    	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Create Deliveries (1)","type":"Emphasized","enabled":[{"path":"_templPriv>/generic/listCommons/breakoutActionsEnabled/createDelivery/enabled"}]}},
    	"parentProperties":{"metadata":"sap.m.OverflowToolbar","mProperties":{}},
    	"prevSiblingProperties":{"metadata":"sap.m.ToolbarSpacer","mProperties":{}},
    	"nextSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Display Log","type":"Transparent"}},
    	"childProperties":{}
    };
    await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
    await common.userInteraction.click(ui5ControlProperties);
    await browser.sleep(5000);
    });

    it("step7:Click [Display Log] button.", async function() {
    //----------------------- Block for sap.m.Button - Perform Click -----------------------
    var ui5ControlProperties = {
    	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Display Log","type":"Transparent","enabled":[{"path":"_templPriv>/generic/listCommons/breakoutActionsEnabled/displayLog/enabled"}]}},
    	"parentProperties":{"metadata":"sap.m.OverflowToolbar","mProperties":{}}
    };
    await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
    await common.userInteraction.click(ui5ControlProperties);
    await browser.sleep(5000);
    });

  it("step8:Get outbound delivery number.", async function() {
  //----------------------- Block for sap.ui.comp.navpopover.SmartLink - Perform Click -----------------------
//  var elem = await non_ui5.common.locator.getElementByClass("[id*='C_CollectiveProcessing--DocumentsTableSDDocumentLink'][role='button']");
	var elem = await non_ui5.common.locator.getElementByCssContainingText("[id*='C_CollectiveProcessing--DocumentsTableSDDocumentLink'][role='button']");
//  var elem = await non_ui5.common.locator.getElementByCssContainingText(".C_CollectiveProcessing--DocumentsTableSDDocumentLink");
  var cratedOutboundDeliveryNumber = await elem.getText();
  references.cratedOutboundDeliveryNumber = cratedOutboundDeliveryNumber;
  console.log("Created Outboud Delivery Number:  " + cratedOutboundDeliveryNumber);
  await non_ui5.common.locator.highlightElement(elem,1000);
  await browser.sleep(1000);
  });

  it("Step 9: Logout", async function() {
		await ui5.common.session.logout();
	});

});
