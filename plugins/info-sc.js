import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
	try {
   let xm4ze = await( await fetch(xmenus)).json()
   let thum = xm4ze[Math.floor(Math.random() * xm4ze.length)]
   let maximus = `*RafwBot*

> https://github.com/RafhX/RafwBot-OF

_Jgn Mampir Doang Bgg Rate Juga !_`
		conn.sendMessage(m.chat, {
            text: maximus,
            contextInfo: {
                forwardingScore: 9999,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: global.info.channel,
                   serverMessageId: null,
                   newsletterName: global.info.namechannel,
                   },
                   externalAdReply: {
                   title: global.info.namebot + `© 2024`,
                   body: 'Powered By RaffVPS',
                   thumbnailUrl: thum,
                   sourceUrl: 'https://github.com/RafhX/RafwBot-OF',
                   mediaType: 1,
                   renderLargerThumbnail: true
                   },
                },
            }, { quoted: m })
	} catch (e) {
		console.log(e)
		throw `Fitur Error.`
	}
};

handler.command = /^(sc|script)$/i
handler.register = false;
handler.premium = false;

export default handler;
