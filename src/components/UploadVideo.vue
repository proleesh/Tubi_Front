<template>
  <div>
    <h1>Video Upload</h1>
    <input v-model="title" placeholder="동영상 제목" />
    <textarea v-model="description" placeholder="동영상 소개"></textarea>
    <input type="file" @change="selectFile" />
    <button @click="uploadVideo">Upload</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      description: "",
      file: null,
    };
  },
  methods: {
    selectFile(event) {
      this.file = event.target.files[0];
    },
    async uploadVideo() {
      if (!this.file) {
        alert("파일을 선택하시오");
        return;
      }
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("title", this.title);
      formData.append("description", this.description);

      try {
        await axios.post("http://localhost:3000/videos/upload", formData);
        alert("비디오 업로드 성공");
      } catch (error) {
        console.error("업로드 실패", error);
      }
    },
  },
};
</script>
