<template>
  <div class="content">
    <div class="container-fluid">
      <b-card>
        <b-form @submit="onSubmit" v-if="show">
          <b-card-header>
            <h1>Settings</h1>
          </b-card-header>
          <hr>
          <b-card-body>
            <b-row>
              <h3 class="ml-3">Currency & Point Value</h3>
            </b-row>
            <b-row>
              <b-col md="3">
                <b-form-group
                  id="input-group-points"
                  label="Point Value"
                  label-for="input-points"
                  label-class="font-weight-bold text-dark text-lg"
                >
                  <b-form-input
                    id="input-points"
                    v-model="form.points"
                    type="number"
                    placeholder="0.0001"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group
                  id="input-group-currency"
                  label="Currency"
                  label-for="input-currency"
                  label-class="font-weight-bold text-dark text-lg"
                >
                  <b-form-input
                    id="input-currency"
                    v-model="form.currency"
                    type="text"
                    placeholder="$"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group
                  id="input-group-fcm-key"
                  label="FCM KEY"
                  label-for="input-fcm-key"
                  label-class="font-weight-bold text-dark text-lg"
                >
                  <b-form-input
                    id="input-fcm-key"
                    v-model="form.fcm_key"
                    type="text"
                    placeholder="0010010"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group
                  id="input-group-bonus-point"
                  label="Welcome Bonus Point"
                  label-for="input-bonus-point"
                  label-class="font-weight-bold text-dark text-lg"
                >
                  <b-form-input
                    id="input-bonus-point"
                    v-model="form.bonus_points"
                    type="number"
                    placeholder="200"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          </b-card-body>
          <hr>
          <b-card-body>
            <b-row>
              <h3 class="ml-3">Gift Card Info</h3>
            </b-row>
            <b-row>
              <b-col md="3">
                <b-form-group
                  id="input-group-redemption_limit"
                  label="Default Redemption Limit"
                  label-for="input-redemption-limit"
                  label-class="font-weight-bold text-dark text-lg"
                >
                  <b-form-input
                    id="input-redemption-limit"
                    v-model="form.redemption_limit"
                    type="number"
                    placeholder="1"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group
                  id="input-group-redemption-points"
                  label="Redemption Points"
                  label-for="input-redemption-poinst"
                  label-class="font-weight-bold text-dark text-lg"
                >
                  <b-form-input
                    id="input-redemption-points"
                    v-model="form.redemption_points"
                    placeholder="0"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group
                  id="input-redemption-enabled-tango"
                  label="Enabled Tango"
                  label-for="input-enabled-tango"
                  label-class="font-weight-bold text-dark text-lg"
                >
                  <b-form-input
                    id="input-enabled-tango"
                    v-model="form.enabled_tango"
                    placeholder="Yes/No"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          </b-card-body>
          <hr>
          <b-card-body>
            <b-row>
              <h3 class="ml-3">Capping</h3>
            </b-row>
            <b-row>
              <b-col md="3">
                <b-form-group
                  id="input-group-time-amount"
                  label="Time Amount for Games"
                  label-for="input-capping"
                  label-class="font-weight-bold text-dark text-lg"
                >
                  <b-form-input
                    id="input-capping"
                    v-model="form.capping"
                    type="text"
                    placeholder="2 hours"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          </b-card-body>
          <hr>
          <b-card-body>
            <b-row>
              <h3 class="ml-3">Daily Poll Points</h3>
            </b-row>
            <b-row>
              <b-col md="3">
                <b-form-group
                  id="input-group-day-1"
                  label="Day 1"
                  label-for="input-day-1"
                  label-class="font-weight-bold text-dark text-lg"
                >
                  <b-form-input
                    id="input-day-1"
                    v-model="form.day_1"
                    type="number"
                    placeholder="10"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group
                  id="input-group-day-2"
                  label="Day 2"
                  label-for="input-day-2"
                  label-class="font-weight-bold text-dark text-lg"
                >
                  <b-form-input
                    id="input-day-2"
                    v-model="form.day_2"
                    type="number"
                    placeholder="20"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group
                  id="input-group-day-3"
                  label="Day 3"
                  label-for="input-day-3"
                  label-class="font-weight-bold text-dark text-lg"
                >
                  <b-form-input
                    id="input-day-"
                    v-model="form.day_3"
                    type="number"
                    placeholder="30"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group
                  id="input-group-day-4"
                  label="Day 4"
                  label-for="input-day-4"
                  label-class="font-weight-bold text-dark text-lg"
                >
                  <b-form-input
                    id="input-day-4"
                    v-model="form.day_4"
                    type="number"
                    placeholder="40"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="3">
                <b-form-group
                  id="input-group-day-5"
                  label="Day 5"
                  label-for="input-day-5"
                  label-class="font-weight-bold text-dark text-lg"
                >
                  <b-form-input
                    id="input-day-5"
                    v-model="form.day_5"
                    type="number"
                    placeholder="50"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group
                  id="input-group-day-6"
                  label="Day 6"
                  label-for="input-day-6"
                  label-class="font-weight-bold text-dark text-lg"
                >
                  <b-form-input
                    id="input-day-6"
                    v-model="form.day_6"
                    type="number"
                    placeholder="60"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="3">
                <b-form-group
                  id="input-group-day-7"
                  label="Day "
                  label-for="input-day-7"
                  label-class="font-weight-bold text-dark text-lg"
                >
                  <b-form-input
                    id="input-day-7"
                    v-model="form.day_7"
                    type="number"
                    placeholder="70"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="4" class="pb-2 m-5">
                <b-button class="vesey_color" size="lg" type="submit">Save Changes</b-button>
              </b-col>
            </b-row>
          </b-card-body>
        </b-form>
      </b-card>

     <!--
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
      -->
    </div>
  </div>

</template>
<script>

export default {
  data() {
    return {
      form: {
        points : "",
        currency : "",
        fcm_key : "",
        bonus_points : "",
        redemption_limit : "",
        redemption_points : "",
        enabled_tango : "",
        capping : "",
        day_1 : "",
        day_2 : "",
        day_3 : "",
        day_4 : "",
        day_5 : "",
        day_6 : "",
        day_7 : ""
      },
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}

</script>

<style>
.vesey_color{
  background-color: #8386e7;
  color: white;
  transition-duration: .3s;
}
.vesey_color:hover{
  background-color: white!important;
  color: #8386e7!important;
}
</style>
