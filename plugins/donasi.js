let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0812-3373-8677]
│ •  [0812-3373-8677]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
