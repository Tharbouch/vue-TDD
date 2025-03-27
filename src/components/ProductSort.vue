<template>
  <div class="product-sort">
    <div
      v-for="option in options"
      :key="option.value"
      @click="handleChange(option.value)"
    >
      <label
        data-test="sort-option"
        :class="{ active: option.value === currentSort }"
        :data-value="option.value"
        :data-selected="option.value === currentSort ? 'true' : null"
      >
        <input
          type="radio"
          name="sort"
          :value="option.value"
          :data-value="option.value"
          :data-selected="option.value === currentSort ? 'true' : null"
          :checked="option.value === currentSort"
        />
        {{ option.label }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSort",
  props: {
    currentSort: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      options: [
        { value: "price-asc", label: "Price: Low to High" },
        { value: "price-desc", label: "Price: High to Low" },
        { value: "rating-desc", label: "Rating: High to Low" },
      ],
    };
  },
  emits: ["sort-change"],
  methods: {
    handleChange(selectedValue) {
      this.$emit("sort-change", selectedValue);
    },
  },
};
</script>

<style scoped>
.active {
  color: red;
}
label {
  cursor: pointer;
  display: block;
  margin: 0.5rem 0;
}
</style>
