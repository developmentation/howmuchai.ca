<template>
  <div class="privacy-policy container mx-auto px-4 py-12 max-w-4xl">
    <h1 class="text-3xl font-bold mb-8 gradient-text">{{ $t('privacy.title') }}</h1>
    
    <div class="space-y-6 text-gray-300">
      <p>{{ $t('privacy.intro') }}</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy.dataCollection.title') }}</h2>
      <p>{{ $t('privacy.dataCollection.description') }}</p>
      <ul class="list-disc pl-6 mt-2 space-y-2">
        <li>{{ $t('privacy.dataCollection.items.personal') }}</li>
        <li>{{ $t('privacy.dataCollection.items.usage') }}</li>
        <li>{{ $t('privacy.dataCollection.items.feedback') }}</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy.dataUse.title') }}</h2>
      <p>{{ $t('privacy.dataUse.description') }}</p>
      <ul class="list-disc pl-6 mt-2 space-y-2">
        <li>{{ $t('privacy.dataUse.items.whitepaper') }}</li>
        <li>{{ $t('privacy.dataUse.items.policy') }}</li>
        <li>{{ $t('privacy.dataUse.items.research') }}</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy.dataSharing.title') }}</h2>
      <p>{{ $t('privacy.dataSharing.description') }}</p>
      <ul class="list-disc pl-6 mt-2 space-y-2">
        <li>{{ $t('privacy.dataSharing.items.government') }}</li>
        <li>{{ $t('privacy.dataSharing.items.cci') }}</li>
        <li>{{ $t('privacy.dataSharing.items.amii') }}</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy.dataProtection.title') }}</h2>
      <p>{{ $t('privacy.dataProtection.description') }}</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy.contact.title') }}</h2>
      <p>{{ $t('privacy.contact.description') }}</p>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t } = useI18n();
    
    return { t };
  }
}
</script>

<style scoped>
.privacy-policy {
  background: rgba(10, 15, 30, 0.7);
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
