Sonet.am.ChartHelper = {
   registerChartDefaults: function() {
      if ( this.chartDefaultsRegistered ) {
         return;
      }

      let AxisArrowPlugin = {
         id: 'axisarrow',
   
         // Need to implements this with a calculation to find the ends of the axis and draw arrows
         afterDraw: (chartInstance) => {
          
            // Find first scale that is on the right side or on the left side, so we can calculate padding from the top
            /*const scaleTop = Object.values(chartInstance.scales).find((scale) => scale.options.position === "left" || scale.options.position === "right")
            const paddingTop = scaleTop.top - minPaddingTop
   
            const squareSize = chartInstance.options.plugins.axislegend.squareSize
            const margin = chartInstance.options.plugins.axislegend.margin
            const squareMargin = chartInstance.options.plugins.axislegend.squareMargin
   
            let drawn = []
            chartInstance.config.data.datasets.forEach((dataset) => {
               let axisId = dataset.yAxisID
               const axisWidth = chartInstance.scales[axisId].width - margin
   
               if (!(axisId in drawn)) {
                   drawn[axisId] = { "count": 0, "row": 0 }
               } else {
                   drawn[axisId].count++
               }
   
               let position = chartInstance.scales[axisId].left + margin + ((squareSize + squareMargin) * drawn[axisId].count)
               let minPosition = chartInstance.scales[axisId].left
   
               if ((margin + position - minPosition) >= Math.floor(axisWidth)) {
                   drawn[axisId].count = 0
                   drawn[axisId].row++
                   position = chartInstance.scales[axisId].left + margin + ((squareSize + squareMargin) * drawn[axisId].count)
               }
   
               chartInstance.ctx.fillStyle = dataset.backgroundColor
               chartInstance.ctx.fillRect(position, paddingTop - ((squareSize + squareMargin) * drawn[axisId].row), squareSize, squareSize)
            })*/

            //chartInstance.ctx.fillStyle = '#FF0000';
            //chartInstance.ctx.fillRect(100, 100, 10, 10)
         }
      }

      Chart.register(AxisArrowPlugin);
      Chart.defaults.color = '#000000';
      Chart.defaults.font= {
         family: "'Arial', 'Helvetica', sans-serif",
         size: 18
      }

      chartDefaultsRegistered = true;
   },

   createChart: function(elem, customCfg) {
      // console.log({elem, customCfg})
      this.registerChartDefaults();

      let cfg = $.extend(true, {
         type: 'line',
         data: {
            labels: [
               '',
               '1',
               '2',
               '3',
            ],
            datasets: [{
               borderColor: $('.p1-m2').css('--chart-line1-color'),
               borderWidth: $('.p1-m2').css('--chart-line-weight'),
            },{
               borderColor: $('.p1-m2').css('--chart-line2-color'),
               borderWidth: $('.p1-m2').css('--chart-line-weight'),
               borderDash: [5, 5],
            }]
         },
         options: {    
            plugins: {
               axisarrow: { // to be used to implement arrows on the axis
               },
               legend: {
                  display: false // hide the legend
               }
            },
            events: [], //clear any mouse events 
            radius: 0, // remove circles at intersections
            interaction: {
               intersect: false
            },
            animation: false, // remove animations
            responsive: true,
            maintainAspectRatio: false,
            elements: {
            },
            scales: {
               yAxis: {
                  min: 0,
                  max: 30,
                  grid: {
                     borderWidth: 2,
                     borderColor: '#000000',
                     display: false,
                  },
                  title: {
                     display: true,
                     text: $('#chartgroup1-y-lbl').html(),
                     padding: 10
                  },
                  ticks: {
                     stepSize: 10
                  },
               },   
               xAxis: {
                  min: 0,
                  max: 3,
                  grid: {
                     borderWidth: 2,
                     borderColor: '#000000',
                     display: false
                  },
                  title: {
                     display: true,
                     text: $('#chartgroup1-x-lbl').html(),
                     padding: 5
                  },
                  ticks: {
                     stepSize: 1
                  }
               }   
            }
         }
      }, customCfg);

      return new Chart($(elem), cfg);
   },
};