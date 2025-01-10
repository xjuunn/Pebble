<template>
    <div class="topbar w-full h-12 flex items-center pl-3 pe-3" data-tauri-drag-region>
        <div class="flex-1" data-tauri-drag-region>
            <span class="text-sm">私信</span>
        </div>
        <label
            class="input input-no-outline focus:border-0 input-sm w-60 input-bordered items-center gap-2 bg-transparent hidden sm:flex">
            <input type="text" class="grow" placeholder="搜索" />
            <Icon class="opacity-50" name="famicons:search-sharp"></Icon>
        </label>
        <ul class="menu menu-horizontal menu-md rounded-box" data-tauri-drag-region>
            <li class="inline sm:hidden">
                <a>
                    <Icon class="w-4 h-4 opacity-50" name="famicons:search-sharp"></Icon>
                </a>
            </li>
            <li>
                <a @click="toggleTheme">
                    <Icon class="w-4 h-4 opacity-50" :name="`mingcute:${isDark ? 'sun' : 'moon'}-line`"></Icon>
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
            <li v-show="isWindow()">
                <a @click="pin">
                    <Icon class="w-4 h-4 opacity-50" :class="isAlwaysOnTop ? 'opacity-100' : 'opacity-50'"
                        name="majesticons:pin-line"></Icon>
                </a>
            </li>
        </ul>
        <div class="ml-5 flex gap-3 items-center" v-show="isWindow()">
            <Icon class="cursor-pointer opacity-50 hover:opacity-100 w-5 h-5" name="iconamoon:sign-minus"
                @click="() => webviewWindow.getCurrentWebviewWindow().minimize()"></Icon>
            <Icon class="cursor-pointer opacity-50 hover:opacity-100 w-5 h-4" name="iconamoon:player-stop-light"
                @click="() => webviewWindow.getCurrentWebviewWindow().maximize()"></Icon>
            <Icon class="cursor-pointer opacity-50 hover:opacity-100 w-5 h-5" name="iconamoon:close-fill"
                @click="() => webviewWindow.getCurrentWebviewWindow().close()"></Icon>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { webviewWindow } from '@tauri-apps/api'
const { isWindow, isTauri } = useClientEnv();
const { isDark, onThemeChange, toggleTheme } = useThemeStore();
let isAlwaysOnTop = ref(false);
onThemeChange((b) => {
    if (isTauri()) webviewWindow.getCurrentWebviewWindow().setTheme(b ? 'dark' : 'light');
    else document.getElementsByTagName('html')[0].setAttribute('data-theme', b ? 'dark' : 'light');
})
async function pin() {
    await webviewWindow.getCurrentWebviewWindow().setAlwaysOnTop(!isAlwaysOnTop.value);
    isAlwaysOnTop.value = !isAlwaysOnTop.value;
}
</script>
<style lang="css" scoped>
.topbar {
    border-bottom: 1px solid #77777720;
}
</style>