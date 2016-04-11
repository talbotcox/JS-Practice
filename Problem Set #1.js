function letterCapitalize(str) {
    console.log(str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}));
}

letterCapitalize("Never eat shredded whEat")

function wordcount(str){
	var arr = str.split(' ')
	console.log(arr.length)
}

wordcount("Never eat shredded whEat")

