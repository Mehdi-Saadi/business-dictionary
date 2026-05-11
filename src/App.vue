<script setup lang="ts">
import { computed, ref } from 'vue'

interface Phrase {
  word: string
  abbreviation?: string
  english_definition: string
  persian_meaning: string
  example: string
  category: string
  related_terms: string
  notes: string
}

const sample: Phrase = {
  word: 'Letter of Credit',
  abbreviation: 'L/C',
  english_definition: 'A finantial instrument issued by a bank guaranteeing that a seller will receive payment from a buyyer, provided that the seller meets the specified terms and submits the required documents withing a set timeframe.',
  persian_meaning: 'اعتبار اسنادی',
  example: 'The exporter requested a letter of credit to reduce the risk of non-payment in the international transaction.',
  category: 'International Trade / Trade Finance',
  related_terms: 'Bill of lading - Documentary Collection - Bank Guarantee',
  notes: 'اعتباری اسنادی برای کاهش ریسک بین طرفین بطور مداوم در مبادلات بین الملل مورد استفاده قرار میگیرد.',
}

const phrases: Phrase[] = []

for (let i = 0; i < 100; i++)
  phrases.push(sample)

const search = ref<string | null>(null)
const filteredPhrases = computed(() => phrases.filter(p => p.word.toLowerCase().includes(search.value?.toLowerCase() || '')))
</script>

<template>
  <UApp>
    <div class="min-h-dvh min-h-screen w-full flex flex-col items-center justify-center py-10">
      <div class="flex flex-col space-y-5 max-w-md w-full">
        <h1 class="text-center text-xl">
          لغتنامه بازرگانی بین الملل
        </h1>

        <UInput
          v-model="search"
          size="xl"
          variant="subtle"
          placeholder="eg: Letter of Credit"
        />

        <UButton
          v-for="(phrase, i) in filteredPhrases"
          :key="i"
          :label="phrase.word"
          size="xl"
          variant="subtle"
          class="cursor-pointer"
        />
      </div>
    </div>
  </UApp>
</template>
