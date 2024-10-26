<template>
  <div>
    <h1>비디오 리스트</h1>
    <ul>
      <li
        v-for="video in videos"
        :key="video.id"
        @click="goToVideoDetail(video.id)"
      >
        <h3>{{ video.title }}</h3>
        <p>{{ video.description }}</p>
      </li>/
    </ul>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      videos: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:3000/videos");
      this.videos = response.data;
    } catch (error) {
      console.error("비디오 리스트 얻기 실패:", error);
    }
  },
  methods: {
    goToVideoDetail(id) {
      this.$router.push({ name: "VideoDetail", params: { id } });
    },
  },
};
</script>
