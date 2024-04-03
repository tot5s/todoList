<template>
    <div>
        <button type="button" class="bg-rose-300 p-1 rounded mr-2" @click="addNo">
            add++
        </button>
        <button type="button" class="bg-indigo-300 p-1 rounded" @click="subNo">
            subscript--
        </button>
        <div class="p-3">
            {{ idx }}
        </div>
        <div>
            <span>
                {{ msg }}
            </span>
        </div>
    </div>
</template>
<script setup lang="ts">

definePageMeta({
    layout: 'default',
})

const { $apis } = useNuxtApp()
const idx = ref(0)
const msg = ref('')

const addNo = () => {
    idx.value = $apis.clickEvent.addEvent(idx.value)
}

const subNo = () => {

    if(idx.value <= 0) {
        msg.value = '최소 0 이하로 내려갈 수 없습니다.'
        return;
    }
    idx.value = $apis.clickEvent.subEvent(idx.value)
}

</script>