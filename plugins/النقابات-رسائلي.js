let handler = async (m, { conn, args, usedPrefix, command, participants, groupMetadata }) => {

    if (!global.groupData) global.groupData = {};

    const chatId = m.chat;

    if (!global.groupData[chatId]) global.groupData[chatId] = {};

    const groupUsers = global.groupData[chatId];

    if (!groupUsers[m.sender]) {

        groupUsers[m.sender] = {

            messagesSent: 0,

            totalChecks: 0,

            lastCheckTime: 0

        };

    }

    // تسجيل باقي الأعضاء إن لم يكونوا مسجلين

    participants.forEach(participant => {

        if (!groupUsers[participant.id]) {

            groupUsers[participant.id] = {

                messagesSent: 0,

                totalChecks: 0,

                lastCheckTime: 0

            };

        }

    });

    let profilePicture;

    try {

        profilePicture = await conn.profilePictureUrl(m.sender, 'image');

    } catch {

        profilePicture = 'https://files.catbox.moe/xm1bbx.jpg'; // صورة افتراضية

    }

    const groupName = groupMetadata.subject;

    if (command === 'رسايلي' || command === 'رسائلي') {

        const messagesSent = groupUsers[m.sender].messagesSent;

        let message = `🌟 *إحـصـائـيـات رسـائـلـك* 🌟\n\n`;

        message += `📌 *الـمـجـمـوعـة:* ${groupName}\n`;

        message += `👤 *الـمـسـتـخـدم:* @${m.sender.split('@')[0]}\n`;

        message += `✉️ *عـدد الـرسـائـل:* ${messagesSent} رسـالـة\n`;

        conn.sendMessage(m.chat, { image: { url: profilePicture }, caption: message, mentions: [m.sender] });

    } else if (command === 'اجمالي') {

        const allowedUser = '218943821774@s.whatsapp.net';

        const now = Date.now();

        // إعادة التهيئة إذا مرت 24 ساعة

        const timePassed = now - groupUsers[m.sender].lastCheckTime;

        if (timePassed >= 86400000) {

            groupUsers[m.sender].totalChecks = 0;

            groupUsers[m.sender].lastCheckTime = now;

        }

        // التحقق من الحد

        if (m.sender !== allowedUser) {

            if (groupUsers[m.sender].totalChecks >= 3) {

                return conn.reply(m.chat, `🚫 لقد استخدمت أمر *اجمالي* 3 مرات خلال 24 ساعة.\n⏳ انتظر حتى تنتهي المهلة لتستطيع استخدامه مجددًا.`, m);

            }

            groupUsers[m.sender].totalChecks += 1;

            groupUsers[m.sender].lastCheckTime = now;

        }

        const sortedUsers = Object.entries(groupUsers).sort((a, b) => b[1].messagesSent - a[1].messagesSent);

        const totalMessages = sortedUsers.reduce((sum, user) => sum + user[1].messagesSent, 0);

        const totalMembers = participants.length;

        let resultMessage = `📊 *إحـصـائـيـات الـرسـائـل داخـل الـمـجـمـوعـة* 📊\n\n`;

        resultMessage += `📌 *الـمـجـمـوعـة:* ${groupName}\n`;

        resultMessage += `🔹 *عـدد الأعـضـاء:* ${totalMembers}\n`;

        resultMessage += `🔹 *إجـمـالـي الـرسـائـل:* ${totalMessages} رسالة\n\n`;

        if (sortedUsers.length > 0) {

            const king = sortedUsers[0];

            resultMessage += `👑 *مـلـك الـتـفـاعـل!* 👑\n`;

            resultMessage += `✨ @${king[0].split('@')[0]} - ${king[1].messagesSent} رسـالـة ✨\n\n`;

        }

        resultMessage += `📋 *تـفـاصـيـل الـرسـائـل حـسـب الـأعـضـاء:* 📋\n`;

        sortedUsers.forEach(([user, data], index) => {

            const userMention = `@${user.split('@')[0]}`;

            resultMessage += `*${index + 1}. ${userMention} - ${data.messagesSent} رسـالـة*\n`;

            resultMessage += `━━━━━━━━━━━━━━━━━━━━\n`;

        });

        conn.sendMessage(m.chat, {

            image: { url: profilePicture },

            caption: resultMessage,

            mentions: participants.map(p => p.id)

        });

    }

};

// التحديث التلقائي للرسائل المُرسلة لكل عضو

handler.all = async (m) => {

    const chatId = m.chat;

    if (!global.groupData) global.groupData = {};

    if (!global.groupData[chatId]) global.groupData[chatId] = {};

    const groupUsers = global.groupData[chatId];

    if (!groupUsers[m.sender]) {

        groupUsers[m.sender] = {

            messagesSent: 0,

            totalChecks: 0,

            lastCheckTime: 0

        };

    }

    if (m.text) {

        groupUsers[m.sender].messagesSent += 1;

    }

};

handler.help = ['رسائلي', 'رسايلي', 'اجمالي'];

handler.tags = ['main'];

handler.command = ['رسائلي', 'رسايلي', 'اجمالي'];

handler.register = true;

export default handler;