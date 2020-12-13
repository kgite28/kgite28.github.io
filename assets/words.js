
Promise.all([
d3.tsv("/assets/datadef.txt"),
d3.tsv("/assets/datawords.txt"),
])
.then(function(dt){
var dt1=dt[0];
var dt2=dt[1];

//console.log(dt1);
//console.log(dt2);

var button = d3.select("#btn");

function reset(){
	var x = Math.floor(Math.random() * 27635) + 1; 
	d3.select("#wd").text(dt2[x].Words);
	d3.select("#df").text(dt1[x].Definitions);
}

reset();

button.on("click",function(){reset();});

});