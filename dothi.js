Highcharts.chart('container', {

    title: {
        text: 'Biểu đồ IoT trong 10s theo thời gian thực'
    },
    
    // subtitle: {
    //     text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>'
    // },
    
    yAxis: {
        title: {
            text: 'Giá trị'
        }
    },
    
    xAxis: {
        accessibility: {
            rangeDescription: 'Thời gian'
        }
    },
    
    // legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'middle'
    // },
    
    // plotOptions: {
    //     series: {
    //         label: {
    //             connectorAllowed: false
    //         },
    //         pointStart: 0
    //     }
    // },
    
    series: [{
        name: 'Nhiệt độ',
        data: [50, 50,50,50,50,50,50,50,50,50]
    }, {
        name: 'Độ ẩm',
        data: [60, 60,60,60,60,60,60,60,60,60]
    }, {
        name: 'Ánh sáng',
        data: [70,70,70,70,70,70,70,70,70,70]
    // }, {
    //     name: 'Operations & Maintenance',
    //     data: [null, null, null, null, null, null, null,
    //         null, 11164, 11218, 10077]
    // }, {
    //     name: 'Other',
    //     data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
    //         17300, 13053, 11906, 10073]
    }],
    
    // responsive: {
    //     rules: [{
    //         condition: {
    //             maxWidth: 500
    //         },
    //         chartOptions: {
    //             legend: {
    //                 layout: 'horizontal',
    //                 align: 'center',
    //                 verticalAlign: 'bottom'
    //             }
    //         }
    //     }]
    // }
    
    });