const { Client, Embed } = require("disbot");
const client = new Client(["GUILDS", "GUILD_MESSAGES"]);

client.on("ready", () => {
    console.log("Bot is ready");
})

client.on("message", async message => {
    if(message.content === "ping") {
        const e = new Embed()
        .setTitle("Pong!")
        .setDescription("This is a test embed")
    
        message.channel.send({ content: "Bakus!", embed: e });
    };
})

client.login("Nzk5OTg0NDUzNDM0ODY3NzMy.YALhlA.tYVtSuyHBv97FXgaxGW45WoB86A");