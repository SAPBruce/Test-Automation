/* eslint-disable no-undef */
"use strict";

describe("Determine refund & generate credit memo request.", function () {

  var url         = require("../data/URL.json");
  var user        = require("../data/user.json");
  var references  = require("../data/references.json");



  it("step1:Select one item.", async function() {
  //----------------------- Block for sap.m.RadioButton - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.RadioButton","mProperties":{"id": "*ColumnListItem"}},
  };
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step2:Determine refund button click.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Determine Refund","type":"Transparent","enabled":[{"path":"_templPriv>/generic/listCommons/breakoutActionsEnabled/DetermineRefund/enabled"}]}},
  	"parentProperties":{"metadata":"sap.m.OverflowToolbar","mProperties":{}},
  	"prevSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Delete","type":"Transparent"}},
  	"nextSiblingProperties":{"metadata":"sap.m.OverflowToolbarButton","mProperties":{"icon":"sap-icon://action-settings","text":"Settings"}},
  	"childProperties":{}
  };
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step3:Select all items on determine refund page.", async function() {
  //----------------------- Block for sap.m.CheckBox - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.CheckBox","mProperties":{"id": "*object--toBeRefundedTable*"}},
  };
  debugger;
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step4:Release button click on determine refund page.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"type":"Emphasized","text":[{"path":"i18n>refundReleaseRefund"}],"visible":[{"path":"refund>/toBeRefundedItems/showBlock"}],"enabled":[{"path":"refund>/toBeRefundedItemsLength"},{"path":"refund>/hasSelectedItems"},{"path":"refund>/releaseenable"}]}},
  	"parentProperties":{"metadata":"sap.m.OverflowToolbar","mProperties":{}},
  	"prevSiblingProperties":{"metadata":"sap.m.ToolbarSpacer","mProperties":{}},
  	"nextSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":[{"path":"i18n>Cancel"}]}},
  	"childProperties":{}
  };
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(8000);
  });

  it("step5:Click already refunded button.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"id":"*alreadyRefundedTableBtn"}},
  };
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step6:Get credit memo request number.", async function() {
  //----------------------- Block for sap.ui.comp.navpopover.SmartLink - Perform Click -----------------------
  var elem = await non_ui5.common.locator.getElementByClass("sapMLnk sapMLnkMaxWidth sapUiCompSmartLink");
  var creditMemoNumber = await elem.getText();
  creditMemoNumber = creditMemoNumber.slice(21,29);
  references.creditMemo = creditMemoNumber;
  console.log("Credit Memo:  " + creditMemoNumber);
  await browser.sleep(1000);
  });

  it("Step 7: Logout", async function() {
		await ui5.common.session.logout();
	});

});
