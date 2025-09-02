import { watchFile, unwatchFile } from 'fs'

import chalk from 'chalk'

import { fileURLToPath } from 'url'

import fs from 'fs'

/* ~ إعدادات المالكين والمشرفين ~ */

global.owner = [

  ['966559958322', 'PAIN - fete', true],  // [الرقم, الاسم, هل هو مالك ؟]

  ['966559958322', 'PAIN', true],

  ['966559958322', 'PAIN - fete', true]

]

global.mods = []  // المشرفون الإضافيون

global.prems = []  // المستخدمون المميزون

/* ~ إعدادات البوت الأساسية ~ */

global.botname = "PAIN BOT"

global.packname = "PAIN BOT"

global.author = "PAIN - فيت"

global.wm = "PAIN BOT"

global.version = "1.9.5"

global.gatabot = true // تفعيل وضع التكرار التلقائي

/* ~ إعدادات القنوات ~ */

global.ch = {

  main: 'https://whatsapp.com/channel/0029Vb6NeZB2ER6atrgA3R00', // القناة الرئيسية

  backup: 'https://whatsapp.com/channel/0029Vb6NeZB2ER6atrgA3R00' // قناة احتياطية

}

/* ~ روابط التواصل ~ */

global.social = {

  youtube: 'https://youtube.com/channel/UCar6InrmgDWKJjmlm93RmMQ?si=LI8iaSzfuNIYB2Qm',

  tiktok: 'https://www.tiktok.com/@naroto_sh?_t=ZM-8xC6I0EnlJA&_r=1',

  facebook: 'https://www.facebook.com/yourpage',

  instagram: 'https://www.instagram.com/haron091g?igsh=MTBsZXZwc2MyYzlrbg==',

  whatsapp: 'https://chat.whatsapp.com/LJNtyQreydjBT24VaTq6zU'

}

/* ~ إعدادات الوسائط ~ */

global.media = {

  thumbnail: 'https://files.catbox.moe/h8qwn1.jpg',

  menu: fs.readFileSync('./media/Menu.jpg'),

  sticker: {

    packname: 'PAIN_BOT',

    author: 'PAIN - fete'

  }

}

/* ~ إعدادات الأدمن ~ */

global.maxwarn = 4 // الحد الأقصى للتحذيرات

global.autoread = true // قراءة الرسائل تلقائياً

/* ~ إعدادات API ~ */

global.keys = {

  openai: 'sk-...OzYy', // مفتاح OpenAI

  violetics: 'beta',

  lolhuman: 'GataDiosV2'

}

global.APIs = {

  xteam: 'https://api.xteam.xyz',

  lolhuman: 'https://api.lolhuman.xyz',

  violetics: 'https://violetics.pw'

}

/* ~ رسائل البوت ~ */

global.messages = {

  wait: '⏳ جاري المعالجة...',

  success: '✅ تم التنفيذ بنجاح',

  error: '❌ حدث خطأ',

  admin: '⚠️ هذا الأمر للادمن فقط',

  group: '⚠️ هذا الأمر للمجموعات فقط',

  owner: '⚠️ هذا الأمر للمالك فقط',

  premium: '⚠️ هذا الأمر للأعضاء المميزين فقط'

}

/* ~ إيموجيات ~ */

global.emojis = {

  success: '✅',

  error: '❌',

  warning: '⚠️',

  loading: '⏳'

}

/* ~ التحديث التلقائي ~ */

let file = fileURLToPath(import.meta.url)

watchFile(file, () => {

  unwatchFile(file)

  console.log(chalk.redBright("تم تحديث ملف الإعدادات (config.js)"))

  import(`${file}?update=${Date.now()}`)

})