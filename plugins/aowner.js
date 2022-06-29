let handler = async (m) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
${ye} Jangan Spam Owner Tidak Nerima Save Kontak

conn.sendBut(m.chat, esce, wm, '', '', m) 
}
handler.customPrefix = /^(owner)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
