const Discord = require('discord.js')

module.exports = {
    name: "wl",
    description: "whitelist.",

    async run (client, message, args) {
        let user = message.mentions.members.first() || client.users.cache.get(args[0])
        if(!user) return message.channel.send(`Informe um usuario`)
        message.guild.member(user).roles.add('id do cargo')
        message.channel.send(`${message.author}, o usuário foi aprovado com sucesso!`)

        const aprovar = client.channels.cache.get('id do canal onde irá mandar a mensagem que o membro foi aprovado')

        aprovar.send(`${user}`)
                            let aprovadolog = new Discord.MessageEmbed()
                            .setTitle('Parabéns!!')
                            .setDescription(`Você foi aprovado!
                            
                            Aguarde o chamado para poder fazer a entrevista!`)
                            .setThumbnail('https://cdn.discordapp.com/attachments/457357965649772564/807776088200577054/After.png')
                            .setColor('ORANGE')

                            aprovar.send(aprovadolog)
    }
}
