/* eslint-disable no-undef */
"use strict";

describe("FollowUpActivities: Change to ship to supplier.", function () {

  var references = require("../data/references.json");

  it("step1:Naviaget to follow up activities.", async function() {
  //----------------------- Block for sap.uxap.ObjectPageHeaderActionButton - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.uxap.ObjectPageHeaderActionButton","mProperties":{"type":"Default","text":[{"path":"i18n>FollowUpActivities"}]}},
  	"parentProperties":{"metadata":"sap.uxap.ObjectPageHeader","mProperties":{"objectTitle":[{"path":"CustomerReturnType_Text"},{"path":"CustomerReturn"}]}},
  	"prevSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"icon":"sap-icon://slim-arrow-down","type":"Transparent"}},
  	"nextSiblingProperties":{"metadata":"sap.m.Button","mProperties":{"icon":"sap-icon://overflow","type":"Transparent"}},
  	"childProperties":{}
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,2000);
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(6000);
  });

  it("step2:Select Ship to Supplier(0005).", async function() {
  //----------------------- Block for sap.m.Select - Perform Click -----------------------
  var elem = await non_ui5.common.locator.getElementByCss("[id*='maintainFollowUpActivities--FollowUpActivitiesTable-0'][role='combobox']");
  await non_ui5.common.userInteraction.fill(elem, "Ship to Supplier(0005)");
  await browser.sleep(5000);
  });

  it("step3:Fill a supplier.", async function() {
  //----------------------- Block for sap.m.Select - Perform Click -----------------------
  var elem = await non_ui5.common.locator.getElementByCss("[id*='FollowUpActivitiesTable-0-input-inner']");
  await non_ui5.common.userInteraction.fill(elem, references.supplier);
  });

  it("step4:Save follow up activity items.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"type":"Emphasized","text":[{"path":"i18n>Save"}],"enabled":[{"path":"followUpActivitiesView>/containsItems"}]}},
  };
  await ui5.common.locator.highlightElement(ui5ControlProperties,2000);
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(2000);
  });

});
