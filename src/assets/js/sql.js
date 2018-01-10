import Axios from 'axios'

export function indexGetData(_this) {
  Axios.get(_this.URLS + '/ThinkPHP/index.php/Home/Index/list1.html?type=mobile&page=1')
    .then(function(response) {
      _this.xqList = response.data
      // console.log(response.data)
    })
    .catch(function(error) {
      console.log(error)
    })
  Axios.get(_this.URLS + '/ThinkPHP/index.php/Home/Index/list2.html?type=mobile&page=1')
    .then(function(response) {
      _this.fwList = response.data
      // console.log(response.data)
    })
    .catch(function(error) {
      console.log(error)
    })
}