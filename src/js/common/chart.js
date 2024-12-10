/**
 * /js/common/chart.js
 */
;(() => {
  const ticksFont = {
    color: '#94A3B8',
    font: {
      family: 'Inter',
      size: 12
    },
    lineHeight: 16
  }

  function initChartBar(idNode, data, type, isStacked = true) {
    Chart.defaults.elements.bar.borderRadius = 4

    return new Chart(idNode, {
      type: 'bar',
      data: {
        labels: data.map((row) => row.interval),
        datasets: type.map((it, i) => ({
          label: it.label,
          data: data.map((row) => row.count[i]),
          backgroundColor: it.color
        }))
      },
      options: {
        scales: {
          x: {
            stacked: isStacked,
            grid: {
              display: false
            },
            ticks: {
              ...ticksFont,
              maxRotation: 0,
              minRotation: 0,
              callback: function (value, index, values) {
                const label = this.getLabelForValue(value)
                const [start, end] = label.split('-')
                return [`${start}-`, end]
              }
            }
          },
          y: {
            grid: {
              color: '#DBEAFE'
            },
            ticks: {
              ...ticksFont,
              stepSize: 5
            },
            border: {
              display: false
            }
          }
        },
        barThickness: isStacked ? undefined : 14,
        maxBarThickness: isStacked ? undefined : 8,
        barPercentage: isStacked ? 0.5 : 1,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: '#ffffff', //
            titleFont: {
              family: 'Lato',
              size: 14,
              weight: 'bold'
            },
            bodyFont: {
              family: 'Inter',
              size: 12
            },
            padding: 11, //
            cornerRadius: 12,
            borderColor: '#4AA3EF40',
            borderWidth: 1,
            titleColor: '#111111',
            bodyColor: '#000000',
            displayColors: false,
            caretSize: 0
          }
        }
      }
    })
  }

  window.chart = {
    initChartBar
  }
})()
