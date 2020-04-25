/* eslint-disable */
module.exports = {
    bar: {
        chart: {
            type: "line",
            height: 500
          },
          title: {
            text: "Average temperature" //表頭文字
          },
          subtitle: {
            text: "Source: WorldClimate.com" //表頭下文字
          },
          xAxis: {
            categories: [
              "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"
            ],
          },
          yAxis: {
            title: {
              text: "Temperature (°C)"
            },
            plotLines: [{
                      value: 0,
                      width: 1,
                      color: '#808080'
                  }]
          },
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '150px',
                fontFamily: 'Verdana, sans-serif'
            }
        },
          legend: {
                  layout: 'vertical',
                  align: 'right',
                  verticalAlign: 'middle',
                  borderWidth: 0
          },
          series: [
            {
              name: "東京",
              data: [
                7.0,6.9,9.5,14.5,18.4,21.5,25.2,26.5,23.3,18.3,13.9,9.6
              ]
            },
            {
              name: "倫敦",
              data: [
                3.9,4.2,5.7,8.5,11.9,15.2,17.0,16.6,14.2,10.3,6.6,4.8
              ]
            },
            {
              name: "台北",
              data: [
                14.0,15.9,19.5,19.5,20.4,25.5,30.2,32.5,30.3,21.3,21.9,18.6
              ]
            },
          ]
    },
    bar2: {
      chart: {
          type: "column",
          height: 500
        },
        title: {
          text: "Average temperature" //表頭文字
        },
        subtitle: {
          text: "Source: WorldClimate.com" //表頭下文字
        },
        xAxis: {
          categories: [
            "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"
          ],
        },
        yAxis: {
          title: {
            text: "Temperature (°C)"
          },
          plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
        },
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: '#FFFFFF',
          align: 'right',
          format: '{point.y:.1f}', // one decimal
          y: 10, // 10 pixels down from the top
          style: {
              fontSize: '150px',
              fontFamily: 'Verdana, sans-serif'
          }
      },
        legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
        },
        series: [
          {
            name: "東京",
            data: [
              7.0,6.9,9.5,14.5,18.4,21.5,25.2,26.5,23.3,18.3,13.9,9.6
            ]
          },
          {
            name: "倫敦",
            data: [
              3.9,4.2,5.7,8.5,11.9,15.2,17.0,16.6,14.2,10.3,6.6,4.8
            ]
          },
          {
            name: "台北",
            data: [
              14.0,15.9,19.5,19.5,20.4,25.5,30.2,32.5,30.3,21.3,21.9,18.6
            ]
          },
        ]
      }

}
