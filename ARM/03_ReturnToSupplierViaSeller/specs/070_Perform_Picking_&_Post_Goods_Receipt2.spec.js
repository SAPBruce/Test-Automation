/* eslint-disable no-undef */
"use strict";

describe("Perform picking & post goods receipt.", function () {

  var url         = require("../data/URL.json");
  var user        = require("../data/user.json");
  var references  = require("../data/references.json");

  beforeEach(async function() {
    browser.ignoreSynchronization = true;
  });
  afterEach(function() {
    browser.ignoreSynchronization = false;
  });

  it("step 1: Navigate to outbound delivery app.", async function() {
    await non_ui5.common.navigation.navigateToUrl(url.outboundDelivy_app);
  });

	it("step 2: Login to System", async function() {
		await ui5.common.session.loginSapCloud(user.shipping_specialist);
    await browser.sleep(10000);
	});

  it("step3: Switch to frame.", async function() {
    await non_ui5.common.locator.switchToIframe("iframe[id*='OutboundDelivery-changeInWebGUI']");
    await browser.sleep(10000);
  });

  it("step 4: Fill delivery number.", async function() {
    var elem = await non_ui5.common.locator.getElementByCss("input[title='Delivery']");
    await non_ui5.common.locator.highlightElement(elem,2000);
    await non_ui5.common.userInteraction.fill(elem, references.cratedOutboundDeliveryNumber);
  });

  it("Step 5: Click 'Continue'", async function() {
		var elem = await non_ui5.common.locator.getElementByCss("div[title='Continue (Enter)']");
    await non_ui5.common.locator.highlightElement(elem,2000);
		await non_ui5.common.userInteraction.click(elem);
    await browser.sleep(5000);
    debugger;
	});

  it("Step 6: Click 'Picked Qty'", async function() {
		var elem = await non_ui5.common.locator.getElementByCss("[id*='[1,16]'][role='combobox']");
    await non_ui5.common.locator.highlightElement(elem,2000);
		await non_ui5.common.locator.scrollToElement(elem);
		await non_ui5.common.userInteraction.click(elem);
	});

	it("Step 7: Fill 'Picked Qty'", async function() {
		var elem = await non_ui5.common.locator.getElementByCss("input[id*='[1,16]']");
    await non_ui5.common.locator.highlightElement(elem,2000);
		await non_ui5.common.userInteraction.fill(elem, "1");
	});

//////////////////////////////////////////////////////////////////////////////////////

//To do : confirm order action.
it("Step 8: Click [More] button.", async function() {
  var elem = await non_ui5.common.locator.getElementByCss("[id*='moreButton'][role='button']");
  await non_ui5.common.locator.highlightElement(elem,2000);
//  await non_ui5.common.locator.scrollToElement(elem);
  await non_ui5.common.userInteraction.click(elem);
  await browser.sleep(10000);
});

it("Step 9: Click 'Edit'.", async function() {
  var elem = await non_ui5.common.locator.getElementByCss("[id*='wnd[0]/mbar/menu[1]-BtnChoiceMenu");
  await non_ui5.common.locator.highlightElement(elem,2000);
  await non_ui5.common.userInteraction.click(elem);
});

it("Step 10: Click 'Confirm pick order'.", async function() {
  var elem = await non_ui5.common.locator.getElementByCss("[id*='wnd[0]/mbar/menu[1]/menu[4]']");
  await non_ui5.common.locator.highlightElement(elem,2000);
  await non_ui5.common.userInteraction.click(elem);
});

it("Step 11: Click 'All items'.", async function() {
  var elem = await non_ui5.common.locator.getElementByCss("[id*='wnd[0]/mbar/menu[1]/menu[4]/menu[0]']");
  await non_ui5.common.locator.highlightElement(elem,2000);
  await non_ui5.common.userInteraction.click(elem);
  await browser.sleep(5000);
});

///////////////////////////////////////////////////////////////////////////////////////



	it("Step 12: Click 'Post Goods Issue'", async function() {
		var elem = await non_ui5.common.locator.getElementByCss("div[id*='btn[20]'");
    await non_ui5.common.locator.highlightElement(elem,2000);
		await non_ui5.common.userInteraction.click(elem);
    await browser.sleep(5000);
	});

  it("Step 13: Click 'exit'", async function() {
		var elem = await non_ui5.common.locator.getElementByCss("div[title='Exit (Shift+F3)']");
    await non_ui5.common.locator.highlightElement(elem,2000);
		await non_ui5.common.userInteraction.click(elem);
    await browser.sleep(3000);
    debugger;
	});

	it("Step 14: Logout", async function() {
    browser.ignoreSynchronization = true;
    await non_ui5.common.locator.switchToDefaultContent();
		await ui5.common.session.logout();
    browser.ignoreSynchronization = false;
	});

});
