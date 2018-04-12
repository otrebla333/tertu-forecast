/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 * https://stackoverflow.com/a/1527820
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// minimal heatmap instance configuration
var heatmapInstance = h337.create({
	// only container is required, the rest will be defaults
	container: document.getElementById('heatmap')
});

// now generate some random data
var points = [];
var max = 0;
var width_min = 0;
var width_max = 300;
var height_min = 50;
var height_max= 150;
var len = 40;

while (len--) {
	var val = getRandomInt(0, 80);
	// max = Math.max(max, val);
	max = 100;
	var point = {
			x: getRandomInt(width_min, width_max),
			y: getRandomInt(height_min, height_max),
			value: val
		};
	points.push(point);
}
// heatmap data format
var data = { 
	max: max, 
	data: points 
};
// if you have a set of datapoints always use setData instead of addData
// for data initialization
heatmapInstance.setData(data);
console.log(data);