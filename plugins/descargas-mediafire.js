import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let user = db.data.users[m.sender]
let time = global.db.data.users[m.sender].prue + 60000
if (new Date - global.db.data.users[m.sender].prue < 60000) throw `*ESPERA UNOS MINUTOS PARA USAR OTRO COMANDO*`

if (!args[0]) throw `${mg}𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒖𝒏 𝒆𝒏𝒍𝒂𝒄𝒆 𝒗𝒂́𝒍𝒊𝒅𝒐 𝒅𝒆 𝒎𝒆𝒅𝒊𝒂𝒇𝒊𝒓𝒆.`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
╭┄ ${eg}
┆ 𓃠 ${wm}* 
┆——————«•»——————
┆ 💫 𝑵𝒐𝒎𝒃𝒓𝒆
┆ ${filename}
┆——————«•»——————
┆ 💪 𝑷𝒆𝒔𝒐
┆ ${filesizeH}
┆——————«•»——————
┆ 🚀 𝑻𝒊𝒑𝒐
┆ ${ext}
╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ`.trim()
//let author = global.author
await conn.sendButton(m.chat, caption, `𝑴𝒂𝒚𝒐𝒓 𝒂 150 𝑴𝑮 𝒆𝒔 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒒𝒖𝒆 𝒏𝒐 𝒔𝒆 𝒆𝒏𝒗𝒊𝒆`, [['𝙈𝙚𝙣𝙪 𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 ⚡', '.menu']], m)
 
/*let info = `𝑴𝒂𝒚𝒐𝒓 𝒂 150 𝑴𝑮 𝒆𝒔 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒒𝒖𝒆 𝒏𝒐 𝒔𝒆 𝒆𝒏𝒗𝒊𝒆́`.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙏𝙞𝙠𝙩𝙤𝙠', null, null, [
['𝙈𝙚𝙣𝙪 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨 🌀', '#descargasmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)  
let vn = './media/descarga.mp3'
*/  
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
let sticker = './src/stickers1.webp'
conn.sendFile(m.chat, sticker, 'error.webp', '', m)}
/* conn.sendFile(m.chat, vn, 'descarga.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
*/
global.db.data.users[m.sender].prue = new Date * 1
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.register = true
handler.limit = 3
handler.exp = 100
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}
