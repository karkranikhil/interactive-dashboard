import chartData from './data.js'
import createChart from './chart.js'

let vacanciesChartElement = document.querySelector('#mostvacancies')
let skillsChartElement = document.querySelector('#skills')
let applyProfessionElement = document.querySelector('#applyProfession')
let newJobElement= document.querySelector('#newjob')


let vacanciesChart = vacanciesChartElement.getContext('2d');
let skillsChart = skillsChartElement.getContext('2d');
let applyProfessionChart = applyProfessionElement.getContext('2d');
let newJobChart = newJobElement.getContext('2d');

createChart("horizontalBar", vacanciesChart, chartData.mostVacancies)
createChart("doughnut", skillsChart, chartData.skills)
createChart("polarArea", applyProfessionChart, chartData.professionDuties)
createChart("pie", newJobChart, chartData.newJobs)
