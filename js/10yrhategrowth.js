(function(H) {
  function deferRender(proceed) {
      var series = this,
          $renderTo = $(this.chart.container.parentNode);

      // It is not appeared, render it
      if ($renderTo.is(':appeared') || !series.options.animation) {
          proceed.call(series);
      } else { // Hasn't appeared, halt rendering until appear
          $renderTo.appear(); // Intialize appear plugin
          $renderTo.on('appear', function () {
              proceed.call(series);
          });
      }
  };
  H.wrap(H.Series.prototype, 'render', deferRender);
}(Highcharts));

Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Roboto Mono'
        }
    },
    lang: {
        thousandsSep: ','
    }
});

Highcharts.chart('container', {

    chart: {
        backgroundColor: '#EFEEE8',
        type: 'line'
    },

    credits: {
      enabled: false
    },

    title: {
      text: null
    },
  
    subtitle: {
      text: null
    },
    legend: {
      enabled: false
    },
    yAxis: {
      title: {
        text: 'Number of Hate Crimes Reported'
      }
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2006
      }
    },

    tooltip: {
      formatter: function () {
          return '<span class="report-year">' + this.x + '</span><br>Hate crimes reported: <b>' + this.y + '</b>';
      }
    },

    series: [{
      name:"Hate crimes reported",
      data: [74, 48, 60, 947, 1198, 938, 998, 975, 1021, 1043, 1300],
      color: '#A10D03'
    }],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        }
      }]
    }
  
  });
