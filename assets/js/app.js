$(function(){
        $(".intro").typed({
            strings: ["<h1 class='name'>Louis Novick</h1> <br>1390 Northgate Circle <br>louis.novick@knights.ucf.edu <br> 954-682-4921"],
            // typing speed
            typeSpeed: 5,
            // time before typing starts
            startDelay: 100,
            backDelay: 50,
            showCursor: false
        });
    });

function d3app() {
    console.log('Resume working');
    

    //skills pie chart

    var w = 500,     //width
        h = 500,     //height
        r = Math.min(w, h) / 2,     //radius
        color = d3.scale.category10();     

    //Skills data
    data = [{"label": "HTML5", "value": 30 }, {"label": "CSS3", "value": 30 }, {"label": "JS", "value": 15 }, {"label": "Design", "value": 20 }, {"label": "PHP", "value": 30 }, {"label": "Ruby", "value": 15 }, {"label": "Git", "value": 15 }, {"label": "mySQL", "value": 30 }, {"label": "WordPress", "value": 30 }, {"label": "jQuery", "value": 20 }, {"label": "Other", "value": 25 }];
    
    var vis = d3.select("#skillchart")
        .append("svg:svg")                                      
        .data([data])                                           
        .attr("width", w)                                      
        .attr("height", h)
        .append("svg:g")                
        .attr("transform", "translate(" + r + "," + r + ")")  

    var arc = d3.svg.arc()              
        .outerRadius(r);

    var arcOver = d3.svg.arc()
        .outerRadius(r + 5);

    var pie = d3.layout.pie()          
        .value(function(d) { return d.value; });    

    var arcs = vis.selectAll("g.piece")     
        .data(pie)                          
        .enter()                            
        .append("svg:g")                
        .attr("class", "piece") 

        arcs.append("svg:path")
        .attr("fill", function(d, i) { return color(i); } )
        .attr("d", arc) 
           .style("fill", function(d, i) { return color(i); })
           .on("mouseenter", function(d) {
                d3.select(this)
                   .attr("stroke","white")
                   .transition()
                   .duration(500)
                   .attr("d", arcOver)
                   .attr("stroke-width",3);
            })
            .on("mouseleave", function(d) {
                d3.select(this).transition()            
                   .attr("d", arc)
                   .attr("stroke","none");
            });                                        

        arcs.append("svg:text")                                     
        .attr("transform", function(d) {                    
        d.innerRadius = 0;
        d.outerRadius = r;
        return "translate(" + arc.centroid(d) + ")";        
        })
        .attr("text-anchor", "middle")                          
        .text(function(d, i) { return data[i].label; })           


        //Software, Strengths, Operating Systems, Languageseline of experience

        data2 = [{"strength": "Responsive Website Development", "level": 10},{"strength": "SEO", "level": 20},{"strength": "Marketing", "level": 30},{"strength": "Problem Solving", "level": 40},{"strength": "Attention to Detail", "level": 50},{"strength": "Teamwork", "level": 60}, {"strength": "Professionalism", "level": 70},
                {"strength": "Customer Service", "level": 80},{"strength": "Written and Verbal Communication", "level": 90},{"strength": "Self-Initiative", "level": 100}];

        var mathr = Math.random() * 10;

        var sw = 700;
        var sh = 550;       
        var str = d3.select("#strengths").append("svg")                                      
            .attr("width", sw)                                      
            .attr("height", sh)
        
            var circles = str.selectAll("circle")
                .data(data2)
                .enter()
                .append("g")
                .attr("class", "cir")
                .append("circle")
                .attr("transform", function(d, i){ return "translate("+data2[i].level * 6.5 +",20)"})  

            var circleAttributes = circles
                .attr("class", "scircle")
                .attr("cx", 0)
                .attr("cy", 50)
                .attr("r", 50)
                .style("fill", function(d, i) { return color(i); }) 
                    .on("mouseenter", function(d) {
                        d3.select(this)
                           .attr("stroke","black")
                           .transition()
                           .duration(800)
                           .attr("r", 80)
                           .attr("cy", 200)
                           .attr("cx", 10)
                           .attr("stroke-width",2);
                    })
                    .on("mouseleave", function(d) {
                        d3.select(this).transition()            
                           .attr("r", 50)
                           .attr("cy", 50)
                           .attr("cx", 0)
                           .attr("stroke","none");
                    }) 

                str.selectAll("g").append("text")
                    .attr("dx", function(d){return -20})
                    .attr("text-anchor", "middle")                      
                    .text(function(d, i) { return data2[i].strength; });   
        
}






















    