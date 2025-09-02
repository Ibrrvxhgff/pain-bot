const handler = async (m, { conn }) => {
    const imageUrl = "https://files.catbox.moe/lx7ri8.jpg";
    const link1 = "https://wa.me/218943821774";

    // الرسالة الأولى: externalAdReply مع صورة كبيرة
    const adMessage = {
        text: "> مـرحـبـا اسـمـي هــارون مـطـوري هـو مـسـتـر ايـانـو اسـتـخـدم امـر (.اوامـر) لطلب الـقـائـمـة",
        contextInfo: {
            externalAdReply: {
                title: "｢🐥┊𝙷𝙰𝚁𝙾𝙽 𝙱𝙾𝚃┊⛄｣",
                body: "｢🧸┆𝙷𝙰𝚁𝙾𝙽 𝙱𝙾𝚃┆❄️｣",
                thumbnailUrl: imageUrl,
                mediaType: 1,
                renderLargerThumbnail: true,
                sourceUrl: link1
            }
        }
    };

    await conn.sendMessage(m.chat, adMessage, { quoted: m });

    // الرسالة الثانية: أزرار
    const buttons = [
        { buttonId: ".اوامر", buttonText: { displayText: "⌈🚀╎اوامر╎🚀⌋" }, type: 1 },
        { buttonId: "المطور", buttonText: { displayText: "⌈👑╎المطور╎👑⌋" }, type: 1 }
    ];

    const buttonMessage = {
        text: "اختر من الأزرار التالية:",
        buttons: buttons,
        footer: "｢📡┊قائمة هارون┊📡｣",
        headerType: 1
    };

    await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
};

handler.command = /^بوت$/i;

export default handler;