function createSeriesData(type, names) {
  if (!names) {
    names = ['小王', '小a', '小b', '小李'];
  }
  let arr = new Array(4);
  for (let i = 0; i < arr.length; i++) {
    let data = new Array(5);
    let name = names[i];
    for (let k = 0; k < data.length; k++) {
      if (type === 'pie') {
        data[k] = {
          name: xData[i],
          value: parseInt(Math.random() * 15 + 2)
        }
      } else {
        data[k] = parseInt(Math.random() * 15 + 2);
      }
    }
    arr[i] = {
      type,
      name,
      data
    }
  }
  return arr;
}

let chartData = {
  legendData:['小王', '小a', '小b', {
    name: '小李',
    icon: 'image://https://www.echartsjs.com/zh/images/favicon.png',
  }],
  xAxisData: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
  createSeriesData,
}