const { Client } = require("disbot");
const fs = require("fs");
const path = require("path");
const client = new Client(["GUILDS", "GUILD_MESSAGES"]);

client.on("ready", () => {
    console.log("Bot is ready");
})

client.on("message", async message => {
    if(message.content == "bakus") {
        const p = __dirname + "/aha.png";
        fs.readFile(p, function(err, data) {
            if(err) throw new Error("Error while reading this image from path " + p);
            if(![".jpg", ".png", ".gif"].includes(path.extname(p))) throw new Error("Cannot read this file.");
            console.log(data.toString("base64url"))
        });
    }
})

client.login("OTM0MTk0NzY5MDk2MjQxMjA0.YesirQ.TLmAOtNVk9TVSYgHdiHNimWt3ks");