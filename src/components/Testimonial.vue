<template>
  <div class="box-container">
    <div class="box">
      <h3 class="title">{{ title }}</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique saepe, iure quidem
        perspiciatis omnis laboriosam unde temporibus atque impedit consequuntur!
      </p>
      <div class="user">
        <div>
          <h3>{{ name }}</h3>
          <span>{{ job }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SingleTestimonial',
  props: {
    name: String,
    job: String,
    title: String
  }
}
</script>
<style>
.testimonials .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 35rem);
  gap: 1.5rem;
  align-items: flex-start;
  justify-content: center;
}

.testimonials .box-container .box {
  background-color: white;
  box-shadow: 10px 5px 5px grey;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 2rem;
  font-size: 1.5rem;
  transition: transform 0.3s;
}
.box:hover {
  cursor: pointer;
  transform: translateY(-1.5rem) scale(1.03);
}
p {
  padding-bottom: 10px;
}
.testimonials .box-container .box .title p {
  text-align: right;
  font-size: 1.6rem;
  line-height: 1.8;
}
.testimonials .box-container .box .user {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.testimonials .box-container .box .user img {
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  object-fit: cover;
}
.testimonials .box-container .box .user h3 {
  font-size: 2rem;
  color: black;
  margin-bottom: 0.5rem;
}
</style>
