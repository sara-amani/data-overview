$(function() {

    data = getData();
    dataPie = getDataPie();

    // https://api.highcharts.com/highcharts/
    Highcharts.setOptions({
        colors: ['#C4D1F4', '#243ECC'],
        chart: {
            style: {
                fontFamily: "sans-serif",
            }
        }
    });

    Highcharts.chart('container-chart1', {
        chart: {
            type: 'column',
            width: 475,
            height: 300,
            spacing: 30,
            borderRadius: 10
        },
        title: {
            align: "left",
            style: {
                "fontFamily": "helvetica",
                "color": "#777676",
                "fontSize": "0.9rem",
                "fontWeight": "bold"
            },
            margin: 30,
            text: "Balance Overview"
        },
        credits: {
            enabled: false
        },
        yAxis: [{
            title: null,
            labels: {
                style: {
                    "color": "#aaaaaa",
                    "fontSize": "0.8rem"
                }
            },
        }, {
            title: null,
            opposite: true,
            labels: {
                style: {
                    "color": "#aaaaaa",
                    "fontSize": "0.8rem"
                },
                formatter: function() {
                    return Sugar.Number(this.value * 0.00008).round(3) + '%'
                }
            }
        }],
        xAxis: [{
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%b %e'
            },
            minTickInterval: (24 * 3600),
            labels: {
                style: {
                    "color": "#aaaaaa",
                    "fontSize": "0.8rem"
                }
            },
        }],
        legend: {
            enabled: true
        },
        series: data,
        line: {
            markers: {
                enabled: false
            }
        }
    });

    Highcharts.chart('container-chart2', {
        chart: {
            width: 475,
            height: 300,
            spacing: 30,
            borderRadius: 10
        },
        title: {
            align: "left",
            style: {
                "fontFamily": "helvetica",
                "color": "#777676",
                "fontSize": "0.9rem",
                "fontWeight": "bold"
            },
            margin: 30,
            text: "Income"
        },
        credits: {
            enabled: false
        },
        yAxis: [{
            title: null,
            labels: {
                style: {
                    "color": "#aaaaaa",
                    "fontSize": "0.8rem"
                }
            },
        }, {
            title: null,
            opposite: true,
            labels: {
                style: {
                    "color": "#aaaaaa",
                    "fontSize": "0.8rem"
                },
                formatter: function() {
                    return Sugar.Number(this.value * 0.00008).round(3) + '%'
                }
            }
        }],
        xAxis: [{
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%b %e'
            },
            minTickInterval: (24 * 3600),
            labels: {
                style: {
                    "color": "#aaaaaa",
                    "fontSize": "0.8rem"
                }
            },
        }],
        legend: {
            enabled: true
        },
        series: data,
        line: {
            markers: {
                enabled: false
            }
        }
    });

    Highcharts.chart('container-chart3', {
        chart: {
            width: 250,
            height: 300,
            spacing: 30,
            borderRadius: 10
        },
        title: {
            align: "left",
            style: {
                "fontFamily": "helvetica",
                "color": "#777676",
                "fontWeight": "bold",
                "fontSize": "0.9rem"
            },
            margin: 30,
            text: "Deal Type"
        },
        credits: {
            enabled: false
        },
        yAxis: [{
            title: null,
            labels: {
                style: {
                    "color": "#aaaaaa",
                    "fontSize": "0.8rem"
                }
            },
        },{
            title: null,
            opposite: true,
            labels: {
                style: {
                    "color": "#aaaaaa",
                    "fontSize": "0.8rem"
                },
                formatter: function() {
                    return Sugar.Number(this.value * 0.00008).round(3) + '%'
                }
            }
        }],
        xAxis: [{
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%b %e'
            },
            minTickInterval: (24 * 3600),
            labels: {
                style: {
                    "color": "#aaaaaa",
                    "fontSize": "0.8rem"
                }
            },
        }],
        legend: {
            enabled: true
        },
        series: dataPie,
        line: {
            markers: {
                enabled: false
            }
        }
    });

    function getData() {
        return [{
            name: 'Clicks',
            type: 'column',
            yAxis: 1,
            data: [0, 0, 8000, 40500, 20500, 13000, 13000, 13000, 12000, 13000, 12500, 13000, 11000, 4000, 6000, 5000, 5000]
        }, {
            name: 'Impressions',
            data: [0, 0, 8000, 40500, 20500, 13000, 13000, 13000, 12000, 13000, 12500, 13000, 11000, 4000, 6000, 5000, 5000],
            marker: {
                enabled: false
            }
        }].map(d => {
            d.data = d.data.map((value, i) => {
                return [new Sugar.Date().addDays(i - d.data.length, true).getTime().raw, value]
            })
            return d
        })
    }

    function getDataPie() {
        return [{
            name: 'Clicks',
            type: 'pie',
            yAxis: 1,
            data: [0, 0, 8000, 40500, 20500, 13000, 13000, 13000, 12000, 13000, 12500, 13000, 11000, 4000, 6000, 5000, 5000]
        }].map(d => {
            d.data = d.data.map((value, i) => {
                return [new Sugar.Date().addDays(i - d.data.length, true).getTime().raw, value]
            })
            return d
        })
    }
});
