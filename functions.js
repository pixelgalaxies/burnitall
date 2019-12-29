var quotes = [];
quotes[0] = {
	quote: "Burn it all.",
	source: "-Ronald Bartel, Backdraft, 1991"
};
quotes[1] = {
	quote: "If all else fails, use fire.",
	source: "-Zelda II: The Adventure of Link, 1987"
};
quotes[2] = {
	quote: "I set fire to the rain and I threw us into the flames.",
	source: "-Adele, 21, 2007"
};
quotes[3] = {
	quote: "Honey, I'm on fire, I feel it everywhere. Nothing scares me anymore.",
	source: "-Lana Delray, Summertime Sadness, 2012"
};
quotes[4] = {
	quote: "So when you fall, I’ll take my turn and fan the flames as your blazes burn.",
	source: "-Linkin Park, Burn It Down, 2012"
};
quotes[5] = {
	quote: "May the bridges I burn light the way.",
	source: "-Dylan McKay, Beverly Hills 90210, 1994"
};
quotes[6] = {
	quote: "Think of me and burn.",
	source: "-Corona, The Rhythm of the Night, 1994"
};
quotes[7] = {
	quote: "It's better to burn than to feel that cold.",
	source: "-Tocadisco, Better Run, 2010"
};
quotes[8] = {
	quote: "I am a phoenix. Watch me fall. Watch me burn. Watch me rise.",
	source: "-mywritingstory.tumblr.com, 2015"
};
quotes[9] = {
	quote: "Before you play with fire, do think twice. If you get burned well, baby, don't you be surprised.",
	source: "-Robin Schulz, Sugar, 2015"
};
quotes[10] = {
	quote: "I survived because the fire inside me burned brighter than the fire around me.",
	source: "-Joshua Graham, Fall Out 4, 2015"
};
quotes[11] = {
	quote: "Fire is catching and if we burn, you burn with us.",
	source: "-Suzanne Collins, Mockingjay, 2010"
};
quotes[12] = {
	quote: "Under the bright but faded lights you set my heart on fire.",
	source: "-Alan Walker, Faded, 2015"
};
quotes[13] = {
	quote: "I put my hands among the flames. Nothing burns.",
	source: "-Sylvia Plath, Poppies In July, 1962"
};
quotes[14] = {
	quote: "Burn  everything you love then burn the ashes.",
	source: "-Fall Out Boy, My Songs Know What You Did In The Dark, 2013"
};
quotes[15] = {
	quote: "Put on your shades cause I'll be dancing in the flames tonight.",
	source: "-Lady Gaga, The Edge of Glory, 2011"
};
quotes[16] = {
	quote: "Say goodbye as I'm walking on a wire. Close your eyes, you can leave me in the fire.",
	source: "-Felix Cartal & Clockwork, The Fire, 2013"
};
quotes[17] = {
	quote: "Through the fire and flames we carry on!",
	source: "-Dragonforce, Through the Fire and Flames, 2005"
};

var num = 0;
var imgNum = 0;
var quoteText = document.getElementById("quoteText");
var sourceText = document.getElementById("sourceText");

function quoteClick() {
	//generates random number based on quotes array
	num = Math.floor(Math.random() * quotes.length);
	//sets quote using random number generated
	quoteText.innerHTML = '"' + quotes[num].quote + '"';
	//sets source using random number generated
	sourceText.innerHTML = quotes[num].source;
}
