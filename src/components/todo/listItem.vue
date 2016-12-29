<template>
    <div>
        <input type="checkbox" v-model="item.finalized" />
        <span :class="{finalized: item.finalized}">{{item.text}}</span>
        <button @click="$emit('remove')">X</button>
    </div>
</template>

<script>
    export default {
      props: {
        item: Object,
      },
    };
</script>
