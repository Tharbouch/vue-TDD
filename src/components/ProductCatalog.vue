<template>
  <div>
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToCart"
    />
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>
