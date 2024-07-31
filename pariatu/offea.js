// Example: Customizing a chart in a data visualization library

// Define your data
const data = [
  { category: 'A', value: 30 },
  { category: 'B', value: 80 },
  { category: 'C', value: 45 },
  { category: 'D', value: 60 },
];

// Define a configuration object with customizable properties
const chartConfig = {
  type: 'bar', // Type of chart (e.g., bar, line, pie)
  data: data,  // Data to be visualized
  options: {
    title: {
      display: true,
      text: 'Custom Bar Chart', // Customizable title
      fontSize: 16,
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100, // Customizable maximum value for Y-axis
        },
      }],
    },
    legend: {
      display: false, // Show/hide legend
    },
    corners: {
      topLeft: 5, // Custom radius for top-left corner
      topRight: 5, // Custom radius for top-right corner
      bottomLeft: 0,
      bottomRight: 0,
    },
  },
};

// Function to create and render the chart
function createChart(config) {
  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: config.type,
    data: {
      labels: config.data.map(item => item.category),
      datasets: [{
        label: '# of Votes',
        data: config.data.map(item => item.value),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        borderRadius: {
          topLeft: config.options.corners.topLeft,
          topRight: config.options.corners.topRight,
          bottomLeft: config.options.corners.bottomLeft,
          bottomRight: config.options.corners.bottomRight,
        },
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: config.options.legend.display,
        },
        title: {
          display: config.options.title.display,
          text: config.options.title.text,
          font: {
            size: config.options.title.fontSize,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: config.options.scales.yAxes[0].ticks.beginAtZero,
          max: config.options.scales.yAxes[0].ticks.max,
        },
      },
    },
  });
}

// Call the function to create the chart with the specified configuration
createChart(chartConfig);
