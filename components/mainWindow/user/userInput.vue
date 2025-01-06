<template>
    <div class="w-full h-fit flex items-center justify-center">
        <button class="btn bg-transparent m-1 btn-circle">
            <Icon class="scale-150" name="lucide:plus"></Icon>
        </button>
        <div class="user-input flex-1  input-no-outline h-fit overflow-y-auto bg-[rgba(0,0,0,.2)] break-all rounded-lg p-3"
            style="max-height: 75px;" contenteditable="true">
        </div>
        <button class="btn bg-transparent m-1">
            <Icon class="scale-150" name="iconamoon:send-fill"></Icon>
        </button>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="css" scoped>
.user-input {
    scrollbar-width: none;
}
</style>