var colors = ["#777edd", "#0acf97", "#fd7e14", "#fa5c7c"]
    , dataColors = $("#slope-mluti-group").data("colors")
    , options = {
        series: [{
            name: "Funnel Series",
            data: [1380, 1100, 990, 880, 740, 548, 330, 200]
        }],
        chart: {
            type: "bar",
            height: 350,
            dropShadow: {
                enabled: !0
            },
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 0,
                horizontal: !0,
                barHeight: "80%",
                isFunnel: !0
            }
        },
        colors: colors = dataColors ? dataColors.split(",") : colors,
        dataLabels: {
            enabled: !0,
            formatter: function (e, a) {
                return a.w.globals.labels[a.dataPointIndex] + ":  " + e
            },
            dropShadow: {
                enabled: !0
            }
        },
        title: {
            text: "Recruitment Funnel",
            align: "middle"
        },
        xaxis: {
            categories: ["Sourced", "Screened", "Assessed", "HR Interview", "Technical", "Verify", "Offered", "Hired"]
        },
        legend: {
            show: !1
        }
    }
    , chart = new ApexCharts(document.querySelector("#funnel-chart"), options)
    , colors = (chart.render(),
        ["#777edd", "#0acf97", "#fd7e14", "#fa5c7c"])
    , options = ((dataColors = $("#pyramid-chart").data("colors")) && (colors = dataColors.split(",")),
    {
        series: [{
            name: "",
            data: [200, 330, 548, 740, 880, 990, 1100, 1380]
        }],
        chart: {
            type: "bar",
            height: 350,
            dropShadow: {
                enabled: !0
            },
            toolbar: {
                show: !1
            }
        },
        colors: ["#F44F5E", "#E55A89", "#D863B1", "#CA6CD8", "#B57BED", "#8D95EB", "#62ACEA", "#4BC3E6"],
        plotOptions: {
            bar: {
                borderRadius: 0,
                horizontal: !0,
                distributed: !0,
                barHeight: "80%",
                isFunnel: !0
            }
        },
        dataLabels: {
            enabled: !0,
            formatter: function (e, a) {
                return a.w.globals.labels[a.dataPointIndex]
            },
            dropShadow: {
                enabled: !0
            }
        },
        title: {
            text: "Pyramid Chart",
            align: "middle"
        },
        xaxis: {
            categories: ["Sweets", "Processed Foods", "Healthy Fats", "Meat", "Beans & Legumes", "Dairy", "Fruits & Vegetables", "Grains"]
        },
        legend: {
            show: !1
        }
    });
(chart = new ApexCharts(document.querySelector("#pyramid-chart"), options)).render();
