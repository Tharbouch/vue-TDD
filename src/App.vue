<template>
  <div class="app-container">
    <header>
      <h1>Vue E-commerce TDD Workshop</h1>
      <div class="cart-icon" @click="toggleCart">
        🛒 <span class="cart-count">{{ cartStore.totalItems }}</span>
      </div>
    </header>

    <main class="container">
      <ProductCatalog v-if="!showCart" />
      <ShoppingCart v-else />
    </main>

    <footer>
      <p>Vue TDD E-commerce Workshop</p>
    </footer>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useCartStore } from "./stores/cartStore";
import ProductCatalog from "./components/ProductCatalog.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

export default defineComponent({
  components: {
    ProductCatalog,
    ShoppingCart,
  },
  setup() {
    const cartStore = useCartStore();
    const showCart = ref(false);

    const toggleCart = () => {
      showCart.value = !showCart.value;
    };

    return {
      cartStore,
      showCart,
      toggleCart,
    };
  },
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Arial", sans-serif;
  color: #333;
  line-height: 1.6;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.app-container {
  min-height: 100vh;
}

header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  position: relative;
}

h1 {
  color: #2c3e50;
}

.cart-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 1.5rem;
}

.cart-count {
  background-color: #ff4d4d;
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  font-size: 0.9rem;
  margin-left: 0.5rem;
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.container {
  width: 100%;
}

@media (min-width: 40rem /* 640px */) {
  .container {
    max-width: 40rem /* 640px */;
  }
}

@media (min-width: 48rem /* 768px */) {
  .container {
    max-width: 48rem /* 768px */;
  }
}

@media (min-width: 64rem /* 1024px */) {
  .container {
    max-width: 64rem /* 1024px */;
  }
}

@media (min-width: 80rem /* 1280px */) {
  .container {
    max-width: 80rem /* 1280px */;
  }
}

@media (min-width: 96rem /* 1536px */) {
  .container {
    max-width: 96rem /* 1536px */;
  }
}

footer {
  text-align: center;
  margin-top: 40px;
  padding: 20px 0;
  border-top: 1px solid #eee;
  color: #666;
}
</style>
