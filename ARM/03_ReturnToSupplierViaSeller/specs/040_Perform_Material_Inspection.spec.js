/* eslint-disable no-undef */
"use strict";

describe("Perform Material Inspection.", function () {

  var url         = require("../data/URL.json");
  var user        = require("../data/user.json");
  var references  = require("../data/references.json");

  beforeEach(async function() {
    browser.ignoreSynchronization = true;
  });
  afterEach(function() {
    browser.ignoreSynchronization = false;
  });

  it("step 1: Navigate to inspection app.", async function() {
    await browser.sleep(5000);
    await non_ui5.common.navigation.navigateToUrl(url.inspection_app);
  });

	it("step 2: Login to System.", async function() {
		await ui5.common.session.loginSapCloud(user.receiving_specialist);
    await browser.sleep(5000);
	});

  it("step3: Switch frame.", async function() {
    await non_ui5.common.locator.switchToIframe("iframe[id*='MaterialInspection-maintainCustomerMaterialInspectionInWebGUI']");
    await browser.sleep(5000);
  });

  it("step 4: Fill delivery number.", async function() {
    var elem = await non_ui5.common.locator.getElementByCss("input[title='Delivery']");
    await non_ui5.common.locator.highlightElement(elem,2000);
    await non_ui5.common.userInteraction.fill(elem, references.deliveryNumber);
  });

  it("Step 5: Click 'Execute'.", async function() {
		var elem = await non_ui5.common.locator.getElementByCss("div[title='Execute (F8)']");
    await non_ui5.common.locator.highlightElement(elem,2000);
		await non_ui5.common.userInteraction.click(elem);
    await browser.sleep(5000);
    debugger;
	});

  it("Step 6: Click 'item tab'.", async function() {
    var elem = await non_ui5.common.locator.getElementByCssContainingText("div[action*='TAB_ACCESS']", "Item");
    await non_ui5.common.locator.highlightElement(elem,2000);
    await non_ui5.common.userInteraction.click(elem);
    await browser.sleep(5000);
	});

  it("step 7: Fill inspection code.", async function() {
    var elem = await non_ui5.common.locator.getElementByCss("input[title='Inspection Code']");
    await non_ui5.common.locator.highlightElement(elem,2000);
    await non_ui5.common.userInteraction.fill(elem, references.inpectionCode);
  });

  it("step 8: Fill comment.", async function() {
    var elem = await non_ui5.common.locator.getElementByCss("input[title='Inspection Comment Line']");
    await non_ui5.common.locator.highlightElement(elem,2000);
    await non_ui5.common.userInteraction.fill(elem, "vyper test by bruce");
  });

  it("step 9: Fill follow up activity.", async function() {
    var elem = await non_ui5.common.locator.getElementByCss("input[title='Follow-Up Activity Code']");
    await non_ui5.common.userInteraction.fill(elem, "0011 Transfer to Free Available Stock");
  });

  it("Step 10: Save and confirm.'", async function() {
		var elem = await non_ui5.common.locator.getElementByCss("div[id*='btn[32]'");
    await non_ui5.common.locator.highlightElement(elem,2000);
		await non_ui5.common.userInteraction.click(elem);
    await browser.sleep(8000);
	});

  it("Step 11: Click 'exit'", async function() {
		var elem = await non_ui5.common.locator.getElementByCss("div[title='Exit (Shift+F3)']");
    await non_ui5.common.locator.highlightElement(elem,2000);
		await non_ui5.common.userInteraction.click(elem);
    debugger;
	});

  it("Step 12: Logout", async function() {
    browser.ignoreSynchronization = true;
    await non_ui5.common.locator.switchToDefaultContent();
		await ui5.common.session.logout();
    browser.ignoreSynchronization = false;
	});

});
