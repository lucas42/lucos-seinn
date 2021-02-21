
/**
 * Client variables are set by the server and included in a script tag
 * Do all the handling of them here, so individual modules don't need to interact with global scope
 **/
if (!clientVariables) throw "Can't find `clientVariables` in global scope";
const {mediaManager, receiverApplicationId} = clientVariables;

require("./manager").init(mediaManager);  // Initiate the manager first so other modules can use it immediately
require("./devices"); // Load devices early so it can modify the `managerData` object before others use it
require("./poll");
require("./keyboard");
require("./controls");
require("./cast-sender")(receiverApplicationId);
require("./player");
require("./components/lucos-navbar");
require("./components/volume");
require("./components/devices-overlay");
require("./components/playlist");
require("./components/now-playing");
require("./components/edit-form");
require("./components/playpause-form");