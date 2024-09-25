<template>
  <div>
    <Doughnut :data="computedChartData" :options="defaultChartOptions"></Doughnut>
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: 'ChartComponent',
  props: {
    chartData: {
      type: Object,
      default: () => ({
        labels: [],
        datasets: [
          {
            label: 'Placeholder Data',
            backgroundColor: ['#f87979', '#a3a3a3', '#42a5f5'],
            data: [0, 0, 0]
          }
        ]
      })
    }
  },
  data() {
    return {
      defaultChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    };
  },
  computed: {
    computedChartData() {
      // Use provided chartData or fallback to default
      return this.chartData && this.chartData.datasets.length > 0
        ? this.chartData
        : {
          labels: ['No Data'],
          datasets: [
            {
              label: 'No Data',
              backgroundColor: ['#e0e0e0'],
              data: [1] // Display a single section representing "No Data"
            }
          ]
        };
    }
  },
  components: {
    Doughnut
  }
};
</script>

<style scoped>
/* You can add styles specific to the chart component here */
</style>