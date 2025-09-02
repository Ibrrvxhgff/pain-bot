let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];
  let name = conn.getName(m.sender) || 'مستخدم';
  let taguser = '@' + m.sender.split("@")[0];

  let currentTime = new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });

  let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : null;
  let groupName = groupMetadata ? groupMetadata.subject : 'غير معروف';
  let groupMembers = groupMetadata ? groupMetadata.participants.length : 'غير معروف';

  let message = `
╮••─๋︩︪──๋︩︪─═⊐‹﷽›⊏═─๋︩︪──๋︩︪─┈☇
╿↵ مرحــبـا ⌊${taguser}⌉
── • ◈ • ──
*⌝⛄┊قــســم التحميل┊🧸⌞* 
╮─ׅ─๋︩︪─┈─๋︩︪─═⊐‹✨›⊏═┈ ─๋︩︪─ ∙ ∙ ⊰ـ
┤─ׅ─ׅ┈ ─๋︩︪──ׅ─ׅ┈ ─๋︩︪─☇ـ
┤┌ ─๋︩︪─✦التحميلات─˚᳝᳝
│┊ ۬.͜ـ🧸˖ ⟨جيتهاب☇ 
│┊ ۬.͜ـ🧸˖ ⟨ميجا☇
│┊ ۬.͜ـ🧸˖ ⟨شغل☇
│┊ ۬.͜ـ🧸˖ ⟨ميديا_فاير☇
│┊ ۬.͜ـ🧸˖ ⟨تويتر☇
│┊ ۬.͜ـ🧸˖ ⟨تيك☇
│┊ ۬.͜ـ🧸˖ ⟨تيكتوك☇
> اكتب تيكتوك بعدين اسم شخصية عشوائي
│┊ ۬.͜ـ🧸˖ ⟨تيك_صوره☇
│┊ ۬.͜ـ🧸˖ ⟨اغنيه☇ 
│┊ ۬.͜ـ🧸˖ ⟨رابط+ytmp3☇
│┊ ۬.͜ـ🧸˖ ⟨رابط+ytmp4☇
│┊ ۬.͜ـ🧸˖ ⟨يوتيوب☇
│┊ ۬.͜ـ🧸˖ ⟨انستا☇
│┊ ۬.͜ـ🧸˖ ⟨تيكتوك☇
│┊ ۬.͜ـ🧸˖ ⟨فيس☇
┤└─ׅ─ׅ┈ ─๋︩︪──ׅ─ׅ┈ ─๋︩︪☇ـ
╯─ׅ ─๋︩︪─┈─๋︩︪─═⊐‹♻️›⊏═┈ ─๋︩︪─ ∙ ∙ ⊰ـ  `;

  const emojiReaction = '🛠️';

  try {
    await conn.sendMessage(m.chat, { react: { text: emojiReaction, key: m.key } });

    await conn.sendMessage(m.chat, { 
      image: { url: 'https://files.catbox.moe/5l1nah.jpg' },
      caption: message,
      mentions: [m.sender]
    });
  } catch (error) {
    console.error("Error sending message:", error);
    await conn.sendMessage(m.chat, { text: 'حدث خطأ أثناء إرسال الصورة.' });
  }
};

handler.command = /^(ق4)$/i;
handler.exp = 50;
handler.fail = null;

export default handler;