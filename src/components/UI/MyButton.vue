<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "my-button",
};
</script>

<style scoped>
.btn {
    width: 120px;
    height: 20px;
    background: #2c3e50;
    border: 2px solid #00ad74;
    border-radius: 10px;
}
</style>
