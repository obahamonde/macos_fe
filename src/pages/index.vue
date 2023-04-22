
<script setup>
const router = useRouter()
</script>

<template>
<nav class="dock">
  <div class="item col center">
    <div m-2>
    <Icon icon="logos:docker-icon" x2 cp scale text-white
    @click="router.push('/stack')"
    />
    <p>Your Stack</p>
  </div>
  </div>
  <div class="item col center">
    <div m-2>
    <Icon icon="mdi-rocket" x2 cp scale text-white
    @click="router.push('/pipelines')"
    />
    <p>Deployments</p>
  </div>
</div>
<div m-2>
  <div class="item col center">
    <Icon icon="logos:visual-studio-code" x2 cp scale text-white
      @click="router.push('/code')"
    />
    <p>Code Editor</p>
  </div>
</div>
<div m-2>
  <div class="item col center">
    <Icon icon="mdi-cog" x2 cp scale text-gray-300
    @click="router.push('/settings')"
    />
    <p>Settings</p>
  </div>
</div>
</nav></template>
<style scoped>.dock {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  padding: 10px 5px;
  border-radius: 14px;
  background-color: rgb(36 36 36);
  border: 1px solid #565656;
  box-shadow: 0px 0px 0px 1px 3f3f3f;
}

.item {
  position: relative;
}

.item img {
  width: 100%;
}

.item p {
  display: none;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  margin: 0 0 0 5px;
  padding: 3px 10px;
  background: #333;
  border-radius: 6px;
  border: 1px solid #565656;
  box-shadow: 0px 0px 0px 1px 3f3f3f;
  white-space: nowrap;
  color: #ddd;
}

.item:hover p {
  display: block;
}

</style>