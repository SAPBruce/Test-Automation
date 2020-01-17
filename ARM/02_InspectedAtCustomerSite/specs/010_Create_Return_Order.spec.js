/* eslint-disable no-undef */
"use strict";

describe("Create Return Order", function () {

  var url         = require("../data/URL.json");
  var user        = require("../data/user.json");
  var references  = require("../data/references.json");

  it("step1:Go to Manage Customer Returns tile.", async function() {
  //----------------------- Block for sap.m.GenericTile - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.GenericTile","mProperties":{"header":[{"path":"/data/display_title_text"}],"subheader":[{"path":"/data/display_subtitle_text"}],"mode":[{"path":"/mode"}],"sizeBehavior":[{"path":"/sizeBehavior"}],"wrappingType":[{"path":"/wrappingType"}]}},
  	"parentProperties":{"metadata":"sap.ui.core.mvc.JSView","mProperties":{"viewName":"sap.ushell.components.tiles.applauncherdynamic.DynamicTile"}},
  	"prevSiblingProperties":{},
  	"nextSiblingProperties":{},
  	"childProperties":{"metadata":"sap.m.Text","mProperties":{"text":"Manage Customer Returns"}}
  };
  try {
      await common.userInteraction.click(ui5ControlProperties);
      await browser.sleep(8000);
    } catch (e) {
      await non_ui5.common.navigation.navigateToUrl(url.manageCustomerReturn_app);
      await browser.sleep(8000);
    }
  });

  it("step2:Create button click on worklist page.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Create","type":"Transparent","enabled":[{"path":"_templPriv>/generic/listCommons/breakoutActionsEnabled/CreateCustomerReturn/enabled"}]}},
  	"parentProperties":{"metadata":"sap.m.OverflowToolbar","mProperties":{}},
  	"prevSiblingProperties":{"metadata":"sap.m.ToolbarSpacer","mProperties":{}},
  	"nextSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Edit","type":"Transparent"}},
  	"childProperties":{}
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,3000);
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(8000);
  });

  it("step3:Go button click.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Go","type":"Emphasized"}},
  	"parentProperties":{"metadata":"sap.ui.layout.HorizontalLayout","mProperties":{}},
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,3000);
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(8000);
  });

  it("step4:Create button click.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
    "elementProperties":{"metadata":"sap.m.Button","mProperties":{"id":"*C_ReturnsReferenceDocument--openDialogButton*"}},
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,3000);
  await common.userInteraction.click(ui5ControlProperties);

  await browser.sleep(8000);
  });

  it("step5:Select return reason.", async function() {
  //----------------------- Block for sap.m.Select - Perform Click -----------------------
  var elem = await non_ui5.common.locator.getElementByCss("[id*='cus.sd.customerreturns.manage.create.ext.fragments.CreateReturnPopup--CreateReturnDialog--ReturnReasonSelect'][role='combobox']");
  await non_ui5.common.locator.highlightElement(elem,3000);
  await non_ui5.common.userInteraction.fill(elem, "Product damaged");
  await common.userInteraction.pressTab();
  });

  it("step6:Set value for return quantity.", async function() {
  //----------------------- Block for sap.m.Input - Perform Set-Value -----------------------
  var ui5ControlProperties = {
    "elementProperties":{"metadata":"sap.m.Input","mProperties":{"id":"*CreateReturnDialog--quantityInput*"}},
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,3000);
  await common.userInteraction.clearAndFill(ui5ControlProperties, references.returnQuantity);
  await common.userInteraction.pressTab();
  //debugger;
  });

  it("step7:Click create button on dialog page", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
    "elementProperties":{"metadata":"sap.m.Button","mProperties":{"id":"*CreateReturnDialog--createPopupButton*"}},
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,3000);
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(20000);
  });

  it("step8:Get return order number.", async function() {
  //----------------------- Block for sap.suite.ui.commons.ProcessFlowNode - Perform Click -----------------------
  var elem = await non_ui5.common.locator.getElementByCss("span[id*='application-AcceleratedCustomerReturn-edit-component---editObject--displayObjectPageHeader-innerTitle']");
  debugger;
  var returnOrderNumber = await elem.getText();
  returnOrderNumber = returnOrderNumber.slice(19,29);
  references.returnOrderNumber = returnOrderNumber;
  console.log("Return Order Number:  " + returnOrderNumber);
  await non_ui5.common.locator.highlightElement(elem,3000);
  await browser.sleep(5000);
  });

});
