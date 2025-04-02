<template>
  <div>
    <img :src="product.image" alt="product.name" />
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p>${{ product.price }}</p>
    <p>{{ product.quantity }}</p>
    <p>{{ product.rating }}</p>
    <button @click="emitAddToCart">Add to Cart</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const emitAddToCart = () => {
      emit("add-to-cart", props.product);
    };

    return {
      emitAddToCart,
    };
  },
});
</script>
