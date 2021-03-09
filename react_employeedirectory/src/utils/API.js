import axios from "axios";

export default {
  getEmployee: function() {
    return axios.get('https://randomuser.me/api/?results=200&nat=us');
  }
};

// https://randomuser.me/api/?results=50?inc=picture,name,cell,email,&noinfo
