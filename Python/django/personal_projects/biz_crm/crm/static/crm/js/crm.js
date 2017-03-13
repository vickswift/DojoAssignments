console.log("Hello World!!");


// Load the Visualization API
google.charts.load('44', { 'packages': ['charteditor'] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

var chart;

function drawChart() {

      // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Year');

        data.addColumn('number', 'Playstation Sales');
        data.addColumn('number', 'Playstation Expenses');

        data.addColumn('number', 'Xbox Sales');
        data.addColumn('number', 'Xbox Expenses');

        data.addColumn('number', 'Accessory Sales');
        data.addColumn('number', 'Accessory Expenses');

        data.addColumn('number', 'Total Sales');
        data.addColumn('number', 'Total Expenses');

        data.addRows([
          ['5/1/2016', 120145, 50500,  28750, 17500,  12555, 5002,  161450, 50500],
          ['4/1/2016', 115158, 60213,  25695, 12234,  11871, 4000, 152724, 60213],
          ['3/1/2016', 95470, 45000,  22588, 10001,  11002, 4532, 129060, 45000],
          ['2/1/2016', 92558, 55000,  20774, 12123,  10300, 3211,  123632, 55000],
          ['12/1/2015', 127145, 40500,  30750, 20500,  12555, 4002,  171450, 60500],
          ['11/1/2015', 110158, 50213,  20695, 11234,  11571, 3000, 142724, 59213],
          ['10/1/2015', 92470, 44000,  20588, 15001,  12002, 3532, 127060, 43000],
          ['09/1/20015', 90558, 53000,  21774, 11123,  10300, 3011,  120632, 41000],
        ]);

        // var data = new google.visualization.DataTable();
        // data.addColumn('string', 'Year');
        // data.addColumn('number', 'Playstation Sales');
        // data.addColumn('number', 'Xbox Sales');
        // data.addColumn('number', 'Accessory Sales');
        // data.addColumn('number', 'Total Sales');
        //
        // data.addRows([
        //   ['5/1/2004', 120145, 28750, 12555, 161450],
        //   ['4/1/2004', 115158, 25695, 11871, 152724],
        //   ['3/1/2004', 95470, 22588,  11002, 129060],
        //   ['2/1/2004', 92558, 20774, 10300, 123632],
        // ]);
    var areaChartOptions = {
        title: 'Monthly Expenses',
        height: 300,
        isStacked: true,
        legend: { position: 'top', maxLines: 3 },
        vAxis: {
            minValue: 0,
            format: 'currency',
        },
        chartArea: { height: 250, width: 700},
    };

    chart = new google.visualization.ChartWrapper({
        chartType: 'AreaChart',
        containerId: 'divExpensesOverTimeChart',
        options: areaChartOptions,
        dataTable: data
    });

    chart.draw();

}

function showChartEditor() {

    // create the configuration editor object
    var chartEditor = new google.visualization.ChartEditor();

    // tell it how to handle the OK button in the configuration dialog
    google.visualization.events.addListener(chartEditor, 'ok',
        function () {

            var theChart = chartEditor.getChartWrapper();

            // when we switch the style, we need to reset our width
            theChart.setOption('width', 1000);

            // and then draw it
            theChart.draw();

        });

    // and now show the configuration dialog, associating it with the chart object
    chartEditor.openDialog(chart);

}
