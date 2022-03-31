<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Example",
    data() {
        return {
            count: 1
        }
    }
})
</script>

<template>
    {{ count.toFixed(2) }}
</template>