<template>
    <main>
        <div class="page-wrapper column-view">
            <ul v-for="item in products" :key="item.name" class="list">
                <p><strong>{{ item.name }}</strong></p>
                <li>
                    <p v-if="item.taxable">Total amount before Tax: <strong>{{ calculatebeforeTax(item.price) }} EGP</strong></p>
                    <p v-else>Total amount before Tax: <strong>{{ item.price }} EGP</strong></p>
                </li>
                <li>
                    <p v-if="item.taxable">Total amount of discount: <strong> 20% </strong></p>
                    <p v-else>Total amount of discount: <strong> 0% </strong></p>
                </li>
                <li>
                    <p>Total amount after discount: <strong> {{ calculateAfterDiscount(item.price) }} Egp</strong></p>
                </li>
                <li>
                    <p>The total SST (6%): <strong> {{ calculateSST(item.price) }} EGP</strong></p>
                </li>
                <li>
                    <p>The total service tax (10%): <strong>{{ calculateTotalServiceTax(item.price) }} EGP</strong></p>
                </li>

                <!-- <li>
                <p>Total amount after discount <strong></strong></p>
                </li>
                <div>
                <p>The total SST (6%) <strong></strong></p>
                </div>
                <div>
                
                </div> -->
            </ul>
        </div>

    </main>

</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

interface Product {
  name: string;
  price: number;
  taxable: boolean;
}

export default defineComponent({
  setup() {
    // Define an array of products using ref
    const products = ref<Product[]>([
      { name: 'Shirt', price: 1577, taxable: true },
      { name: 'Pants', price: 2399, taxable: false },
      { name: 'shoes', price: 3500, taxable: true }

    ]);

    // Method to calculate price before tax by removing 10%
    function calculatebeforeTax(price: number, percentage: number = 10): number {
      return Math.round(price * (1 - percentage / 100));
    };

    // Method to calculate price after apply discount if it is taxble
    function calculateAfterDiscount(price: number, percentage: number = 20): number {
      return Math.round(price - (price * percentage / 100));
    };

    function calculateSST(price: number, percentage: number = 6): number {
        return Math.round(price + (price * percentage) / 100);
    };
    // Method to calculate price with tax by adding 10%
    function calculateTotalServiceTax(price: number, percentage: number = 10): number {
        return Math.round(price + (price * percentage) / 100);
    };

    return {
      products,
      calculatebeforeTax,
      calculateAfterDiscount,
      calculateSST,
      calculateTotalServiceTax
    };
  }
});

</script>
<style scoped>
    main{
        display: flex;
        justify-content: center;
        width: 100%;
    }
    
    
</style>