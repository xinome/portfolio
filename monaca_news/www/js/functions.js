// This is a JavaScript file


/***********************
 * チャート描画
 ***********************/

// 描画: ドーナツグラフ
function doughnutChart() {
  var config = {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [24, 20, 14, 12, 7, 6, 5, 3, 2, 7],
        backgroundColor: ["red", "orange", "yellow", "green", "aqua", "salmon", "blue", "#FDB45C", "#949FB1", "#4D5360"]
      }],
      labels: ["趣味", "遊び", "教育", "日用品", "美容", "ファッション", "光熱", "旅行", "飲食", "その他"]
    },
    options: {
      responsive: true,
      legend: {
        position: "right"
      }
    }
  };
  var ctx = document.getElementById("pie-chart-area").getContext("2d");
  window.myPie = new Chart(ctx, config);
}

// 描画: 棒グラフ
function barChart() {
  var config = {
    type: 'bar',
    data: {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
      datasets: [{
        label: 'データセット1',
        backgroundColor: "rgba(220,0,220,0.5)",
        data: [50, 30, 60, 80, 20, 40]
      }]
    },
    options: {
      elements: {
        rectangle: {
          borderWidth: 4,
          borderColor: 'rgb(100, 0, 100)',
          borderSkipped: 'bottom'
        }
      },
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js 棒グラフ'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  };
  var ctx = document.getElementById("bar-chart-area").getContext("2d");
  window.myBar = new Chart(ctx, config);  
}

