import yts from 'yt-search';
import { pinterest } from '../lib/scraper.js';
import { googleIt } from '@bochilteam/scraper';
import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*أدخل ما تريد البحث عنه بعد الأمر مباشرة!*\n\n*أمثلة:*\n*• ${usedPrefix + command} اغنية a whole new world*\n*• ${usedPrefix + command} فيديو قتال ليفاي*\n*• ${usedPrefix + command} صورة قطة بيضاء*\n*• ${usedPrefix + command} من هو مكتشف الجاذبية*`;

    await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });
    // تم حذف رسالة الانتظار لتجنب الحاجة لتعديلها لاحقًا

    try {
        // --- البحث عن أغنية (صوت) ---
        if (text.startsWith('اغنية ')) {
            const query = text.substring(6).trim();
            if (!query) throw 'يرجى تحديد اسم الأغنية!';
            
            await conn.reply(m.chat, `*🎵 جاري البحث عن أغنية:* ${query}`, m);
            const results = await yts(query);
            const video = results.videos[0];
            if (!video) throw 'لم يتم العثور على الأغنية.';

            const audioUrl = `https://bk9.fun/download/ytmp3?url=${encodeURIComponent(video.url)}&type=mp3`;
            const response = await fetch(audioUrl);
            const data = await response.json();

            if (!data.status || !data.BK9 || !data.BK9.downloadUrl) throw 'فشل في الحصول على رابط التحميل.';

            const caption = `*🎵 تم العثور على أغنية:*\n\n*العنوان:* ${video.title}\n*المدة:* ${video.timestamp}`;
            await conn.sendFile(m.chat, video.thumbnail, 'thumb.jpg', caption, m);
            await conn.sendMessage(m.chat, { audio: { url: data.BK9.downloadUrl }, mimetype: 'audio/mpeg', fileName: `${video.title}.mp3` }, { quoted: m });
            return;
        }

        // --- البحث عن فيديو ---
        if (text.startsWith('فيديو ')) {
            const query = text.substring(6).trim();
            if (!query) throw 'يرجى تحديد اسم الفيديو!';

            await conn.reply(m.chat, `*🎥 جاري البحث عن فيديو:* ${query}`, m);
            const results = await yts(query);
            const video = results.videos[0];
            if (!video) throw 'لم يتم العثور على الفيديو.';

            const videoUrl = `https://bk9.fun/download/ytmp4?url=${encodeURIComponent(video.url)}&type=mp4`;
            const response = await fetch(videoUrl);
            const data = await response.json();

            if (!data.status || !data.BK9 || !data.BK9.downloadUrl) throw 'فشل في الحصول على رابط التحميل.';

            const caption = `*🎥 تم العثور على فيديو:*\n\n*العنوان:* ${video.title}\n*المدة:* ${video.timestamp}`;
            await conn.sendFile(m.chat, data.BK9.downloadUrl, `${video.title}.mp4`, caption, m);
            return;
        }

        // --- البحث عن صورة ---
        if (text.startsWith('صورة ')) {
            const query = text.substring(5).trim();
            if (!query) throw 'يرجى تحديد ما تريد البحث عنه في الصور!';
            
            await conn.reply(m.chat, `*🖼️ جاري البحث عن صورة:* ${query}`, m);
            const results = await pinterest.search(query, 1);
            if (!results.result.pins.length) throw 'لم يتم العثور على صور.';
            
            const imageUrl = results.result.pins[0].media.images.orig.url;
            const caption = `*🖼️ نتيجة البحث عن صورة:* ${query}`;
            await conn.sendFile(m.chat, imageUrl, 'image.jpg', caption, m);
            return;
        }

        // --- البحث العام في جوجل ---
        await conn.reply(m.chat, `*🌐 جاري البحث في جوجل عن:* ${text}`, m);
        const googleResults = await googleIt(text);
        if (!googleResults.articles.length) throw 'لم يتم العثور على نتائج في جوجل.';

        let resultText = `*🔍 نتائج البحث في جوجل عن: "${text}"*\n\n`;
        googleResults.articles.slice(0, 5).forEach((article, index) => {
            resultText += `*${index + 1}. ${article.title}*\n`;
            resultText += `*الوصف:* ${article.description}\n`;
            resultText += `*الرابط:* ${article.url}\n\n`;
        });

        await conn.reply(m.chat, resultText.trim(), m);

    } catch (error) {
        console.error("Search Command Error:", error);
        await conn.reply(m.chat, `❌ حدث خطأ أثناء البحث: ${error.message}`, m);
    }
};

handler.help = ['بحث <نوع> <استعلام>'];
handler.tags = ['tools'];
handler.command = /^(بحث|ابحث)$/i;
handler.exp = 10;

export default handler;
