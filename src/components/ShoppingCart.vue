<template>
  <div class="shopping-cart">
    <h1>Your Cart ({{ cartStore.totalItems }} items)</h1>
    <div v-if="cartStore.totalItems > 0">
      <div class="cart-items">
        <CartItem
          v-for="item in cartStore.items"
          :key="item.product.id"
          :item="item"
          @update-quantity="updateQuantity"
          @remove-item="removeItem"
        />
      </div>
      <CartSummary />
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cartStore";
import CartItem from "./CartItem.vue";
import CartSummary from "./CartSummary.vue";

export default {
  name: "ShoppingCart",
  components: {
    CartItem,
    CartSummary,
  },
  setup() {
    const cartStore = useCartStore();

    const updateQuantity = (productId, quantity) => {
      cartStore.updateQuantity(productId, quantity);
    };

    const removeItem = (productId) => {
      cartStore.removeFromCart(productId);
    };

    return {
      cartStore,
      updateQuantity,
      removeItem,
    };
  },
};
</script>
