const urls = [pieChartDataUrl, barChartDataUrl];

promise = Promise.all(urls.map(url => d3.json(url)));
promise.then(run);
function run(dataset) {
   d3PieChart(dataset[0], dataset[1]);
   d3BarChart(dataset[1]);
};