console.log('testing');

function d3app() {

	var skills = [ "php", "js", "css", "html" ];
	var skillarray = skills.length;

	d3.select("body").selectAll("p")
		.data(skills)
		.enter()
		.append("p")
		.text(function(d) { 
			return "I can do " + d + "!"; 
		});
}