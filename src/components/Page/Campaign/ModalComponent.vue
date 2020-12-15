<template>
  <b-modal
    ref="campaign-modal"
    style="width:10px !important"
    :size="value"
    :id="data.id"
    hide-footer
  >
    <template #modal-header="{ close }">
      <div>
        <b-button
          size="sm"
          class="cerrar"
          variant="outline-default"
          @click="close()"
          >X</b-button
        >
        <button @click="changeSize" class="expand btn">
          {{ text_button }}
        </button>
      </div>
    </template>
    <b-form @submit="onSubmit">
      <div class="title">
        <label><b>Step 1</b> General Offer Information</label>
      </div>
      <b-container class="semi-body">
        <b-row>
          <b-col>
            <b-form-group label="Custom Name" description="">
              <b-form-input
                v-model="form.customName"
                type="text"
                placeholder="Coin_Master_Android_Install"
                :state="inputError.field === 'customName' ? false : null"
                required
              ></b-form-input>
              <b-form-invalid-feedback>
                This field is required.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Device Type" description="">
              <b-form-select
                :state="inputError.field === 'deviceType' ? false : null"
                v-model="form.deviceType"
              >
                <b-form-select-option :value="null"
                  >Please select an option</b-form-select-option
                >
                <b-form-select-option value="android"
                  >Android</b-form-select-option
                >
                <b-form-select-option value="ios">iOS</b-form-select-option>
              </b-form-select>
              <b-form-invalid-feedback>
                This field is required.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <b-form-group
              label="Show to user in Groups"
              description="Keep empty if want to show survey to all users"
            >
              <b-form-select v-model="form.user_groups" disabled>
                <b-form-select-option :value="form.startDate"
                  >Please select an option</b-form-select-option
                >
                <b-form-select-option value="not_live"
                  >Not Live</b-form-select-option
                >
                <b-form-select-option value="live">Live</b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col lg="6">
            <b-form-group
              label="* Check te box bellow to keep survey empty from user groups *"
              description=""
            >
              <div class="text-center">
                <b-form-checkbox
                  v-model="form.survey_is_empty"
                  size="lg"
                  disabled
                ></b-form-checkbox>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <b-form-group label="Start Date" description="">
              <b-form-datepicker
                :state="inputError.field === 'startDate' ? false : null"
                v-model="form.startDate"
              ></b-form-datepicker>
            </b-form-group>
          </b-col>
          <b-col lg="6">
            <b-form-group label="End Date" description="">
              <b-form-datepicker
                :state="inputError.field === 'endDate' ? false : null"
                v-model="form.endDate"
              ></b-form-datepicker>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Package ID" description="">
              <b-form-input
                v-model="form.packageId"
                :state="inputError.field === 'packageId' ? false : null"
                type="text"
                required
                placeholder="PACKAGE+ID%source=Inms"
              ></b-form-input>
              <b-form-invalid-feedback>
                This field is required.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
      <div class="title">
        <label> <strong>Step 2:</strong> Upload Offer Images </label>
      </div>
      <b-container class="semi-body">
        <b-row class="text-center">
          <b-col lg="3">
            <label><b>Standard Cards (2MB Max)</b></label>
            <b-card
              style="border: dashed black 1px;cursor: pointer;width: 100%;height: 37vh"
            >
              <b-card-text text-tag="center">
                <h2>
                  <b-icon icon="cloud-upload"></b-icon>
                </h2>
                Upload image <br />
                Image Aspect Ratio: <br />
                428.4 x 739.2
              </b-card-text>
            </b-card>
          </b-col>
          <b-col lg="3">
            <label><b>View All & Channel Cards</b></label>
            <b-card
              style="border: dashed black 1px;cursor: pointer;width: 100%;height: 37vh"
            >
              <b-card-text text-tag="center">
                <h2>
                  <b-icon icon="cloud-upload"></b-icon>
                </h2>
                Upload image <br />
                Image Aspect Ratio: <br />
                428.4 x 739.2
              </b-card-text>
            </b-card>
          </b-col>
          <b-col lg="3">
            <label><b> Premium & Trending Cards</b></label>
            <b-card
              style="border: dashed black 1px;cursor: pointer;width: 100%;height: 37vh"
            >
              <b-card-text text-tag="center">
                <h2>
                  <b-icon icon="cloud-upload"></b-icon>
                </h2>
                Upload image <br />
                Image Aspect Ratio: <br />
                428.4 x 739.2
              </b-card-text>
            </b-card>
          </b-col>
          <b-col lg="3">
            <label><b> Boosted Cards </b></label>
            <b-card
              style="border: dashed black 1px;cursor: pointer;width: 100%;height: 37vh"
            >
              <b-card-text text-tag="center">
                <h2>
                  <b-icon icon="cloud-upload"></b-icon>
                </h2>
                Upload image <br />
                Image Aspect Ratio: <br />
                428.4 x 739.2
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="text-center">
          <b-col lg="12">
            <label><b>Hero Image (Image 2MB Max or Video 10MB Max)</b></label>
            <b-card
              style="border: dashed black 1px;cursor: pointer;width: 100%;height: 15vh"
            >
              <b-card-text text-tag="center">
                <h2>
                  <b-icon icon="cloud-upload"></b-icon>
                </h2>
                Upload image <br />
                Image Aspect Ratio: <br />
                428.4 x 739.2
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="text-center">
          <b-col lg="6">
            <b-row>
              <b-col>
                <label><b>Spotlight Cards (Middle Cards)</b></label>
                <b-card
                  style="border: dashed black 1px;cursor: pointer;width: 100%;height: 37vh"
                >
                  <b-card-text text-tag="center">
                    <h2>
                      <b-icon icon="cloud-upload"></b-icon>
                    </h2>
                    Upload image <br />
                    Image Aspect Ratio: <br />
                    428.4 x 739.2
                  </b-card-text>
                </b-card>
              </b-col>
              <b-col>
                <label><b>Spotlight Cards (Side Cards)</b></label>
                <b-card
                  style="border: dashed black 1px;cursor: pointer;width: 100%;height: 37vh"
                >
                  <b-card-text text-tag="center">
                    <h2>
                      <b-icon icon="cloud-upload"></b-icon>
                    </h2>
                    Upload image <br />
                    Image Aspect Ratio: <br />
                    428.4 x 739.2
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
          <b-col lg="6">
            <b-row>
              <b-col>
                <label><b>Game in Progress Image (Max 2MB)</b></label>
                <b-card
                  style="border: dashed black 1px;cursor: pointer;width: 100%;height: 15vh"
                >
                  <b-card-text text-tag="center">
                    <h2>
                      <b-icon icon="cloud-upload"></b-icon>
                    </h2>
                    Upload image <br />
                    Image Aspect Ratio: <br />
                    428.4 x 739.2
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <label><b>Game in Progress See All Image (Max 2MB)</b></label>
                <b-card
                  style="border: dashed black 1px;cursor: pointer;width: 100%;height: 15vh"
                >
                  <b-card-text text-tag="center">
                    <h2>
                      <b-icon icon="cloud-upload"></b-icon>
                    </h2>
                    Upload image <br />
                    Image Aspect Ratio: <br />
                    428.4 x 739.2
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      <div class="title">
        <label> <strong>Step 3:</strong> Offer Home Page </label>
      </div>
      <b-container class="semi-body">
        <b-row>
          <b-col>
            <b-form-group
              label="Assign a Channel (You can assign up to 4 Channels)"
              description=""
            >
              <v-select
                v-model="form.channels"
                multiple
                :options="data_channels"
                :value.sync="data_channels.id"
                label="name"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Select Brand">
              <b-form-select v-model="form.brand">
                <b-form-select-option
                  v-for="brand in data_brands"
                  :value="brand.id"
                  >{{ brand.description }}</b-form-select-option
                >
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              label="Assign a Row (You can assign as many rows as you want)"
              description=""
            >
              <v-select
                v-model="form.rows"
                multiple
                :options="data_rows"
                :value.sync="data_rows.id"
                label="description"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              label="Offer Description (66 character limit)"
              description=""
            >
              <ckeditor :config="editorConfig"></ckeditor>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
      <div class="title">
        <label>
          <strong>Step 4:</strong> Progressive Reward or Reward Time Per Play
        </label>
      </div>
      <b-container class="semi-body">
        <b-row>
          <b-col>
            <b-form-group label="Choose a strategy">
              <b-form-select v-model="form.offer_type">
                <b-form-select-option value="progressive"
                  >Progressive Reward</b-form-select-option
                >
                <b-form-select-option value="time"
                  >Reward Time Per Play</b-form-select-option
                >
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row v-if="form.offer_type === 'time'">
          <b-col md="4">
            <b-form-group label="Goal Name">
              <b-form-input
                type="text"
                required
                placeholder="Installer Offer"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label="Goal id">
              <b-form-input
                type="text"
                required
                placeholder="install_offer_android_devide"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group label="Total Coin Amount">
              <b-form-input
                type="text"
                required
                placeholder="$50.00"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
      <div class="title">
        <label> <strong>Step 5:</strong> Offer Detail page </label>
      </div>
      <b-container class="semi-body">
        <b-row>
          <b-col class="text-center">
            <label
              ><b
                >Upload Offer Detail Image (Max: 2MB) or Video (Max: 10MB)</b
              ></label
            >
            <b-card
              style="border: dashed black 1px;cursor: pointer;width: 100%;height: 15vh"
            >
              <b-card-text text-tag="center">
                <h2>
                  <b-icon icon="cloud-upload"></b-icon>
                </h2>
                Upload image or video <br />
                Image Aspect Ratio: <br />
                428.4 x 739.2
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="How It Works Title">
              <b-form-input
                placeholder="Become the Next Coin Master!"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="How It Works Description" description="">
              <ckeditor :config="editorConfig"></ckeditor>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Total Coin Amount">
              <b-form-input placeholder="About Title"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="About Offer Description" description="">
              <ckeditor :config="editorConfig"></ckeditor>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Call to Action Button">
              <b-form-input placeholder="Start..."></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
      <div class="title">
        <label> <strong>Step 6:</strong> Pop Up </label>
      </div>
      <b-container class="semi-body">
        <b-row>
          <b-col class="text-center">
            <label><b>Upload Pop Image (2MB)</b></label>
            <b-card
              style="border: dashed black 1px;cursor: pointer;width: 100%;height: 15vh"
            >
              <b-card-text text-tag="center">
                <h2>
                  <b-icon icon="cloud-upload"></b-icon>
                </h2>
                Upload image or video <br />
                Image Aspect Ratio: <br />
                428.4 x 739.2
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Pop up Title">
              <b-form-input placeholder="Title goes here"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Body Copy" description="">
              <ckeditor :config="editorConfig"></ckeditor>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
      <div class="title">
        <label> <strong>Step 7:</strong> Boosted Offer </label>
      </div>
      <b-container class="semi-body">
        <b-row>
          <b-col>
            <b-form-group>
              <b-form-checkbox size="lg" switch
                >Enabled Boosted Offer</b-form-checkbox
              >
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group label="Pop up Title">
              <b-form-input placeholder="Title goes here"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Pop up Title">
              <b-form-input placeholder="Title goes here"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
      <div class="title">
        <label> <strong>Step 8:</strong> Campaign Settings </label>
      </div>
      <b-container class="semi-body">
        <b-row>
          <b-col>
            <b-form-group label="Link Type">
              <b-form-select>
                <b-form-select-option value="tune">Tune</b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="External Link" description="">
              <b-form-input
                type="text"
                required
                placeholder="Enter external link"
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group label="Target Age Group Start">
              <b-form-input placeholder="Type a start age"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Target Age Group End">
              <b-form-input placeholder="Type an end age"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group label="Operating System">
              <b-form-select>
                <b-form-select-option value="tune">Tune</b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label="Gender (You can select multiple genders)"
              description=""
            >
              <v-select
                multiple
                :options="['Male', 'Female', 'Prefer not to disclose']"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              label="Select Countries (You can select multiple)"
              description=""
            >
              <v-select
                multiple
                :options="['United States Of America', 'Canada', 'Mexico']"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Platform (Android or iPhone)">
              <b-form-select>
                <b-form-select-option value="android"
                  >Android</b-form-select-option
                >
                <b-form-select-option value="iphone"
                  >iPhone</b-form-select-option
                >
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Fluent API">
              <b-form-input placeholder="Select a user" disabled></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Onboarding Question" description="">
              <v-select multiple :options="[]" />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Onboarding Question" description="">
              <v-select multiple :options="[]" />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Onboarding Question" description="">
              <v-select multiple :options="[]" />
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row
          @click="createCampaign()"
          class="bg-success text-center text-white"
          style="margin-bottom: -20px;margin-right: -40px;margin-left: -40px;cursor: pointer"
        >
          <b-col>
            <h1 class="m-4">Create Campaign</h1>
          </b-col>
        </b-row>
      </b-container>
    </b-form>
  </b-modal>
</template>

<script>
import api from "@/api";
import { validModel } from "../../../helpers/validator";

var campaignModel = require("../../../models/campaign");

export default {
  name: "Modal",
  created: function() {
    this.changeSize();
    this.getBrands();
    this.getChannels();
    this.getRows();
  },
  data() {
    return {
      form: {
        brand: [],
        channels: [],
        rows: [],
        offer_type: null
      },

      inputError: "",
      text_button: "",
      data_rows: [],
      data_brands: [],
      data_channels: [],
      editorConfig: {
        toolbarGroups: [
          { name: "document", groups: ["mode", "document", "doctools"] },
          { name: "clipboard", groups: ["clipboard", "undo"] },
          {
            name: "editing",
            groups: ["find", "selection", "spellchecker", "editing"]
          },
          { name: "forms", groups: ["forms"] },
          { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
          {
            name: "paragraph",
            groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"]
          },
          { name: "links", groups: ["links"] },
          { name: "insert", groups: ["insert"] },
          { name: "styles", groups: ["styles"] },
          { name: "colors", groups: ["colors"] },
          { name: "tools", groups: ["tools"] },
          { name: "others", groups: ["others"] },
          { name: "about", groups: ["about"] }
        ],
        removeButtons:
          "Source,Save,Templates,Cut,Undo,SelectAll,Scayt,Find,Form,CopyFormatting,NumberedList,Outdent,Blockquote,BidiLtr,BidiRtl,JustifyCenter,JustifyLeft,Language,JustifyRight,RemoveFormat,BulletedList,CreateDiv,Indent,Underline,Strike,Subscript,Superscript,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,NewPage,ExportPdf,Preview,Print,PasteFromWord,PasteText,Paste,Copy,Replace,Redo,JustifyBlock,About,Maximize,ShowBlocks,BGColor,TextColor,Styles,Format,Font,Iframe,PageBreak,Table,Flash,Image,Link,Unlink,Anchor,HorizontalRule,Smiley,SpecialChar,FontSize"
      }
    };
  },
  methods: {
    createCampaign() {
      var model = Object.assign(campaignModel, this.form);
      var result = validModel(model);

      if (!result.status) {
        this.inputError = result;
        return;
      }

      this.$refs["campaign-modal"].hide();
    },
    changeSize() {
      if (this.value === "lg") {
        this.text_button = "CLOSE";
        this.$emit("input", "xl");
      } else {
        this.text_button = "EXPAND";
        this.$emit("input", "lg");
      }
    },
    async getChannels() {
      await api.getChannels().then(response => {
        console.log("channels:" + response.data.data);
        this.data_channels = response.data.data;
      });
    },
    async getBrands() {
      await api.getBrands().then(response => {
        console.log("brands:" + response.data.data);
        this.data_brands = response.data.data;
      });
    },
    async getRows() {
      await api.getRows().then(response => {
        console.log("rows:" + response.data.data);
        this.data_rows = response.data.data;
      });
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  },
  props: {
    data: {
      required: true
    },
    value: {
      required: true
    }
  }
};
</script>

<style lang="css" scoped>
.expand {
  background-color: #d2b4de !important;
  padding-top: 0px;
  padding-bottom: 0px;
  border-radius: 0px;
  color: #5b2c6f;
  margin-left: 10px;
}

.title {
  background-color: #1a294a;
  margin-left: -24px;
  margin-right: -24px;
  padding-left: 25px;
  padding-top: 2px;
  padding-bottom: 2px;
  color: white;
  font-size: 16px;
}

.title label {
  margin-top: 15px;
  margin-bottom: 15px;
}

.semi-body {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
