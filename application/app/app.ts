// The JavaScript way of using module:
var app = require("application");
// You will not have autocompletion for app. Writing app.a will not give you any hints.

// The TypeScript way of using module:
import application = require("application");
// You must have autocompletion for application.
// Try typing application.a and check the autocompletion, you must see addCss, android, etc.
// If the project does not have required .d.ts files for tns-core-modules, the import statement will fail during transpilation.

application.start({ moduleName: "main-page" });
