import axios from "axios";

//const url = 'https://flashrewards.veseystudios.com/api';
const url = 'https://dev-flashrewards.veseystudios.com/api';
//const url = 'http://127.0.0.1:8000/api';

export default {
  async login(email, password) {
    return await axios.post(url + '/login/cms', {
      'email': email,
      'password': password
    }).then( (response) => {
      response = response.data.data
      if (response.status === 200) {
        localStorage.setItem('jwt', JSON.stringify(response.jwt));
      }

    });
  },
  async createBrand(image, description, title){
    return await axios.post(url + '/brands/', {
      image : image,
      description : description,
      title : title
    }, {headers:this.checkToken()})
  },
  async getBrands() {
    return await axios.get(url + '/brands/', {headers: this.checkToken()});
  },
  async getChannels() {
    return await axios.get(url + '/channels/', {headers: this.checkToken()});
  },
  async getRows() {
    return await axios.get(url + '/categories/', {headers: this.checkToken()});
  },
  async getOffers() {
    return await axios.get(url + '/offers/', {headers: this.checkToken()});
  },
  checkToken(){
    let token = JSON.parse(localStorage.getItem('jwt'));
    if (token) {
      return { Authorization: 'Bearer ' + token };
    } else {
      return {};
    }
  }
};
