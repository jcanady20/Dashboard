$(function () {
    Morris.Line({
        element: 'm-chart-line-1',
        data: [
            { y: '2006', a: 20 },
            { y: '2007', a: 25 },
            { y: '2008', a: 30 },
            { y: '2009', a: 45 },
            { y: '2010', a: 50 },
            { y: '2011', a: 65 },
            { y: '2012', a: 75 },
            { y: '2013', a: 45 },
            { y: '2014', a: 50 }
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A'],
        resize: true
    });
    var m_colors = ["#E53935","#FFB300","#43A047"];
    Morris.Donut({
        element: 'm-chart-circle-1',
        labelColor: "#fff",
        colors: m_colors,
        data: [
            { label: "Failed", value: 12 },
            { label: "Pending", value: 30 },
            { label: "Completed", value: 20 }
        ]
    });
    Morris.Donut({
        element: 'm-chart-circle-2',
        labelColor: "#fff",
        colors: m_colors,
        data: [
            { label: "Failed", value: 12 },
            { label: "Pending", value: 30 },
            { label: "Completed", value: 20 }
        ]
    });
    Morris.Donut({
        element: 'm-chart-circle-3',
        labelColor: "#fff",
        colors: m_colors,
        data: [
            { label: "Completed", value: 40 },
            { label: "Failed", value: 50 },
            { label: "Pending", value: 10 }
        ]
    });
});
