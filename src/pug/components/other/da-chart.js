;(() => {
  const data = [
    { interval: '8:00-\n\n8:30', count: [10] },
    { interval: '8:30-9:00', count: [3] },
    { interval: '9:00-9:30', count: [31] },
    { interval: '9:30-10:00', count: [5] },
    { interval: '10:00-10:30', count: [15.5] },
    { interval: '10:30-11:00', count: [19.5] },
    { interval: '11:00-11:30', count: [24] },
    { interval: '11:30-12:00', count: [10] },
    { interval: '12:00-12:30', count: [23] },
    { interval: '12:30-13:00', count: [10] },
    { interval: '13:00-13:30', count: [23] },
    { interval: '13:30-14:00', count: [5] },
    { interval: '14:00-14:30', count: [13] },
    { interval: '14:30-15:00', count: [18] },
    { interval: '15:00-15:30', count: [22] },
    { interval: '15:30-16:00', count: [21] },
    { interval: '16:00-16:30', count: [28] },
    { interval: '16:30-17:00', count: [21] },
    { interval: '17:00-17:30', count: [36] },
    { interval: '17:30-18:00', count: [22] },
    { interval: '18:00-18:30', count: [2] },
    { interval: '18:30-19:00', count: [7] },
    { interval: '19:00-19:30', count: [3] },
    { interval: '19:30-20:00', count: [5] },
    { interval: '20:00-20:30', count: [11] },
    { interval: '20:30-21:00', count: [17] },
    { interval: '21:00-21:30', count: [7] },
    { interval: '21:30-22:00', count: [12] },
    { interval: '22:00-22:30', count: [1] },
    { interval: '22:30-23:00', count: [5] },
    { interval: '23:00-23:30', count: [2] },
    { interval: '23:30-0:00', count: [5] },
    { interval: '0:00-0:30', count: [4] },
    { interval: '0:30-1:00', count: [1] },
    { interval: '1:00-1:30', count: [1] },
    { interval: '1:30-2:00', count: [4] }
  ]

  const type1 = [{ label: 'Number of requests', color: '#37CE7D' }]
  const type2 = [{ label: 'In queque (min)', color: '#37CE7D' }]
  const type3 = [{ label: 'Moderation speed (min)', color: '#37CE7D' }]
  const type4 = [{ label: 'Total speed (min)', color: '#37CE7D' }]

  document.addEventListener('DOMContentLoaded', () => {
    window.chartCallIncome = window.chart.initChartBar('chart1', data, type1)
    window.chartCallIncome = window.chart.initChartBar('chart2', data, type2)
    window.chartCallIncome = window.chart.initChartBar('chart3', data, type3)
    window.chartCallIncome = window.chart.initChartBar('chart4', data, type4)
  })
})()
