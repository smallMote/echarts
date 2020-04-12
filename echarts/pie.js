let pieChart = echarts.init(document.getElementById('pie'))
function createPieSeriesData() {
  let t = chartData.xAxisData;
  let arr = [];
  t.forEach(item => {
    arr.push({
      name: item,
      value: parseInt(Math.random() * 15 + 2),
    })
  })
  return arr
}
let pieOption = {
  title: {
    text: 'Pie 饼状图',
  },
  tooltip: { // 交互提示
    trigger: 'item',
    formatter: '{a}的销售情况<br/>{b}:{c}件({d}%)'
  },
  legend: {
    data: ['小王', '小李'],
    top: 'bottom',
    selectedMode: 'single'
  },
  series: [
    {
      name: '小王',
      type: 'pie',
      data: createPieSeriesData()
    },
    {
      name: '小李',
      type: 'pie',
      data: createPieSeriesData()
    }
  ]
}
pieChart.setOption(pieOption)