module.exports = {
    name: "ping",
    category: "info",
    description: "check your bot client latency and API ping",
    run: async (client, message, args) => {
       message.channel.send(`🏓 Pong - ${client.ws.ping}ms`)
    }
}
