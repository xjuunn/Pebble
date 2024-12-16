<template>
  <div class="w-full h-screen flex items-center justify-center gap-2" data-tauri-drag-region>
    <button class="btn btn-primary" @click="test">test</button>
    <button class="btn btn-primary" @click="quit">断开</button>
  </div>
</template>

<script lang="ts" setup>
onMounted(async () => {
  console.log("初始化中")
  await PeerManager.initialize();
  console.log("初始化完成")
})

function test() {
  console.log(PeerManager.getPeerId())
}
function quit() {
  PeerManager.destroy();
}

</script>
<style>
body,
html {
  background-color: transparent !important;
}

.glass {
  background-image: none;
}
</style>