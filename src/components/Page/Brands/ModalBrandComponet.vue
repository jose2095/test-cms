<template>
  <b-modal style="width: 10px !important" :size="value" :id="data.id" hide-footer>
    <template #modal-header="{ close }">
      <div>
        <b-button size="sm" class="cerrar" variant="outline-default" @click="close()">X</b-button>
        <button @click="changeSize" class="expand btn">{{ text }}</button>
      </div>
    </template>
    <b-form @submit="onSubmit" file accept="image/*">
      <div class="title">
        <label><strong> Add Brand</strong></label>
      </div>
      <b-container class="semi-body">
        <b-row>
          <b-col>
            <b-form-group label="Upload Brand Image (Max 2MB)" class="font-weight-bold">
              <b-form-file
                @change="onFileChange"
                v-model="form.image"
                style="display:none;"
                id="fileBrand"
              ></b-form-file>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-center">
            <b-card class="card-border-no-click" v-if="url">
              <b-card-text text-tag="center">
                <b-row>
                  <b-col md="8">
                    <b-img style="width: 70%;height: 30vh" :src="url"/>
                  </b-col>
                  <b-col md="4">
                    <b-button variant="danger" type="button" class="trash-middle" @click="emptyFile">
                      <h1>
                        <b-icon icon="trash"></b-icon>
                      </h1>
                    </b-button>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
            <b-card class="card-border" @click="triggerInputFile" v-if="form.image == null && url === null">
              <b-card-text text-tag="center">
               <div class="mt-7">
                 <h1>
                   <b><b-icon icon="cloud-upload"></b-icon></b>
                 </h1>
                 Upload image <br>
                 Image Aspect Ratio: <br>
                 428.4 x 739.2
               </div>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Brand Name" class="font-weight-bold">
              <b-form-input v-model="form.title" placeholder="Title goes here"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Brand Description" class="font-weight-bold">
              <ckeditor v-model="form.description" :config="editorConfig" ></ckeditor>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row class="full-button">
          <b-button type="submit" class="btn btn-block bg-success text-center text-white">
            <h1 class="m-4">Create Brand</h1>
          </b-button>
        </b-row>
      </b-container>
    </b-form>
  </b-modal>
</template>

<script>
import api from "@/api";

export default {
  name: "Modal",
  created: function () {
    this.changeSize();
  },
  data() {
    return {
      text: "",
      url: null,
      form: {
        image: null,
        title: '',
        description: '',
        language: 1,
      },
      editorConfig: {
        toolbarGroups: [
          {name: 'document', groups: ['mode', 'document', 'doctools']},
          {name: 'clipboard', groups: ['clipboard', 'undo']},
          {name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing']},
          {name: 'forms', groups: ['forms']},
          {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
          {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']},
          {name: 'links', groups: ['links']},
          {name: 'insert', groups: ['insert']},
          {name: 'styles', groups: ['styles']},
          {name: 'colors', groups: ['colors']},
          {name: 'tools', groups: ['tools']},
          {name: 'others', groups: ['others']},
          {name: 'about', groups: ['about']}
        ],
        removeButtons: 'Source,Save,Templates,Cut,Undo,SelectAll,Scayt,Find,Form,CopyFormatting,NumberedList,Outdent,Blockquote,BidiLtr,BidiRtl,JustifyCenter,JustifyLeft,Language,JustifyRight,RemoveFormat,BulletedList,CreateDiv,Indent,Underline,Strike,Subscript,Superscript,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,NewPage,ExportPdf,Preview,Print,PasteFromWord,PasteText,Paste,Copy,Replace,Redo,JustifyBlock,About,Maximize,ShowBlocks,BGColor,TextColor,Styles,Format,Font,Iframe,PageBreak,Table,Flash,Image,Link,Unlink,Anchor,HorizontalRule,Smiley,SpecialChar,FontSize'
      }
    };
  },
  methods: {
    emptyFile(){
      this.form.image = null;
      this.url = null;
    },
    async createBrand() {
      await api.createBrand(this.form.image, this.form.description, this.form.title)
        .then( (response) => {
          alert(response.data.data.msg)
        })
    },
    changeSize() {
      if (this.value === "lg") {
        this.text = "CLOSE";
        this.$emit("input", "xl");
      } else {
        this.text = "EXPAND";
        this.$emit("input", "lg");
      }
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);

    },
    onSubmit(evt) {
      evt.preventDefault()
      if (this.form.image == null){
        alert('Attach an image')
      }
      else if (this.form.title === ''){
        alert('Insert a name/title')
      }
      else if (this.form.description === ''){
        alert('Insert a description')
      }
      else {
        this.createBrand();
      }
    },
    triggerInputFile(evt) {
      document.getElementById('fileBrand').click()
    }
  },
  props: {
    data: {
      required: true,
    },
    value: {
      required: true,
    },
  },

};
</script>

<style lang="scss" scoped>
.expand {
  background-color: #d2b4de !important;
  padding-top: 0px;
  padding-bottom: 0px;
  border-radius: 0px;
  color: #5b2c6f;
  margin-left: 10px;
}

.title {
  background-color: #1A294A;
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

.card-border {
  border: dashed black 1px;
  cursor: pointer;
  width: 100%;
  height: 33vh
}
.card-border-no-click {
  border: dashed black 1px;
  width: 100%;
  height: 33vh
}
.trash-middle{
  margin-top: 30%;
}
.mt-7{
  margin-top: 7%;
  font-size: 21px;
}
.full-button{
  margin-bottom: -20px;
  margin-right: -40px;
  margin-left: -40px;
  cursor: pointer
}
</style>
