function handler(m) {
const PhoneNumber = require('awesome-phonenumber')
let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 1,status: 200, surface: 200, message: `                   「 MY OWNER 」            `, orderTitle: 'Centauri', sellerJid: '0@s.whatsapp.net'}}}
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:; Fachri;;;'
                    + 'FN: FachriOwnBot\n' // full name
                    + 'ORG:Tak ingin terkenal hanya ingin di kenal;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6285713041886:+62857-1304-1886\n'
                    + 'X-ABLabel:Sibuk\n' 
                    + 'EMAIL;type=INTERNET:saefulfachri18@gmail.com\n'
                    + 'X-ABLabel:Email\n'
                    + 'ADR:;;🇮🇩 Indonesia;;;;\n'
                    + 'X-ABADR:ac\n'
                    + 'X-ABLabel:Region\n'
                    + 'URL:https://fachriweb.vercel.app\n'
                    + 'X-ABLabel:Website'
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Fachri', contacts: [{ vcard }] } }, { quoted: ftroli })
m.reply(m.chat,'*Tuh nomor org ganteng*', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
