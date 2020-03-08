<template>
  <div class="form-group">
    <slot></slot>
    <div class="input-group">
      <input
        type="password"
        class="form-control"
        v-if="!show"
        v-model="innerValue"
        :required="required"
        :placeholder="placeholder"
      />
      <input
        type="text"
        class="form-control"
        v-if="show"
        v-model="innerValue"
        :change="valueUpdated()"
        :required="required"
        :placeholder="placeholder"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          @mousedown="show = true"
          @mouseup="show = false"
        >
          <span>
            <i class="far fa-eye" v-if="!show"></i>
            <i class="fas fa-eye" v-if="show"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  props: {
    required: Boolean,
    placeholder: String,
    value: Object
  },

  setup(props, ctx) {
    const show = ref(false);
    const innerValue = ref(props.value);

    const valueUpdated = () => {
      ctx.emit('input', innerValue);
    };

    return {
      show,
      innerValue,
      valueUpdated
    };
  }
});
</script>

<style></style>
