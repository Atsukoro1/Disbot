const { Client, Embed, SelectMenu, ComponentContainer } = require("disbot");
const client = new Client(["GUILDS", "GUILD_MESSAGES"]);

client.on("ready", () => {
    console.log("Bot is ready");
})

client.on("message", async message => {
    if(message.content == "bakus") {
        console.log(message)
    }
})

client.login("Nzk5OTg0NDUzNDM0ODY3NzMy.YALhlA.tYVtSuyHBv97FXgaxGW45WoB86A");