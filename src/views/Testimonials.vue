<template>
  <MainNav />
  <div class="section-title"><u>Testimonials</u></div>
  <section class="testimonials">
    <Testimonial name="John Doe" job="Web Developer" title="Amazing Experience" />
    <Testimonial
      name="John Doe"
      job="Junior Frontend Developer"
      title="Got my job in three weeks!"
    />
    <Testimonial name="John Doe" job="Java Developer" title="Finding a job was never easier!" />
    <Testimonial name="John Doe" job="Project Manager" title="You have to try this" />
    <Testimonial name="John Doe" job="Data Analyst" title="Good Experience" />
    <Testimonial name="John Doe" job="Product Owner" title="Very easy to use!" />
  </section>
</template>

<script>
import Testimonial from '../components/Testimonial.vue'
import MainNav from '../components/MainNav.vue'
export default {
  components: { MainNav, Testimonial }
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
.testimonials {
  display: grid;
  grid-template-columns: repeat(auto-fit, 35rem);
  gap: 1.5rem;
  align-items: flex-start;
  justify-content: center;
}

.testimonials {
  background-color: white;
  box-shadow: 10px 5px 5px grey;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 2rem;
  font-size: 1.5rem;
  transition: transform 0.3s;
}
</style>
