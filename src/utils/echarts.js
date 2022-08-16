import * as echarts from 'echarts';

export function myChart(domRef) {
  let chart = echarts.init(domRef)
  chart.setOption({
    radar: [
      {
        indicator: [
          {text: '签到', max: 100},
          {text: '心得', max: 100},
          {text: '收藏', max: 100},
          {text: '评论', max: 100},
          {text: '活动', max: 100}
        ],
        radius: 40,
        center: ['50%', '60%']
      },
    ],
    series: [
      {
        type: 'radar',
        radarIndex: 0,
        areaStyle: {},
        color: ["#5ADEDA", "#00C5CF"],
        data: [
          {
            value: [85, 90, 90, 95, 95],
            name: 'A Phone'
          },
          {
            value: [60, 60, 60, 60, 60],
            name: 'Another Phone'
          }
        ]
      },
    ],
    textStyle: {
      color: '#3ededc',
      fontWeight: 600
    }
  })
}
