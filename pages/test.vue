<template>
  <div>
    <input v-model="targetid" placeholder="连接对象" class="input input-primary" /> <br>
    <button class="btn btn-primary" @click="connect">连接</button>
    <button class="btn btn-primary" @click="find">查找</button>
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
onMounted(() => {
  peer = new BasePeerClient();
  connectManager = new BasePeerConnectManager(peer);
})

function connect() {
  connectManager.connect(targetid.value)
}
function find(){
  let conn = connectManager.findConnectByPeerID(targetid.value);
  console.log("查找结果：",conn);
  
}

</script>
