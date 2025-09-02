function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor((ms % 3600000) / 60000);
    let s = Math.floor((ms % 60000) / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from 'baileys-pro';
const { generateWAMessageFromContent, prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {
    try {
        let d = new Date(Date.now() + 3600000);
        let locale = 'ar';
        let uptime = clockString(process.uptime() * 1000);
        let user = global.db.data.users[m.sender] || {};
        let name = conn.getName(m.sender);
        let { role, level } = user;
        let mentionId = m.key.participant || m.key.remoteJid;
        let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];

        await conn.sendMessage(m.chat, { react: { text: '🎶', key: m.key } });

        const Elsony = 'https://files.catbox.moe/60157t.jpg';
        const media = await prepareWAMessageMedia({ image: { url: Elsony } }, { upload: conn.waUploadToServer });

        let message = {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: { title: "gataVidMenu" },
                        body: { text: `╭────────────── ⪩  
┃  🎤✨ ســـــــلام عــلــيــكــم يــا مــغــنــي 🎶💙  
╰────────────── ⪨  
╭────────── ⪩  
┃ 🎼✨ أهـــــلًا وســــهـــلًا بــــك يــا:  
┃ ⌜ @${mentionId.split('@')[0]} ⌟  
╰────────── ⪨  
╭═══════ ⌈ 🎶 مــعــلــومــات الــبــوت 🎤 ⌋ ═══════╮  
┃ 🩵❥ *اســــــم الــــبــــوت*: 『 𝑯𝑨𝑹𝑶𝑵 🎙』  
┃ 💫❥ *الــــمــــطــــور*: 『 𝑯𝑨𝑹𝑶𝑵 - ايانو 👑』  
┃ 🎙❥ *رقــــم الــــمــــطــــور*: 『 https://wa.me/218943821774 📞』  
╭═══════ ⌈ 🎤 مــعــلــومــاتــك 🎼 ⌋ ═══════╮  
┃ 🍭❥ *مــســتــواك*: 『 ${level} 🎵 』  
┃ 💰❥ *فــلــوســك*: 『 ${user.money || 0} 🪙 』  
┃ 🎙❥ *رتــبــتــك*: 『 ${role} 🎼 』  
┃ ❤️❥ *صــحــتــك*: 『 ${user.health || 100} / 1000 🚑』  
${user.boosts && Object.keys(user.boosts).length > 0 ? `┃ 🔥❥ *تــأثــيــراتــك الــنــشــطــة*:  
${user.boosts.xpMultiplier ? `┃  💡 زيادة XP: +${(user.boosts.xpMultiplier - 1) * 100}%` : ''}  
${user.boosts.healthShield ? `┃  🛡️ درع الحماية: ${user.boosts.healthShield} ضربات متبقية` : ''}  
` : ''}  
╭── 🎧🎶 ⌈ 𝑵𝑶𝑻𝑬 ⌋ 🎶🎧 ──╮  
┃ *🎤 اضغط الأزرار لعرض القائمة 🎼*  
┃ *💬 للشكاوى أو الاقتراحات استخدم: .ابلاغ 🎶*  
┃ *🎶 حافظ على الأجواء الموسيقية عند ذكر البوت! 🎵*  
╰── 🎼💙 ⌈ 𝑯𝑨𝑹𝑶𝑵 𝑩𝑶𝑻 🎤 ⌋ 💙🎼 ──╯ `, subtitle: "Elsony" },
                        header: { hasMediaAttachment: true, ...media },
                        contextInfo: { mentionedJid: [m.sender], isForwarded: false },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: 'single_select',
                                    buttonParamsJson: JSON.stringify({
                                        title: '⌈🍭┊اوامر┊🍬⌋',
                                        sections: [
                                            {
                                                title: '❪🐣┊مـهـام_الـبـوت┊🍡❫',
                                                highlight_label: '𝑯𝑨𝑹𝑶𝑵_𝐁𝐎𝐓',
                                                rows: [
                                                    { header: '👑┊القـ👑ـسـم الأول', title: '🍫┊「قـسـم_الألـعـاب」🍥', id: '.ق1' },
                                                    { header: '🐦‍🔥┊القـ🐦‍🔥ـسـم الثاني', title: '🍨┊「قـسـم_الـمـشـرفـيـن」🍨', id: '.ق3' },
                                                    { header: '👑┊القـ👑ـسـم الثالث', title: '🍨┊「قـسـم_الادوات」🍬', id: '.ق4' },
                                                    { header: '🛡┊القـ🛡ـسـم الرابع', title: '🍬┊「قـسـم_الـتـحـمـيـل」🍨', id: '.ق5' },
                                                    { header: '🕹┊القـ🕹ـسـم الخامس', title: '🍬┊「قـسـم_الـبـنـك」🍨', id: '.ق6' },
                                                    { header: '🌀┊القـ🌀ـسـم السادس', title: '🍬┊「قـسـم_الــAI」🍨', id: '.ق7' },
                                                          { header: '🤖┊القـ🤖ـسـم السابع', title: '🍬┊「قـسـم_الـتـسـلـيـه」🍨', id: '.ق9' },
                                                    { header: '👨🏻‍💻┊القـ👨🏻‍💻ـسـم الثامن', title: '🍬┊「 القوانين 」🍨', id: '.القواعد' }
                                                ]
                                            }
                                        ]
                                    })
                                },
                                {
                                    name: "cta_url",
                                    buttonParamsJson: '{"display_text":"⌈📩╎شات البوت╎📩⌋","url":"https://chat.whatsapp.com/IvJZuA9S588EO7VgZBlhk0"}'
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: '{"display_text":"⌈🌟╎تقييم╎🌟⌋","id":".تقيم"}'
                                },
                                {
                                    name: "cta_url",
                                    buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"https://whatsapp.com/channel/0029Vb2uzWh4CrfaMDLZvZ2j"}'
                                },
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: '{"display_text":"⌈🚀╎المطور╎🚀⌋","id":".المطور"}'
                                }
                            ]
                        }
                    }
                }
            }
        };

        await conn.relayMessage(m.chat, message, {});
    } catch (err) {
        console.error(err);
        await conn.sendMessage(m.chat, { text: '❌ حدث خطأ أثناء تنفيذ الأمر.' }, { quoted: m });
    }
};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = /^\.?(menu|مهام|اوامر|الاوامر|قائمة|القائمة)$/i;

export default handler;