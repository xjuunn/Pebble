<template>
  <div class="w-full h-full flex overflow-y-auto">
    <div class="userlist">
      <MainWindowUserList></MainWindowUserList>
    </div>
    <div class="flex-1">
      <MainWindowUserChat></MainWindowUserChat>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'main-window'
})

</script>
<style lang="css" scoped>
.userlist {
  border-right: 1px solid #77777720;
  width: 250px;
}
</style>
