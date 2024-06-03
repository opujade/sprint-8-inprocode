export const formatChartData = (data: number[], labels: string[], datasetLabel: string) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: datasetLabel,
        data: data,
        tension: 0.5,
        fill: true,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius: 5,
        pointBorderColor: 'rgba(255, 99, 132)',
        pointBackgroundColor: 'rgba(255, 99,132)',
      }
    ]
  }
  return chartData;
}