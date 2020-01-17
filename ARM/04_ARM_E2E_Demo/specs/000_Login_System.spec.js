/* eslint-disable no-undef */

"use strict";
describe ( 'Login System.', function () {

  //---------------------------------- STEPS -----------------------------------
  it("step0:Login", async function () {
   browser.driver.findElement(by.css('#j_username')).sendKeys("returns_refund_clerk");
   browser.driver.findElement(by.css('#j_password')).sendKeys("Welcome1!");
   browser.sleep(6000);
   browser.driver.findElement(by.css('#logOnFormSubmit')).click();

  });


});
