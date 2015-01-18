console.log('testing');

function d3app() {

	var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

    var w = 500;
    var h = 100;
    var barpadding = 1;

    var svg = d3.select("body")
    	.append("svg")
    	.attr("width", w)
    	.attr("height", h);

    svg.selectAll("rect")
    	.data(dataset)
    	.enter()
    	.append("rect")
    	.attr("fill", function(d) {
    		return "rgb(0, 0, " + (d * 10) + ")";
    	})
    	.attr("x", function(d, i) {
    		return i * (w / dataset.length);
    	})
    	.attr("y", function(d) {
    		return h - (d * 4);
    	})
    	.attr("width", w / dataset.length - barpadding)
    	.attr("height", function(d) {
    		return d * 5;
    	});

    //add the text

    svg.selectAll("text")
    	.data(dataset)
    	.enter()
    	.append("text")
    	.text(function(d) {
    		return d;
    	})
    	.attr("text-anchor", "middle")
    	.attr("font-family", "sans-serif")
    	.attr("font-size", "11px")
    	.attr("fill", "white")
    	.attr("x", function(d, i) {
    		return i * (w / dataset.length) + (w / dataset.length - barpadding) / 2;
    	})
    	.attr("y", function(d) {
    		return h - (d * 4) + 14;
    	});
}



	/*
	var skills = [ "php", "js", "css", "html" ];
	var skillarray = skills.length;

	d3.select("body").selectAll("p")
		.data(skills)
		.enter()
		.append("p")
		.text(function(d) { 
			return "I can do " + d + "!"; 
		})
		.style("color", function(d) {
			if (d > skills[3]) {
				return "red";
			} else {
				return "blue";
			}
		});

	var dataset = [];
	for (var i = 0; i < 25; i++){
		var newNumber = Math.round(Math.random() * 30);
		dataset.push(newNumber);
	}
	console.log(dataset);

	d3.select("body").selectAll("div")
		.data(dataset)
		.enter()
		.append("div")
		.attr("class", "bar")
		.style("height", function(d) {
			var barheight = d * 5;
			return barheight + "px";
		});

	var w = 500;
	var h = 50;
	var svg = d3.select("body")
		.append("svg")
		.attr("width", w)
		.attr("height", h);

	var circles = svg.selectAll("circle")
		.data(dataset)
		.enter()
		.append("circle");

	circles.attr("cx", function(d, i) {
		return (i * 50) + 25;
	})
	.attr("cy", h/2)
	.attr("fill", "yellow")
	.attr("stroke", "orange")
	.attr("r", function(d) {
		return d;
	});
*/
