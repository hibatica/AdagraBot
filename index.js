const mode = "test"; // "test" or "production"
const commandHandler = require("./index/commandHandler.js");
const eventHandler = require("./index/eventHandler.js");

// set token to test bot token or production bot token
const token;
if(mode == "test") {
	token = require("./config/auth/discordToken.json").token.test;
} else if(mode == "production") {
	token = require("./config/auth/discordToken.json").token.production;
} else {
	console.log("Please set 'mode' in index.js to either 'test' or 'production");
	process.exit(1);
}