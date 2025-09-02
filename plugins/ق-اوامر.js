function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor((ms % 3600000) / 60000);
    let s = Math.floor((ms % 60000) / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

import pkg from 'baileys-pro';
const { generateWAMessageFromContent, prepareWAMessageMedia } = pkg;
let rtotalreg = Object.keys(global.db.data.users).length;
let now = new Date();
let week = now.toLocaleDateString('ar-TN', { weekday: 'long' });
let time = now.toLocaleDateString('ar-TN', { year: 'numeric', month: 'long', day: 'numeric' });
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

        await conn.sendMessage(m.chat, { react: { text: '👑', key: m.key } });

        const Elsony = 'https://files.catbox.moe/apxvry.jpg';
        const media = await prepareWAMessageMedia({ image: { url: Elsony } }, { upload: conn.waUploadToServer });

        let message = {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: { title: "gataVidMenu" },
                        body: { text: `مــرحــبـا بـك يـــا:*┆⌊@${mentionId.split('@')[0]}⌉┆*

*˼‏ ⚠️˹ مـلاحــظــات╿↶*

╭ ⋅ ⋅ ── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ── ⋅ ⋅ ╮
*❶ - يمنع منعا بتا سب البوت.*
*❷ - استخدام البوت بشكل متوازن و بدون تسبب ازعاج للاعضاء.*
*➌ - اضغط على الزر ⌈🍭┊اوامر┊🍬⌋ ثم اختر القسم الذي تريده.*
*➍ - ضع (.) قبل كل امر لكي يشتغل.*
*➎ - استخدم امر｢تسجيل/reg｣ لي تشغيل بعض الاوامر.*
 ╰⋅ ⋅ ── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ── ⋅ ⋅ ╯
‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏
‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏‏
~*⊱──═⪨༻【👑】༺⪩═──⊰*~
*╮═━━━━━━✦✿✦━━━━━━═╭*   
*┊  ｢👑┊مـعـلـومـات الـبـوت┊👑｣ ┊*
*╯═━━━━━━✦✿✦━━━━━━═╰*

🌙 اســم الـبــوت: 𝙷𝙰𝚁𝙾𝙽-𝙱𝙾𝚃」
👨🏻‍💻  الـــمـــــطور: 𝑯𝑨𝑹𝑶𝑵 - ايـانـو」
⚡  رقـــم الـمـــطور: +218943821774」 \n 

~*⊱──═⪨༻【👑】༺⪩═──⊰*~ \n
*╮═━━━━━━✦✿✦━━━━━━═╭*   
*┊   ｢🗒️┊مــعــلــومــاتــك┊🗒️｣   ┊*
*╯═━━━━━━✦✿✦━━━━━━═╰*

✘┋ ـ🔝˖مــســتــواك :  ${level}」
✘┋ 👮🏻‍♂️˖رتــبــتــك :  ${role}」
✘┋ ⚜️  الــيــوم : ${week}」
✘┋ 📆  الــتــاريــخ : ${time}」
✘┋ 🧑‍🧑‍🧒‍🧒˖الــمـســتــخــدمــيــن : ${rtotalreg}」

~*⊱──═⪨༻【👑】༺⪩═──⊰*~`, subtitle: "Elsony" },
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
                                                highlight_label: '𝐇𝐀𝐑𝐎𝐍_𝐁𝐎𝐓',
                                                rows: [
                                                    { header: '👑┊القـ👑ـسـم الأول', title: '🍫┊「قـسـم_الألـعـاب」🍥', id: '.ق1' },
                                                    { header: '🐦‍🔥┊القـ🐦‍🔥ـسـم الثاني', title: '🍨┊「قـسـم_الـمـشـرفـيـن」🍨', id: '.ق2' },
                                                    { header: '👑┊القـ👑ـسـم الثالث', title: '🍨┊「قـسـم_الادوات」🍬', id: '.ق3' },
                                                    { header: '🛡┊القـ🛡ـسـم الرابع', title: '🍬┊「قـسـم_الـتـحـمـيـل」🍨', id: '.ق4' },
                                                    { header: '🕹┊القـ🕹ـسـم الخامس', title: '🍬┊「قـسـم_الـبـنـك」🍨', id: '.ق5' },
                                                    { header: '🌀┊القـ🌀ـسـم السادس', title: '🍬┊「قـسـم_الــAI」🍨', id: '.ق6' },
                                                          { header: '🤖┊القـ🤖ـسـم السابع', title: '🍬┊「قـسـم_الـتـسـلـيـه」🍨', id: '.ق7' },
                                    
                                                    { header: '🕋┊القـ📿ـسـم الثامن', title: '🍬┊「قــســم_الـديـن」🍨', id: '.ق8' },
                
                                                                                             { header: '🖌️┊القـ🖌️ـسـم التاسع', title: '🍬┊「قــســم_الـزخــارف」🍨', id: '.ق9' },
                                                                                                      { header: '⚔️┊القـ⚜️ـسـم العاشر', title: '🍬┊「قــســم_الـنـقـابـات」🍨', id: '.ق10' },  
                                                                                                      { header: '🗾┊القـ🌅ـسـم 11', title: '🍬┊「قــســم_الـصــور」🍨', id: '. ق11' },
                                                                                                                                                                        { header: '👨🏻‍💻┊القـ👨🏻‍💻ـسـم خاص', title: '🍬┊「 القوانين 」🍨', id: '.القواعد' }
                                                ]
                                            }
                                        ]
                                    })
                                },
                   
                       
                                {
                                    name: "quick_reply",
                                    buttonParamsJson: '{"display_text":"⌈🌟╎تقييم╎🌟⌋","id":".تقيم"}'
                                },
                                {
                                    name: "cta_url",
                                    buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"https://whatsapp.com/channel/0029Vb6NeZB2ER6atrgA3R00"}'
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
handler.command = ['menu', 'مهام', 'اوامر', 'الاوامر', 'قائمة', 'القائمة'];

export default handler;