<template>
  <div>
    <label for="search">search:</label>
    <input type="text" id="search" v-model="search" @input="searchProducts" />
    <select :value="selectedCategory" data-test="category-option">
      <option @click="selectCategory(null)" value="" :data-value="null">
        All Categories
      </option>
      <option
        v-for="category in categories"
        :key="category.id"
        :value="category.id"
        :data-value="category.id"
        @click="selectCategory(category.id)"
        data-test="category-option"
      >
        {{ category.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductFilter",
  props: {
    categories: {
      type: Array,
      required: true,
    },
    selectedCategory: {
      type: [Number, String, null],
      default: null,
    },
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchProducts() {
      this.$emit("search-change", this.search);
    },
    handleChange(event) {
      const categoryId = event.target.value === "" ? null : event.target.value;
    },
    selectCategory(categoryId) {
      this.$emit("category-change", categoryId);
    },
  },
});
</script>
