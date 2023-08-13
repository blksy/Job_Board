<template>
  <main class="listing">
    <ol>
      <li class="list-item">
        <!--<router-link to=""></router-link> router link to a single job details, to be added-->
      </li>
    </ol>
  </main>
</template>
<script>
export default {
  name: 'JobsListings'
}
</script>
<style>
.listing {
  display: flex;
  flex-grow: auto;
  background-color: whitesmoke;
  padding: 32px;
  width: 100%;
}

.list-item {
  margin-bottom: 28px;
}
</style>
