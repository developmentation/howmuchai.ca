<template>
  <div>
    <header class="bg-gray-900 py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b border-white/5">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <router-link to="/" class="flex items-center">
              <div class="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <span class="text-xl font-bold text-white">{{ currentSite }}</span>
            </router-link>
          </div>
          <div class="flex items-center space-x-4">
            <nav class="hidden md:flex space-x-6">
              <a @click.prevent="navigateToSection('about')" class="text-gray-300 hover:text-white transition-colors cursor-pointer">{{ $t('nav.about') }}</a>
              <a @click.prevent="navigateToSection('calculator')" class="text-gray-300 hover:text-white transition-colors cursor-pointer">{{ $t('nav.calculator') }}</a>
              <a @click.prevent="navigateToSection('features')" class="text-gray-300 hover:text-white transition-colors cursor-pointer">{{ $t('nav.features') }}</a>
              <a @click.prevent="navigateToSection('approach')" class="text-gray-300 hover:text-white transition-colors cursor-pointer">{{ $t('nav.approach') }}</a>
            </nav>
            <button 
              @click="toggleLanguage" 
              class="lang-toggle"
            >
              {{ currentLanguage === 'en' ? 'FR' : 'EN' }}
            </button>
            <a 
              @click.prevent="navigateToSection('cta')"
              class="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-2 px-4 rounded-lg shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 text-sm font-medium cursor-pointer"
            >
              {{ $t('nav.join') }}
            </a>
          </div>
        </div>
      </div>
    </header>
    
    <router-view></router-view>
    
    <footer class="bg-gray-900 text-white py-6 mt-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <p class="text-sm text-gray-400">
              © {{ new Date().getFullYear() }} {{ currentSite }}
            </p>
          </div>
          <div class="flex space-x-6">
            <router-link to="/privacy" class="text-sm text-gray-400 hover:text-white transition-colors">
              {{ $t('footer.privacy') }}
            </router-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';

// i18n setup
const { locale, t } = useI18n();

// Router setup
const router = useRouter();
const route = useRoute();

// Track current language
const currentLanguage = ref(locale.value);

// Compute site name based on language
const currentSite = computed(() => {
  return currentLanguage.value === 'en' ? 'HowMuchAI.ca' : 'CombienIA.ca';
});

// Toggle language
const toggleLanguage = () => {
  const newLanguage = currentLanguage.value === 'en' ? 'fr' : 'en';
  locale.value = newLanguage;
  currentLanguage.value = newLanguage;
  
  // Update document title
  document.title = newLanguage === 'en' ? 'HowMuchAI.ca - AI Compute Calculator' : 'CombienIA.ca - Calculateur de Calcul IA';
};

// Navigate to section - handles cross-page navigation
const navigateToSection = (sectionId) => {
  // If we're not on the home page, navigate there first
  if (route.path !== '/') {
    router.push({ path: '/', hash: `#${sectionId}` });
  } else {
    // If already on home page, just scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

// Update document title on language change
watch(currentLanguage, (newLang) => {
  document.title = newLang === 'en' ? 'HowMuchAI.ca - AI Compute Calculator' : 'CombienIA.ca - Calculateur de Calcul IA';
});

// Set initial document title
document.title = currentLanguage.value === 'en' ? 'HowMuchAI.ca - AI Compute Calculator' : 'CombienIA.ca - Calculateur de Calcul IA';

onMounted(() => {
  console.log('Component mounted');
  console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
});
</script>

<style>
/* Global styles */
body {
  background-color: #0a0f1e;
  color: #f3f4f6;
  font-family: 'Inter', sans-serif;
}

/* Particle background */
#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(to right, #2dd4bf, #3b82f6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.gradient-text-purple {
  background: linear-gradient(to right, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Button styles */
.btn-primary {
  background: linear-gradient(to right, #2dd4bf, #3b82f6);
  color: white;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(45, 212, 191, 0.1), 0 1px 3px rgba(59, 130, 246, 0.1);
}

.btn-primary:hover {
  box-shadow: 0 10px 15px rgba(45, 212, 191, 0.2), 0 4px 6px rgba(59, 130, 246, 0.2);
  transform: translateY(-2px);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(45, 212, 191, 0.1), 0 1px 3px rgba(59, 130, 246, 0.1);
}

/* Language toggle button */
.lang-toggle {
  background: rgba(17, 24, 39, 0.5);
  color: #d1d5db;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

.lang-toggle:hover {
  background: rgba(31, 41, 55, 0.5);
  color: white;
}
</style>