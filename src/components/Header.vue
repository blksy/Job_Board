<template>
  <header>
    <h1 class="header__title">
      FIND YOUR <br /><span>NEW PERFECT</span><br />
      JOB TODAY
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  width: 100%;
  height: 500px;
  background-image: url('../assets/job.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
}

.header__title {
  position: absolute;
  top: 7rem;
  left: 3rem;
  letter-spacing: 3;
  font-weight: bolder;
  font-size: 50px;
  color: white;
  text-shadow: 4px 2px 0px rgba(0, 0, 0, 0.2);
}
.header__title > span {
  color: chartreuse;
}
</style>
