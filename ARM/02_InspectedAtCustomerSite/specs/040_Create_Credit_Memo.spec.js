/* eslint-disable no-undef */
"use strict";

describe("Create billing document.", function () {

  var url         = require("../data/URL.json");
  var user        = require("../data/user.json");
  var references  = require("../data/references.json");

  it("step 1: Navigate to billing document app.", async function() {
		await browser.sleep(3000);
		await ui5.common.navigation.navigateToUrl(url.billingDocument_app);
	});

	it("step 2: Login to System", async function() {
		await ui5.common.session.loginSapCloud(user.billing_clerk,"Welcome1!");
	});

  it("step3:Input & search.", async function() {
  //----------------------- Block for sap.m.MultiInput - Perform Set-Value -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.MultiInput","mProperties":{"value":[{"path":"fi1t3rM0d31>/ReferenceSDDocument/value"}]}},
  	"parentProperties":{"metadata":"sap.ui.layout.VerticalLayout","mProperties":{}},
  	"prevSiblingProperties":{"metadata":"sap.m.Label","mProperties":{"text":"SD Document"}},
  	"nextSiblingProperties":{},
  	"childProperties":{"metadata":"sap.m.Tokenizer","mProperties":{}}
  };
  await common.userInteraction.clearAndFill(ui5ControlProperties, references.creditMemo);
  await ui5.common.userInteraction.pressEnter();
  await browser.sleep(10000);
  });

  it("step4:Select one item.", async function() {
  //----------------------- Block for sap.m.ColumnListItem - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.CheckBox","mProperties":{"id":"*selectMulti"}}
  };
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step5:Click [Create] button.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"type":"Emphasized","text":[{"path":"i18n>CREATE_INVOICE_BUTTON_TEXT"}],"enabled":[{"path":"ui>/createEnabled"}]}},
  	"parentProperties":{"metadata":"sap.m.OverflowToolbar","mProperties":{}},
  	"prevSiblingProperties":{"metadata":"sap.m.ToolbarSpacer","mProperties":{}},
  	"nextSiblingProperties":{"metadata":"sap.m.OverflowToolbarButton","mProperties":{"icon":"sap-icon://settings","text":[{"path":"i18n>INVOICE_SETTINGS_BUTTON_TEXT"}],"tooltip":[{"path":"i18n>INVOICE_SETTINGS_DIALOG_TITLE"}]}},
  	"childProperties":{}
  };
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(10000);
  });


it("step6:Save billing document.", async function() {
//----------------------- Block for sap.m.Button - Perform Click -----------------------
var ui5ControlProperties = {
	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"id":"*saveButton"}},
};
await common.userInteraction.click(ui5ControlProperties);
await browser.sleep(10000);
});

it("step7:Post billing document.", async function() {
//----------------------- Block for sap.m.Button - Perform Click -----------------------
var ui5ControlProperties = {
	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"id":"*postDocumentButton"}},
};
await common.userInteraction.click(ui5ControlProperties);
await browser.sleep(10000);
});

});
