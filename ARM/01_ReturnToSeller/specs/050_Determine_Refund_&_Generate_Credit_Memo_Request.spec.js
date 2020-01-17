/* eslint-disable no-undef */
"use strict";

describe("Determine refund & generate credit memo request.", function () {

  var url         = require("../data/URL.json");
  var user        = require("../data/user.json");
  var references  = require("../data/references.json");

  it("step 1: Navigate to determine refund app.", async function() {
    await browser.sleep(10000);
    await non_ui5.common.navigation.navigateToUrl(browser.baseUrl);
  });
	it("step 2: Login to System", async function() {
		await ui5.common.session.loginSapCloud(user.returns_refund_clerk);
    await browser.sleep(10000);
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
  await common.userInteraction.click(ui5ControlProperties);
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
    await ui5.common.locator.highlightElement(ui5ControlProperties,3000);
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
  await ui5.common.locator.highlightElement(ui5ControlProperties,3000);
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step6:Select one item.", async function() {
  //----------------------- Block for sap.m.RadioButton - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.RadioButton","mProperties":{"id": "*ColumnListItem"}},
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,3000);
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step7:Determine refund button click.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Determine Refund","type":"Transparent","enabled":[{"path":"_templPriv>/generic/listCommons/breakoutActionsEnabled/DetermineRefund/enabled"}]}},
  	"parentProperties":{"metadata":"sap.m.OverflowToolbar","mProperties":{}},
  	"prevSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":"Delete","type":"Transparent"}},
  	"nextSiblingProperties":{"metadata":"sap.m.OverflowToolbarButton","mProperties":{"icon":"sap-icon://action-settings","text":"Settings"}},
  	"childProperties":{}
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,3000);
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step8:Select all items on determine refund page.", async function() {
  //----------------------- Block for sap.m.CheckBox - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.CheckBox","mProperties":{"id": "*object--toBeRefundedTable*"}},
  };
  debugger;
  await ui5.common.locator.highlightElement(ui5ControlProperties,3000);
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step9:Release button click on determine refund page.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"type":"Emphasized","text":[{"path":"i18n>refundReleaseRefund"}],"visible":[{"path":"refund>/toBeRefundedItems/showBlock"}],"enabled":[{"path":"refund>/toBeRefundedItemsLength"},{"path":"refund>/hasSelectedItems"},{"path":"refund>/releaseenable"}]}},
  	"parentProperties":{"metadata":"sap.m.OverflowToolbar","mProperties":{}},
  	"prevSiblingProperties":{"metadata":"sap.m.ToolbarSpacer","mProperties":{}},
  	"nextSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"text":[{"path":"i18n>Cancel"}]}},
  	"childProperties":{}
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,3000);
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(8000);
  });

  it("step10:Click already refunded button.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"id":"*alreadyRefundedTableBtn"}},
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,3000);
  await common.userInteraction.click(ui5ControlProperties);
  });

  it("step11:Get credit memo request number.", async function() {
  //----------------------- Block for sap.ui.comp.navpopover.SmartLink - Perform Click -----------------------
  var elem = await non_ui5.common.locator.getElementByClass("sapMLnk sapMLnkMaxWidth sapUiCompSmartLink");
  var creditMemoNumber = await elem.getText();
  creditMemoNumber = creditMemoNumber.slice(21,29);
  references.creditMemo = creditMemoNumber;
  console.log("Credit Memo:  " + creditMemoNumber);
  await non_ui5.common.locator.highlightElement(elem,3000);
  await browser.sleep(1000);
  });

  it("Step 12: Logout", async function() {
		await ui5.common.session.logout();
	});

});
