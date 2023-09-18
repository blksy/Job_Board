<template>
  <section class="top" id="companies">
    <h1 class="top-title">Top recruiting companies</h1>
    <p class="top-desc">
      Here You can see our top recruiting companies, thier average salary, and current vacancies.
    </p>
    <div class="top-wrapper">
      <div class="top-card">
        <p class="top-name">{{}}</p>
        <p class="jobs nuumber">{{ company.count }}</p>
        <p>Average Salary:{{ company.average_salary }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TopCompanies',
  props: {
    company: Object
  }
}
</script>
<style scoped>
p {
  font-size: 20px;
  font-weight: bold;
}
.top {
  width: 100%;
  height: auto;
  text-align: center;
  padding: 3rem 1rem;
  background-color: white;
}
.top-title {
  padding-top: 0;
  margin-bottom: 0.5rem;
  letter-spacing: 1.5;
  font-size: 36px;
}
.top-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  align-items: center;
  width: 100%;
  padding: 2%;
}
.top-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 120%;
  width: 90%;
  background-color: greenyellow;
  border: 2px solid;
  border-radius: 10%;
  box-shadow: rgba(0, 0, 0, 0.16) 15px 15px 15px;
}
.top-card:hover {
  cursor: pointer;
  transition: 1s;
  transform: translateY(-1.5rem) scale(1.03);
}
.top-name {
  padding-top: 20px;
}
.top-desc {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
