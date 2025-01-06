<template>
    <div class="overflow-hidden w-screen h-screen flex flex-row">
        <MainWindowLeftMenu></MainWindowLeftMenu>
        <div class="w-full">
            <MainWindowTopBar></MainWindowTopBar>
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="css" scoped>
.left-menus .item {
    background-color: rgba(77, 77, 77,.2);
}
.left-menus .icon {
    background: url("../public/favicon-light.png");
    background-size: cover;
}

</style>