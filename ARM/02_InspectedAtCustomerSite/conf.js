exports.config = {
  // Set to true to use the chrome driver directly instead of starting the selenium server first
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: true,
  capabilities: {
    "browserName": "chrome",
    "acceptInsecureCerts": true,
    "pageLoadStrategy":"normal",
    "acceptSslCerts": true,
    chromeOptions: {
     args: [
        "--no-sandbox",
        "--disable-dev-shm-usage",
        "--disable-web-security",
        "--disable-infobars",
        "--disable-extensions",
        "--ignore-certificate-errors",
        "--enable-logging",
        "--incognito",
        // "--headless",
        // "--disable-gpu"
       "--window-size=1920,1300",
      //  "--start-maximized"
      ],
      prefs: {
        // disable chrome's password manager
        "profile.password_manager_enabled": false,
        "credentials_enable_service": false,
        "password_manager_enabled": false
      }
    }
  },

  params: {
    auth: {
      formType: "plain"
/*        formType: "fiori-form",
        username: 'returns_refund_clerk',
        password: 'Welcome1!'*/
    },
    coverage: {
      status: false,
      // coverage_files: ["mm_po_manages1"],
      sourcePath:"./sourceFolder"
    },
    maximizeWindow: true
  },

  // Base URL for protractor to connect to
//  baseUrl: "https://ccf-715.wdf.sap.corp/ui?sap-language=#Shell-home",
//    baseUrl: "https://ccf-715.wdf.sap.corp/ui?sap-language=#Shell-home",
    baseUrl: "https://ccf-715.wdf.sap.corp/ui?sap-language=#Shell-home",
  // Framework to use. Jasmine is recommended.
  framework: "jasmine2",

  // Spec patterns are relative to the current working directory when protractor is called
  specs: [
    "specs/000_Login_System.spec.js",
    "specs/010_Create_Return_Order.spec.js",
    "specs/011_Change_Followup_Activity.spec.js",
    "specs/020_Release_Return_Order.spec.js",
    "specs/030_Determine_Refund_&_Generate_Credit_Memo_Request.spec.js",
    "specs/040_Create_Credit_Memo.spec.js",
  ],

  allScriptsTimeout: 290000, // Waiting for Angular
  getPageTimeout: 1200000,    // Waiting for Page to Load
  idleTimeout : 100000,      // Waiting for a test to send a new command

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,              // If true, print colors to the terminal
    defaultTimeoutInterval: 600000 // Default time to wait in ms before a test fails
  }
};
