<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>

export default {
  name: "About",
  data() {
    return {
      msg: "ffs"
    };
  }
}
</script>
