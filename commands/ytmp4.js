module.exports = {
	name: 'ytmp4',
	code: async(kaze) => {
		const { youtubedl, youtubedlv2 } = require('@bochilteam/scraper')
		if (kaze.args.join('').length < 1) return kaze.reply({text: 'usage: .ytmp4 (link video)'})
		let url = kaze.args.join('')
	    let yt = await youtubedl(`${url}`).catch(async () => await youtubedlv2(`${url}`))
	    let dl_url = await yt.video['240p'].download()
	    kaze.sendVideo(kaze.id, dl_url, `${yt}`)
    }
}