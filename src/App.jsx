import './App.css'
import Highcharts from 'highcharts';
import HC_exporting from  "highcharts/modules/exporting";
import HighchartsReact from 'highcharts-react-official';


function App() {
  HC_exporting(Highcharts);
  const options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Browser market shares in January, 2018'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    credits: {
      enabled: true
    },
    legend: {
      enabled: true,
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    series: [
      {
        name: 'Browser share',
        colorByPoint: true,
        innerSize: '40%',
        categories: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Internet Explorer', 'Other'],
        data: [{name: 'Chrome', y: 61.41}, {name: 'Safari', y: 11.84}, {name: 'Firefox', y: 10.85}, {name: 'Edge', y: 4.67}, {name: 'Internet Explorer', y: 4.18}, {name: 'Other', y: 7.05}]
        // data: [{name: 'Chrome', y: 64.7}, {name: 'Edge', y: 5.43}, {name: 'FireFox', y: 3.35}, {name: 'Safari', y: 20.47}, {name: 'Opera', y: 3.31}, {name: 'Others', y: 2.74}]
      }
    ],
    colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce', '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a', '#ff9800', '#c9cbcd'],
    // lang: {
    //   noData: 'No data to display',
    //   printChart: 'Print chart',
    //   downloadPNG: 'Download PNG',
    //   downloadJPEG: 'Download JPEG',
    //   downloadPDF: 'Download PDF',
    //   downloadSVG: 'Download SVG',
    //   contextButtonTitle: 'Export',
    //   downloadData: 'Download data',
    //   viewData: 'View data',
    //   exitFullscreen: 'Exit fullscreen',
    //   enterFullscreen: 'Enter fullscreen',
    //   print: 'Print',
    //   download: 'Download',
    //   loading: 'Loading',
    //   drillUpText: '◁ Back'
    // },
    exporting: {
      enabled: true,
      // buttons: {
      //   contextButton: {
      //     text: 'Export',
      //     menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG']
      //   }
      // }
    }
  };
  return (
    <>
    <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}

export default App
