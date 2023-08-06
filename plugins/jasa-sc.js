let handler = async (m, { conn, command }) => {
	conn.reply(m.chat, `NYARI APA BANG? `, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler