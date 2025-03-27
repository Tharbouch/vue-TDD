<template>
  <div>
    <ProductSort :currentSort="currentSort" @sort-change="sortProducts" />
    <ProductFilter
      :currentFilters="currentFilters"
      @filter-change="filterProducts"
    />
    <div v-if="productStore.products.length === 0">
      <p>No products found</p>
    </div>
    <ProductCard
      v-else
      v-for="product in productStore.products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
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

    const currentSort = computed(() => productStore.sortOption);

    const currentFilters = computed(() =>
      productStore.selectedCategory ? [productStore.selectedCategory] : []
    );

    const sortProducts = (sort) => {
      productStore.setSortOption(sort);
    };

    const filterProducts = (filters) => {
      const category = filters.length ? filters[0] : null;
      productStore.setCategory(category);
    };

    const addToCart = (product) => {
      // Add product to cart
    };

    return {
      productStore,
      currentSort,
      currentFilters,
      sortProducts,
      filterProducts,
      addToCart,
    };
  },
});
</script>
