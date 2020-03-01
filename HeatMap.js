import React from 'react';
import ReactApexChart from 'react-apexcharts';

class HeatMap extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              name: 'Metric1',
              data: this.generateData(3 ,{
                min: 0,
                max: 90
              })
            },
            {
              name: 'Metric2',
              data: this.generateData(3, {
                min: 0,
                max: 90
              })
            },
        
            ],
            options: {
                  toolbar: {
                  show: false
                  },
              chart: {
                height: 350,
                type: 'heatmap',
              },
              stroke: {
                width: 0
              },
            
              dataLabels: {
                enabled: false,
                style: {
                  colors: ['#fff']
                }
              }, colors: ["#008FFB"],
              xaxis: {
                type: 'category',
              },
              title: {
                text: 'Rounded (Range without Shades)'
              },
            },
          
          
          };
        }

      generateData(count,yrange){
           var i = 0;
      var series = [];
      while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push({
          x: x,
          y: y
        });
        i++;
      }
      return series;
      }

        render() {
          return (
            

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={350} />
</div>

          );
        }
      }

   export default HeatMap;