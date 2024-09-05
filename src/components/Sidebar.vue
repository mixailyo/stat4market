<script setup lang="ts">
import {getImageUrl} from '@/utils/images'

interface SidebarLink {
  label: string;
  url: string;
  icon: string;
}

const menuLinks: SidebarLink[] = [
  { label: 'Мой склад', url: '/', icon: 'dashboard' },
]

const socialLinks: SidebarLink[] = [
  { label: 'Telegram', url: 'https://t.me/stat4market', icon: 'telegram' },
  { label: 'Instagram', url: 'https://instagram.com/stat4market', icon: 'instagram' },
  { label: 'VK', url: 'https://vk.com/stat4market', icon: 'vk' },
]
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__header">
      <RouterLink to="/">
        <img src="@/assets/images/logo.svg" alt="" class="sidebar__logo">
      </RouterLink>
    </div>
    <nav class="sidebar__menu">
      <ul class="sidebar__menu-items">
        <li v-for="{label, url, icon} in menuLinks" :key="url" class="sidebar__menu-item">
          <RouterLink :to="url" class="sidebar__menu-item-link">
            <img :src="getImageUrl(`${icon}.svg`, 'icons')" :alt="label" class="sidebar__menu-item-icon">
            <span class="sidebar__menu-item-label">{{ label }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="sidebar__footer">
      <ul class="sidebar__social">
        <li v-for="{label, url, icon} in socialLinks" class="sidebar__social-item">
          <a :href="url" class="sidebar__social-link">
            <img :src="getImageUrl(`${icon}.svg`, 'icons')" :alt="label" class="sidebar__social-link-icon">
          </a>
        </li>
      </ul>
    </div>
    <a href="#" class="sidebar__partners-program">Партнёрская программа</a>
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  background: var(--color-background-dark);
  height: 100%;
  padding: 20px;
  color: var(--color-text-light);
  display: flex;
  flex-direction: column;

  &__header {
    margin-bottom: 25px;
  }

  &__menu-items {
    list-style: none;
    padding: 0;
  }

  &__menu-item-link {
    display: flex;
    align-items: center;
    gap: 16px;
    transition: 0.3s;

    &:hover {
      color: var(--color-primary);
    }
  }

  &__footer {
    margin-top: auto;
  }

  &__social {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-bottom: 16px;
  }

  &__social-link {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid rgba(113, 123, 158, 0.20);
    transition: 0.3s;

    &:hover {
      border-color: var(--color-primary);
    }
  }

  &__partners-program {
    color: var(--color-blue-light);
    font-size: 13px;
    line-height: 18px;
    margin: 0 auto 15px;
    border-bottom: 1px dotted var(--color-blue-light);
    width: fit-content;
    transition: 0.3s;

    &:hover {
      border-color: var(--color-primary);
    }
  }
}
</style>