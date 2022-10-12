import * as echarts from 'echarts';

export function myChart(domRef,value) {
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
        center: ['50%', '55%']
      },
    ],
    series: [
      {
        type: 'radar',
        radarIndex: 0,
        areaStyle: {
          fontSize:'10px'
        },
        color: [ "#00C5CF"],
        data: [
          {
            value: value,
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
