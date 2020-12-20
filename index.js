const { Client } = require("discord.js") // npm i discord.js@11.6.4

const client = new Client()

client.on("ready", async () => {
  for (let friend of client.user.friends.array()) {
    await friend.removeFriend()
  }
})

client.login("paste u token here")