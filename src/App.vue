<script setup lang="ts">
import { ref } from 'vue'
import { Card, Button, Badge, Pagination, Modal } from '@gsa/vue-ui'

const showModal = ref(false)
const currentPage = ref(1)
</script>

<template>
  <div class="min-h-screen p-8">
    <div class="max-w-4xl mx-auto space-y-8">
      
      <Card class="p-6" title="Test Components">
        <div class="space-y-4">
          <Button @click="showModal = true" label="Open Modal" primary />

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

      <Modal :visible="showModal" @close="showModal = false" title="Test Modal">
        <p>This is a modal from the GSA Vue UI package!</p>
        <template #footer>
          <Button @click="showModal = false" label="Close" />
        </template>
      </Modal>
    </div>
  </div>
</template>