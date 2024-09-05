<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Sidebar from '@/components/Sidebar.vue'
import Button from '@/components/ui/Button.vue'

const route = useRoute();
const pageTitle = computed(() => route.meta.title || 'Заголовок по умолчанию');
</script>

<template>
  <div class="wrapper">
    <Sidebar />
    <main>
      <div class="page">
        <header class="page__header">
          <h1 class="page__title">{{ pageTitle }}</h1>
          <Button to="/settings" label="Настройки отчёта" icon="settings" size="large" :border="true" />
        </header>
        <div class="page__content">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: 240px auto;
    min-height: 100dvh;
  }

  .page {
    padding: 24px 40px 40px;
    background: var(--color-background);
    min-height: 100%;

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__title {
      color: var(--vt-c-black);
      font-size: 30px;
      font-weight: 600;
      line-height: 36px;
    }

    &__content {
      margin-top: 26px;
      padding: 30px;
      border-radius: 8px;
      background: var(--vt-c-white);
    }
  }
</style>
