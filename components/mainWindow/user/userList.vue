<template>
  <div class="userlist w-full h-full overflow-auto pb-16">
    <ul class="list  rounded-box shadow-md">
      <li class="list-row hover:bg-[rgba(255,255,255,.04)]" v-for="item in 2">
        <div><img class="size-10 rounded-box" src="https://lh3.googleusercontent.com/-DcudbFIYkvQ/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkzuHChdIqgirQyfHTX-o_93e5orQ/photo.jpg?sz=46" /></div>
        <div>
          <div class="cursor-default line-clamp-1">Junhsiun</div>
          <div class="text-xs opacity-60 cursor-default line-clamp-2">你在吗？</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.userlist {
  scrollbar-width: none;
}
</style>
