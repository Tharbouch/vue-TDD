import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
    state: () => ({
        items: [],
        totalItems: 0,
        subtotal: 0,
        tax: 0,
        grandTotal: 0,
    }),
    actions: {
        setTotalItems(quantity) {
            this.totalItems += quantity;
        },
        addToCart(product) {
            const item = this.items.find((item) => item.product.id === product.id);
            if (item) {
                item.quantity++;
            } else {
                this.items.push({ product: product, quantity: 1 });
            }
            this.subtotal += product.price;
            this.setTotalItems(1);
            this.calculateGrandTotal();

        },
        updateQuantity(productId, quantity) {
            const item = this.items.find((item) => item.product.id === productId);
            this.setTotalItems(quantity - item.quantity);
            item.quantity = quantity;
            this.calculateGrandTotal();
        },
        removeFromCart(productId) {
            const item = this.items.find((item) => item.product.id === productId);
            this.setTotalItems(-item.quantity);
            this.items = this.items.filter((item) => item.product.id !== productId);
            this.calculateGrandTotal();
        },
        clearCart() {
            this.items = [];
            this.totalItems = 0;
            this.subtotal = 0;
            this.tax = 0;
            this.grandTotal = 0;
        },
        calculatesubtotal() {
            this.subtotal = this.items.reduce(
                (acc, item) => acc + item.product.price * item.quantity,
                0
            );
        },
        calculateTax() {
            this.tax = this.subtotal * 0.08;
        },
        calculateGrandTotal() {
            this.calculatesubtotal();
            this.calculateTax();
            this.grandTotal = this.subtotal + this.tax;
        },
    },
});
