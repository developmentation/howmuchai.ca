<template>
  <div class="glass p-8 rounded-2xl">
    <div class="space-y-8">
      <!-- Header with calculator title -->
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div class="text-sm text-gray-400">{{ $t('calculator.aiComputeProjector') }}</div>
      </div>
      
      <!-- Sliders -->
      <div class="space-y-6">
        <div>
          <div class="flex justify-between items-center mb-2">
            <label for="adoptionSpeed" class="block text-sm font-medium text-gray-300">
              {{ $t('calculator.adoptionSpeed') }}
            </label>
            <span class="text-sm font-medium text-teal-400">{{ sliderValues.adoptionSpeed.toFixed(1) }}x</span>
          </div>
          <input
            type="range"
            id="adoptionSpeed"
            name="adoptionSpeed"
            min="0.5"
            max="2.0"
            step="0.1"
            v-model.number="sliderValues.adoptionSpeed"
            class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            ref="adoptionSlider"
          />
          <div class="flex justify-between text-xs text-gray-500 mt-1">
            <span>{{ $t('calculator.slower') }}</span>
            <span>{{ $t('calculator.faster') }}</span>
          </div>
        </div>
        <div>
          <div class="flex justify-between items-center mb-2">
            <label for="computeGrowth" class="block text-sm font-medium text-gray-300">
              {{ $t('calculator.computeGrowth') }}
            </label>
            <span class="text-sm font-medium text-blue-400">{{ sliderValues.computeGrowth.toFixed(1) }}x</span>
          </div>
          <input
            type="range"
            id="computeGrowth"
            name="computeGrowth"
            min="0.2"
            max="1.0"
            step="0.1"
            v-model.number="sliderValues.computeGrowth"
            class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            ref="computeSlider"
          />
          <div class="flex justify-between text-xs text-gray-500 mt-1">
            <span>{{ $t('calculator.linear') }}</span>
            <span>{{ $t('calculator.exponential') }}</span>
          </div>
        </div>
        <div>
          <div class="flex justify-between items-center mb-2">
            <label for="investmentScale" class="block text-sm font-medium text-gray-300">
              {{ $t('calculator.investmentScale') }}
            </label>
            <span class="text-sm font-medium text-purple-400">{{ sliderValues.investmentScale.toFixed(1) }}x</span>
          </div>
          <input
            type="range"
            id="investmentScale"
            name="investmentScale"
            min="0.5"
            max="2.0"
            step="0.1"
            v-model.number="sliderValues.investmentScale"
            class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            ref="investmentSlider"
          />
          <div class="flex justify-between text-xs text-gray-500 mt-1">
            <span>{{ $t('calculator.conservative') }}</span>
            <span>{{ $t('calculator.aggressive') }}</span>
          </div>
        </div>
      </div>

      <!-- Large Cards for Cost and Energy -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="glass-dark p-6 rounded-xl border border-white/5 hover:border-teal-500/20 transition-all duration-300 text-center">
          <h3 class="text-sm font-medium text-gray-400 mb-1">{{ $t('calculator.totalInvestment') }}</h3>
          <p class="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
            {{ formatCurrency(metrics.cost) }}
          </p>
          <div class="mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
        </div>
        <div class="glass-dark p-6 rounded-xl border border-white/5 hover:border-blue-500/20 transition-all duration-300 text-center">
          <h3 class="text-sm font-medium text-gray-400 mb-1">{{ $t('calculator.energyConsumption') }}</h3>
          <p class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            {{ metrics.energy.toLocaleString() }} MW
          </p>
          <div class="mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
        </div>
      </div>

      <!-- Smaller Cards for Total Users, GPUs, Private Sector Inference, Post-Secondary Inference -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="glass-dark p-4 rounded-xl border border-white/5 hover:border-teal-500/10 text-center  ">
          <h3 class="text-xs font-medium text-gray-400 mb-1">{{ $t('calculator.totalUsers') }}</h3>
          <p class="text-xl font-bold text-white">{{ formatPercentage(metrics.adoptionPercentage) }}</p>
        </div>
        <div class="glass-dark p-4 rounded-xl border border-white/5 hover:border-blue-500/10 transition-all duration-300 text-center  ">
          <h3 class="text-xs font-medium text-gray-400 mb-1">{{ $t('calculator.gpusRequired') }}</h3>
          <p class="text-xl font-bold text-white">{{ Math.round(metrics.gpu).toLocaleString() }}</p>
        </div>
        <div class="glass-dark p-4 rounded-xl border border-white/5 hover:border-purple-500/10 transition-all duration-300 text-center ">
          <h3 class="text-xs font-medium text-gray-400 mb-1">{{ $t('calculator.privateSector') }}</h3>
          <p class="text-xl font-bold text-white">{{ metrics.private.toFixed(1) }}M/{{ $t('calculator.day') }}</p>
        </div>
        <div class="glass-dark p-4 rounded-xl border border-white/5 hover:border-pink-500/10 transition-all duration-300 text-center ">
          <h3 class="text-xs font-medium text-gray-400 mb-1">{{ $t('calculator.postSecondary') }}</h3>
          <p class="text-xl font-bold text-white">{{ metrics.postSecondary.toFixed(1) }}M/{{ $t('calculator.day') }}</p>
        </div>
      </div>

      <!-- Charts -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="glass-dark p-4 rounded-xl border border-white/5 h-[250px]">
          <h3 class="text-sm font-medium text-gray-400 text-center mb-4">{{ $t('calculator.aiAdoptionTrends') }}</h3>
          <canvas ref="adoptionChartRef" height="200"></canvas>
        </div>
        <div class="glass-dark p-4 rounded-xl border border-white/5 h-[250px]">
          <h3 class="text-sm font-medium text-gray-400 text-center mb-4">{{ $t('calculator.inferenceDemand') }}</h3>
          <canvas ref="inferenceChartRef" height="200"></canvas>
        </div>
        <div class="glass-dark p-4 rounded-xl border border-white/5 h-[250px]">
          <h3 class="text-sm font-medium text-gray-400 text-center mb-4">{{ $t('calculator.computeCostTrends') }}</h3>
          <canvas ref="costChartRef" height="200"></canvas>
        </div>
        <div class="glass-dark p-4 rounded-xl border border-white/5 h-[250px]">
          <h3 class="text-sm font-medium text-gray-400 text-center mb-4">{{ $t('calculator.computeCostTrends') }}</h3>
          <canvas ref="costChart2Ref" height="200"></canvas>
        </div>
      </div>

      <!-- Interpretations -->
      <div class="glass-dark p-6 rounded-xl border border-white/5">
        <h3 class="text-sm font-medium text-gray-400 mb-3">{{ $t('calculator.analysisInsights') }}</h3>
        <p class="text-sm text-gray-300 leading-relaxed">{{ interpretation }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onBeforeUnmount, watch, computed } from 'vue';
import { gsap } from 'gsap';
import { useI18n } from 'vue-i18n';
import Chart from 'chart.js/auto';
import {
  calculateAllMetrics,
  formatCurrency,
  formatPercentage,
  generateInterpretation
} from '../composables/calculations';

export default {
  name: 'Calculator',
  setup() {
    const { t } = useI18n();
    
    // Chart references
    const adoptionChartRef = ref(null);
    const inferenceChartRef = ref(null);
    const costChartRef = ref(null);
    const costChart2Ref = ref(null);
    
    // Slider references for animation
    const adoptionSlider = ref(null);
    const computeSlider = ref(null);
    const investmentSlider = ref(null);
    
    // Chart instances
    let adoptionChart = null;
    let inferenceChart = null;
    let costChart = null;
    let costChart2 = null;
    
    // Animation timeline reference
    let timeline = null;
    
    // Animation cycle duration (in seconds)
    const cycleDuration = 20; // 20 seconds cycle (between 10-30 seconds as requested)

    // State for slider values
    const sliderValues = reactive({
      adoptionSpeed: 1.5,
      computeGrowth: 0.8,
      investmentScale: 1.2
    });

    // State for metrics
    const metrics = reactive({
      cost: 0,
      energy: 0,
      gpu: 0,
      adoptionPercentage: 0,
      private: 0,
      postSecondary: 0
    });

    // Years for x-axis
    const years = ['2025', '2026', '2027', '2028', '2029', '2030'];

    // State for chart data
    const chartData = reactive({
      adoptionData: [25, 30, 35, 40, 45, 50],
      privateData: [5.0, 10.0, 15.0, 20.0, 25.0, 30.0],
      postSecondaryData: [3.0, 6.0, 9.0, 12.0, 15.0, 18.0],
      costData: [30000, 60000, 120000, 200000, 300000, 400000],
      computeData: [1000, 5000, 20000, 50000, 100000, 150000],
    });

    // State for interpretation text
    const interpretation = ref('');

    // Chart configuration
    const chartConfig = {
      adoption: {
        type: 'line',
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              max:100,
              beginAtZero: true,
              ticks: { color: '#d1d5db' },
              grid: { color: 'rgba(75, 85, 99, 0.1)' }
            },
            x: {
              ticks: { color: '#d1d5db' },
              grid: { color: 'rgba(75, 85, 99, 0.1)' }
            }
          },
          plugins: {
            legend: {
              labels: { color: '#d1d5db', font: { size: 11 } }
            },
            tooltip: {
              backgroundColor: 'rgba(10, 15, 30, 0.8)',
              titleFont: { size: 13 },
              bodyFont: { size: 12 },
              padding: 10,
              borderColor: 'rgba(45, 212, 191, 0.3)',
              borderWidth: 1
            }
          },
          animation: false // We'll handle animations manually
        },
        data: {
          labels: years,
          datasets: [{
            label: t('calculator.totalUsersPercent'),
            data: [],
            borderColor: '#2dd4bf',
            backgroundColor: 'rgba(45, 212, 191, 0.1)',
            tension: 0.4,
            fill: true,
            borderWidth: 2
          }]
        }
      },
      inference: {
        type: 'line',
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              max:250,
              beginAtZero: true,
              ticks: { color: '#d1d5db' },
              grid: { color: 'rgba(75, 85, 99, 0.1)' }
            },
            x: {
              ticks: { color: '#d1d5db' },
              grid: { color: 'rgba(75, 85, 99, 0.1)' }
            }
          },
          plugins: {
            legend: {
              labels: { color: '#d1d5db', font: { size: 11 } }
            },
            tooltip: {
              backgroundColor: 'rgba(10, 15, 30, 0.8)',
              titleFont: { size: 13 },
              bodyFont: { size: 12 },
              padding: 10,
              borderColor: 'rgba(45, 212, 191, 0.3)',
              borderWidth: 1
            }
          },
          animation: false // We'll handle animations manually
        },
        data: {
          labels: years,
          datasets: [
            {
              label: t('calculator.privateSectorDay'),
              data: [],
              borderColor: '#f59e0b',
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              tension: 0.4,
              fill: true,
              borderWidth: 2
            },
            {
              label: t('calculator.postSecondaryDay'),
              data: [],
              borderColor: '#ec4899',
              backgroundColor: 'rgba(236, 72, 153, 0.1)',
              tension: 0.4,
              fill: true,
              borderWidth: 2
            }
          ]
        }
      },
      cost: {
        type: 'line',
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              max:500000,
              beginAtZero: true,
              ticks: { color: '#d1d5db' },
              grid: { color: 'rgba(75, 85, 99, 0.1)' }
            },
            x: {
              ticks: { color: '#d1d5db' },
              grid: { color: 'rgba(75, 85, 99, 0.1)' }
            }
          },
          plugins: {
            legend: {
              labels: { color: '#d1d5db', font: { size: 11 } }
            },
            tooltip: {
              backgroundColor: 'rgba(10, 15, 30, 0.8)',
              titleFont: { size: 13 },
              bodyFont: { size: 12 },
              padding: 10,
              borderColor: 'rgba(45, 212, 191, 0.3)',
              borderWidth: 1
            }
          },
          animation: false // We'll handle animations manually
        },
        data: {
          labels: years,
          datasets: [
 
            {
              label: t('calculator.costMillions'),
              data: [],
              borderColor: '#a855f7',
              backgroundColor: 'rgba(168, 85, 247, 0.1)',
              tension: 0.4,
              fill: true,
              borderWidth: 2
            }
          ]
        }
      },

      compute: {
        type: 'line',
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              max:16000,
              beginAtZero: true,
              ticks: { color: '#d1d5db' },
              grid: { color: 'rgba(75, 85, 99, 0.1)' }
            },
            x: {
              ticks: { color: '#d1d5db' },
              grid: { color: 'rgba(75, 85, 99, 0.1)' }
            }
          },
          plugins: {
            legend: {
              labels: { color: '#d1d5db', font: { size: 11 } }
            },
            tooltip: {
              backgroundColor: 'rgba(10, 15, 30, 0.8)',
              titleFont: { size: 13 },
              bodyFont: { size: 12 },
              padding: 10,
              borderColor: 'rgba(45, 212, 191, 0.3)',
              borderWidth: 1
            }
          },
          animation: false // We'll handle animations manually
        },
        data: {
          labels: years,
          datasets: [
            {
              label: t('calculator.computeMW'),
              data: [],
              borderColor: '#3b82f6',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              tension: 0.4,
              fill: true,
              borderWidth: 2
            },
             
          ]
        }
      }


    };

    // Initialize charts
    const initCharts = () => {
      // Destroy existing charts if they exist
      if (adoptionChart) adoptionChart.destroy();
      if (inferenceChart) inferenceChart.destroy();
      if (costChart) costChart.destroy();
      if (costChart2) costChart2.destroy();
      
      // Create new charts
      if (adoptionChartRef.value) {
        const config = { ...chartConfig.adoption };
        config.data.datasets[0].label = t('calculator.totalUsersPercent');
        adoptionChart = new Chart(
          adoptionChartRef.value.getContext('2d'),
          config
        );
      }
      
      if (inferenceChartRef.value) {
        const config = { ...chartConfig.inference };
        config.data.datasets[0].label = t('calculator.privateSectorDay');
        config.data.datasets[1].label = t('calculator.postSecondaryDay');
        inferenceChart = new Chart(
          inferenceChartRef.value.getContext('2d'),
          config
        );
      }
      
      if (costChartRef.value) {
        const config = { ...chartConfig.cost };
        // config.data.datasets[0].label = t('calculator.computeMW');
        config.data.datasets[0].label = t('calculator.costMillions');
        costChart = new Chart(
          costChartRef.value.getContext('2d'),
          config
        );
      }

      if (costChart2Ref.value) {
        const config = { ...chartConfig.compute };
        config.data.datasets[0].label = t('calculator.computeMW');
        // config.data.datasets[1].label = t('calculator.costMillions');
        costChart2 = new Chart(
          costChart2Ref.value.getContext('2d'),
          config
        );
      }

    };

    // Update charts with new data
    const updateCharts = (data) => {
      if (!adoptionChart || !inferenceChart || !costChart || !costChart2) return;
      
      // Update adoption chart
      adoptionChart.data.datasets[0].data = [...data.adoptionData];
      adoptionChart.update('none');
      
      // Update inference chart
      inferenceChart.data.datasets[0].data = [...data.privateData];
      inferenceChart.data.datasets[1].data = [...data.postSecondaryData];
      inferenceChart.update('none');
      
      // Update cost chart
      costChart.data.datasets[0].data = [...data.costData];
      // costChart.data.datasets[1].data = [...data.costData.map(val => val / 1000)]; // Convert to billions for better scale
      costChart.update('none');

      // costChart.data.datasets[0].data = [...data.computeData];
      costChart2.data.datasets[0].data = [...data.computeData.map(val => val )]; // Convert to billions for better scale
      costChart2.update('none');

    };


    
    // Animate sliders
    const animateSliders = (progress) => {
      // Define slider animation ranges
      const adoptionRange = { min: 1.0, max: 2.0 };
      const computeRange = { min: 0.5, max: 1.0 };
      const investmentRange = { min: 0.8, max: 1.5 };
      
      // Calculate sine wave positions for each slider (offset phases for variety)
      const adoptionPhase = 0;
      const computePhase = Math.PI / 3;
      const investmentPhase = Math.PI / 1.5;
      
      // Convert progress to radians with phase offset
      const adoptionRadians = progress * 2 * Math.PI + adoptionPhase;
      const computeRadians = progress * 2 * Math.PI + computePhase;
      const investmentRadians = progress * 2 * Math.PI + investmentPhase;
      
      // Calculate sine values (-1 to 1)
      const adoptionSine = Math.sin(adoptionRadians);
      const computeSine = Math.sin(computeRadians);
      const investmentSine = Math.sin(investmentRadians);
      
      // Convert sine values to slider range
      const adoptionValue = adoptionRange.min + ((adoptionSine + 1) / 2) * (adoptionRange.max - adoptionRange.min);
      const computeValue = computeRange.min + ((computeSine + 1) / 2) * (computeRange.max - computeRange.min);
      const investmentValue = investmentRange.min + ((investmentSine + 1) / 2) * (investmentRange.max - investmentRange.min);
      
      // Update slider values
      sliderValues.adoptionSpeed = parseFloat(adoptionValue.toFixed(1));
      sliderValues.computeGrowth = parseFloat(computeValue.toFixed(1));
      sliderValues.investmentScale = parseFloat(investmentValue.toFixed(1));
    };

    // Update metrics with new data
    const updateMetrics = (newMetrics) => {
      metrics.cost = newMetrics.cost;
      metrics.energy = newMetrics.energy;
      metrics.gpu = newMetrics.gpu;
      metrics.adoptionPercentage = newMetrics.adoptionPercentage;
      metrics.private = newMetrics.private;
      metrics.postSecondary = newMetrics.postSecondary;
      
      // Update interpretation text
      interpretation.value = generateInterpretation(metrics, t);
    };

    // Update chart data with new data
    const updateChartData = (newChartData) => {
      chartData.adoptionData = [...newChartData.adoptionData];
      chartData.privateData = [...newChartData.privateData];
      chartData.postSecondaryData = [...newChartData.postSecondaryData];
      chartData.computeData = [...newChartData.computeData];
      chartData.costData = [...newChartData.costData];
    };

    // Start animation cycle
    const startAnimationCycle = () => {
      // Clear any existing timeline
      if (timeline) timeline.kill();
      
      // Create new timeline
      timeline = gsap.timeline({
        repeat: -1, // Infinite repeat
        onUpdate: () => {
          // Get current progress (0-1)
          const progress = timeline.progress();
          
          // Calculate all metrics based on current progress and slider values
          const result = calculateAllMetrics(progress, sliderValues);
          
           // Animate sliders
          animateSliders(progress);

          // Update metrics and chart data
          updateMetrics(result.metrics);
          updateChartData(result.chartData);
          updateCharts(result.chartData);
        }
      });
      
      // Add animation to timeline
      timeline.to({}, cycleDuration, { ease: "none" });
      
      // Start the timeline
      timeline.play();
    };

    // Initialize on mount
    onMounted(() => {
      // Initialize charts
      initCharts();
      
      // Start animation cycle
      startAnimationCycle();
    });

    // Clean up on unmount
    onBeforeUnmount(() => {
      // Kill timeline
      if (timeline) timeline.kill();
      
      // Destroy charts
      if (adoptionChart) adoptionChart.destroy();
      if (inferenceChart) inferenceChart.destroy();
      if (costChart) costChart.destroy();
      if (costChart2) costChart2.destroy();
    });

    // Watch for slider changes
    // watch(sliderValues, () => {
    //   // Restart animation cycle when sliders change
    //   startAnimationCycle();
    // }, { deep: true });

    return {
      adoptionChartRef,
      inferenceChartRef,
      costChartRef,
      costChart2Ref,
      adoptionSlider,
      computeSlider,
      investmentSlider,
      sliderValues,
      metrics,
      chartData,
      interpretation,
      formatCurrency,
      formatPercentage
    };
  }
};
</script>

<style scoped>
.glass {
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.glass-dark {
  background: rgba(10, 15, 25, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Slider styling */
input[type="range"] {
  -webkit-appearance: none;
  height: 6px;
  border-radius: 5px;
  background: #374151;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
}

input[id="adoptionSpeed"]::-webkit-slider-thumb {
  background: #2dd4bf;
}

input[id="computeGrowth"]::-webkit-slider-thumb {
  background: #3b82f6;
}

input[id="investmentScale"]::-webkit-slider-thumb {
  background: #a855f7;
}

/* Card animation */
.card-animate-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
