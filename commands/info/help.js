const Discord = require("discord.js")
module.exports = {
  name: "help",
  aliases: ["h","pls help"],
  category: "info",
  clientPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Help Center")
    .setDescription("**EXAMPLE: >>>p BTS mic drop **")
    .setThumbnail(client.user.displayAvatarURL({ format: "png" }))
      .addField(`all music commands`, '`PLAY` | `PAUSE` | `RESUME` | `SHUFFLE`  |  `REMOVE` | `QUEUE` | `NP` | `STOP` | `SKIP` | `SKIPTO` | `SKIPALL` | `VOLUME` ')
      .addField(`❓Information❓`, '`HELP` | `BOTINFO` | `PING`')
    
           

    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`Made by Shu Kurenai#1234`, client.user.displayAvatarURL({ format: "png" }))
    message.channel.send(embed)
  }
}