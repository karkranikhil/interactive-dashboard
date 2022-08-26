export default function createChart(type = "doughnut", element, chartData){
  // const backgroundColor1 = ["#0d2954","#363d6f","#5b528a","#8268a4","#a97ebd","#d295d5","#fcadec","#fa9ad5","#f786bd","#f173a3","#ea6089","#e04e6d","#d43d51"]
  const backgroundColor = ["#5596f7","#4f46bb","#f672a7","#ff7f41","#ffc061","#11d1b7","#d2c101","#fa9ad5","#73dce9","#0d2954","#5b528a","#8268a4","#d43d51"]
  const chartType = type === "horizontalBar" ? 'bar':type
  const normalOptions = {
      responsive: true,
      plugins: {
      legend: {
          position: 'top',
          },
      title: {
          display: false
          }
      },
  }
  const barOptions = {
      indexAxis: 'y',
      barThickness:20,
      plugins: {
      legend: {
          display: false
      }
      },
      maintainAspectRatio: false,
  
      responsive: true,
  }
  const options = type === "horizontalBar" ?barOptions:normalOptions
  new Chart(element, {
     type: chartType,
     data: {
         labels: chartData.label,
         datasets: [{
             data: chartData.data,
             backgroundColor: backgroundColor
         }]
     },
     options: options,
     tooltips: {// todo: reduce size of the tooltips
         enabled: true
     }
 });
 }