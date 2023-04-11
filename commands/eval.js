module.exports = {
  name: ">",
  nonPrefixed: true,
  code: async (kaze) => {
    if (kaze.isOwner() == false) return kaze.react(kaze.id, "🕛")
    if (kaze.args.join(" ").length < 1) return kaze.reply({text: `mana cmdnya?`})
    try {
      var evaled = await eval(kaze.args.join(" "));
      kaze.reply({ text: require("util").inspect(evaled, { depth: 0 }) })
    } catch (err) {
      return kaze.reply({ text: `${err}!` });
  }
 }
}