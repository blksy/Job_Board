<template>
  <main class="listing">
    <ol>
      <li class="list-item">
        <router-link :to="jobPageLink" class="link">
          <div class="job-box">
            <h2 class="job-title">{{ job.title }}</h2>
            <div class="job-content">
              <div>
                <span class="company">Company: {{ job.company.display_name }}</span>
              </div>
              <div>
                <span class="location">Location: {{ job.location.area.toString() }}</span>
              </div>
            </div>
          </div>
          <div class="qualifications-box">
            <div>
              <p>{{ job.description }}</p>
            </div>
            <div class="expand">
              <router-link :to="jobPageLink" style="color: blue; text-decoration: none"
                >Expand</router-link
              >
            </div>
          </div>
        </router-link>
      </li>
    </ol>
  </main>
</template>
<script>
export default {
  name: 'JobsListings',
  props: {
    job: Object
  },
  computed: {
    jobPageLink() {
      return this.job ? `/jobs/results/${this.job.id}` : ''
    }
  },
  mounted() {
    console.log('MOUNTED')
  }
}
</script>
<style>
ol {
  list-style-type: none;
  width: 900px;
}
span {
  margin-top: 10px;
  margin-right: 10px;
}
.listing {
  display: flex;
  flex-grow: auto;
  background-color: whitesmoke;
  padding: 32px;
  width: 100%;
}

.list-item {
  margin-bottom: 28px;
  margin-left: 100px;
}

.link {
  display: block;
  border-radius: 4px;
  border: solid 1px gray;
  background: white;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  color: black;
}
.link:hover {
  box-shadow: 0 1px 3px 0;
  cursor: pointer;
}
.job-box {
  padding-top: 8px;
  padding-bottom: 8px;
  margin-left: 32px;
  margin-right: 32px;
}
.job-title {
  margin-bottom: 5px;
  font-size: 24px;
  line-height: 32px;
}
.job-content {
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  gap: 10px;
}
.qualifications-box {
  padding: 18px 32px 18px 32px;
}
h3 {
  margin-bottom: 8px;
  margin-top: 4px;
}
.qualifications-list {
  padding-left: 32px;
  font-size: 10px;
}

.expand {
  margin-top: 0.5rem;
  text-align: center;
}
.company {
  font-weight: bold;
  font-size: 18px;
}
.location {
  font-weight: bold;
  font-size: 18px;
}
</style>
