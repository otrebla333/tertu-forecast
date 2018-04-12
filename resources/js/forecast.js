/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 * https://stackoverflow.com/a/1527820
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function weather_success(weather) {

  var i = 0;
  var map_html = "";
  var tertu_days = ["27 3", "6 4", "13 4", "19 4", "26 4"];

// Weather forecast
  for (i = 0; i < 6; i++) {
    var map_style = ["night", "retro", "std"];
    var wind_type = ["xaloc", "gregal", "ponent"];
    var map_nums = ["1", "2", "3", "4", "5"];

    var map_date = moment().add(i, "days").format('dddd D');

    if (tertu_days.includes(moment().add(i, "days").format('D M'))) {
      map_img = "resources/img/maps/std_" + wind_type[moment().add(i, "days").format('D') % 3] + "_5.jpg";
    } else {
      map_img = "resources/img/maps/std_" + wind_type[getRandomInt(0, 2)] + "_" + getRandomInt(1, 3) + ".jpg";
    }

    weather_info = '<i style="font-size:24px;" class="icon-' + weather.forecast[i].code + '"></i> <span class="max_temp">' + weather.forecast[i].high + 'ºC</span> <span class="min_temp">' +
    weather.forecast[i].low + 'ºC</span>'

    map_html += '<div class="mdl-shadow--2dp mdl-color-white mdl-cell mdl-cell--4-col">\
						<div style="background-image: url(' + map_img + ');" class="img-forecast"></div>\
						<div style="height: 45px;" class="mdl-card__actions mdl-card--border mdl-color-text--grey-800">\
							<p class="text-forecast">' + map_date + '<span style="float:right;">' + weather_info + '</span>' + '</p>\
						</div>\
					</div>'
  }
  document.getElementById("forecast-maps").innerHTML = map_html;

// Current weather
  html = '<div class="current_weather">'
  html += '<h2>' + weather.temp + '&deg;' + weather.units.temp + ' <i style="font-size: 80px;" class="icon-'
  + weather.code + '"></i></h2>';
  html += '<ul><li>' + weather.city + ', ' + weather.region + '</li>';
  html += '<li class="currently">' + weather.currently + '</li>';
  html += '<li>' + weather.wind.direction + ' ' + weather.wind.speed + ' ' + weather.units.speed + '</li></ul>';
  html += '</div>'

  forecast_html = '<div class="current_weather">'
  forecast_html += '<h2>' + weather.temp + '&deg;' + weather.units.temp + ' <i style="font-size: 80px;" class="icon-'
  + weather.code + '"></i></h2>';
  forecast_html+='</div>'

  // document.getElementById("weather").innerHTML = forecast_html;
}

function get_weather_forecast() {
  $.simpleWeather({
    woeid: '755612', //755612 Cambrils
    location: '',
    unit: 'c',
    success: weather_success
  });

}

$( document ).ready(function() {
  get_weather_forecast();
});
