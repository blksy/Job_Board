<template>
  <MainNav />
  <div class="section-title"><u>Testimonials</u></div>
  <section class="testimonials">
    <div class="box-container">
      <div class="box">
        <h3 class="title">Amazing results</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique saepe, iure quidem
          perspiciatis omnis laboriosam unde temporibus atque impedit consequuntur!
        </p>
        <div class="user">
          <img src="../assets/user1.jpg" alt="" />
          <div>
            <h3>John Doe</h3>
            <span>Web Designer</span>
          </div>
        </div>
      </div>
      <div class="box">
        <h3 class="title">Got my job in three weeks!</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique saepe, iure quidem
          perspiciatis omnis laboriosam unde temporibus atque impedit consequuntur!
        </p>
        <div class="user">
          <img src="../assets/user2.jpg" alt="" />
          <div>
            <h3>John Doe</h3>
            <span>Java Developer</span>
          </div>
        </div>
      </div>
      <div class="box">
        <h3 class="title">Very easy to use!</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique saepe, iure quidem
          perspiciatis omnis laboriosam unde temporibus atque impedit consequuntur!
        </p>
        <div class="user">
          <img src="../assets/user3.jpg" alt="" />
          <div>
            <h3>John Doe</h3>
            <span>Wordpress Developer</span>
          </div>
        </div>
      </div>
      <div class="box">
        <h3 class="title">Good experience</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique saepe, iure quidem
          perspiciatis omnis laboriosam unde temporibus atque impedit consequuntur!
        </p>
        <div class="user">
          <img src="../assets/user4.jpg" alt="" />
          <div>
            <h3>John Doe</h3>
            <span>Frontend Developer</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainNav from '../components/MainNav.vue'
export default {
  components: { MainNav }
}
</script>
<style scoped>
.section-title {
  font-size: 60px;
  font-weight: Bold;
  padding-left: 800px;
  padding-top: 20px;
  padding-bottom: 20px;
}
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
