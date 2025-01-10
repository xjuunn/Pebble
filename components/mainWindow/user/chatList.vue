<template>
    <div class="pl-5 pe-5 h-full w-full overflow-y-auto pb-24 chatlist">
        <div class="chat chat-start" v-for="item in 20">
            <div class="chat-image avatar">
                <div class="w-10 rounded-full">
                    <img alt="touxiang"
                        src="https://lh3.googleusercontent.com/-DcudbFIYkvQ/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkzuHChdIqgirQyfHTX-o_93e5orQ/photo.jpg?sz=46" />
                </div>
            </div>
            <div class="chat-header">
                Junhsiun
                <time class="text-xs opacity-50">12:45</time>
            </div>
            <div class="chat-bubble">你在吗？</div>
            <div class="chat-footer opacity-50">送达</div>
        </div>
        <div class="chat chat-end">
            <div class="chat-image avatar">
                <div class="w-10 rounded-full">
                    <img alt="touxiang"
                        src="https://lh3.googleusercontent.com/-DcudbFIYkvQ/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkkzuHChdIqgirQyfHTX-o_93e5orQ/photo.jpg?sz=46" />
                </div>
            </div>
            <div class="chat-header">
                xjuunn
                <time class="text-xs opacity-50">12:46</time>
            </div>
            <div class="chat-bubble">咋了</div>
            <div class="chat-footer opacity-50">已读 12:46</div>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="css" scoped>
.chatlist {
    scrollbar-width: none;
}
</style>