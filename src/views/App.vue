<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'

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

for (let i = 0; i < 99; i++)
  phrases.push(sample)

const search = ref<string | null>(null)
const filteredPhrases = computed(() => phrases.filter(p => p.word.toLowerCase().includes(search.value?.toLowerCase() || '')))

const selectedPhrase = ref<Phrase | null>(null)
const openDetails = ref(false)

async function handleItemClick(selected: Phrase) {
  selectedPhrase.value = selected
  await nextTick()
  openDetails.value = true
}
</script>

<template>
  <div class="max-w-md w-full">
    <!-- fixed title and search -->
    <div class="fixed top-0 left-1/2 -translate-x-1/2 max-w-md w-full bg-default flex flex-col space-y-5 pt-10 px-5 pb-5 border-b border-accented">
      <h1 class="text-center text-xl">
        لغتنامه بازرگانی بین الملل
      </h1>

      <UInput
        v-model="search"
        size="xl"
        variant="subtle"
        placeholder="eg: Letter of Credit"
      />
    </div>

    <!-- items -->
    <div class="flex flex-col w-full space-y-5 pt-43 pb-10 px-5">
      <UButton
        v-for="(phrase, i) in filteredPhrases"
        :key="i"
        :label="phrase.word"
        size="xl"
        variant="subtle"
        @click="handleItemClick(phrase)"
      />

      <UCard
        v-if="!filteredPhrases.length"
        variant="ghost"
      >
        <div
          class="text-center"
          dir="rtl"
        >
          موردی یافت نشد...
        </div>
      </UCard>

      <!-- details -->
      <UModal
        v-model:open="openDetails"
        :ui="{ header: 'justify-between' }"
      >
        <template #header>
          <div class="text-highlighted font-semibold">
            {{ selectedPhrase?.word || '-' }}
          </div>

          <UButton
            class="justify-center size-8"
            size="md"
            variant="ghost"
            label="X"
            @click="openDetails = false"
          />
        </template>

        <template #body>
          <div
            class="space-y-4"
            dir="rtl"
          >
            <UCard variant="subtle">
              <div class="mb-2 text-sm">
                مخفف:
              </div>
              <p dir="ltr">
                {{ selectedPhrase?.abbreviation || '-' }}
              </p>
            </UCard>

            <UCard variant="subtle">
              <div class="mb-2 text-sm">
                تعریف انگلیسی:
              </div>
              <p dir="ltr">
                {{ selectedPhrase?.english_definition || '-' }}
              </p>
            </UCard>

            <UCard variant="subtle">
              <div class="mb-2 text-sm">
                معنی فارسی:
              </div>
              <p>{{ selectedPhrase?.persian_meaning || '-' }}</p>
            </UCard>

            <UCard variant="subtle">
              <div class="mb-2 text-sm">
                مثال:
              </div>
              <p dir="ltr">
                {{ selectedPhrase?.example || '-' }}
              </p>
            </UCard>

            <UCard variant="subtle">
              <div class="mb-2 text-sm">
                دسته بندی:
              </div>
              <p dir="ltr">
                {{ selectedPhrase?.category || '-' }}
              </p>
            </UCard>

            <UCard variant="subtle">
              <div class="mb-2 text-sm">
                واژه های مرتبط:
              </div>
              <p dir="ltr">
                {{ selectedPhrase?.related_terms || '-' }}
              </p>
            </UCard>

            <UCard variant="subtle">
              <div class="mb-2 text-sm">
                توضیحات:
              </div>
              <p>{{ selectedPhrase?.notes || '-' }}</p>
            </UCard>
          </div>
        </template>
      </UModal>
    </div>
  </div>
</template>
