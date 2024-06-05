import { Chart } from "chart.js";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesady",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

new Chart('expensesChart', {
  type: 'bar',
  data: {
    datasets: [
      {
        label: "Expenses",
        data: [200, 300, 400, 500, 600, 700, 800, 100],
        hoverBackgroundColor: "#75b5be",
        backgroundColor: "#ec765c",
        borderSkipped: false,
        borderRadius: 5,
      },
    ],
    labels: weekDays,
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let label = tooltipItem.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (tooltipItem.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
              }).format(tooltipItem.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        grid: {
          lineWidth: 2,
          drawTicks: false,
          offset: false,
          color: (context) => {
            return context.tick.value === 0 || context.tick.value === 500
              ? "rgb(209, 213, 219)"
              : "transparent";
          },
        },
        border: {
          display: false,
          dash: [4, 3],
          dashOffset: 10,
        },
        ticks: {
          stepSize: 500,
          font: {
            weight: "bold",
          },
          color: "rgb(209, 213, 219)",
          callback: function (value) {
            if (value === 0 || value === 500) {
              return value.toString();
            }
            return "";
          },
        },
      },
      x: {
        display: false,
      },
    },
  }
})
