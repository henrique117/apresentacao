const Discord = require('discord.js');
const fs = require('fs');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

var data = new Date()
var dia = String(data.getDate())
var mes = String(data.getMonth())
var dataAtual = dia + '/' + mes

var macaco = null

client.on('ready', () => {
    console.log('Rique Jr. está online!')
})

/* COMANDOS */

client.on('messageCreate', (message) => {
    if (message.author.bot === true) {
        return
    } else {
        if (message.content === '!comandos') {
            message.reply('!avatar, !cezinha, !macaco, !higao, !diogo, !eae9vinha, !pika, !hetero(Só no niver do fabinho!), !😁')
        }
    }
})

/* MACACO */

client.on('messageCreate', (message) => {
    if (message.guild.id === "868138837505867818") return
    if (message.author.bot === true) {
        return
    } else {
        if (message.content === '!macaco') {
            message.reply('Quantos macacos você quer?')
            var arrombado = message.author.id
            macaco = true
            client.on('messageCreate', (message) => {
                if (macaco === true) {
                    if (message.author.id === arrombado) {
                        var nmacacos = parseInt(message.content)
                        if (Number.isInteger(nmacacos)) {
                            if (nmacacos > 20) {
                                message.reply('É muito macaco pra mim (Maximo de 20)')
                                macaco = false
                                return
                            } else {
                                for (i = 0; i < nmacacos; i++) {
                                    message.channel.send('https://cdn.discordapp.com/emojis/857349489198497792.png?v=1')
                                }
                                message.reply('Receba seus macacos')
                                macaco = false
                                return
                            }
                        } else {
                            return
                        }
                    }
                } else {
                    return
                }
            })
        } else {
            return
        }
    }
})

/* MOSTRAR O AVATAR */

client.on("messageCreate", (message) => {
    if (message.author.bot === true) {
        return
    } else {
        if (message.content.startsWith('!avatar')) {
            var foto = (message.content)
            if (foto.endsWith('!avatar')) {
                var membro = message.mentions.members.first() || message.member;
                message.reply(message.author.displayAvatarURL({ dynamic: true, size: 4096 }));
            } else {
                var membro = message.mentions.members.first() || message.member;
                message.reply(membro.user.displayAvatarURL({ dynamic: true, size: 4096 }));
            }
        } else {
            return
        }
    }
})

/* PARABENS CEZAR!!! */

client.on('messageCreate', (message) => {
    if (message.guild.id != "600692411253129217") return
    if (message.author.bot === true) {
        return
    } else {
        if (message.content === '!cezinha') {
            message.channel.send('Parabéns Cezinha!!! :partying_face: :partying_face: :partying_face:')
            message.channel.send('https://tenor.com/view/balloon-gif-8189968')
            message.channel.send('https://media.discordapp.net/attachments/606596875835015196/915062149091573781/unknown.png')
            message.channel.send('https://tenor.com/view/balloon-gif-8189968')
            message.channel.send('Parabéns pra você\nNesta data querida\nMuitas felicidades\nMuitos anos de vida!')
        } else {
            return
        }
    }
})

/* PARABENS GABI!!! */

client.on('messageCreate', (message) => {
    if (message.guild.id != "600692411253129217") return
    if (message.author.bot === true) {
        return
    } else {
        if (message.content === '!gabi') {
            message.channel.send('Parabéns GABII!!! :partying_face: :partying_face: :partying_face:')
            message.channel.send('https://tenor.com/view/balloon-gif-8189968')
            message.channel.send('https://media.discordapp.net/attachments/918676783677734922/918678732619776021/unknown.png')
            message.channel.send('https://tenor.com/view/balloon-gif-8189968')
            message.channel.send('Parabéns pra você\nNesta data querida\nMuitas felicidades\nMuitos anos de vida!')
        } else {
            return
        }
    }
})

/* PARABENS DIOGUINHO!!! */

client.on('messageCreate', (message) => {
    if (message.guild.id != "600692411253129217") return
    if (message.author.bot === true) {
        return
    } else {
        if (message.content === '!dioguinho') {
            message.channel.send('Parabéns Dioguinho!!! :partying_face: :partying_face: :partying_face:')
            message.channel.send('https://tenor.com/view/balloon-gif-8189968')
            message.channel.send('https://media.discordapp.net/attachments/559175206120325121/915598436106133504/unknown.png')
            message.channel.send('https://tenor.com/view/balloon-gif-8189968')
            message.channel.send('Parabéns pra você\nNesta data querida\nMuitas felicidades\nMuitos anos de vida!')
        } else {
            return
        }
    }
})

/* PARABENS FABINHO!!! */

client.on('messageCreate', (message) => {
    if (message.guild.id != "600692411253129217") return
    if (message.author.bot === true) {
        return
    } else {
        if (message.content === '!fabinho') {
            message.channel.send('Parabéns Fabinho!!! :partying_face: :partying_face: :partying_face:')
            message.channel.send('https://tenor.com/view/balloon-gif-8189968')
            message.channel.send('https://media.discordapp.net/attachments/606596875835015196/916369309218005052/unknown.png?width=287&height=511')
            message.channel.send('https://tenor.com/view/balloon-gif-8189968')
            message.channel.send('Parabéns pra você\nNesta data querida\nMuitas felicidades\nMuitos anos de vida!')
        } else {
            return
        }
    }
})

/* BOTA PRA CANTAR PAPUM */

client.on('messageCreate', (message) => {
    if (message.guild.id === "868138837505867818") return
    if (message.author.bot === true) {
        return
    } else {
        var papum = message.content.toLowerCase()
        if (papum === 'bota o fuzil pra cantar') {
            message.reply(':exploding_head: PA :boom: PUM :gun:')
            message.channel.send('https://cdn.discordapp.com/attachments/570036128753647642/877927013065842709/show.gif')
        } else if (papum === 'bota o fuzil pra canta') {
            message.reply(':exploding_head: PA :boom: PUM :gun:')
            message.channel.send('https://cdn.discordapp.com/attachments/570036128753647642/877927013065842709/show.gif')
        } else {
            return
        }
    }
})

/* AYAYAYA */

client.on('messageCreate', (message) => {
    if (message.guild.id === "868138837505867818") return
    if (message.author.bot === true) {
        return
    } else {
        var ayaya = message.content.toLowerCase()
        var ayaka = ayaya.indexOf('ayaka') > -1
        if (ayaka === true) {
            var sorteio = Math.floor(Math.random() * 4)
            switch (sorteio) {
                case 0:
                    message.reply('AYAYAYA\nhttps://tenor.com/view/ayaka-kamisato-ayaka-genshin-impact-gif-22346247')
                    break;
                case 1:
                    message.reply('AYAYAYA\nhttps://tenor.com/view/mihoyo-genshin-genshinimpact-kamisatoayaka-ayaka-gif-20435853')
                    break;
                case 2:
                    message.reply('AYAYAYA\nhttps://tenor.com/view/ayaka-kamisato-ayaka-ayaka-genshin-genshin-impact-genshin-leaks-gif-22275643')
                    break;
                case 3:
                    message.reply('AYAYAYA\nhttps://tenor.com/view/ayaka-kamisato-ayaka-genshin-impact-inazuma-ayaka-trailer-gif-22347368')
                    break;
                case 4:
                    message.reply('AYAYAYA\nhttps://tenor.com/view/kamisato-ayaka-genshin-impact-niko-tenor-gif-22515244')
                    break;
                default:
                    message.reply('AYAYAYA\nhttps://tenor.com/view/kamisato-ayaka-genshin-impact-niko-tenor-gif-22515244')
                    break;
            }
        } else {
            return
        }
    }
})

/* HIGAO */

client.on('messageCreate', (message) => {
    if (message.guild.id === "868138837505867818") return
    if (message.author.bot === true) {
        return
    } else {
        if (message.content === '!higao') {
            message.reply('https://uploads.twitchalerts.com/000/483/240/492/higao%20maior.PNG')
        } else {
            return
        }
    }
})

/* FABINHO HETERO TOP */

client.on('messageCreate', (message) => {
    if (message.author.bot === true) {
        return
    } else {
        if (message.content === '!hetero') {
                message.channel.send(':hot_face::hot_face::hot_face::hot_face::hot_face:')
                message.channel.send('https://media.discordapp.net/attachments/845927454316298240/918675769306255440/IMG_4479.jpg?width=288&height=511')
                message.channel.send('https://media.discordapp.net/attachments/845927454316298240/918675769511800863/IMG_4480.jpg?width=288&height=511')
                message.channel.send('https://media.discordapp.net/attachments/845927454316298240/918675770568740894/IMG_4483.jpg?width=288&height=511')
            } else {
                return
        }
    }
})

/* 😁 */

client.on('messageCreate', (message) => {
    if (message.guild.id === "868138837505867818") return
    if (message.author.bot === true) {
        return
    } else {
        if (message.content === '!😁') {
            message.reply('😁😁😁\nhttps://media.discordapp.net/attachments/606596875835015196/918672183532851250/Z.png')
        } else {
            return
        }
    }
})

/* DIOGO */

client.on('messageCreate', (message) => {
    if (message.guild.id === "868138837505867818") return
    if (message.author.bot === true) {
        return
    } else {
        if (message.content === '!diogo') {
            message.reply('https://cdn.discordapp.com/attachments/845927454316298240/877973476483424266/VIDEO-2021-07-31-23-23-23.mp4')
        } else {
            return
        }
    }
})

/* FABAO */

client.on('messageCreate', (message) => {
    if (message.guild.id === "868138837505867818") return
    if (message.author.bot === true) {
        return
    } else {
        if (message.content === '!eae9vinha') {
            message.reply(':hot_face::hot_face::hot_face: Bora meter?? :drooling_face::drooling_face:')
            message.channel.send('https://cdn.discordapp.com/attachments/606596875835015196/878067032812322816/12599b98-dd42-4b51-9d04-23ac608db05b.png')
        } else {
            return
        }
    }
})

/* VERIFICAÇÃO SERVIDOR ESCOLA*/

/*
Cargo 1 info: 873215062502944859
Cargo 2 info: 868143503111249930
Cargo 3 info: 873214761599397931
Cargo VERIFICADOR: 873219096177676350
*/

client.on('messageCreate', async (message) => {
    if (message.guild.id != "868138837505867818") return
    if (message.channel.id != "873218874315780187") return
    if (message.author.bot === true) return

    if (message.content === '!verificar') {
        message.delete()

        let botMessage = await message.channel.send(`${message.member.toString()} Digite seu nome completo!`)

        const filter = m => m.author.id == message.author.id;
        collector = message.channel.createMessageCollector({ filter, max: 1 })

        collector.on('collect', async m => {

            let nome = m.content
            let aluno = m.member

            aluno.setNickname(nome)
            m.delete()

            botMessage.edit(`${aluno.toString()} Agora informe sua sala usando os comandos:\n\n!1info para o 1° ano de informática\n!2info para o 2° ano de informática\n!3info para o 3° ano de informática\n`)

            collector = m.channel.createMessageCollector({ filter, max: 1 })

            collector.on('collect', async m => {

                if (m.content === '!1info') {
                    aluno.roles.remove('868143503111249930')
                    aluno.roles.remove('873214761599397931')
                    aluno.roles.remove('873219096177676350')
                    aluno.roles.add('873215062502944859')
                    m.delete()
                    botMessage.edit(`Verificação concluída ${message.member.toString()}!`).then(msg => { setTimeout(() => { msg.delete() }, 5000) })
                }

                if (m.content === '!2info') {
                    aluno.roles.remove('873215062502944859')
                    aluno.roles.remove('873214761599397931')
                    aluno.roles.remove('873219096177676350')
                    aluno.roles.add('868143503111249930')
                    m.delete()
                    botMessage.edit(`Verificação concluída ${message.member.toString()}!`).then(msg => { setTimeout(() => { msg.delete() }, 5000) })
                }

                if (m.content === '!3info') {
                    aluno.roles.remove('873215062502944859')
                    aluno.roles.remove('868143503111249930')
                    aluno.roles.remove('873219096177676350')
                    aluno.roles.add('873214761599397931')
                    m.delete()
                    botMessage.edit(`Verificação concluída ${message.member.toString()}!`).then(msg => { setTimeout(() => { msg.delet() }, 5000) })
                }
            })
        })
    }
})

/* CHAMADA */

client.on('messageCreate', async (message) => {

    if ((message.guild.id != "868138837505867818") || (message.guild.id != "520994132458471438")) return
    if (message.author.bot === true) return
    if (message.content != '!chamada') {

        return

    } else {

        if (message.author.id !== '520994132458471438') {
            message.reply('Você não pode usar este comando!')
            return

        } else {

            message.reply('Use !presente para marcar presença na aula!')

            collector = message.channel.createMessageCollector({ time: 180000 })
            var listaPresentes = []
            var botMessage = await message.channel.send(`Lista de presentes na aula do dia ${dataAtual}:\n\n${listaPresentes.join('\n')}`)

            collector.on('collect', async m => {

                if (m.author.bot === true) return
                if (m.content === '!presente') {

                    if (m.author.bot === true) return

                    m.delete()
                    m.channel.send(`${m.member.toString()} presença confirmada!`).then(msg => { setTimeout(() => { msg.delete() }, 5000) })
                    listaPresentes.push(m.member.nickname)
                    botMessage.edit(`Lista de presentes na aula do dia ${dataAtual}:\n\n${listaPresentes.join('\n')}`)

                }
            })
        }
    }
})

/* APENAS PARA O DAVI */

client.on("messageCreate", (message) => {
    if (message.guild.id != "742179700776108153") return
    if (message.author.bot == true) return

    let bosta = message.content.toLowerCase()

    if (bosta == "bosta") {
        message.channel.send("https://cdn.discordapp.com/attachments/631988173945307138/875820247372943360/unknown.png")
    }
});

/* VAI VIAJAR?? */

client.on('messageCreate', (message) => {
    if (message.author.bot === true) return
    if (message.content === '!pika') {
        if (message.author.id === '520994132458471438') {
            message.reply(`Mas você vai viajar?? Acho que essa bagagem de 42cm não ta permitida!`)
        } else {
            var lucky = (Math.floor(Math.random() * 25) + 5)

            if (lucky >= 5 && lucky < 13) {
                message.reply(`Não se desanime com seus ${lucky}cm! Tamanho não é documento!`)
            } else if (lucky >= 13 && lucky < 22) {
                message.reply(`Meu amigo você é policial? E esse pistolão de ${lucky}cm?`)
            } else {
                message.reply(`Mas você vai viajar?? Acho que essa bagagem de ${lucky}cm não ta permitida!`)
            }
        }
    } else return
})

/* ENCHER O SACO DO FABIO */

client.on('messageCreate', (message) => {
    msg = (message.content)
    if (message.content === '') return
    if (message.author.id === '606596092561195019' || message.author.id === '690709251424780318') {
        message.reply(msg)
    } else return
})

/* LOGIN */

client.login('ODc1NzU5NTM2MTMxMTQ1NzM4.YRaMoA._f57HEHKDviNsJ6_QlM0lHHh3vc')