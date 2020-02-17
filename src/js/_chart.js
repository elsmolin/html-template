const scales = {  // Сетка
  xAxes: [{
    gridLines: {
      color: "#f7f7f7",
      zeroLineColor: "#f7f7f7",
      tickMarkLength: 0,
    },
    ticks: {
      fontColor: '#b1bbc2',
      fontSize: 8,
      fontFamily: 'Nunito, sans-serif',
      padding: 15,
      beginAtZero: true,
      // callback: function (value, index, values) {
      //   // return '$' + value;
      //   console.log({value, index, values});
      //   return value;
      // }
    }
  }],
  yAxes: [{
    gridLines: {
      color: "rgba(0,0,0,0)",
      zeroLineColor: "rgba(0,0,0,0)",
      tickMarkLength: 0,
    },
    ticks: {
      padding: 10,
      fontColor: '#b1bbc2',
      fontSize: 8,
      fontFamily: 'Nunito, sans-serif',
      // callback: function (value, index, values) {
      //   return '$' + value;
      //   // console.log({value, index, values});
      //   // return value;
      // }
    }
  }]
}

const CHART_OPTIONS_DEFAULT = {
  // layout: {
  //   padding: {
  //     left: type !== 'doughnut' ? 0 : 10,
  //     right: type !== 'doughnut' ? 0 : 10,
  //     top: type !== 'doughnut' ? 0 : 10,
  //     bottom: type !== 'doughnut' ? 0 : 10
  //   }
  // },
  // showLines: true,
  // scales: type !== 'doughnut' ? scales : false,
  animation: {
    animateRotate: false,
    animateScale: true,
  },
  legend: {
    display: false,
  },
  cutoutPercentage: 70,
  tooltips: {
    // mode: 'point',
    // position: 'nearest',
    caretSize: 0,
    backgroundColor: '#fff',
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderWidth: 1,
    titleFontColor: '#647886',
    bodyFontColor: '#647886',
    footerFontColor: '#647886',
    titleFontSize: 14,
    titleFontStyle: 'regular',
    cornerRadius: 2,
    displayColors: false
  }
}

export const CHART_COLORS = [
  "#d0043c",
  "#f8ae29",
  "#33b2cf",
  "#087a95",
  "#065f73",
  "#2f4045",
  "#730220",
  "#a6032f",
]
export const CHART_OPTIONS = {
  horizontalBar: {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }
    },
    scales,
    ...CHART_OPTIONS_DEFAULT
  },
  doughnut: {
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    },
    ...CHART_OPTIONS_DEFAULT
  },
  line: {
    scales,
    ...CHART_OPTIONS_DEFAULT
  },
  scatter: {
    scales,
    ...CHART_OPTIONS_DEFAULT
  }
}

const CHART_DEMO_DATA = {
  horizontalBar: {
    datasets: [{
      data: [
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
      ],
      backgroundColor: CHART_COLORS,
      borderColor: CHART_COLORS,
      barPercentage: .5,
      barThickness: 'flex',
    }],
    labels: [1, 2, 3, 4],
  },
  doughnut: {
    datasets: [{
      data: [
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
      ],
      backgroundColor: CHART_COLORS,
      borderColor: CHART_COLORS,
    }],
    labels: ["leroymerlin.ru", "isolux.ru", "petrovich.ru", "ozon.ru", "220-volt.ru", "beru.ru", "saturn.net", "vseinstrumenti.ru"],
  },
  line: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [
          randomValue(),
          randomValue(),
          randomValue(),
          randomValue(),
          randomValue(),
          randomValue(),
          randomValue(),
        ],
        borderWidth: 1,
        // pointHoverRadius: 3,
        // pointRadius: 2,
        lineTension: 0,
        fill: false,
        backgroundColor: CHART_COLORS[0],
        borderColor: CHART_COLORS[0],
      },
      {
        data: [
          randomValue(),
          randomValue(),
          randomValue(),
          randomValue(),
          randomValue(),
          randomValue(),
          randomValue(),
        ],
        borderWidth: 1,
        // pointHoverRadius: 3,
        // pointRadius: 2,
        lineTension: 0,
        fill: false,
        backgroundColor: CHART_COLORS[1],
        borderColor: CHART_COLORS[1],
      },
      {
        data: [
          randomValue(),
          randomValue(),
          randomValue(),
          randomValue(),
          randomValue(),
          randomValue(),
          randomValue(),
        ],
        // pointHoverRadius: 3,
        // pointRadius: 2,
        borderWidth: 1,
        lineTension: 0,
        fill: false,
        backgroundColor: CHART_COLORS[2],
        borderColor: CHART_COLORS[2],
      },
    ]
  },
  scatter: {
    datasets: [
      {
        label: 'leroymerlin.ru',
        data: [{
          x: randomValue(100, true),
          y: randomValue(100, true),
          link: 'http://ok.ru'
        }, {
          x: randomValue(100, true),
          y: randomValue(100, true),
          link: 'http://ok.ru'
        }, {
          x: randomValue(100, true),
          y: randomValue(100, true),
          link: 'http://ok.ru'
        }, {
          x: randomValue(100, true),
          y: randomValue(100, true),
          link: 'http://ok.ru'
        }, {
          x: randomValue(100, true),
          y: randomValue(100, true),
          link: 'http://ok.ru'
        }, {
          x: randomValue(100, true),
          y: randomValue(100, true),
          link: 'http://ok.ru'
        }, {
          x: randomValue(100, true),
          y: randomValue(100, true),
          link: 'http://ok.ru'
        }],
        backgroundColor: CHART_COLORS[0],
        borderColor: CHART_COLORS[0],
      },
      {
        label: 'isolux.ru',
        data: [{
          x: randomValue(100, false),
          y: randomValue(100, false),
        }, {
          x: randomValue(100, false),
          y: randomValue(100, false),
        }, {
          x: randomValue(100, false),
          y: randomValue(100, false),
        }, {
          x: randomValue(100, false),
          y: randomValue(100, false),
        }, {
          x: randomValue(100, false),
          y: randomValue(100, false),
        }, {
          x: randomValue(100, false),
          y: randomValue(100, false),
        }, {
          x: randomValue(100, false),
          y: randomValue(100, false),
        }],
        backgroundColor: CHART_COLORS[1],
        borderColor: CHART_COLORS[1],
      },
      {
        label: 'petrovich.ru',
        data: [{
          x: randomValue(100, true),
          y: randomValue(100, true),
        }, {
          x: randomValue(100, true),
          y: randomValue(100, true),
        }, {
          x: randomValue(100, true),
          y: randomValue(100, true),
        }, {
          x: randomValue(100, true),
          y: randomValue(100, true),
        }, {
          x: randomValue(100, true),
          y: randomValue(100, true),
        }, {
          x: randomValue(100, true),
          y: randomValue(100, true),
        }, {
          x: randomValue(100, true),
          y: randomValue(100, true),
        }],
        backgroundColor: CHART_COLORS[2],
        borderColor: CHART_COLORS[2],
      },
    ]
  }
}

export const canvasSecondary = () => {
  const _canvasList = $('.js-canvas')

  if (_canvasList.length) {
    Chart.defaults.global.defaultFontFamily = 'Nunito, sans-serif'

    _canvasList.each(function (index) {
      const _canvasItem = $(this)

      const type = _canvasItem.data('type')
      const trendline = _canvasItem.data('trendline')
      const data = CHART_DEMO_DATA[type]
      let options = CHART_OPTIONS[type]
      const id = _canvasItem.attr('id') || index

      if (type === 'line') {
        const ticks = options.scales.yAxes[0].ticks

        options.scales.yAxes[0].ticks = {
          ...ticks,
          callback: function (value, index, values) {
            return '₽ ' + value;
          }
        }
        options.scales.yAxes[0].gridLines = {
          color: "#f7f7f7",
          zeroLineColor: "#f7f7f7",
          tickMarkLength: 0,
        }
      }

      if (type === 'scatter') {
        options.tooltips = {
          ...options.tooltips,
          callbacks: {
            label: function (tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';

              if (label) {
                label += ': ';
              }
              label += Math.round(tooltipItem.yLabel * 100) / 100;
              return label;
            }
          }
        }
        options.scales.yAxes[0].gridLines = {
          color: "#f7f7f7",
          zeroLineColor: "#b1bbc2",
          tickMarkLength: 0,
        }
        options.scales.xAxes[0].gridLines = {
          color: "#f7f7f7",
          zeroLineColor: "#b1bbc2",
          tickMarkLength: 0,
        }
        options = {
          ...options,
          annotation: {
            annotations: [{
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y-axis-1',
              value: trendline || 0,
              borderColor: '#000',
              borderWidth: 1,
            }]
          },
          onClick(evt, item) {
            // console.log({arguments: arguments}); 
            if (item.length) {
                console.log("onClick", item, evt.type);
                console.log("link", item[0]._index, data.datasets[0].data[item[0]._index].link);
            }
          }
        }
      }

      var myChart = new Chart(_canvasItem, {
        type,
        data,
        options,
      });

      elijah.CHART_LIST[id] = myChart

    })
  }
};

function randomValue(max = 1700, isPlusOrMinus) {
  if (isPlusOrMinus) {
    const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    max = max * plusOrMinus
  }
  const value = Math.round(Math.random() * max)
  return value
}

// export const canvasSecondary = () => {
//   const _canvasList = $('.js-canvas')

//   if (_canvasList.length) {
//     _canvasList.each(function () {
//       const _canvasItem = $(this)
//       let options = {}
//       let series = []

//       const values = _canvasItem.data('values')
//       const labels = _canvasItem.data('labels')
//       const colors = _canvasItem.data('colors')
//       const metas = _canvasItem.data('metas')
//       const TYPE = _canvasItem.data('type')
//       const horizontal = _canvasItem.data('horizontal')

//       if (TYPE === 'Pie') {
//         for (let index = 0; index < values.length; index++) {
//           const value = values[index];
//           const label = `${labels[index]}`;
//           const meta = metas[index] ? `Meta ${metas[index]}` : null;
//           const className = colors[index] ? `${colors[index]}` : null;
//           const titleHTML = `<span class="-tooltip-value-">${value}</span><span class="-tooltip-label-">${metas[index]}</span>`

//           const item = {
//             value,
//             name: label,
//           }

//           if (className) {
//             item.className = `statistic_svg-bg -${className}-`
//           }
//           if (meta) {
//             item.meta = meta
//           }
//           if (titleHTML) {
//             item.titleHTML = titleHTML
//           }

//           series.push(item)
//         }
//       } else if (TYPE === 'Bar') {
//         for (let index = 0; index < values.length; index++) {
//           const value = values[index];
//           const label = `${labels[index]}`;
//           const meta = metas[index] ? `Meta ${metas[index]}` : null;
//           const className = colors[index] ? `${colors[index]}` : null;
//           const titleHTML = `<span class="-tooltip-value-">${value}</span><span class="-tooltip-label-">${metas[index]}</span>`

//           const item = {
//             value,
//             name: label,
//           }

//           if (className) {
//             item.className = `statistic_svg-bg -${className}-`
//           }
//           if (meta) {
//             item.meta = meta
//           }
//           if (titleHTML) {
//             item.titleHTML = titleHTML
//           }

//           series.push(item)
//         }
//         series = [series]
//       }

//       var data = {
//         series,
//         labels
//       };

//       if (TYPE === 'Pie') {
//         options = {
//           width: 270,
//           height: 270,
//           donut: true,
//           donutWidth: 40,
//           donutSolid: true,
//           // startAngle: 270,
//           showLabel: false,
//           chartPadding: 10
//         };
//       } else if (TYPE === 'Bar') {
//         options = {
//           width: 520,
//           height: 150,
//           // seriesBarDistance: 10,
//           reverseData: true,
//           horizontalBars: horizontal,
//           // chartPadding: {
//           //   left: 0,
//           //   right: 0,
//           //   top: 0,
//           //   bottom: 0,
//           // },
//           // axisY: {
//           //   offset: 70
//           // },
//           // distributeSeries: true,
//         }
//       }

//       const chartItem = new Chartist[TYPE](`.js-canvas[data-type="${TYPE}"]`, data, options);

//       chartItem.on('draw', function(data) {
//         if (data.type === 'bar') {
//           console.log({data});
//         }
//         if (data.series && data.series.titleHTML) {
//           console.log({data});
//           data.group._node.setAttribute('title', (data.series.titleHTML || data.series[data.index].titleHTML))
//           data.group._node.classList.add('js-tooltip')
//         }
//       })

//       if (TYPE === 'Pie') {
//         chartItem.on('draw', function(data) {
//           if (data.type === 'slice') {  // каждый блок
//             data.group._node.addEventListener('mouseenter', function(e) {})
//             data.group._node.addEventListener('mouseleave', function(e) {})
//           }
//         })
//       }

//     })
//   }
// }
// export const canvasSecondary = () => {
//   const _canvasList = $('.js-canvas')

//   if (_canvasList.length) {
//     CanvasJS.addColorSet('saraColor', [
//       "#d0043c",
//       "#f8ae29",
//       "#33b2cf",
//       "#087a95",
//       "#065f73",
//       "#2f4045",
//       "#730220",
//       "#a6032f",
//     ])

//     _canvasList.each(function () {
//       const _canvasItem = $(this)

//       _canvasItem.CanvasJSChart({
//         colorSet: "saraColor",
//         data: [
//           {
//             // Change type to "doughnut", "line", "splineArea", etc.
//             type: "bar",
//             // color: "#d0043c",
//             dataPoints: [
//               { label: "apple", y: 10 },
//               { label: "orange", y: 15 },
//               { label: "banana", y: 25 },
//               { label: "mango", y: 30 },
//               { label: "grape", y: 28 }
//             ]
//           },
//         ],
//         axisY: {
//           prefix: "$",
//           suffix: "K",
//           // includeZero: false
//         }
//       });
//       // _canvasItem.render();
//     })
//   }
// }