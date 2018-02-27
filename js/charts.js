var data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  series: [
    [3,5,6,1,8,5,6],
    [4,5,8,6,2,1,7]
  ],
};
var options = {
  height: 400
};
new Chartist.Line('.ct-chart', data, options);
Chartist.animate();
