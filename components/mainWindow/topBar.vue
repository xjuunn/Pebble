<template>
    <div class="topbar w-full h-12 flex items-center pl-3 pe-3" data-tauri-drag-region>
        <div class="flex-1" data-tauri-drag-region>
            <span class="text-sm">私信</span>
        </div>
        <label class="input input-no-outline focus:border-0 input-sm w-60 input-bordered flex items-center gap-2 bg-transparent">
            <input type="text" class="grow" placeholder="搜索" />
            <Icon name="famicons:search-sharp"></Icon>
        </label>
        <ul class="menu menu-horizontal menu-md rounded-box" data-tauri-drag-region>
            <li>
                <a>
                    <Icon class="w-4 h-4 opacity-50" name="mingcute:sun-line"></Icon>
                </a>
            </li>
            <li>
                <a>
                    <Icon class="w-4 h-4 opacity-50" name="bx:notification"></Icon>
                </a>
            </li>
            <li>
                <a>
                    <Icon class="w-4 h-4 opacity-50" name="iconamoon:bookmark"></Icon>
                </a>
            </li>
            <li>
                <a>
                    <Icon class="w-4 h-4 opacity-50" name="majesticons:pin-line"></Icon>
                </a>
            </li>

        </ul>
        <div class="ml-5 flex gap-3 items-center">
            <Icon class="cursor-pointer opacity-50 hover:opacity-100 w-5 h-5" name="iconamoon:sign-minus"></Icon>
            <Icon class="cursor-pointer opacity-50 hover:opacity-100 w-5 h-4" name="iconamoon:player-stop-light"></Icon>
            <Icon class="cursor-pointer opacity-50 hover:opacity-100 w-5 h-5" name="iconamoon:close-fill"></Icon>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="css" scoped>
.topbar {
    border-bottom: 1px solid #77777720;
}
</style>