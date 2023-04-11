const { Sticker, createSticker, StickerTypes } = require('wa-sticker-maker');
const fs = require('fs');
const { Quoted } = require(`../lib/myfuncs.js`)

module.exports = {
	name: 'sticker',
	aliases: 's',
	code: async(kaze) => {
		const pack = `${kaze.pushName}`
	let path = `./tmp/${kaze.msg.messageTimestamp}.webp`
	let img = kaze.msg.message.imageMessage
	let isq = Quoted(kaze)

	if(isq.isQuoted && isq.type === 'imageMessage') {
		img = isq.data.viaType;
	}

	if(img) {
		if(img.url === "https://web.whatsapp.net") {
		    img['url'] = 'https://mmg.whatsapp.net' + img.directPath
		}

		const stream = await require('@adiwajshing/baileys').downloadContentFromMessage(img, 'image');

	    let buffer = Buffer.from([]);
	    for await (const chunk of stream) {
	      buffer = Buffer.concat([buffer, chunk]);
	    }
        let author = `KAZE`
	    await fs.writeFileSync(path, buffer);
		const s = new Sticker(path, {
		    pack,
		    author,
		    type: StickerTypes.FULL,
		    categories: ['🤩', '🎉'],
		    id: '12345',
		    quality: 50,
		})

		await kaze.reply(await s.toMessage());
		fs.unlinkSync(path)
	} else {
		kaze({text: 'Pakai command sticker ini di caption sebuah image atau kamu dapat me-reply imagenya!'})
	}
	
}
}