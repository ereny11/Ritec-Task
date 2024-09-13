<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <div  class="page-wrapper">
    <UButton class="modal-btn" label="Open" @click="isOpen = true" />

    <UModal v-model="isOpen" class="modal-box">
      <UContainer class="wrapper">
      <div class="p-4 modal-content">
        <div class="modal-title">
          Hello This is A Modal
        </div>
        
        <!-- <Placeholder class="h-48" /> -->
        <div>
          <button class="close-button" @click="isOpen = false">Close</button>
        </div>
        
      </div>
      </UContainer>
    </UModal>
  </div>
</template>


<!-- pages/index.vue
<template>
  <div class="page-wrapper">
    <button @click="showModal = true" class="modal-btn">Open Modal</button>

    <MyModal :isVisible="showModal" @update:isVisible="showModal = $event">
      <h2>Modal Title</h2>
      <p>This is the content of the modal.</p>
    </MyModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MyModal from '~/components/MyModal.vue';

export default defineComponent({
  components: {
    MyModal
  },
  setup() {
    const showModal = ref(false);

    return {
      showModal
    };
  }
});
</script>

<style scoped>
/* Add styles if needed */
</style> -->
