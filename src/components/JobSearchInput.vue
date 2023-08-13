<template>
  <div class="search-wrapper">
    <div class="search-box">
      <div class="search-card">
        <input type="text" class="search-input" placeholder="Job title or keywords" />
        <button class="search-button">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobSearchForm'
}
</script>

<style scoped>
.search-wrapper {
  width: 60%;
  margin: auto;
  min-width: 300px;
  height: 3.5rem;
  position: relative;
}

.search-box {
  width: 100%;
  position: absolute;
  background-color: greenyellow;
  box-shadow: rgba(2, 11, 20, 0.2) 0px 5px 15px;
  top: -45%;
  height: 100%;
  width: 100%;
}
.search-card {
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0.5rem;
}
.search-input {
  height: 100%;
  width: 100%;
  border: none;
  padding: 0.5rem;
}
.search-button {
  width: 200px;
  background: greenyellow;
  border: 1px solid black;
  border-radius: 0;
  color: black;
  cursor: pointer;
}
</style>
