/* eslint-disable no-undef */
"use strict";

describe("Determine refund & replacement material.", function () {

  var url         = require("../data/URL.json");
  var user        = require("../data/user.json");
  var references  = require("../data/references.json");

  it("step 1: Navigate to determine refund app.", async function() {
    await browser.sleep(5000);
    await non_ui5.common.navigation.navigateToUrl(browser.baseUrl);
  });
	it("step 2: Login to System", async function() {
		await ui5.common.session.loginSapCloud(user.returns_refund_clerk);
	});

  it("step3:Go to determine refund app from tile.", async function() {
  //----------------------- Block for sap.ushell.ui.launchpad.Tile - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.ushell.ui.launchpad.Tile","mProperties":{"uuid":[{"path":"uuid"}],"tileCatalogId":[{"path":"tileCatalogId"}],"target":[{"path":"target"}],"debugInfo":[{"path":"debugInfo"}],"long":[{"path":"long"}],"isCustomTile":[{"path":"isCustomTile"}],"rgba":[{"path":"rgba"}],"isLocked":[{"path":"isLocked"}],"showActionsIcon":[{"path":"showActionsIcon"}],"tileActionModeActive":[{"path":"/tileActionModeActive"}],"navigationMode":[{"path":"navigationMode"}],"isDraggedInTabBarToSourceGroup":[{"path":"draggedInTabBarToSourceGroup"}],"tileViews":[{"path":"content"}],"bindingContextPath":"/groups/1/tiles/0"}},
  	"parentProperties":{"metadata":"sap.ushell.ui.launchpad.TileContainer","mProperties":{"headerText":[{"path":"title"}],"groupId":[{"path":"groupId"}],"homePageGroupDisplay":[{"path":"/homePageGroupDisplay"}],"showPlaceholder":[{"path":"/tileActionModeActive"},{"path":"tiles/length"}],"defaultGroup":[{"path":"isDefaultGroup"}],"isLastGroup":[{"path":"isLastGroup"}],"showGroupHeader":[{"path":"showGroupHeader"}],"isGroupLocked":[{"path":"isGroupLocked"}],"isGroupSelected":[{"path":"isGroupSelected"}],"editMode":[{"path":"editMode"}],"showBackground":[{"path":"/tileActionModeActive"}],"deluminate":[{"path":"/isInDrag"}],"showMobileActions":[{"path":"/tileActionModeActive"}],"enableHelp":[{"path":"/enableHelp"}],"tileActionModeActive":[{"path":"/tileActionModeActive"}],"showEmptyLinksArea":[{"path":"/tileActionModeActive"},{"path":"links/length"},{"path":"isGroupLocked"},{"path":"/isInDrag"},{"path":"/homePageGroupDisplay"}],"showEmptyLinksAreaPlaceHolder":[{"path":"links/length"},{"path":"/isInDrag"},{"path":"/homePageGroupDisplay"}],"hidden":[{"path":"/tileActionModeActive"},{"path":"isGroupVisible"}],"transformationError":[{"path":"/isInDrag"},{"path":"/draggedTileLinkPersonalizationSupported"}],"tooltip":[{"path":"title"}],"tiles":[{"path":"tiles"}],"links":[{"path":"links"}],"bindingContextPath":"/groups/1","visible":[{"path":"/tileActionModeActive"},{"path":"isGroupVisible"},{"path":"visibilityModes"}],"showIcon":[{"path":"/isInDrag"},{"path":"/tileActionModeActive"}]}},
  	"prevSiblingProperties":{"metadata":"sap.ui.core.Icon","mProperties":{"src":"sap-icon://locked"}},
  	"nextSiblingProperties":{"metadata":"sap.m.Text","mProperties":{"text":"Drag apps here to create links."}},
  	"childProperties":{"metadata":"sap.ui.core.mvc.JSView","mProperties":{"viewName":"sap.ushell.components.tiles.applauncherdynamic.DynamicTile"}}
  };
  try {
      await common.userInteraction.click(ui5ControlProperties);
      await browser.sleep(3000);
    } catch (e) {
      await non_ui5.common.navigation.navigateToUrl("https://ccf-715.wdf.sap.corp/ui#CustomerReturn-manage&/?sap-iapp-state=ASL2G2M4FCED8RCBSFWS25J4LPINVHQ8Y3RNGNPX");
      await browser.sleep(3000);
    }
  });

  it("step4:Set return order & search.", async function() {
  //----------------------- Block for sap.m.MultiInput - Perform Set-Value -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.MultiInput","mProperties":{"value":[{"path":"fi1t3rM0d31>/CustomerReturn/value"}]}},
  	"parentProperties":{"metadata":"sap.ui.layout.VerticalLayout","mProperties":{}},
  	"prevSiblingProperties":{"metadata":"sap.m.Label","mProperties":{"text":"Customer Return"}},
  	"nextSiblingProperties":{},
  	"childProperties":{"metadata":"sap.m.Tokenizer","mProperties":{}}
  };
    await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
    await common.userInteraction.clearAndFill(ui5ControlProperties, references.returnOrderNumber);
  });

  it("step5:Click go button.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Go","type":"Emphasized"}},
  	"parentProperties":{"metadata":"sap.ui.layout.HorizontalLayout","mProperties":{}},
  	"prevSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Adapt Filters","type":"Transparent"}},
  	"nextSiblingProperties":{},
  	"childProperties":{}
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step6:Select one item.", async function() {
  //----------------------- Block for sap.m.RadioButton - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.RadioButton","mProperties":{"id": "*ColumnListItem"}},
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(3000);
  });

  it("step7:Determine refund button click.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Determine Refund","type":"Transparent"}},
  	"parentProperties":{"metadata":"sap.m.OverflowToolbar","mProperties":{}},
  	"prevSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Delete","type":"Transparent"}},
  	"nextSiblingProperties":{"metadata":"sap.m.OverflowToolbarButton","mProperties":{"icon":"sap-icon://action-settings","text":"Settings"}},
  	"childProperties":{}
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step8:Select all items on determine refund page.", async function() {
  //----------------------- Block for sap.m.CheckBox - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.CheckBox","mProperties":{"id": "*object--toBeRefundedTable*"}},
  };
  debugger;
  await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step9:click on sap.m.Link", async function() {
  //----------------------- Block for sap.m.Link - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Link","mProperties":{"text":[{"path":"i18n>refundChange"}]}},
  	"parentProperties":{"metadata":"sap.m.FlexItemData","mProperties":{}},
  	"prevSiblingProperties":{},
  	"nextSiblingProperties":{},
  	"childProperties":{}
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(2000);
  });

  it("step10:Select replacement material.", async function() {
  //----------------------- Block for sap.m.Select - Perform Click -----------------------
  var elem = await non_ui5.common.locator.getElementByCss("[id*='application-AcceleratedCustomerReturn-refund-component---object--changeRefund--refundTypeSelect'][role='combobox']");
//  await non_ui5.common.locator.highlightElement(elem,1000);
  await non_ui5.common.userInteraction.fill(elem, "Replacement Material");
  await non_ui5.common.locator.highlightElement(elem,1000);
  await common.userInteraction.pressTab();
//  await browser.sleep(3000);
  });

  it("step11:Select a material.", async function() {
//----------------------- Block for sap.m.Input - Perform Set-Value -----------------------
var ui5ControlProperties = {
	"elementProperties":{"metadata":"sap.m.Input","mProperties":{"value":[{"path":"ReplacementMaterial"}]}},
	"parentProperties":{"metadata":"sap.ui.comp.smartfield.SmartField","mProperties":{}},
	"prevSiblingProperties":{},
	"nextSiblingProperties":{},
};
var value = "COMP2020-1";   //value to be entered by user
await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
await common.userInteraction.clearAndFill(ui5ControlProperties, value);
await common.userInteraction.pressTab();
await browser.sleep(1000);
});

  it("step12:click on sap.m.Button", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"type":"Emphasized","text":[{"path":"i18n>buttonOk"}]}},
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(5000);
  });
  it("step13:Release button click on determine refund page.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"type":"Emphasized","text":[{"path":"i18n>refundReleaseRefund"}]}},
  	"parentProperties":{"metadata":"sap.m.OverflowToolbar","mProperties":{}},
  	"prevSiblingProperties":{"metadata":"sap.m.ToolbarSpacer","mProperties":{}},
  	"nextSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":[{"path":"i18n>Cancel"}]}},
  	"childProperties":{}
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(8000);
  });

  it("step14:Click already refunded button.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"id":"*alreadyRefundedTableBtn"}},
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,1000);
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step15:Get replacement delivery order.", async function() {
  //----------------------- Block for sap.ui.comp.navpopover.SmartLink - Perform Click -----------------------
  var elem = await non_ui5.common.locator.getElementByClass("sapMLnk sapMLnkMaxWidth sapUiCompSmartLink");
  var replacementDeliveryOrder = await elem.getText();
  replacementDeliveryOrder = replacementDeliveryOrder.slice(22,27);
  references.replacementDeliveryOrder = replacementDeliveryOrder;
  console.log("Replacement Delivery Order:  " + replacementDeliveryOrder);
  await non_ui5.common.locator.highlightElement(elem,1000);
  await browser.sleep(1000);
  });

  it("Step 16: Logout", async function() {
		await ui5.common.session.logout();
	});

});
