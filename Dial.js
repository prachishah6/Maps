import React from 'react';
import ReactApexChart from 'react-apexcharts';
 class DialChart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [76,44,21],
            options: {
              chart: {
                type: 'donut'
               
              },
              plotOptions: {
               pie:{
                       size: 20
                   
               }
              },
             
              labels: ['Average Results'],
            },
          
          
          };
        }

      

        render() {
          return (
            

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
</div>

          );
        }
      }

    
export default DialChart;

      