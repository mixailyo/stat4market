<script setup lang="ts">
import {getImageUrl} from '@/utils/images'
import { computed, ref } from 'vue';

type ButtonSize = 'large' | 'normal' | 'small'
type ButtonBgColor = 'main' | 'transparent'

interface Props {
  to?: string,
  label?: string,
  icon?: string,
  iconRight?: boolean,
  iconRotate?: boolean
  size?: ButtonSize
  bgColor?: ButtonBgColor
  rounded?: boolean
  border?: boolean
}

const props = defineProps<Props>()

const buttonClassObject = computed(() => ({
  'btn--rounded': props.rounded,
  'btn--with-border': props.border,
  'btn--without-label': !props.label,
  'btn--icon-right': props.iconRight,
  'btn--icon-rotate': props.iconRotate,
  [`btn--${props.size}`]: props.size,
  [`btn--bg-${props.bgColor}`]: props.bgColor,
}))
</script>

<template>
  <RouterLink v-if="props.to" :to="props.to" class="btn" :class="buttonClassObject">
    <img v-if="props.icon" :src="getImageUrl(`${props.icon}.svg`, 'icons')" :alt="props.label" class="btn__icon">
    {{ props.label }}
  </RouterLink>
  <button v-else class="btn" :class="buttonClassObject">
    <img v-if="props.icon" :src="getImageUrl(`${props.icon}.svg`, 'icons')" :alt="props.label" class="btn__icon">
    {{ props.label }}
  </button>
</template>

<style scoped lang="scss">
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 4px;
  transition: 0.3s;
  min-height: 20px;
  min-width: 20px;
  font-size: 13px;
  line-height: 20px;
  padding: 4px 8px;

  &__icon {
    transition: 0.3s;
  }

  &--large {
    font-size: 14px;
    padding: 10px 16px;
  }

  &--rounded {
    border-radius: 50%;
  }

  &--bg-main {
    background-color: var(--color-main);
    color: var(--vt-c-white);
  }

  &--with-border {
    border: 1px solid var(--color-border);

    &:hover {
      border-color: var(--color-primary);
    }
  }

  &--without-label {
    padding: 0;
  }

  &--icon-right {
    flex-direction: row-reverse;
  }

  &--icon-rotate {
    .btn__icon {
      transform: rotate(180deg);
    }
  }
}
</style>