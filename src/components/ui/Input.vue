<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue';
import Button from '@/components/ui/Button.vue';

interface Props {
  type: string;
  value: number | string;
  postfix?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:value']);

const internalValue = ref(props.value);
const initialValue = ref(props.value);
const isEditing = ref(false); 
const inputWidth = ref('auto');
const hiddenSpan = ref<HTMLElement | null>(null);

watch(() => props.value, (newValue) => {
  internalValue.value = newValue;
  initialValue.value = newValue;
  updateInputWidth();
});

const startEditing = () => {
  isEditing.value = true;
}

const save = () => {
  emit('update:value', internalValue.value);
  isEditing.value = false;
}

const cancel = () => {
  internalValue.value = initialValue.value;
  isEditing.value = false;
  nextTick(updateInputWidth);
}

const updateInputWidth = () => {
  if (hiddenSpan.value) {
    const spanWidth = hiddenSpan.value.offsetWidth;
    inputWidth.value = `${spanWidth}px`; 
  }
}

const onInput = () => {
  updateInputWidth();
}

onMounted(() => {
  updateInputWidth();
});
</script>

<template>
  <div class="input">
    <div @click="startEditing" class="input__wrapper">
      <input 
        v-model="internalValue" 
        class="input__item" 
        :type="props.type" 
        :readonly="!isEditing" 
        :style="{ width: inputWidth }" 
        @input="onInput"
      />
      
      <span v-if="!isEditing && props.postfix" class="input__postfix">{{ props.postfix }}</span>
    </div>
    
    <div v-if="isEditing" class="input__actions">
      <Button class="input__action" icon="accept" bgColor="main" @click="save" />
      <Button class="input__action" icon="close" :border="true" @click="cancel" />
    </div>
    
    <span ref="hiddenSpan" class="input__hidden">{{ internalValue }}</span>
  </div>
</template>

<style scoped lang="scss">
.input {
  display: flex;
  align-items: center;
  color: var(--color-main);
  font-size: 14px;
  line-height: 20px;

  &__wrapper {
    border-bottom: 1px dotted var(--color-blue-light);
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      border-color: var(--color-primary);
    }
  }

  &__item {
    margin-right: 2px;
    border: unset;
    outline: none;
    padding: 0;
    font-size: inherit;
    line-height: inherit;
    text-align: left;
    color: var(--color-main);
  }

  &__actions {
    display: flex;
    gap: 4px;
    margin-left: 8px;
  }

  &__hidden {
    position: absolute;
    visibility: hidden;
    white-space: nowrap;
    font-size: inherit;
    line-height: inherit;
  }
}
</style>
