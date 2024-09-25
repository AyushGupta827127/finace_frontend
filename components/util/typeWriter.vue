<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    secondText: {
        type: String,
        required: false,
        default: ''
    },
    multiple: {
        type: Boolean,
        required: false,
        default: false
    }
})
const typeWriter = ref(null)
const typeWriter2 = ref(null)

const count = ref(0)

const index = ref(0)

const textArr = props.text.split(':')

const type = () => {
    if (typeWriter.value === null ||typeWriter2.value === null)
        return
    if (count.value < props.text.length) {
        typeWriter.value.textContent = props.text.slice(0, count.value + 1)
        count.value++
        setTimeout(() => {
            type()
        }, 60)
    } else if (props.secondText && count.value < (props.text.length + props.secondText.length)) {
        typeWriter2.value.textContent = props.secondText.slice(0, count.value + 1 - props.text.length)
        count.value++
        setTimeout(() => {
            type()
        }, 60)
    }
}

const typeToFro = () => {
    if (typeWriter.value === null)
        return
    let text = textArr[index.value]
    if (count.value < text.length) {
        typeWriter.value.textContent = text.slice(0, count.value + 1)
        count.value++
        setTimeout(() => {
            typeToFro()
        }, 150)
    } else {
        typeWriter.value.textContent = text.slice(0, 2 * text.length - count.value)
        if (count.value === 2 * text.length) {
            count.value = 0
            index.value = (index.value + 1) % textArr.length
        } else {
            count.value++
        }
        setTimeout(() => {
            typeToFro()
        }, 100)
    }
}

onMounted(() => {
    if (props.multiple) {
        typeToFro()
    } else {
        type()
    }
})
</script>
<template>
    <div class="flex flex-wrap gap-2 justify-center">
        <div ref="typeWriter" class="text-white text-nowrap"></div>
        <div ref="typeWriter2" class="bg-gradient-to-br from-cyan-400 via-violet-800 to-fuchsia-800 text-transparent bg-clip-text font-bold text-nowrap"></div>
        <div v-if="multiple" class="bg-gradient-to-br from-cyan-400 via-violet-800 to-fuchsia-800 text-transparent bg-clip-text font-bold text-nowrap">|</div>
    </div>
</template>