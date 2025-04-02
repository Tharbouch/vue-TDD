<template>
  <div class="cart-summary">
    <h2>Cart Summary</h2>
    <p>Subtotal: ${{ subtotal.toFixed(2) }}</p>
    <p>Tax (8%): ${{ tax.toFixed(2) }}</p>
    <p>
      <strong>Grand Total: ${{ grandTotal.toFixed(2) }}</strong>
    </p>
    <button class="checkout-button">Checkout</button>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cartStore";

export default {
  name: "CartSummary",
  computed: {
    subtotal() {
      return this.cartStore.subtotal;
    },
    tax() {
      return this.cartStore.tax;
    },
    grandTotal() {
      return this.cartStore.grandTotal;
    },
  },
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
};
</script>

<style scoped>
.cart-summary {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-top: 1rem;
}
.checkout-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
