get2012Map();

function update_maps(sel_year) {
    var selected_year = sel_year.value;

    if (selected_year == '2012') {
        get2012Map();
    } else if (selected_year == '2013') {
        get2013Map();
    } else if (selected_year == '2014') {
        get2014Map();
    } else if (selected_year == '2015') {
        get2015Map();
    } else if (selected_year == '2016') {
        get2016Map();
    }
}

function get2012Map () {
    // Default is 2012 map 
    $.getJSON("data/2012afam-data.json", function(data2012) {
        var countiesMap = Highcharts.geojson(Highcharts.maps['countries/us/us-all-all']),
            lines = Highcharts.geojson(Highcharts.maps['countries/us/us-all-all'], 'mapline'),
            options;

        options = {
            chart: {
                borderWidth: 0,
                marginRight: 50, // For the legend
                backgroundColor: '#efeee8',
                marginTop: 0,
                marginBottom: 0,
                spacingTop: 15
            },
            title: {
                text: null,
                style: {
                    fontWeight: '700',
                    fontSize: '1.5em',
                    fontFamily: 'Roboto Mono'
                }
            },
            subtitle: {
                text: null,
                style: {
                    fontWeight: '400',
                    fontFamily: 'Roboto Mono'
                }
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    align: 'right',
                    alignTo: 'spacingBox',
                    theme: {
                        fill: '#EFEFEF',
                        'stroke-width': 1,
                        stroke: 'silver',
                        r: 0,
                        states: {
                            hover: {
                                fill: 'rgba(154, 174, 255, .4)'
                            },
                            select: {
                                stroke: '#039',
                                fill: 'rgba(154, 174, 255, .4)'
                            }
                        }
                    },
                    verticalAlign: 'top'
                }
            },
            colorAxis: {
                dataClasses: [{
                    from: 0,
                    to: 0,
                    color: '#FFFFFF' //A10D03
                }, {
                    from: 1,
                    to: 14,
                    color: 'rgba(161, 13, 3, .1)'
                }, {
                    from: 15,
                    to: 29,
                    color: 'rgba(161, 13, 3, .3)'
                }, {
                    from: 30,
                    to: 49,
                    color: 'rgba(161, 13, 3, .5)'
                }, {
                    from: 50,
                    to: 85,
                    color: 'rgba(161, 13, 3, .7)'
                }, {
                    from: 86,
                    to: 150,
                    color: 'rgba(161, 13, 3, 1)'
                }]
            },
            plotOptions: {
                mapline: {
                    showInLegend: false,
                    enableMouseTracking: false
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                useHTML: true,
                headerFormat: '',
                pointFormat: '<b>{point.county_name}</b><br />&#8226; Incidents: <b>{point.value}</b><br />&#8226; African American composition: <b>{point.black_pop_composition}%</b>'
            },
            series: [{
                mapData: countiesMap,
                data: data2012,
                joinBy: ['hc-key', 'hc_code'],
                name: 'Crimes against African-Americans',
                tooltip: {
                    valueSuffix: ''
                },
                borderWidth: 0.5,
                states: {
                    hover: {
                        color: '#9E2531'
                    }
                }
            }, {
                type: 'mapline',
                name: 'state borders',
                data: [lines[0]],
                color: 'gray'
            }, {
                type: 'mapline',
                name: 'separator',
                data: [lines[1]],
                color: 'gray'
            }]
        };
        // Set map params
        Highcharts.setOptions({
            chart: {
                style: {
                    fontFamily: 'Roboto Mono'
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            }
        });
        // Instantiate the map
        $('#container2').highcharts('Map', options);
    });
}

function get2013Map () {
    $.getJSON("data/2013afam-data.json", function(data2013) {
        var countiesMap = Highcharts.geojson(Highcharts.maps['countries/us/us-all-all']),
            lines = Highcharts.geojson(Highcharts.maps['countries/us/us-all-all'], 'mapline'),
            options;

        options = {
            chart: {
                borderWidth: 0,
                marginRight: 50, // For the legend
                backgroundColor: '#efeee8',
                marginTop: 0,
                marginBottom: 0,
                spacingTop: 15
            },
            title: {
                text: null,
                style: {
                    fontWeight: '700',
                    fontSize: '1.5em',
                    fontFamily: 'Roboto Mono'
                }
            },
            subtitle: {
                text: null,
                style: {
                    fontWeight: '400',
                    fontFamily: 'Roboto Mono'
                }
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    align: 'right',
                    alignTo: 'spacingBox',
                    theme: {
                        fill: '#EFEFEF',
                        'stroke-width': 1,
                        stroke: 'silver',
                        r: 0,
                        states: {
                            hover: {
                                fill: 'rgba(154, 174, 255, .4)'
                            },
                            select: {
                                stroke: '#039',
                                fill: 'rgba(154, 174, 255, .4)'
                            }
                        }
                    },
                    verticalAlign: 'top'
                }
            },
            colorAxis: {
                dataClasses: [{
                    from: 0,
                    to: 0,
                    color: '#FFFFFF' //A10D03
                }, {
                    from: 1,
                    to: 14,
                    color: 'rgba(161, 13, 3, .1)'
                }, {
                    from: 15,
                    to: 29,
                    color: 'rgba(161, 13, 3, .3)'
                }, {
                    from: 30,
                    to: 49,
                    color: 'rgba(161, 13, 3, .5)'
                }, {
                    from: 50,
                    to: 85,
                    color: 'rgba(161, 13, 3, .7)'
                }, {
                    from: 86,
                    to: 150,
                    color: 'rgba(161, 13, 3, 1)'
                }]
            },
            plotOptions: {
                mapline: {
                    showInLegend: false,
                    enableMouseTracking: false
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                useHTML: true,
                headerFormat: '',
                pointFormat: '<b>{point.county_name}</b><br />&#8226; Incidents: <b>{point.value}</b><br />&#8226; African American composition: <b>{point.black_pop_composition}%</b>'
            },
            series: [{
                mapData: countiesMap,
                data: data2013,
                joinBy: ['hc-key', 'hc_code'],
                name: 'Crimes against African-Americans',
                tooltip: {
                    valueSuffix: ''
                },
                borderWidth: 0.5,
                states: {
                    hover: {
                        color: '#9E2531'
                    }
                }
            }, {
                type: 'mapline',
                name: 'state borders',
                data: [lines[0]],
                color: 'gray'
            }, {
                type: 'mapline',
                name: 'separator',
                data: [lines[1]],
                color: 'gray'
            }]
        };
        // Set map params
        Highcharts.setOptions({
            chart: {
                style: {
                    fontFamily: 'Roboto Mono'
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            }
        });
        // Instantiate the map
        $('#container2').highcharts('Map', options);
    });
}

function get2014Map () {
    $.getJSON("data/2014afam-data.json", function(data2014) {
        var countiesMap = Highcharts.geojson(Highcharts.maps['countries/us/us-all-all']),
            lines = Highcharts.geojson(Highcharts.maps['countries/us/us-all-all'], 'mapline'),
            options;

        options = {
            chart: {
                borderWidth: 0,
                marginRight: 50, // For the legend
                backgroundColor: '#efeee8',
                marginTop: 0,
                marginBottom: 0,
                spacingTop: 15
            },
            title: {
                text: null,
                style: {
                    fontWeight: '700',
                    fontSize: '1.5em',
                    fontFamily: 'Roboto Mono'
                }
            },
            subtitle: {
                text: null,
                style: {
                    fontWeight: '400',
                    fontFamily: 'Roboto Mono'
                }
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    align: 'right',
                    alignTo: 'spacingBox',
                    theme: {
                        fill: '#EFEFEF',
                        'stroke-width': 1,
                        stroke: 'silver',
                        r: 0,
                        states: {
                            hover: {
                                fill: 'rgba(154, 174, 255, .4)'
                            },
                            select: {
                                stroke: '#039',
                                fill: 'rgba(154, 174, 255, .4)'
                            }
                        }
                    },
                    verticalAlign: 'top'
                }
            },
            colorAxis: {
                dataClasses: [{
                    from: 0,
                    to: 0,
                    color: '#FFFFFF' //A10D03
                }, {
                    from: 1,
                    to: 14,
                    color: 'rgba(161, 13, 3, .1)'
                }, {
                    from: 15,
                    to: 29,
                    color: 'rgba(161, 13, 3, .3)'
                }, {
                    from: 30,
                    to: 49,
                    color: 'rgba(161, 13, 3, .5)'
                }, {
                    from: 50,
                    to: 85,
                    color: 'rgba(161, 13, 3, .7)'
                }, {
                    from: 86,
                    to: 150,
                    color: 'rgba(161, 13, 3, 1)'
                }]
            },
            plotOptions: {
                mapline: {
                    showInLegend: false,
                    enableMouseTracking: false
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                useHTML: true,
                headerFormat: '',
                pointFormat: '<b>{point.county_name}</b><br />&#8226; Incidents: <b>{point.value}</b><br />&#8226; African American composition: <b>{point.black_pop_composition}%</b>'
            },
            series: [{
                mapData: countiesMap,
                data: data2014,
                joinBy: ['hc-key', 'hc_code'],
                name: 'Crimes against African-Americans',
                tooltip: {
                    valueSuffix: ''
                },
                borderWidth: 0.5,
                states: {
                    hover: {
                        color: '#9E2531'
                    }
                }
            }, {
                type: 'mapline',
                name: 'state borders',
                data: [lines[0]],
                color: 'gray'
            }, {
                type: 'mapline',
                name: 'separator',
                data: [lines[1]],
                color: 'gray'
            }]
        };
        // Set map params
        Highcharts.setOptions({
            chart: {
                style: {
                    fontFamily: 'Roboto Mono'
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            }
        });
        // Instantiate the map
        $('#container2').highcharts('Map', options);
    });
}

function get2015Map () {
    $.getJSON("data/2015afam-data.json", function(data2015) {
        var countiesMap = Highcharts.geojson(Highcharts.maps['countries/us/us-all-all']),
            lines = Highcharts.geojson(Highcharts.maps['countries/us/us-all-all'], 'mapline'),
            options;

        options = {
            chart: {
                borderWidth: 0,
                marginRight: 50, // For the legend
                backgroundColor: '#efeee8',
                marginTop: 0,
                marginBottom: 0,
                spacingTop: 15
            },
            title: {
                text: null,
                style: {
                    fontWeight: '700',
                    fontSize: '1.5em',
                    fontFamily: 'Roboto Mono'
                }
            },
            subtitle: {
                text: null,
                style: {
                    fontWeight: '400',
                    fontFamily: 'Roboto Mono'
                }
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    align: 'right',
                    alignTo: 'spacingBox',
                    theme: {
                        fill: '#EFEFEF',
                        'stroke-width': 1,
                        stroke: 'silver',
                        r: 0,
                        states: {
                            hover: {
                                fill: 'rgba(154, 174, 255, .4)'
                            },
                            select: {
                                stroke: '#039',
                                fill: 'rgba(154, 174, 255, .4)'
                            }
                        }
                    },
                    verticalAlign: 'top'
                }
            },
            colorAxis: {
                dataClasses: [{
                    from: 0,
                    to: 0,
                    color: '#FFFFFF' //A10D03
                }, {
                    from: 1,
                    to: 14,
                    color: 'rgba(161, 13, 3, .1)'
                }, {
                    from: 15,
                    to: 29,
                    color: 'rgba(161, 13, 3, .3)'
                }, {
                    from: 30,
                    to: 49,
                    color: 'rgba(161, 13, 3, .5)'
                }, {
                    from: 50,
                    to: 85,
                    color: 'rgba(161, 13, 3, .7)'
                }, {
                    from: 86,
                    to: 150,
                    color: 'rgba(161, 13, 3, 1)'
                }]
            },
            plotOptions: {
                mapline: {
                    showInLegend: false,
                    enableMouseTracking: false
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                useHTML: true,
                headerFormat: '',
                pointFormat: '<b>{point.county_name}</b><br />&#8226; Incidents: <b>{point.value}</b><br />&#8226; African American composition: <b>{point.black_pop_composition}%</b>'
            },
            series: [{
                mapData: countiesMap,
                data: data2015,
                joinBy: ['hc-key', 'hc_code'],
                name: 'Crimes against African-Americans',
                tooltip: {
                    valueSuffix: ''
                },
                borderWidth: 0.5,
                states: {
                    hover: {
                        color: '#9E2531'
                    }
                }
            }, {
                type: 'mapline',
                name: 'state borders',
                data: [lines[0]],
                color: 'gray'
            }, {
                type: 'mapline',
                name: 'separator',
                data: [lines[1]],
                color: 'gray'
            }]
        };
        // Set map params
        Highcharts.setOptions({
            chart: {
                style: {
                    fontFamily: 'Roboto Mono'
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            }
        });
        // Instantiate the map
        $('#container2').highcharts('Map', options);
    });
}

function get2016Map () {
    $.getJSON("data/2016afam-data.json", function(data2016) {
        var countiesMap = Highcharts.geojson(Highcharts.maps['countries/us/us-all-all']),
            lines = Highcharts.geojson(Highcharts.maps['countries/us/us-all-all'], 'mapline'),
            options;

        options = {
            chart: {
                borderWidth: 0,
                marginRight: 50, // For the legend
                backgroundColor: '#efeee8',
                marginTop: 0,
                marginBottom: 0,
                spacingTop: 15
            },
            title: {
                text: null,
                style: {
                    fontWeight: '700',
                    fontSize: '1.5em',
                    fontFamily: 'Roboto Mono'
                }
            },
            subtitle: {
                text: null,
                style: {
                    fontWeight: '400',
                    fontFamily: 'Roboto Mono'
                }
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    align: 'right',
                    alignTo: 'spacingBox',
                    theme: {
                        fill: '#EFEFEF',
                        'stroke-width': 1,
                        stroke: 'silver',
                        r: 0,
                        states: {
                            hover: {
                                fill: 'rgba(154, 174, 255, .4)'
                            },
                            select: {
                                stroke: '#039',
                                fill: 'rgba(154, 174, 255, .4)'
                            }
                        }
                    },
                    verticalAlign: 'top'
                }
            },
            colorAxis: {
                dataClasses: [{
                    from: 0,
                    to: 0,
                    color: '#FFFFFF' //A10D03
                }, {
                    from: 1,
                    to: 14,
                    color: 'rgba(161, 13, 3, .1)'
                }, {
                    from: 15,
                    to: 29,
                    color: 'rgba(161, 13, 3, .3)'
                }, {
                    from: 30,
                    to: 49,
                    color: 'rgba(161, 13, 3, .5)'
                }, {
                    from: 50,
                    to: 85,
                    color: 'rgba(161, 13, 3, .7)'
                }, {
                    from: 86,
                    to: 150,
                    color: 'rgba(161, 13, 3, 1)'
                }]
            },
            plotOptions: {
                mapline: {
                    showInLegend: false,
                    enableMouseTracking: false
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                useHTML: true,
                headerFormat: '',
                pointFormat: '<b>{point.county_name}</b><br />&#8226; Incidents: <b>{point.value}</b><br />&#8226; African American composition: <b>{point.black_pop_composition}%</b>'
            },
            series: [{
                mapData: countiesMap,
                data: data2016,
                joinBy: ['hc-key', 'hc_code'],
                name: 'Crimes against African-Americans',
                tooltip: {
                    valueSuffix: ''
                },
                borderWidth: 0.5,
                states: {
                    hover: {
                        color: '#9E2531'
                    }
                }
            }, {
                type: 'mapline',
                name: 'state borders',
                data: [lines[0]],
                color: 'gray'
            }, {
                type: 'mapline',
                name: 'separator',
                data: [lines[1]],
                color: 'gray'
            }]
        };
        // Set map params
        Highcharts.setOptions({
            chart: {
                style: {
                    fontFamily: 'Roboto Mono'
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            }
        });
        // Instantiate the map
        $('#container2').highcharts('Map', options);
    });
}