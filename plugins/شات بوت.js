import pkg from 'baileys-pro';
const { generateWAMessageFromContent, prepareWAMessageMedia } = pkg;



let handler = m => m;

handler.all = async function (m) {
  if (m.key.fromMe) return;

  let chat = global.db.data.chats[m.chat];
  if (chat.isBanned) return;

  const sendAdReply = async (text) => {
    const buttons = [
      {
        name: 'quick_reply',
        buttonParamsJson: JSON.stringify({
          display_text: '⌈🚀╎المطور╎🚀⌋',
          id: '.المطور'
        })
      },
      {
        name: 'quick_reply',
        buttonParamsJson: JSON.stringify({
          display_text: '⌈🧩╎الاوامر╎🧩⌋',
          id: '.الاوامر'
        })
      }
    ];

    const message = generateWAMessageFromContent(m.chat, {
      extendedTextMessage: {
        text: text,
        contextInfo: {
          externalAdReply: {
            title: "𝙷𝙰𝚁𝙾𝙽 𝙱𝙾𝚃",
            body: "𝙱𝚈 𝚁𝙰𝙳𝙸𝙾 𝙳𝙴𝙼𝙾𝙽",
            thumbnailUrl: "https://files.catbox.moe/77tlsr.jpg",
            sourceUrl: "https://whatsapp.com/channel/0029VaENL4h1lD3MZsVEty",
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: false
          },
          buttonReply: buttons[0], // الزر الأول يظهر تلقائيًا
          buttons
        }
      }
    }, { quoted: m });

    await conn.relayMessage(m.chat, message.message, { messageId: message.key.id });
  };
  if (/^هارون$/i.test(m.text)) await sendAdReply("*نـعـم انـا هـنـا*");
  if (/^عبيط|يا عبيط|اهبل|غبي$/i.test(m.text)) await sendAdReply("*ذا انت 🥲❤️*");
  if (/^بوت$/i.test(m.text)) await sendAdReply("*ارغي عايز ايه*");
  if (/^ايانو$/i.test(m.text)) await sendAdReply("*مطوري و حبيبي 😊*");
  if (/^منور|منوره$/i.test(m.text)) await sendAdReply("*بنوري انا 🫠💔*");
  if (/^بنورك|دا نورك|نورك الاصل|نور نورك$/i.test(m.text)) await sendAdReply("*دز بنوري انا 🫠🐦*");
  if (/^امزح|بهزر$/i.test(m.text)) await sendAdReply("*دمك تقيل متهزرش تاني 😒*");
    if (/^دز$/i.test(m.text)) await sendAdReply("*دز انت!!*");
    if (/^السلام عليكم$/i.test(m.text)) await sendAdReply("*وعـلـيـكـم الـسـلام ورحـمـة الـلـه وبـركـاتـه*");
    if (/^صباح الخير$/i.test(m.text)) await sendAdReply("*صـبـاح الـورد 🌹✨*");
  if (/^ايش فيه$/i.test(m.text)) await sendAdReply("*انا معرفش حاجه 🙂*");
  if (/^بتعمل ايه دلوقتي|بتعمل اي$/i.test(m.text)) await sendAdReply("*انت مالك 😒*");
  if (/^انا جيت$/i.test(m.text)) await sendAdReply("*امشي تاني*");
  if (/^حرامي|سارق$/i.test(m.text)) await sendAdReply("*تتهم بريء بالسرقة ... فبسكوتك اقتل جهلك*");
  if (/^ملل|مللل|ملللل|زهق$/i.test(m.text)) await sendAdReply("*لانك موجود 🗿*");
  if (/^🤖$/i.test(m.text)) await sendAdReply("انت بوت عشان ترسل الملصق ده 🐦");
  if (/^نعم$/i.test(m.text)) await sendAdReply("*حد ناداك 🌚🐦*");
  if (/^كيفك|شخبارك|علوك|عامل ايه|اخبارك|اي الدنيا$/i.test(m.text)) await sendAdReply("*⛄جـيـد وانـت؟*");
    if (/^الحمد لله|الحمد لله$/i.test(m.text)) await sendAdReply("*ادام الله حمدك*");
  if (/^تصبح علي خير|تصبحوا علي خير$/i.test(m.text)) await sendAdReply("وانت من اهل الخير حبيبي ✨💜");
  if (/^ببحبك بوت|حبك|هارون بحبك$/i.test(m.text)) await sendAdReply("🙄");
  if (/^بص$/i.test(m.text)) await sendAdReply("بص بعيد 🙂");
  if (/^باي$/i.test(m.text)) await sendAdReply("*مـع الـسـلامـه 🐥*");
  if (/^هلا$/i.test(m.text)) await sendAdReply("*اهـلا كـيـفـك 🧸*");

  return !0;
};

export default handler;