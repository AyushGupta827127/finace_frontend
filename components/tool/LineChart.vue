<template>
  <div class="chart-container mt-6">
    <div v-if="isNoData" class="no-data">
      <!-- Replace with your SVG image or embed SVG code here -->
      <img src="" alt="No Data" class="opacity-50">
      <p class="font-semibold mt-4">No Data Available</p>
    </div>
    <Line v-else :data="computedChartData" :options="defaultChartOptions" />
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Filler,
  CategoryScale,
  LinearScale
} from "chart.js";

ChartJS.register(LineElement, PointElement, Tooltip, Legend, Filler, CategoryScale, LinearScale);

export default {
  name: "LineChartComponent",
  props: {
    chartData: {
      type: Object,
      default: () => ({
        labels: [],
        datasets: [
          {
            label: "Placeholder Data",
            borderColor: "#42a5f5",
            backgroundColor: "rgba(66, 165, 245, 0.2)",
            data: [],
          },
        ],
      }),
    },
    chartHeight: {
      type: String,
      default: "270px", // Default height, can be overridden by parent component
    },
  },
  data() {
    return {
      defaultChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top",
            labels: {
              padding: 20,
              boxWidth: 20,
              font: {
                size: 14,
                family: "Arial",
                weight: "bold",
              },
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || "";
                if (context.parsed.y !== null) {
                  label += `: ${context.parsed.y.toFixed(2)}`;
                }
                return label;
              },
            },
          },
        },
        layout: {
          padding: {
            top: 20,    // Adjust this value as needed
            right: 20,  // Adjust this value as needed
            bottom: 20, // Adjust this value as needed
            left: 20,   // Adjust this value as needed
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Time",
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Amount",
            },
          },
        },
      },
    };
  },
  computed: {
    computedChartData() {
      return this.chartData && this.chartData.datasets.length > 0
        ? this.chartData
        : {
            labels: ["No Data"],
            datasets: [
              {
                label: "No Data",
                borderColor: "#e0e0e0",
                backgroundColor: "rgba(224, 224, 224, 0.2)",
                data: [0],
              },
            ],
          };
    },
    isNoData() {
      // Check if chartData is empty and return true if no data
      return (
        !this.chartData ||
        !this.chartData.datasets ||
        this.chartData.datasets.every((ds) => ds.data.length === 0)
      );
    },
  },
  components: {
    Line,
  },
};
</script>

<style scoped>
.chart-container {
  height: 280px; /* Adjust this value as needed */
  position: relative;
}

.no-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.no-data svg {
  margin-bottom: 10px;
}

.no-data p {
  margin: 0;
  color: #666;
}
</style>
