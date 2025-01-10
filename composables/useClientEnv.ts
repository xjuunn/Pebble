import { type, type OsType } from '@tauri-apps/plugin-os'
export const useClientEnv = defineStore("clientenv", () => {
    let _isTauri: Ref<Boolean | null> = ref(null); // 是否是Tauri客户端
    let _osType: Ref<OsType | null> = ref(null); // 客户端类型
    let _isWindow: Ref<Boolean | null> = ref(null); // 是否是窗口
    let _isMobile: Ref<Boolean | null> = ref(null);
    onMounted(() => {
        const { isMobile } = useDevice()
        _isMobile.value = isMobile
        // @ts-ignore
        _isTauri.value = window.__TAURI_INTERNALS__ ? true : false;
        if (!_isTauri.value) return;
        _osType.value = type();
        _isWindow.value = ["linux", "windows", "macos"].includes(_osType.value + '');
    })
    const osType = () => _osType.value;
    const isTauri = () => _isTauri.value;
    const isWindow = () => _isWindow.value;
    const isMobile = () => _isMobile.value;

    return {
        isTauri,
        osType,
        isWindow,
        isMobile,
    }
})
