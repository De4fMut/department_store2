<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :viewBox="viewBox"
        :aria-labelledby="iconName"
        role="presentation"
    >
        <title :id="iconName" lang="en">{{ iconName }} icon</title>
        <g 
        :fill="iconColor" 
        :stroke="iconColor"
        >
            <slot />
        </g>
    </svg>
</template>

<script>
export default {
    name: 'icon-base',
    props: {
        iconName: {
            type: String,
            default: "catalog",
        },
        width: {
            type: [Number, String],
            default: 18,
        },
        height: {
            type: [Number, String],
            default: 18,
        },
        viewBox: {
            type: [Number, String],
            default: "0 0 24 24",
        },
        iconColor: {
            type: String,
            default: "currentColor",
        },
    },
};
</script>

<style scoped>
svg {
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
