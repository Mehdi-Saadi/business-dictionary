<script setup lang="ts">
</script>

<template>
  <UApp>
    <div class="min-h-dvh min-h-screen w-full flex flex-col items-center justify-center py-10">
      <div class="flex flex-col space-y-5 max-w-md w-full">
        <h1 class="text-center text-xl">
          لغتنامه بازرگانی بین الملل
        </h1>

        <UInput
          size="xl"
          variant="subtle"
          placeholder="eg: Letter of Credit"
        />

        <UButton
          v-for="n in 100"
          :key="n"
          :label="n"
          size="xl"
          variant="subtle"
        />
      </div>
    </div>
  </UApp>
</template>
