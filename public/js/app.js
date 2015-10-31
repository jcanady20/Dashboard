$(function () {
    Morris.Area({
        element: 'm-chart-line-1',
        data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75, b: 65 },
            { y: '2008', a: 50, b: 40 },
            { y: '2009', a: 75, b: 65 },
            { y: '2010', a: 50, b: 40 },
            { y: '2011', a: 75, b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
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
            "#E53935",
            "#FFB300",
            "#43A047"
        ],
        data: [
            { label: "Failed Calls", value: 12 },
            { label: "Pending", value: 30 },
            { label: "Completed", value: 20 }
        ]
    });
    Morris.Donut({
        element: 'm-chart-circle-3',
        labelColor: "#fff",
        colors: [
            "#43A047",
            "#E53935",
            "#FFB300"
        ],
        data: [
            { label: "Completed", value: 40 },
            { label: "Failed Calls", value: 50 },
            { label: "Pending", value: 10 }
        ]
    });
});
