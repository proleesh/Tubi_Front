<template>
  <div>
    <h1>{{ video.title }}</h1>
    <video
      v-if="video.url"
      :src="video.url"
      controls
      autoplay
      style="width: 100%"
    ></video>
    <p>{{ video.description }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      video: {},
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        `http://localhost:3000/videos/${this.id}`
      );
      this.video = response.data;
    } catch (error) {
      console.error("비디오 얻기 실패:", error);
    }
  },
};
</script>
