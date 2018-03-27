/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 * https://stackoverflow.com/a/1527820
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function create_forecast() {
	var i = 0;
	var map_html = "";

	for (i=0; i<6; i++){
		var map_style = ["night", "retro", "std"];
		var wind_type = ["xaloc", "gregal", "ponent"];
		var map_nums = ["1", "2", "3", "4", "5"];
		
		var map_date = moment().add(i, "days").format('dddd D');
		
		if (moment().add(i, "days").format('dddd') == "Tuesday") {
			map_img = "resources/img/maps/std_ponent_5.jpg";
		}
		else {
			map_img = "resources/img/maps/std_" + wind_type[getRandomInt(0, 2)] + "_" + getRandomInt(1, 3) + ".jpg";
		}
	
		
		map_html+= '<div class="mdl-shadow--2dp mdl-color-white mdl-cell mdl-cell--4-col">\
						<div style="background-image: url('+ map_img + ');" class="img-forecast"></div>\
						<div style="height: 60px;" class="mdl-card__actions mdl-card--border mdl-color-text--blue-grey-800">\
							<p style="line-height: 1.5;" class="text-forecast">' + map_date + '</p>\
						</div>\
					</div>'
	}
	document.getElementById("dates").innerHTML = map_html; 	
}

create_forecast();

