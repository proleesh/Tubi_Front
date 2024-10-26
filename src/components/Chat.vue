<template>
  <div class="chat-container">
    <h1>채팅방</h1>
    <div class="messages">
      <div v-for="(msg, index) in messages" :key="index">
        <strong>{{ msg.sender }}:</strong> {{ msg.message }}
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <input v-model="message" placeholder="메시지 입력..." required />
      <button type="submit">발송</button>
    </form>
  </div>
</template>

<script>
import { io } from "socket.io-client";
export default {
  data() {
    return {
      socket: null,
      messages: [],
      message: "",
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

    this.socket = io("http://localhost:3000");
    this.socket.on("message", (payload) => {
      this.messages.push(payload);
    });
    this.fetchMessages();
  },
  methods: {
    async fetchMessages() {
      try {
        const response = await fetch("http://localhost:3000/chat/messages");
        const data = await response.json();
        this.messages = data;
      } catch (error) {
        console.error("역사 기록 얻기 실패: ", error);
      }
    },
    sendMessage() {
      if (this.message.trim() !== "") {
        this.socket.emit("message", {
          sender: this.user.nickname,
          message: this.message,
        });
        this.message = "";
      }
    },
  },
};
</script>
<style scoped>
.chat-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}
.messages {
  height: 300px;
  overflow-y: scroll;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  padding: 10px;
  background-color: white;
}
input {
  width: calc(100% - 80px);
  margin-right: 10px;
  padding: 10px;
}
button {
  padding: 10px;
}
</style>
