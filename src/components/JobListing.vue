<template>
  <main class="listing">
    <ol>
      <li class="list-item">
        <router-link to="/jobs/results/1" class="link">
          <div class="job-box">
            <h2 class="job-title">Technical Program Manager, Perception, Augmented Reality</h2>
            <div class="job-content">
              <div>
                <span>Company name</span>
              </div>
              <div>
                <span>San Francisco, CA, USA</span>
              </div>
            </div>
          </div>
          <div class="qualifications-box">
            <div>
              <h3>Qualifications</h3>
              <div>
                <ul class="qualifications-list">
                  <li>Bachelor's degree</li>
                  <li>5 years of experience in program management</li>
                  <li>Experience analyzing data through querying database (e.g., SQL)</li>
                </ul>
              </div>
            </div>
            <div class="expand">
              <router-link to="/jobs/results/1" style="color: blue; text-decoration: none"
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
  name: 'JobsListings'
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
}
.qualifications-box {
  padding: 10px 32px 18px 32px;
}
h3 {
  margin-bottom: 8px;
  margin-top: 4px;
}
.qualifications-list {
  list-style-type: disc;
  padding-left: 32px;
}

.expand {
  margin-top: 0.5rem;
  text-align: center;
}
</style>
