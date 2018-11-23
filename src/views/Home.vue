<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>

<script>
// @ is an alias to /src

const API_URL = 'http://localhost:4000/messages';

export default {
  name: 'home',
  data: () => ({
    messages: [],
  }),
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then((result) => {
        this.messages = result;
      });
  },
};
</script>
