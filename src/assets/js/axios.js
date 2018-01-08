import Axios from 'axios'
import Vue from 'vue'

export function getDemandList() {
  return Axios.get(Vue.prototype.URLS + '/index.php/Home/Index/list1.html?type=mobile&page=1')
    .then(function(response) {
      return Promise.resolve(response.data)
//    console.log(response.data)
//    console.log(list)
    })
    .catch(function(error) {
      console.log(error)
    })
}

export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
