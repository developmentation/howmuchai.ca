// calculations.js - Central module for all calculator formulas and logic

/**
 * Generate sine wave values for animation
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {number} phase - Phase offset in radians
 * @returns {Function} - Function that takes progress (0-1) and returns a value
 */
export const generateSineWave = (min, max, phase = 0) => {
  const amplitude = (max - min) / 2;
  const offset = min + amplitude;
  return (progress) => {
    // progress is 0 to 1, representing position in animation cycle
    // Convert to radians (0 to 2π) and add phase offset
    const radians = (progress * 2 * Math.PI) + phase;
    return offset + amplitude * Math.sin(radians);
  };
};

/**
 * Calculate adoption percentage (25% in 2025 to 50-90% by 2030)
 * @param {number} progress - Animation progress (0-1)
 * @param {number} adoptionSpeed - User-controlled adoption speed multiplier
 * @returns {Object} - Adoption data for all years
 */
export const calculateAdoption = (progress, adoptionSpeed) => {
  // Base adoption starts at 25% in 2025
  const baseAdoption = 25;
  
  // Generate sine wave for adoption variation (50-90% in 2030)
  const minAdoption = 50;
  const maxAdoption = 90;
  const adoptionWave = generateSineWave(minAdoption, maxAdoption, 0);
  
  // Get current target adoption for 2030 based on progress
  const targetAdoption = adoptionWave(progress);
  
  // Calculate adoption for all years (2025-2030)
  return [2025, 2026, 2027, 2028, 2029, 2030].map((year, index) => {
    const yearProgress = index / 5; // 0 for 2025, 1 for 2030
    
    // Linear interpolation from baseAdoption to targetAdoption
    const adoption = baseAdoption + (targetAdoption - baseAdoption) * yearProgress * adoptionSpeed;
    
    // Ensure adoption is between 25% and 100%
    return Math.min(100, Math.max(25, Math.round(adoption)));
  });
};

/**
 * Calculate private sector inference demand (millions per day)
 * @param {number} progress - Animation progress (0-1)
 * @param {Array} adoptionData - Adoption percentages for all years
 * @param {number} investmentScale - User-controlled investment scale multiplier
 * @returns {Array} - Private sector inference data for all years
 */
export const calculatePrivateSector = (progress, adoptionData, investmentScale) => {
  // Generate sine wave for variation
  const privateWave = generateSineWave(0.85, 1.15, Math.PI / 4);
  const waveFactor = privateWave(progress);
  
  // Population in millions
  const population = 40;
  
  return adoptionData.map((adoption, i) => {
    // Calculate private sector users (60% of AI users)
    const privateUsers = (adoption / 100) * population * 0.6;
    
    // Calculate inferences per user per day, scaled by investment
    const inferencesPerUser = 5 * (0.5 + investmentScale * 0.5);
    
    // Apply wave variation with increasing effect over time
    const yearFactor = 1 + (i / 5) * 0.5; // 1.0 to 1.5
    const value = privateUsers * inferencesPerUser * waveFactor * yearFactor;
    
    return parseFloat(value.toFixed(1));
  });
};

/**
 * Calculate post-secondary inference demand (millions per day)
 * @param {number} progress - Animation progress (0-1)
 * @param {Array} adoptionData - Adoption percentages for all years
 * @param {number} investmentScale - User-controlled investment scale multiplier
 * @returns {Array} - Post-secondary inference data for all years
 */
export const calculatePostSecondary = (progress, adoptionData, investmentScale) => {
  // Generate sine wave for variation
  const postSecWave = generateSineWave(0.9, 1.1, Math.PI / 2);
  const waveFactor = postSecWave(progress);
  
  // Population in millions
  const population = 40;
  
  return adoptionData.map((adoption, i) => {
    // Calculate post-secondary users (20% of AI users)
    const postSecUsers = (adoption / 100) * population * 0.2;
    
    // Calculate inferences per user per day, scaled by investment
    const inferencesPerUser = 7.5 * (0.5 + investmentScale * 0.5);
    
    // Apply wave variation with increasing effect over time
    const yearFactor = 1 + (i / 5) * 0.4; // 1.0 to 1.4
    const value = postSecUsers * inferencesPerUser * waveFactor * yearFactor;
    
    return parseFloat(value.toFixed(1));
  });
};

/**
 * Calculate compute demand (in MW) - range from 300MW to 16,000MW
 * @param {number} progress - Animation progress (0-1)
 * @param {Array} adoptionData - Adoption percentages for all years
 * @param {number} computeGrowth - User-controlled compute growth multiplier
 * @param {number} investmentScale - User-controlled investment scale multiplier
 * @returns {Array} - Compute demand data for all years
 */
export const calculateCompute = (progress, adoptionData, computeGrowth, investmentScale) => {
  // Generate sine wave for variation
  const computeWave = generateSineWave(0.7, 1.3, Math.PI / 3);
  const waveFactor = computeWave(progress);
  
  // Base compute values
  const minCompute = 300; // 300MW minimum
  const maxCompute = 16000; // 16,000MW maximum
  
  // Generate a sine wave that affects the overall scale (30-80% of max)
  const scaleWave = generateSineWave(0.3, 0.8, Math.PI / 6);
  const scaleFactor = scaleWave(progress);
  
  return [2025, 2026, 2027, 2028, 2029, 2030].map((year, i) => {
    const yearProgress = i / 5; // 0 for 2025, 1 for 2030
    
    // Exponential growth based on computeGrowth parameter
    const growthFactor = Math.pow(1 + computeGrowth, yearProgress * 3) - 1;
    const normalizedGrowth = growthFactor / (Math.pow(1 + computeGrowth, 3) - 1);
    
    // Scale by adoption and investment
    const adoptionFactor = adoptionData[i] / 100; // Convert percentage to factor
    const investmentFactor = 0.5 + (investmentScale * 0.5);
    
    // Calculate base compute value with scale factor to ensure it doesn't always hit max
    const baseValue = minCompute + (maxCompute - minCompute) * normalizedGrowth * adoptionFactor * investmentFactor * scaleFactor;
    
    // Apply wave variation
    const value = baseValue * waveFactor;
    
    // Ensure compute is within specified range
    return Math.min(maxCompute, Math.max(minCompute, Math.round(value)));
  });
};

/**
 * Calculate cost (in millions) - range from $10B to $500B
 * Using the $30M = 1MW rule as a base, but with variation
 * @param {number} progress - Animation progress (0-1)
 * @param {Array} computeData - Compute demand data for all years
 * @param {number} investmentScale - User-controlled investment scale multiplier
 * @returns {Array} - Cost data for all years
 */
export const calculateCost = (progress, computeData, investmentScale) => {
  const minCost = 10000; // $10B minimum
  const maxCost = 500000; // $500B maximum
  
  // Generate a sine wave that affects the cost multiplier (25-35M per MW)
  const costMultiplierWave = generateSineWave(25, 35, Math.PI / 5);
  
  // Generate a sine wave that affects the overall scale (30-90% of max)
  const scaleWave = generateSineWave(0.3, 0.9, Math.PI / 4);
  const scaleFactor = scaleWave(progress);
  
  return computeData.map((mw, i) => {
    // Get a varying cost multiplier
    const costMultiplier = costMultiplierWave(progress + (i * 0.05));
    
    // Calculate cost based on compute demand and varying cost multiplier
    const baseCost = mw * costMultiplier;
    
    // Apply investment scale and scale factor to ensure it doesn't always hit max
    const scaledCost = baseCost * (0.8 + (investmentScale * 0.2)) * scaleFactor;
    
    // Ensure cost is within specified range
    return Math.min(maxCost, Math.max(minCost, Math.round(scaledCost)));
  });
};

/**
 * Calculate GPUs required based on compute demand and adoption
 * @param {number} computeMW - Compute demand in MW
 * @param {number} adoptionPercentage - Adoption percentage
 * @param {number} progress - Animation progress (0-1)
 * @returns {number} - Number of GPUs required
 */
export const calculateGPUs = (computeMW, adoptionPercentage, progress) => {
  // Generate sine wave for GPU efficiency variation (GPUs per MW)
  const gpuEfficiencyWave = generateSineWave(0.4, 0.6, Math.PI / 2);
  const gpusPerMW = gpuEfficiencyWave(progress);
  
  // Scale by adoption percentage to ensure GPUs vary with adoption
  const adoptionFactor = adoptionPercentage / 100;
  
  return Math.round(computeMW * gpusPerMW * adoptionFactor * 10000);
};

/**
 * Format currency for display
 * @param {number} value - Value in millions
 * @returns {string} - Formatted currency string
 */
export const formatCurrency = (value) => {
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(1)}B`;
  }
  return `$${value.toFixed(0)}M`;
};

/**
 * Format percentage for display
 * @param {number} value - Percentage value
 * @returns {string} - Formatted percentage string
 */
export const formatPercentage = (value) => {
  return `${value}%`;
};

/**
 * Generate interpretation text based on metrics
 * @param {Object} metrics - Current metrics
 * @param {Function} t - Translation function
 * @returns {string} - Interpretation text
 */
export const generateInterpretation = (metrics, t) => {
  return t('calculator.interpretationText', {
    adoptionPercentage: metrics.adoptionPercentage,
    privateDemand: metrics.private.toFixed(1),
    postSecondaryDemand: metrics.postSecondary.toFixed(1),
    energy: metrics.energy.toLocaleString(),
    gpus: Math.round(metrics.gpu).toLocaleString(),
    cost: formatCurrency(metrics.cost)
  });
};

/**
 * Calculate all metrics and chart data based on current progress and slider values
 * @param {number} progress - Animation progress (0-1)
 * @param {Object} sliderValues - User-controlled slider values
 * @returns {Object} - All calculated metrics and chart data
 */
export const calculateAllMetrics = (progress, sliderValues) => {
  const { adoptionSpeed, computeGrowth, investmentScale } = sliderValues;
  
  // Calculate adoption data
  const adoptionData = calculateAdoption(progress, adoptionSpeed);
  
  // Calculate inference demand
  const privateData = calculatePrivateSector(progress, adoptionData, investmentScale);
  const postSecondaryData = calculatePostSecondary(progress, adoptionData, investmentScale);
  
  // Calculate compute and cost
  const computeData = calculateCompute(progress, adoptionData, computeGrowth, investmentScale);
  const costData = calculateCost(progress, computeData, investmentScale);
  
  // Extract 2030 metrics (last year)
  const metrics = {
    cost: costData[5],
    energy: computeData[5],
    gpu: calculateGPUs(computeData[5], adoptionData[5], progress),
    adoptionPercentage: adoptionData[5],
    private: privateData[5],
    postSecondary: postSecondaryData[5]
  };
  
  // Return all calculated data
  return {
    metrics,
    chartData: {
      adoptionData,
      privateData,
      postSecondaryData,
      computeData,
      costData
    }
  };
};
