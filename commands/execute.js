module.exports = {
	name: `$`,
	nonPrefixed: true,
	code: async(kaze) => {
		if (kaze.isOwner() == false) return kaze.react(kaze.id, "🕛");
		const { execSync } = require('child_process')
		try {
			let output = await execSync(kaze.args.join(' '))
			kaze.reply({text: `${output}`})
		} catch(err) {
			kaze.reply({text: `${err}`})
		}
		
	}
}