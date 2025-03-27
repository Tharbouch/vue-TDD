<template>
  <div>
    <label for="filter">Filter:</label>
    <input type="text" id="filter" v-model="filter" @input="filterProducts" />
    <div>
      <button data-test="category-option" @click="selectCategory(null)">
        All Categories
      </button>
      <button
        v-for="category in categories"
        :key="category.id"
        data-test="category-option"
        @click="selectCategory(category.id)"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
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
      filter: "",
    };
  },
  methods: {
    filterProducts() {
      this.$emit("search-change", this.filter);
    },
    selectCategory(categoryId) {
      this.$emit("category-change", categoryId);
    },
  },
};
</script>
