<template>
  <div class="field">
    <label :for="inputId">{{ label }}</label>
    <div class="input-wrap" :class="{ 'has-error': errorMessage }">
      <span v-if="$slots.left" class="icon icon-left" aria-hidden="true">
        <slot name="left" />
      </span>

      <textarea
        v-if="multiline"
        :id="inputId"
        :name="name"
        :value="modelValue"
        :rows="rows"
        :placeholder="placeholder"
        :aria-invalid="Boolean(errorMessage)"
        :aria-describedby="errorMessage ? errorId : undefined"
        @input="emit('update:modelValue', $event.target.value)"
        @blur="emit('blur', $event)"
      />
      <input
        v-else
        :id="inputId"
        :name="name"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :aria-invalid="Boolean(errorMessage)"
        :aria-describedby="errorMessage ? errorId : undefined"
        @input="emit('update:modelValue', $event.target.value)"
        @blur="emit('blur', $event)"
      />

      <span v-if="$slots.right" class="icon icon-right" aria-hidden="true">
        <slot name="right" />
      </span>
    </div>
    <p v-if="errorMessage" :id="errorId" class="error-message" role="alert">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  autocomplete: {
    type: String,
    default: undefined
  },
  errorMessage: {
    type: String,
    default: ''
  },
  multiline: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: 3
  }
})

const emit = defineEmits(['update:modelValue', 'blur'])
const inputId = computed(() => `field-${props.name}`)
const errorId = computed(() => `${inputId.value}-error`)
</script>

<style scoped>
.field {
  display: grid;
  gap: 8px;
}

label {
  color: #f4f4f4;
  font-weight: 700;
}

.input-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.input-wrap:focus-within {
  border-color: #fff;
}

.input-wrap.has-error {
  border-color: #ff7777;
}

input,
textarea {
  width: 100%;
  min-width: 0;
  padding: 12px 0;
  background: transparent;
  color: #fff;
  border: 0;
  outline: 0;
  font: inherit;
}

textarea {
  resize: vertical;
}

input::placeholder,
textarea::placeholder {
  color: #aaa;
}

.icon {
  display: inline-flex;
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
  color: #bbb;
}

.icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.error-message {
  margin: 0;
  color: #ff9999;
  font-size: 0.875rem;
}
</style>
