export const useThemeStore = defineStore("theme", () => {
    let _isDark: Ref<boolean> = ref(true);
    const _themeChangeCallbacks: Array<(isDark: boolean) => void> = [];
    const isDark = computed(() => _isDark);
    function setDark(b: boolean) {
        _themeChangeCallbacks.forEach((callback) => callback(b));
        _isDark.value = b;
    }
    function toggleTheme() {
        setDark(!_isDark.value)
    }
    function onThemeChange(callback: (isDark: boolean) => void) {
        _themeChangeCallbacks.push(callback);
    }

    return {
        isDark,
        setDark,
        onThemeChange,
        toggleTheme
    }
})