import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn }) => {
  let audio = 'https://files.catbox.moe/eibzwf.mp3'
  let thumbnail = await fetch('https://files.catbox.moe/1bshpd.jpg')
    .then(res => res.arrayBuffer())
    .then(buff => Buffer.from(buff))
    .catch(() => fs.readFileSync('./media/default.jpg'))

  await conn.sendMessage(m.chat, {
    audio: { url: audio },
    mimetype: 'audio/mp4',
    ptt: true,
    fileName: 'RADIO-DEMON.mp3',
    contextInfo: {
      externalAdReply: {
        title: "🚫┇≡ ◡̈⃝⚰️•⪼ 𝑯𝑨𝑹𝑶𝑵 - ايانو",
        body: "🎤┇≡ ◡̈⃝🎼•⪼ 𝙷𝙰𝚁𝙾𝙽 𝙱𝙾𝚃",
        thumbnail: thumbnail,
        mediaType: 1,
        renderLargerThumbnail: true,
        mediaUrl: "https://wa.me/218943821774",
        sourceUrl: "https://wa.me/218943821774"
      }
    }
  }, {
    quoted: m,
    buttons: [
      { buttonId: '.الاوامر', buttonText: { displayText: '🧾 عرض الأوامر' }, type: 1 }
    ],
    headerType: 1
  });
};

handler.customPrefix = /^(بوت|يا بوت)$/i;
handler.command = new RegExp;
export default handler;