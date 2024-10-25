<template>
  <div id="app">
    <button @click="goTo('/login')">로그인</button>
    <button @click="goTo('/register')">회원가입</button>
    <button @click="goTo('/upload-video')">비디오 업로드</button>
    <button @click="goTo('/videos')">비디오 리스트</button>
  </div>
  <router-view />
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
button {
  padding: 10px;
  cursor: pointer;
}
</style>
