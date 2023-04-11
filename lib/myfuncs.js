exports.Quoted = (kaze) => {
	let i = kaze.msg.message.extendedTextMessage? kaze.msg.message.extendedTextMessage.contextInfo.quotedMessage? true : false : false;
	let type = i? require('@adiwajshing/baileys').getContentType(kaze.msg.message.extendedTextMessage.contextInfo.quotedMessage) : null
	let data = {
		isQuoted: i,
		type,
		data: {
			viaType: i? kaze.msg.message.extendedTextMessage.contextInfo.quotedMessage[type] : null,
			normal: i? kaze.msg.message.extendedTextMessage.contextInfo.quotedMessage : null
		},
	}

	return data;
}

exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}