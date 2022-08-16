const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6285853570297','6285853570297']
global.premium = ['6285853570297']
global.packname = 'Saiful'
global.author = 'Wa :6285853570297'
global.sessionName = 'session'
global.namabotnya = 'Saiful-MD'
global.namaownernya = 'SAIFUL BOT'
global.dapkey = 'Kirbotz123'
global.lolkey = 'Atakbotz'
global.kirkey = 'ChinoBot'
global.wame = 'https://wa.me/6285853570297'
global.gckirbotz = 'https://chat.whatsapp.com/ECeHsVtDpNF7NgzDLMAzcM'
global.ownerNumber = ["6285853570297@s.whatsapp.net"]
global.email = 'Saiful@gmail.com'
global.yt = '-_-ga ada-'
global.webkir = 'https://github.com/Bahri106'
global.githubkir = 'https://github.com/Bahri106'
global.region = 'INDONESIA'
global.prefa = ['','!','.','#','-','•']
global.mess = {
    success: 'ok done',
    admin: '𝕂𝕙𝕦𝕤𝕦𝕤 𝔸𝕕𝕞𝕚𝕟 𝕊𝕒𝕪𝕒𝕟𝕘...',
    botAdmin: '𝕊𝕒𝕪𝕒 𝕓𝕖𝕝𝕦𝕞 𝕁𝕒𝕕𝕚 𝔸𝕕𝕞𝕚𝕟...',
    owner: ' *𝙰𝚠𝚔𝚠𝚔𝚠𝚘𝚔 𝙻𝚞 𝙱𝚞𝚔𝚊𝚗 𝙾𝚠𝚗𝚎𝚛* ',
    group: ' *𝙺𝚑𝚞𝚜𝚞𝚜 𝙶𝚛𝚞𝚙 𝚂𝚊𝚢𝚊𝚗𝚐...* ',
    private: ' *𝙺𝚑𝚞𝚜𝚞𝚜 𝙿𝚛𝚒𝚟𝚊𝚝𝚎 𝚂𝚊𝚢𝚊𝚗𝚐...* ',
    bot: '𝐋𝐮 𝐁𝐨𝐭...?',
    error: '𝘽𝙤𝙩 𝙍𝙪𝙨𝙖𝙠!!!',
    wait: '𝚂𝚊𝚋𝚊𝚛 𝚈𝚊𝚑 𝚂𝚊𝚢𝚊𝚗𝚐...',
    noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
    wrongFormat: 'Format salah, coba liat lagi di menu',
}


global.limitawal = {
    premium: "Infinity",
    free: 5
}


global.thumb = fs.readFileSync('./Image/kirbotz.jpg')
global.thumbdm = fs.readFileSync('./Image/diamond.jpg')
global.thumbrpg = fs.readFileSync('./Image/kirbotzrpg.jpg')
global.imgjoinrpg = fs.readFileSync('./Image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./Image/mining.jpg')
global.sticknya = fs.readFileSync('./Kir/JANGANDIUBAH/fuck.webp')

global.imgdevil = fs.readFileSync('./Image/img/devil.jpg')
global.imgslime = fs.readFileSync('./Image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./Image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./Image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./Image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./Image/img/behemoth.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
