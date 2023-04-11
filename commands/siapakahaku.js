module.exports = {
	name: "siapakahaku",
	code: async(kaze) => {
		var con = true
		let sa = await require(`@bochilteam/scraper`).siapakahaku()
		let col = kaze.MessageCollector({ time: 40000 }); // in milliseconds
kaze.reply({ text: `SIAPAKAH AKU : BrainBotz\n\n Soal: ${sa.soal}\n Jika Menyerah Ketik *Nyerah*\n Games akan berakhir dalam 40 detik.` });

col.on("collect", (m) => {
    if(m.content == sa.jawaban) {
    	con = false
    	kaze.reply({text: `${m.pushName} telah berhasil menjawab!. \n Jawabannya ${sa.jawaban}`})
    	col.stop()
    } else if(m.content == 'Nyerah') { 
    	kaze.reply({text: `yah nyerah :( jawabannya ${sa.jawaban}\n Soal berakhir!`}) 
        con = false
        col.stop()}
    });

col.on("end", (collector, r) => {
    if (con == true) {
    	kaze.reply({text: `*tidak ada yang berhasil menjawab :(*\n jawabannya ${sa.jawaban}\n`})
    	con = false
    } else { console.log(" ")}
});
}
	}