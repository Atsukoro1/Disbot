const { Client, Embed, Button } = require("disbot");
const client = new Client(["GUILDS", "GUILD_MESSAGES"]);

client.on("ready", () => {
    console.log("Bot is ready");
})

client.on("message", async message => {
    if(message.content == "bakus") {
        let e = new Embed()
        .setAuthor("ahoj", "https://www.youtube.com/watch?v=N51MEUdWJvQ", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Osulogo.png/800px-Osulogo.png")
        .setDescription("Ahoj jak se mas");

        let b = new Button()
        .setEmoji("🤨")
        .setLabel("When a sussy baka")
        .setStyle("primary")
        .setCustomId("baka")

        await message.channel.send({ embed: e, components: [{ type: 1, components: [b] }] });
    }
})

client.login("Nzk5OTg0NDUzNDM0ODY3NzMy.YALhlA.tYVtSuyHBv97FXgaxGW45WoB86A");