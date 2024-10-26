<template>
  <div>
    <h1>Membership Registration</h1>
    <form @submit.prevent="register">
      <input v-model="username" type="text" placeholder="유저네임" required />
      <input
        v-model="password"
        type="password"
        placeholder="패스워드"
        required
      />
      <input v-model="nickname" type="text" placeholder="닉네임" required />
      <button type="submit">가입</button>
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
      nickname: "",
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/register",
          {
            username: this.username,
            password: this.password,
            nickname: this.nickname,
          }
        );
        alert("축하드립니다. 회원가입 성공!");
        this.$router.push("/login");
      } catch (error) {
        console.error("회원가입 실패: ", error);
        alert("회원가입 실패. ㅠ");
      }
    },
  },
};
</script>
