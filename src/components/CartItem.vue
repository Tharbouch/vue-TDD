<template>
  <div class="cart-item">
    <img :src="item.product.image" alt="Product Image" class="product-image" />
    <div class="item-details">
      <h3 class="product-name">{{ item.product.name }}</h3>
      <p class="product-price">${{ item.product.price.toFixed(2) }}</p>
      <div class="quantity-controls">
        <label for="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          v-model.number="quantity"
          @change="updateQuantity"
          min="1"
        />
      </div>
      <p class="item-total">
        Total: ${{ (item.product.price * item.quantity).toFixed(2) }}
      </p>
    </div>
    <button class="remove-button" @click="removeItem">Remove</button>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: this.item.quantity,
    };
  },
  methods: {
    updateQuantity() {
      this.$emit("update-quantity", this.item.product.id, this.quantity);
    },
    removeItem() {
      this.$emit("remove-item", this.item.product.id);
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
}
.product-image {
  width: 80px;
  height: 80px;
  margin-right: 1rem;
}
.item-details {
  flex: 1;
}
.quantity-controls {
  margin-top: 0.5rem;
}
.remove-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
