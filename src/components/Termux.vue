<style scoped>
body {
  background-color: darkGray;
}

.title {
  height: 40px;
  background-color: #E8E8E8;
  border-radius: 15px 15px 0 0;
}

.dialog {
  width: 500px;
  height: 250px;
  border-radius: 15px;
  background-color: gray;
  box-shadow: 0px 1px 40px 0px #222222;
}

.close {
  background-color: #FF5F57;
  width: 16px;
  height: 16px;
  border-radius: 10px;
  float: left;
  margin: 12px 0 12px 15px;
}

.hide {
  background-color: #FEBC2E;
  width: 16px;
  height: 16px;
  border-radius: 10px;
  float: left;
  margin: 12px 0 12px 10px;
}

.resize {
  background-color: #28C840;
  width: 16px;
  height: 16px;
  border-radius: 10px;
  float: left;
  margin: 12px 0 12px 10px;
}

.name {
  color: colorName;
  font-family: Arial;
  font-size: 17px;
  float: left;
  margin: -8px 90px;
}
</style>
<script setup lang="ts">
const cmd = ref('')
</script>
<template>
    <div class="dialog  cursor-pointer">
  <div class="title">
    <div class="buttons">
      <div class="close"></div>
      <div class="hide"></div>
      <div class="resize"></div>
    </div>
    <div class="name pt-4"><p text-subtitle>AioFauna Cli</p></div>
  </div>
  <p class="font-mono text-#ccff00 p-2">
  <input type="text" bg-transparent w-full no-outline v-model="cmd"/>
</p>
</div>
</template>