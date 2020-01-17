/* eslint-disable no-undef */
"use strict";

describe("FollowUpActivities: Run Manage Customer Returns app", function () {

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
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(10000);
  });

  it("step2:Select material remains at customer site (0013).", async function() {
  //----------------------- Block for sap.m.Select - Perform Click -----------------------
  var elem = await non_ui5.common.locator.getElementByCss("[id*='maintainFollowUpActivities--FollowUpActivitiesTable-0'][role='combobox']");
  await non_ui5.common.userInteraction.fill(elem, "Material Remains at Customer Site (0013)");
  await browser.sleep(5000);
  });

  it("step3:Select inspection code.", async function() {
  //----------------------- Block for sap.m.Select - Perform Click -----------------------
  var elem = await non_ui5.common.locator.getElementByCss("[id*='maintainFollowUpActivities--FollowUpActivitiesTable-0'][role='combobox']","1");
  await non_ui5.common.userInteraction.fill(elem, "OK");
  });

  it("step4:Fill a comment.", async function() {
  //----------------------- Block for sap.m.Input - Perform Set-Value -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Input","mProperties":{"type":"Text","value":[{"path":"CustRetItmInspectionText"}],"enabled":[{"path":"CustRetItmFollowUpActivity"},{"path":"SalesDocumentRjcnReason"},{"path":"RetsMgmtProcessingBlock"},{"path":"ProductIsAwaitingInspection"},{"path":"ProductIsInspectedAtCustSite"}]}},
  	"parentProperties":{"metadata":"sap.m.ColumnListItem","mProperties":{}},
  };
  var value = "Inspection result is ok by bruce.";   //value to be entered by user
  await ui5.common.userInteraction.clearAndFill(ui5ControlProperties, value);
  });

  it("step5:Save follow up activity items.", async function() {
  //----------------------- Block for sap.m.Button - Perform Click -----------------------
  var ui5ControlProperties = {
  	"elementProperties":{"metadata":"sap.m.Button","mProperties":{"type":"Emphasized","text":[{"path":"i18n>Save"}],"enabled":[{"path":"followUpActivitiesView>/containsItems"}]}},
  };
  await common.userInteraction.click(ui5ControlProperties);
  await browser.sleep(15000);
  });

});
