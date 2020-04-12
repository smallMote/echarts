let lineChart = echarts.init(document.getElementById('line'))
let lineOption = {
  title: {
    text: 'Line 折线图',
  },
  legend: {
    data: chartData.legendData,
    top: 'bottom',
  },
  xAxis: {
    data: chartData.xAxisData
  },
  yAxis: {},
  series: chartData.createSeriesData('line')
}

lineChart.setOption(lineOption)