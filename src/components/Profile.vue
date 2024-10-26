<template>
  <div>
    <h1>안녕! {{ user.nickname }}</h1>
    <p>사용자: {{ user.username }}</p>
    <button @click="logout">로그아웃</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },

  mounted() {
    const userData = localStorage.getItem("user");
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.$router.push("/login");
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
  },
};
</script>
