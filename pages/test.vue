<template>
  <div>
    <input v-model="targetid" placeholder="连接对象" class="input input-primary" /> <br>
    <input v-model="message" placeholder="消息" type="text" class="input input-primary"> <br>
    <button class="btn btn-primary" @click="connect">连接</button>
    <button class="btn btn-primary" @click="find">查找</button>
    <button class="btn btn-primary" @click="send">发送</button>
  </div>
</template>

<script lang="ts" setup>
import BasePeerClient from '../modules/connect/p2p/BasePeerClient';
import BasePeerConnectManager from '../modules/connect/p2p/BasePeerConnectManager';
definePageMeta({
  layout: 'main-window'
})
let peer: BasePeerClient;
let connectManager: BasePeerConnectManager;
let targetid = ref('');
let message = ref('');
onMounted(() => {
  peer = new BasePeerClient();
  connectManager = new BasePeerConnectManager(peer);
})

function connect() {
  connectManager.connect(targetid.value)
}
function find() {
  let conn = connectManager.findConnectByPeerID(targetid.value);
  console.log("查找结果：", conn);
}
function send() {
  let messageSender = new BasePeerMessageSender();
  let msg = new TextMessage(message.value, peer.id, targetid.value)
  messageSender.sendMessage(msg, connectManager);
}

</script>
