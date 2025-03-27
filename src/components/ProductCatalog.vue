<template>
  <div>
    <ProductSort
      :currentSort="productStore.sortOption"
      @sort-change="sortProducts"
    />
    <ProductFilter
      :categories="productStore.categories"
      :selectedCategory="productStore.selectedCategory"
      @category-change="filterProducts"
      @search-change="searchProducts"
    />
    <div v-if="productStore.filteredProducts.length === 0">
      <p>No products found</p>
    </div>
    <div v-else>
      <ProductCard
        v-for="product in productStore.filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useProductStore } from "../stores/productStore";
import ProductSort from "./ProductSort.vue";
import ProductFilter from "./ProductFilter.vue";
import ProductCard from "./ProductCard.vue";

export default defineComponent({
  name: "ProductCatalog",
  components: {
    ProductSort,
    ProductFilter,
    ProductCard,
  },
  setup() {
    const productStore = useProductStore();

    const sortProducts = (sort) => {
      productStore.setSortOption(sort);
    };

    const filterProducts = (category) => {
      productStore.setCategory(category);
    };

    const searchProducts = (query) => {
      productStore.setSearchQuery(query);
    };

    return {
      productStore,
      sortProducts,
      filterProducts,
      searchProducts,
      addToCart,
    };
  },
});
</script>
