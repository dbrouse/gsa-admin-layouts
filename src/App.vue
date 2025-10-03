<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(false)
const currentPage = ref(1)
</script>

<template>
  <div class="min-h-screen p-8">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Now using components WITHOUT the Ui prefix -->
      <Card class="p-6">
        <h2 class="text-xl font-semibold mb-4">Test Components</h2>
        
        <div class="space-y-4">
          <Button @click="showModal = true">
            Open Modal
          </Button>

          <Badge>Status Badge</Badge>
        </div>
      </Card>

      <Card class="p-6">
        <Pagination 
          :current-page="currentPage"
          :total-pages="10"
          @update:current-page="currentPage = $event"
        />
      </Card>

      <Modal v-model="showModal" title="Test Modal">
        <p>This is a modal from the GSA Vue UI package!</p>
        <template #footer>
          <Button @click="showModal = false">Close</Button>
        </template>
      </Modal>
    </div>
  </div>
</template>