<template>
    <div class="leftMenu flex flex-col" data-tauri-drag-region>
        <div class="w-full h-10 flex items-center justify-center" data-tauri-drag-region>
            <div class="icon w-6 h-6 mt-3" data-tauri-drag-region></div>
        </div>
        <ul class="menu menu-lg mt-1 rounded-box flex-1 gap-2 opacity-60" data-tauri-drag-region>
            <li>
                <a>
                    <Icon class="w-5 h-5" name="ri:message-3-fill"></Icon>
                </a>
            </li>
            <li>
                <a>
                    <Icon class="w-5 h-5" name="majesticons:user-line"></Icon>
                </a>
            </li>
            <li>
                <a>
                    <Icon class="w-5 h-5" name="fluent:remote-16-filled"></Icon>
                </a>
            </li>
            <li>
                <a>
                    <Icon class="w-5 h-5" name="fluent:cube-12-regular"></Icon>
                </a>
            </li>
            <li>
                <a>
                    <Icon class="w-5 h-5" name="lucide:plus"></Icon>
                </a>
            </li>
            <li>
                <a>
                    <Icon class="w-5 h-5" name="solar:menu-dots-bold"></Icon>
                </a>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="css" scoped>
.leftMenu {
    border-right: 1px solid #77777720;
}

.leftMenu .icon {
    background: url("../../public/favicon-light.png");
    background-size: cover;
    opacity: .1;
}
</style>
