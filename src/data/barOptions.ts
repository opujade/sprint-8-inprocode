import { BarOptions, ChartOptions, GridLineOptions, PluginChartOptions, TooltipItem } from "chart.js";

export const options: BarOptions | PluginChartOptions<"bar"> | ChartOptions | GridLineOptions | undefined = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: TooltipItem<"bar">) {
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
};