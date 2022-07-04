/**
* jangan ganti ya kakak kakak sekalian
* ini cuma buat ninggalin credit gw doang :)
**/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let handler = async (m, { conn, command, usedPrefix, text }) => {
let fs = require('fs')
let esce = `
           「  FACHRIBOT MD  」
╭─❑
│✾ SCRIPT: PRIVATE 🔒
│✾ BASE: https://github.com/ilmanhdyt/ShiraoriBOT-Md
╰─❑`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: esce,           
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'MY GITHUB',
               url: 'github.com/Ipulpachri'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Ok Bang',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
