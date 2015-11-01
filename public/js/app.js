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
    Morris.Donut({
        element: 'm-chart-circle-1',
        labelColor: "#fff",
        colors: [
            "#E53935",
            "#757575",
            "#546E7A"
        ],
        data: [
            { label: "1", value: 12 },
            { label: "2", value: 30 },
            { label: "3", value: 20 }
        ]
    });
    Morris.Donut({
        element: 'm-chart-circle-2',
        labelColor: "#fff",
        colors: [
            "#FB8C00",
            "#7CB342",
            "#039BE5"
        ],
        data: [
            { label: "1", value: 12 },
            { label: "2", value: 30 },
            { label: "3", value: 20 }
        ]
    });
    Morris.Donut({
        element: 'm-chart-circle-3',
        labelColor: "#fff",
        colors: [
            "#5E35B1",
            "#D81B60",
            "#1E88E5"
        ],
        data: [
            { label: "1", value: 50 },
            { label: "2", value: 30 },
            { label: "3", value: 20 }
        ]
    });
});
