// 基于准备好的dom，初始化echarts实例
var barChart = echarts.init(document.getElementById('bar'));

// 指定图表的配置项和数据
var barOption = {
    title: { // 标题 + 副标题
      text: 'Bar 柱状图',
      // link: 'https://baidu.com',
      target: 'self', // 默认 blank
      textStyle: {
        color: 'blue',
        // fontStyle,fontWeight,fontFamily,fontSize,lineHeight... 与font的css样式表对应,
        textBorderColor: 'red',
        textBorderWidth: 3, // Number
      },
      subtext: '3月销售额',
      subtextStyle: {
        verticalAlign: 'bottom'
      },
      textAlign: 'center', // 与副标题相对
      itemGap: 10, // title 与 subtext之间的距离
      left: 'right', // Number | String
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: 6, // [左上, 右上, 右下, 左下]
    },
    legend: { // 图例，说明
      top: 'bottom',
      orient: 'horizontal', // horizontal | vertical
      itemGap: 70,
      formatter: '{name}-销量', // String -> {name} -> data: [item] | Func, 
      selectedMode: 'multiple', // Boolean | String[multiple | single]
      icon: 'rect',
      data:['小王', '小a', '小b', {
        name: '小李',
        icon: 'image://https://www.echartsjs.com/zh/images/favicon.png',
      }],
      // 滚动模式
      type: 'scroll',
      animation: true,
      animationDurationUpdate: 500, // 翻页动画时间
      pageButtonGap: 20,
      // 选择器
      selector: true,
      selectorPosition: 'start',
      selectorButtonGap: 20
    },
    grid: [
      { // 图像（表）设置
        show: true,
        bottom: 70,
        height: 'auto',
        containLabel: true, // 防止图像溢出
        borderWidth: 0.5,
        zlevel: 0,
        z: 2
      }
    ],
    xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
      show: true,
      position: 'bottom', // bottom | top
      type: 'category', // category | value | time | log
      name: '类别',
      nameLocation: 'center', // end | start | center = middle
      nameGap: 30,
      nameTextStyle: {
        color: 'blue'
      },
      min: 0,
      // triggerEvent: true
      axisLine: {
        show: true,
        symbol: ['none', 'arrow'], // String | Array
        symbolSize: [5, 7],
        symbolOffset: [0, 5], // [起始箭头偏移量, 末端箭头偏移量
        lineStyle: {
          color: 'red',
          type: 'dashed'
        }
      }
    },
    yAxis: {},
    series: chartData.createSeriesData('bar')
};

// 使用刚指定的配置项和数据显示图表。
barChart.setOption(barOption);