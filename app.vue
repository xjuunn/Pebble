<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { webviewWindow } from '@tauri-apps/api'
import { Effect, EffectState } from "@tauri-apps/api/window";

onMounted(() => {
  webviewWindow.getCurrentWebviewWindow().setEffects({
    effects: [Effect.Mica],
    color: "#000",
    state: EffectState.Active
  })
})
</script>
<style>
body,
html {
  background-color: transparent !important;
}

.glass {
  background-image: none;
}

.input-no-outline {
  outline: none !important;
}
</style>