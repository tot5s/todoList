<template>
    <div class="flex items-center justify-center">
        <div>
            초기 셋팅 테스트
       <div>
            <button type="button" class="p-1 rounded bg-black text-white mr-2" @click="test = true">
                on
            </button>
            <button type="button" class="p-1 rounded border-2" @click="test = false">
                off
            </button>
       </div>

        <setTest v-if="test"/>
        </div>
    </div>
</template>
<script setup lang="ts">

definePageMeta({
    layout: 'default',
})

const test = ref(false)
</script>