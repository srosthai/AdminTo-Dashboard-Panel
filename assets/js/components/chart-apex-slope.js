var colors = ["#777edd", "#0acf97", "#fa5c7c"]
    , dataColors = $("#slope-basic").data("colors")
    , options = {
        series: [{
            name: "Blue",
            data: [{
                x: "Jan",
                y: 43
            }, {
                x: "Feb",
                y: 58
            }]
        }, {
            name: "Green",
            data: [{
                x: "Jan",
                y: 33
            }, {
                x: "Feb",
                y: 38
            }]
        }, {
            name: "Red",
            data: [{
                x: "Jan",
                y: 55
            }, {
                x: "Feb",
                y: 21
            }]
        }],
        colors: colors = dataColors ? dataColors.split(",") : colors,
        chart: {
            height: 350,
            width: 400,
            type: "line"
        },
        plotOptions: {
            line: {
                isSlopeChart: !0
            }
        }
    }
    , chart = new ApexCharts(document.querySelector("#slope-basic"), options)
    , colors = (chart.render(),
        ["#777edd", "#0acf97", "#fd7e14", "#fa5c7c"])
    , dataColors = $("#slope-mluti-group").data("colors")
    , options = {
        series: [{
            name: "Blue",
            data: [{
                x: "Category 1",
                y: 503
            }, {
                x: "Category 2",
                y: 580
            }, {
                x: "Category 3",
                y: 135
            }]
        }, {
            name: "Green",
            data: [{
                x: "Category 1",
                y: 733
            }, {
                x: "Category 2",
                y: 385
            }, {
                x: "Category 3",
                y: 715
            }]
        }, {
            name: "Orange",
            data: [{
                x: "Category 1",
                y: 255
            }, {
                x: "Category 2",
                y: 211
            }, {
                x: "Category 3",
                y: 441
            }]
        }, {
            name: "Red",
            data: [{
                x: "Category 1",
                y: 428
            }, {
                x: "Category 2",
                y: 749
            }, {
                x: "Category 3",
                y: 559
            }]
        }],
        chart: {
            height: 350,
            width: 600,
            type: "line"
        },
        plotOptions: {
            line: {
                isSlopeChart: !0
            }
        },
        tooltip: {
            followCursor: !0,
            intersect: !1,
            shared: !0
        },
        dataLabels: {
            background: {
                enabled: !0
            },
            formatter(o, e) {
                e = e.w.config.series[e.seriesIndex].name;
                return null !== o ? e : ""
            }
        },
        colors: colors = dataColors ? dataColors.split(",") : colors,
        yaxis: {
            show: !0,
            labels: {
                show: !0
            }
        },
        xaxis: {
            position: "bottom"
        },
        legend: {
            show: !0,
            position: "top",
            horizontalAlign: "left"
        },
        stroke: {
            width: [2, 3, 4, 2],
            dashArray: [0, 0, 5, 2],
            curve: "smooth"
        }
    };
(chart = new ApexCharts(document.querySelector("#slope-mluti-group"), options)).render();
