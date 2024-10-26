<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="유저네임" required />
      <input
        v-model="password"
        type="password"
        placeholder="패스워드"
        required
      />
      <button type="submit">로그인</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost:3000/users/login", {
          username: this.username,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        this.$router.push("/profile");
      } catch (error) {
        alert("비밀번호 또는 아이디가 정확하지 않습니다.");
        console.error("로그인 실패: ", error);
      }
    },
  },
};
</script>
