<template>
  <div class="product-catalog">
    <div class="product-controls">
      <ProductFilter
        :categories="productStore.categories"
        :selectedCategory="productStore.selectedCategory"
        @category-change="filterProducts"
        @search-change="searchProducts"
      />
      <ProductSort
        :currentSort="productStore.sortOption"
        @sort-change="sortProducts"
      />
    </div>
    <div v-if="productStore.filteredProducts.length === 0" class="no-products">
      <p>No products found</p>
    </div>
    <div v-else class="product-grid">
      <ProductCard
        v-for="product in productStore.filteredProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useProductStore } from "../stores/productStore";
import { useCartStore } from "../stores/cartStore";
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
    const cartStore = useCartStore();

    const sortProducts = (sort) => {
      productStore.setSortOption(sort);
    };

    const filterProducts = (category) => {
      productStore.setCategory(category);
    };

    const searchProducts = (query) => {
      productStore.setSearchQuery(query);
    };

    const handleAddToCart = (product) => {
      cartStore.addToCart(product);
    };

    return {
      productStore,
      sortProducts,
      filterProducts,
      searchProducts,
      handleAddToCart,
    };
  },
});
</script>

<style scoped>
.product-catalog {
  width: 100%;
}

.product-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.no-products {
  text-align: center;
  padding: 2rem;
  background-color: #f8f8f8;
  border-radius: 8px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
}

@media (min-width: 40rem) {
  .product-controls {
    flex-direction: row;
    justify-content: space-between;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 64rem) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 80rem) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
