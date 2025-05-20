<template>
  <div>
    <!-- Hero Section with GSAP animations -->
    <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#111b33] to-[#0a0f1e]">
        <!-- Particle background -->
        <div id="particles-js" class="absolute inset-0"></div>
      </div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-12 md:mb-0">
            <div class="max-w-xl">
              <div class="inline-block px-3 py-1 bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-full mb-6">
                <span class="text-xs font-medium bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                  {{ $t('home.hero.tagline') }}
                </span>
              </div>

              {{  }}
              <h1  v-if = "locale == 'en'"  class="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {{ $t('home.hero.title').split(' ')[0] }} {{ $t('home.hero.title').split(' ')[1] }}  <span class="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">{{ $t('home.hero.title').split(' ')[2] }}</span> {{ $t('home.hero.title').split(' ').slice(3).join(' ') }}
              </h1>

              <h1 v-if = "locale == 'fr'" class="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {{ $t('home.hero.title').split(' ')[0] }}   <span class="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">{{ $t('home.hero.title').split(' ')[1] }}</span> {{ $t('home.hero.title').split(' ').slice(2).join(' ') }}
              </h1>

              <p class="hero-subtitle text-lg md:text-xl text-gray-400 mb-8 max-w-lg">
                {{ $t('home.hero.subtitle') }}
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#calculator" 
                  class="hero-button bg-gradient-to-r from-teal-400 to-blue-500 text-white py-3 px-8 rounded-full text-base font-medium hover:shadow-lg hover:shadow-teal-500/20    text-center"
                >
                  {{ $t('home.hero.exploreButton') }}
                </a>
                <a 
                  href="#about" 
                  class="hero-button bg-white/5 backdrop-blur-sm text-white py-3 px-8 rounded-full text-base font-medium hover:bg-white/10    text-center border border-white/10"
                >
                  {{ $t('home.hero.learnMoreButton') }}
                </a>
              </div>
              <div class="mt-6 text-sm text-gray-400 inline-block px-3 py-1 bg-red-500/20 rounded-md border border-red-500/30">
                <span class="font-medium">{{ $t('home.hero.demoOnly') }}</span>
              </div>
              <div class="mt-4 text-sm text-gray-400">
                <span>{{ $t('home.hero.governmentAttribution') }}</span>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 hero-image">
            <div class="relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl blur-xl opacity-20"></div>
              <div class="relative bg-[#111b33]/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex space-x-1.5">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div class="text-xs text-gray-400">{{ $t('calculator.aiComputeProjector') }}</div>
                </div>
                <div class="space-y-4">
                  <div>
                    <div class="flex justify-between text-xs mb-1">
                      <span>{{ $t('calculator.adoptionSpeed') }}</span>
                      <span class="text-teal-400">1.5x</span>
                    </div>
                    <div class="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div class="h-full w-3/4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between text-xs mb-1">
                      <span>{{ $t('calculator.computeGrowth') }}</span>
                      <span class="text-blue-400">0.8x</span>
                    </div>
                    <div class="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div class="h-full w-4/5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between text-xs mb-1">
                      <span>{{ $t('calculator.investmentScale') }}</span>
                      <span class="text-purple-400">1.2x</span>
                    </div>
                    <div class="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div class="h-full w-3/5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div class="mt-6 grid grid-cols-2 gap-4">
                  <div class="bg-[#0a0f1e]/80 p-4 rounded-xl">
                    <div class="text-2xl font-bold text-teal-400">$150B</div>
                    <div class="text-xs text-gray-400">{{ $t('calculator.totalInvestment') }}</div>
                  </div>
                  <div class="bg-[#0a0f1e]/80 p-4 rounded-xl">
                    <div class="text-2xl font-bold text-blue-400">5,000 Mw</div>
                    <div class="text-xs text-gray-400">{{ $t('calculator.energyConsumption') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0f1e] to-transparent"></div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 animate-section">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-block px-3 py-1 bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-full mb-4">
            <span class="text-xs font-medium bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
              {{ $t('home.about.tagline') }}
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ $t('home.about.title') }}</h2>
          <p class="text-lg text-gray-400 mb-8 leading-relaxed">
            {{ $t('home.about.description') }}
          </p>
          <p class="text-lg text-gray-400 mb-12 leading-relaxed">
            {{ $t('home.about.extendedDescription') }}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-[#111b33]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-teal-500/20 transition-all duration-300 group">
              <div class="w-14 h-14 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:from-teal-400/30 group-hover:to-blue-500/30 transition-all duration-300">
                <svg class="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">{{ $t('home.about.cards.reliance.title') }}</h3>
              <p class="text-gray-400">{{ $t('home.about.cards.reliance.description') }}</p>
            </div>
            <div class="bg-[#111b33]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300 group">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-400/30 group-hover:to-purple-500/30 transition-all duration-300">
                <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">{{ $t('home.about.cards.stakeholders.title') }}</h3>
              <p class="text-gray-400">{{ $t('home.about.cards.stakeholders.description') }}</p>
            </div>
            <div class="bg-[#111b33]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all duration-300 group">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:from-purple-400/30 group-hover:to-pink-500/30 transition-all duration-300">
                <svg class="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">{{ $t('home.about.cards.future.title') }}</h3>
              <p class="text-gray-400">{{ $t('home.about.cards.future.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Calculator Section -->
    <section id="calculator" class="py-20 animate-section">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <div class="inline-block px-3 py-1 bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-full mb-4">
            <span class="text-xs font-medium bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
              {{ $t('home.calculator.tagline') }}
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('home.calculator.title') }}</h2>
          <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-4">
            {{ $t('home.calculator.description') }}
          </p>
          <div class="inline-block px-3 py-1 bg-red-500/20 rounded-md border border-red-500/30 mb-8">
            <span class="text-sm font-medium text-red-400">{{ $t('home.calculator.demoDisclaimer') }}</span>
          </div>
        </div>
        <div class="relative">
          <div class="absolute -inset-1 bg-gradient-to-r from-teal-400/20 via-blue-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-70"></div>
          <div class="relative">
            <Calculator />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 animate-section">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-3 py-1 bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-full mb-4">
            <span class="text-xs font-medium bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
              {{ $t('home.features.tagline') }}
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ $t('home.features.title') }}</h2>
          <p class="text-lg text-gray-400 max-w-2xl mx-auto">
            {{ $t('home.features.description') }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-[#111b33]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-teal-500/20 transition-all duration-300 group">
            <div class="w-14 h-14 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-teal-400/30 group-hover:to-blue-500/30 transition-all duration-300">
              <svg class="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ $t('home.features.cards.geographic.title') }}</h3>
            <p class="text-gray-400">{{ $t('home.features.cards.geographic.description') }}</p>
          </div>
          
          <!-- Feature 2 -->
          <div class="bg-[#111b33]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300 group">
            <div class="w-14 h-14 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-400/30 group-hover:to-purple-500/30 transition-all duration-300">
              <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ $t('home.features.cards.sliders.title') }}</h3>
            <p class="text-gray-400">{{ $t('home.features.cards.sliders.description') }}</p>
          </div>
          
          <!-- Feature 3 -->
          <div class="bg-[#111b33]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all duration-300 group">
            <div class="w-14 h-14 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-purple-400/30 group-hover:to-pink-500/30 transition-all duration-300">
              <svg class="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ $t('home.features.cards.projections.title') }}</h3>
            <p class="text-gray-400">{{ $t('home.features.cards.projections.description') }}</p>
          </div>
          
          <!-- Feature 4 -->
          <div class="bg-[#111b33]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-teal-500/20 transition-all duration-300 group">
            <div class="w-14 h-14 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-teal-400/30 group-hover:to-blue-500/30 transition-all duration-300">
              <svg class="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ $t('home.features.cards.model.title') }}</h3>
            <p class="text-gray-400">{{ $t('home.features.cards.model.description') }}</p>
          </div>
          
          <!-- Feature 5 -->
          <div class="bg-[#111b33]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300 group">
            <div class="w-14 h-14 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-400/30 group-hover:to-purple-500/30 transition-all duration-300">
              <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ $t('home.features.cards.timeline.title') }}</h3>
            <p class="text-gray-400">{{ $t('home.features.cards.timeline.description') }}</p>
          </div>
          
          <!-- Feature 6 -->
          <div class="bg-[#111b33]/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all duration-300 group">
            <div class="w-14 h-14 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-purple-400/30 group-hover:to-pink-500/30 transition-all duration-300">
              <svg class="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ $t('home.features.cards.collaboration.title') }}</h3>
            <p class="text-gray-400">{{ $t('home.features.cards.collaboration.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Approach Section -->
    <section id="approach" class="py-20 animate-section">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <div class="inline-block px-3 py-1 bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-full mb-4">
            <span class="text-xs font-medium bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
              {{ $t('home.approach.tagline') }}
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ $t('home.approach.title') }}</h2>
          <p class="text-lg text-gray-400 max-w-2xl mx-auto">
            {{ $t('home.approach.description') }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="space-y-8">
              <!-- Step 1 -->
              <div class="flex gap-6">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                    <span class="text-xl font-bold text-teal-400">1</span>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white mb-2">{{ $t('home.approach.steps.quantify.title') }}</h3>
                  <p class="text-gray-400">{{ $t('home.approach.steps.quantify.description') }}</p>
                </div>
              </div>
              
              <!-- Step 2 -->
              <div class="flex gap-6">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                    <span class="text-xl font-bold text-blue-400">2</span>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white mb-2">{{ $t('home.approach.steps.partnerships.title') }}</h3>
                  <p class="text-gray-400">{{ $t('home.approach.steps.partnerships.description') }}</p>
                </div>
              </div>
              
              <!-- Step 3 -->
              <div class="flex gap-6">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                    <span class="text-xl font-bold text-purple-400">3</span>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white mb-2">{{ $t('home.approach.steps.infrastructure.title') }}</h3>
                  <p class="text-gray-400">{{ $t('home.approach.steps.infrastructure.description') }}</p>
                </div>
              </div>
              
              <!-- Step 4 -->
              <div class="flex gap-6">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-gradient-to-br from-pink-400/20 to-red-500/20 rounded-xl flex items-center justify-center">
                    <span class="text-xl font-bold text-pink-400">4</span>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white mb-2">{{ $t('home.approach.steps.whitepaper.title') }}</h3>
                  <p class="text-gray-400">{{ $t('home.approach.steps.whitepaper.description') }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-teal-400/20 via-blue-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-70"></div>
            <div class="relative bg-[#111b33]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 class="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">{{ $t('home.approach.timeline.title') }}</h3>
              
              <div class="space-y-6">
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-24 text-teal-400 font-semibold">{{ $t('home.approach.timeline.may.date') }}</div>
                  <div>
                    <h4 class="font-semibold text-white mb-1">{{ $t('home.approach.timeline.may.title') }}</h4>
                    <p class="text-sm text-gray-400">{{ $t('home.approach.timeline.may.description') }}</p>
                  </div>
                </div>
                
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-24 text-teal-400 font-semibold">{{ $t('home.approach.timeline.summer.date') }}</div>
                  <div>
                    <h4 class="font-semibold text-white mb-1">{{ $t('home.approach.timeline.summer.title') }}</h4>
                    <p class="text-sm text-gray-400">{{ $t('home.approach.timeline.summer.description') }}</p>
                  </div>
                </div>
                
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-24 text-teal-400 font-semibold">{{ $t('home.approach.timeline.fall.date') }}</div>
                  <div>
                    <h4 class="font-semibold text-white mb-1">{{ $t('home.approach.timeline.fall.title') }}</h4>
                    <p class="text-sm text-gray-400">{{ $t('home.approach.timeline.fall.description') }}</p>
                  </div>
                </div>
                
                <div class="flex gap-4">
                  <div class="flex-shrink-0 w-24 text-teal-400 font-semibold">{{ $t('home.approach.timeline.q1.date') }}</div>
                  <div>
                    <h4 class="font-semibold text-white mb-1">{{ $t('home.approach.timeline.q1.title') }}</h4>
                    <p class="text-sm text-gray-400">{{ $t('home.approach.timeline.q1.description') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section id="cta" class="py-20 animate-section">
      <div class="container mx-auto px-6">
        <div class="relative">
          <div class="absolute -inset-1 bg-gradient-to-r from-teal-400/20 via-blue-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-70"></div>
          <div class="relative bg-[#111b33]/80 backdrop-blur-sm p-12 rounded-2xl border border-white/10">
            <div class="max-w-4xl mx-auto text-center">
              <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ $t('home.cta.title') }}</h2>
              <p class="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                {{ $t('home.cta.description') }}
              </p>
              <div class="max-w-md mx-auto">
                <form class="space-y-4" @submit.prevent="submitForm">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-300 mb-1">{{ $t('home.cta.form.name') }}</label>
                    <input 
                      type="text" 
                      id="name" 
                      v-model="formData.name"
                      required 
                      class="w-full p-3 rounded-lg bg-[#0a0f1e]/80 border border-white/10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-300 mb-1">{{ $t('home.cta.form.email') }}</label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="formData.email"
                      required 
                      class="w-full p-3 rounded-lg bg-[#0a0f1e]/80 border border-white/10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label for="industry" class="block text-sm font-medium text-gray-300 mb-1">{{ $t('home.cta.form.industry') }}</label>
                    <select 
                      id="industry" 
                      v-model="formData.industry"
                      required 
                      class="w-full p-3 rounded-lg bg-[#0a0f1e]/80 border border-white/10 text-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    >
                      <option value="Private Sector">{{ $t('home.cta.form.industries.private') }}</option>
                      <option value="Public Sector">{{ $t('home.cta.form.industries.public') }}</option>
                      <option value="Post-Secondary">{{ $t('home.cta.form.industries.postSecondary') }}</option>
                      <option value="Research">{{ $t('home.cta.form.industries.research') }}</option>
                      <option value="Citizen">{{ $t('home.cta.form.industries.citizen') }}</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    class="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white py-3 px-4 rounded-lg shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 font-medium mt-2"
                    :disabled="loading"
                  >
                    <span v-if="loading">{{ $t('home.cta.form.submitting') }}</span>
                    <span v-else>{{ $t('home.cta.form.submit') }}</span>
                  </button>

                   <p class="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">{{ $t('home.cta.form.disclaimer') }}</p>
                  <p v-if="error" class="text-red-400 text-sm mt-2">{{ error }}</p>
                  <p v-if="success" class="text-green-400 text-sm mt-2">{{ success }}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, reactive, onMounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Calculator from '../components/Calculator.vue';
import { useSignup } from '../composables/useSignup';
import { useConfigs } from '../composables/useConfigs';
import { useAnimations } from '../composables/useAnimations';

export default {
  name: 'Home',
  components: {
    Calculator
  },
  setup() {
    const { locale, t } = useI18n();
    

    const formData = reactive({
      name: '',
      email: '',
      industry: 'Private Sector'
    });

    const { signup, loading, error } = useSignup();
    const { getConfigs} = useConfigs();
    let configs = ref(null)
    const { animateHeroElements, animateOnScroll } = useAnimations();
    const success = ref('');

    const submitForm = async () => {
      try {
        await signup(formData);
        // Reset form after successful submission
        formData.name = '';
        formData.email = '';
        formData.industry = 'Private Sector';
        success.value = t('home.cta.form.success');
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          success.value = '';
        }, 5000);
      } catch (err) {
        console.error('Signup error:', err);
      }
    };

    onMounted(async () => {
      // Initialize GSAP animations
      animateHeroElements();
      const observer = animateOnScroll();

      configs.value = await getConfigs();
      console.log("Configs and Stats", configs.value)
      // Initialize particles background with vanilla JS
      setTimeout(() => {
        const particlesContainer = document.getElementById('particles-js');
        if (particlesContainer) {
          setupParticles(particlesContainer);
        }
      }, 100);
      
      // Cleanup function
      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    });

    // Setup particles background
    const setupParticles = (container) => {
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      container.appendChild(canvas);
      
      const ctx = canvas.getContext('2d');
      
      // Particle class
      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 2 + 0.5;
          this.speedX = Math.random() * 0.5 - 0.25;
          this.speedY = Math.random() * 0.5 - 0.25;
          this.color = this.getRandomColor();
        }
        
        getRandomColor() {
          const colors = [
            'rgba(45, 212, 191, 0.5)',  // teal
            'rgba(59, 130, 246, 0.5)',  // blue
            'rgba(168, 85, 247, 0.5)',  // purple
            'rgba(236, 72, 153, 0.5)'   // pink
          ];
          return colors[Math.floor(Math.random() * colors.length)];
        }
        
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          
          if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
          if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Create particles
      const particles = [];
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
      
      // Animation loop
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
        }
        
        requestAnimationFrame(animate);
      }
      
      animate();
      
      // Handle window resize
      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    };

    return {
      locale,
      formData,
      submitForm,
      loading,
      error,
      success
    };
  }
};
</script>

<style scoped>
.animate-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-section.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
