<template>
  <div>
    <input placeholder="peerid" v-model="inputtext" type="text" class="input input-primary"> <br><br>

    <button class="btn btn-primary" @click="connect">连接</button>
    <button class="btn btn-primary" @click="test">测试</button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'main-window'
})
let inputtext = ref('');

let peer = BasePeer.getInstance();
peer.on('open', (id) => {
  console.log(id);
})
peer.on('error', (error) => {
  console.log("错误：", error);
})

const connManager = ConnectManager.getInstance();
function connect() {
  connManager.connect(inputtext.value)
}
function test() {
  let dataconn = connManager.findFirstDataConn(inputtext.value);
  console.log(dataconn);
  

}

</script>
