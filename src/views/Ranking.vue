<template>
<main role="main" class="col-md-12 ml-sm-auto col-sm-10 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h1">Ranking</h1>
        </div>
        <div class="rankingchart1">
            <Chart :id="chart1.id" :option="chart1.option"></Chart>
        </div>
        <div class="rankingchart2">
            <Chart :id="chart2.id" :option="chart2.option"></Chart>
        </div>
    </main>

</template>
<script>
/* eslint-disable */
// 匯入chart元件
import Chart from "../components/Chart";
// 匯入chart元件模擬資料
//method 1
import options_ from '../components/charts/rankingchart'
//method 2
var options = [];
options.push({
        chart: {
            type: 'column'
        },
        title: {
            text: '不同機台的總營收排名',
            style: {
                fontSize: '25px',
                fontFamily: "Microsoft YaHei"
            }
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
        },
        series: [{
            name: 'Population',
            data: [
                ['Shanghai', 24.2],
                ['Beijing', 20.8],
                ['Karachi', 14.9],
                ['Shenzhen', 13.7],
                ['Guangzhou', 13.1],
                ['Istanbul', 12.7],
                ['Mumbai', 12.4],
                ['Moscow', 12.2],
                ['São Paulo', 12.0],
                ['Delhi', 11.7],
                ['Kinshasa', 11.5],
                ['Tianjin', 11.2],
                ['Lahore', 11.1],
                ['Jakarta', 10.6],
                ['Dongguan', 10.6],
                ['Lagos', 10.6],
                ['Bengaluru', 10.3],
                ['Seoul', 9.8],
                ['Foshan', 9.3],
                ['Tokyo', 9.3]
            ],
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
            }
        }]
    });
    

options.push({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Historic World Population by Region'
        },

        xAxis: {
            categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Year 1800',
            data: [107, 31, 635, 203, 2]
        }, {
            name: 'Year 1900',
            data: [133, 156, 947, 408, 6]
        }, {
            name: 'Year 2000',
            data: [814, 841, 3714, 727, 31]
        }, {
            name: 'Year 2016',
            data: [1216, 1001, 4436, 738, 40]
        }]
    });

export default {
    name: 'ranking',
    data() {
        return {
            chart1 : {
              id: 'chart1',
              //option: options[0]  
              option: options_.column
            },
            chart2 : {
              id: 'chart2',
              //option: options[1]
              option: options_.column2
            }
        }
    },
    components: {
        Chart
    }
}
</script>
<style>
.rankingchart1 {
    padding-top: 10px;
}
.rankingchart2 {
    padding-top: 50px;
}
</style>