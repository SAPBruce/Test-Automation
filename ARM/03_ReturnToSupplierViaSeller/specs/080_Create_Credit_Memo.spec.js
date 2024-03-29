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
  //----------------------- Block for sap.m.SearchField - Perform Set-Value -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.SearchField","mProperties":{"value":[{"path":"fi1t3rM0d31>/_BASIC_SEARCH_FIELD"}]}},
  	"parentProperties":{"metadata":"sap.m.Toolbar","mProperties":{}},
  	"prevSiblingProperties":{},
  	"nextSiblingProperties":{"metadata":"sap.m.ToolbarSpacer","mProperties":{}},
  	"childProperties":{}
  };
  await common.userInteraction.clearAndFill(ui5ControlProperties, references.cratedOutboundDeliveryNumber);
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
  await ui5.common.locator.highlightElement(ui5ControlProperties,2000);
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(5000);
  });

/*  it("step1:Billing Type.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var elem = await non_ui5.common.locator.getElementByCss("[id*='billingDocumentTypePicker-inner']");
  await non_ui5.common.locator.highlightElement(elem,2000);
  await non_ui5.common.userInteraction.fill(elem, "Invoice (F2)");
  await common.userInteraction.pressTab();
  await browser.sleep(2000);
  });

  it("step1:Billing Date.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var elem = await non_ui5.common.locator.getElementByCss("[id*='InvoiceDatePicker-inner']");
  await non_ui5.common.locator.highlightElement(elem,2000);
  await non_ui5.common.userInteraction.fill(elem, "09.12.2019");
  await common.userInteraction.pressTab();
//  await browser.sleep(5000);
  });

it("step6:Click [OK] button.", async function() {
//----------------------- Block for sap.m.Button - Perform Click -----------------------
var ui5ControlProperties = {
	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"id":"*dialogDatePickerButtonOK"}}
};
await ui5.common.locator.highlightElement(ui5ControlProperties,2000);
await common.userInteraction.click(ui5ControlProperties);
await browser.sleep(3000);
});*/

it("step6:Save billing document.", async function() {
//----------------------- Block for sap.m.Button - Perform Click -----------------------
var ui5ControlProperties = {
	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"id":"*saveButton"}},
};
await ui5.common.locator.highlightElement(ui5ControlProperties,2000);
await common.userInteraction.click(ui5ControlProperties);
await browser.sleep(3000);
});

it("step7:Post billing document.", async function() {
//----------------------- Block for sap.m.Button - Perform Click -----------------------
var ui5ControlProperties = {
	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"id":"*postDocumentButton"}},
};
await ui5.common.locator.highlightElement(ui5ControlProperties,2000);
await common.userInteraction.click(ui5ControlProperties);
await browser.sleep(5000);
});

});
