<template>
  <div>
    <input placeholder="peerid" v-model="inputtext" type="text" class="input input-primary"> <br><br>
    <input placeholder="消息" v-model="sendtext" type="text" class="input input-primary"> <br><br>

    <button class="btn btn-primary" @click="connect">连接</button>
    <button class="btn btn-primary" @click="send">发送消息</button>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout: 'main-window'
})
let inputtext = ref('');
let sendtext = ref('');

let peer = BasePeer.getInstance();
peer.on('open', (id) => {
  console.log(id);
})
peer.on('error', (error) => {
  console.log("错误：", error);
})

const connManager = P2PConnectManager.getInstance();
function connect() {
  connManager.connect(inputtext.value)
}
function send() {
  const msg = new TestMessage(sendtext.value, inputtext.value);
  P2PMessageSender.sendMessageByPeerId(inputtext.value, msg);
}

</script>
