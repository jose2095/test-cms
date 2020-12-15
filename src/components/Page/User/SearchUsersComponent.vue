<template>
  <b-card>
    <b-form @submit="onSubmit" v-if="show">
      <b-card-body>
        <b-row>
          <b-col md="4">
            <b-form-group
              id="input-group-search-type"
              label="Search Type"
              label-for="input-search-type"
              label-class="font-weight-bold text-dark"
            >
              <b-form-select
                id="input-search-type"
                v-model="form.search_type"
                placeholder="Email, App ID, Advertising ID or Device UIds"

              >
                <b-form-select-option v-for="(search_type , index) in form.search_types"
                  :id="search_type.id"
                  :value="search_type.name"
                  class="mt-1"
                >
                  {{search_type.name}}
                </b-form-select-option>

              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <b-form-group
              id="input-group-email"
              label="Email Address ( Separated by Comma )"
              label-for="input-email"
              label-class="font-weight-bold text-dark"
            >
              <b-form-textarea
                id="input-email"
                v-model="form.emails"
                type="text"
                placeholder="Enter email address"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </b-card-body>
      <b-row>
        <b-col class="pb-2 ml-3 mb-2">
          <b-button class="vesey_color" size="md" type="submit"> Submit </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>

</template>

<script>

export default {
  data() {
    return {
      form: {
        search_types : [
          {
            "id" : "search_email",
            "name": "Email",
          },
          {
            "id" : "search_app_id",
            "name": "App ID",
          },
          {
            "id" : "search_advertising_id",
            "name": "Advertising ID",
          },
          {
            "id" : "search_device_uid",
            "name": "Device ID",
          }
        ],
        emails : ""
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
.fs-30{
  font-size: 30px;
}

</style>
