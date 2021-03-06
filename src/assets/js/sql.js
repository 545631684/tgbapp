import Axios from 'axios'
import qs from 'qs'

// index.vue 接口
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

// article.vue 接口
export function articleGetData(_this) {
  Axios.get(_this.URLS + '/ThinkPHP/index.php/Home/Index/page.html?id=' + _this.$route.params.id)
    .then(function(response) {
      // console.log(response.data)
      if (response.data.status === 0) {
        _this.articles = response.data.data
        _this.shwz = true
      } else if (response.data.status === 1) {
        _this.articles = response.data.data
      } else {
        console.log('加载出错了。。。（*@ο@*）怎么办~！？')
      }
      // console.log(response.data)
    })
    .catch(function(error) {
      console.log(error)
    })
}

// article2.vue 接口
export function article2GetData(_this) {
  Axios.get(_this.URLS + '/ThinkPHP/index.php/Home/Index/page1.html?id=' + _this.$route.params.id)
    .then(function(response) {
      // console.log(response.data)
      if (response.data.status === 0) {
        _this.articles = response.data.data
      } else if (response.data.status === 1) {
        _this.articles = response.data.data
      } else {
        console.log('加载出错了。。。（*@ο@*）怎么办~！？')
      }
    })
    .catch(function(error) {
      console.log(error)
    })
}

// articleList.vue 接口 服务
export function articleListGetDatafw(_this) {
  Axios.get(_this.URLS + '/ThinkPHP/index.php/Home/Index/list2.html?type=mobile&page=' + _this.page)
    .then(function(response) {
      if (response.data != null) {
        _this.list.push(...response.data)
        _this.page++
        _this.loading = true
      } else {
        _this.bottomTitle = ''
      }
      // console.log(response.data)
    })
    .catch(function(error) {
      console.log(error)
    })
}

// articleList.vue 接口 需求
export function articleListGetDataxq(_this) {
  Axios.get(_this.URLS + '/ThinkPHP/index.php/Home/Index/list1.html?type=mobile&page=' + _this.page)
    .then(function(response) {
      if (response.data != null) {
        _this.list.push(...response.data)
        _this.page++
        _this.loading = true
      } else {
        // console.log(response.data)
        _this.bottomTitle = ''
      }
      // console.log(response.data)
    })
    .catch(function(error) {
      console.log(error)
    })
}

// login.vue 接口  登陆验证
export function loginLand(_this) {
  Axios.post(_this.URLS + '/ThinkPHP/index.php/Home/Index/login.html', qs.stringify({username: _this.dl_tel, password: _this.dl_password}))
    .then(function(response) {
      if (response.data.status === 0) {
        alert('您的用户名或密码错误，请重新输入！')
      } else if (response.data.status === 1) {
        alert('登陆成功!')
        _this.$store.commit('setUsername', response.data.user.username, response.data.user.uid) // 全局用户状态
        _this.$store.dispatch('setLocalStorage', _this.$store.state) // 本地存储全局用户状态
        _this.$router.push('/') // 跳转首页
      }
      // console.log(response.data)
    })
    .catch(function(error) {
      console.log(error)
    })
}

// login.vue 接口  注册
export function loginregister2(_this) {
  Axios.post(_this.URLS + '/ThinkPHP/index.php/Home/Index/reg.html', qs.stringify({username: _this.zc_tel, password: _this.zc_password, getVerifyCode: _this.zc_yzm2}))
    .then(function(response) {
      if (response.data.status === 0) {
        alert('验证码错误，请重新输入！')
      } else if (response.data.status === 1) {
        alert('您的手机号已被注册！')
      } else if (response.data.status === 2) {
        alert('恭喜您，注册成功！')
        _this.$router.push('/') // 跳转首页
      }
      // console.log(response.data)
    })
    .catch(function(error) {
      console.log(error)
    })
}

// login.vue 接口  登陆验证
export function loginGetVerification(_this) {
  Axios.get(_this.URLS + '/ThinkPHP/index.php/Home/Index/regsms.html?phone=' + _this.zc_tel)
    .then(function(response) {
      // console.log(response.data)
      if (response.data.status === 1) {
        alert('手机号不能为空！')
      } else if (response.data.status === 2) {
        alert('手机号已被占用，请更换手机号再注册！')
      } else if (response.data.status === 3) {
        alert('短信已发生，请注意查看短信！')
      } else {
        alert('系统错误，请重新点击获取验证码！')
      }
      // console.log(response.data.status)
    })
    .catch(function(error) {
      console.log(error)
    })
}

// personal.vue 接口  注销
export function personalTuichu(_this) {
  Axios.get(_this.URLS + '/ThinkPHP/index.php/Home/Index/loginout.html')
    .then(function(response) {
      if (response.data.status === 1) {
        alert('退出成功！')
        _this.$store.commit('Cancellation', '') // 注销全局用户状态
        _this.$router.push('/') // 跳转首页
      } else {
        alert('退出成功！')
        _this.$store.commit('Cancellation', '') // 注销全局用户状态
        _this.$router.push('/') // 跳转首页
      }
      // console.log(response.data.status)
    })
    .catch(function(error) {
      console.log(error)
    })
}

// personal.vue 接口  调用当前用户的各种参数
export function personalGetdataPersonal(_this) {
  Axios.get(_this.URLS + '/ThinkPHP/index.php/Home/Index/mobileuser.html')
    .then(function(response) {
      if (response.data.status === 1) {
        _this.users = response.data.data
      } else {
        console.log('加载失败。。。重新刷新吧！')
      }
      // console.log(response.data)
    })
    .catch(function(error) {
      console.log(error)
    })
}

// personalList.vue 接口  调用当前用户的需求
export function getdataXqPersonalList(_this) {
  Axios.get(_this.URLS + '/ThinkPHP/index.php/Home/Index/mylist1.html?page=1')
    .then(function(response) {
      _this.loadings = true
//          console.log('sh:' + response.data.data1)
//          console.log('wz:' + response.data.data)
      if (response.data.data === null && response.data.data1 === null) {
        _this.loadings2 = true
        _this.loadings = false
      } else if (response.data.status === 1) {
        _this.list = response.data.data
        _this.shList = response.data.data1
        _this.loadings = false
      } else {
        console.log('加载失败。。。重新刷新吧！')
      }
      if (response.data.data !== null) {
        _this.wz = true
      }
      if (response.data.data1 !== null) {
        _this.shwz = true
      }
    })
    .catch(function(error) {
      console.log(error)
    })
}

// personalList.vue 接口  调用当前用户的服务
export function getdataFwPersonalList(_this) {
  Axios.get(_this.URLS + '/ThinkPHP/index.php/Home/Index/mylist2.html?page=1')
    .then(function(response) {
      _this.loadings = true
      if (response.data.data === null && response.data.data1 === null) {
        _this.loadings2 = true
        _this.loadings = false
      } else if (response.data.status === 1) {
        _this.list = response.data.data
        _this.shList = response.data.data1
        _this.loadings = false
      } else {
        console.log('加载失败。。。重新刷新吧！')
      }
    })
    .catch(function(error) {
      console.log(error)
    })
}

// release.vue 接口  提交发布信息 服务/需求
export function postdata(_this) {
  Axios.post(_this.URLS + '/ThinkPHP/index.php/Home/Index/new1.html', qs.stringify({title: _this.title, team: _this.team, content: _this.content, username: _this.$store.state.username || _this.zc_tel, phone: _this.$store.state.username || _this.zc_tel}))
    .then(function(response) {
      if (response.data.status === 0) {
        alert('请先登陆后在来发布信息！')
      } else {
        alert('您的信息发布成功！')
        _this.$router.push('/releaseSuccess/') // 跳转首页
      }
      // console.log(response.data.status)
    })
    .catch(function(error) {
      console.log(error)
    })
}

// release.vue 接口  获取短信验证码
export function verification(_this) {
  Axios.get(_this.URLS + '/ThinkPHP/index.php/Home/Index/regsms.html?isstatus=1&phone=' + _this.zc_tel)
    .then(function(response) {
      // console.log(response.data)
      if (response.data.status === 1) {
        alert('手机号不能为空！')
      } else if (response.data.status === 2) {
        alert('手机号已被占用，请更换手机号再注册！')
      } else if (response.data.status === 3) {
        alert('短信已发送，请注意查看短信！')
      } else {
        alert('系统错误，请稍后重新点击获取验证码！')
      }
      // console.log(response.data.status)
    })
    .catch(function(error) {
      console.log(error)
    })
}

// release.vue 接口  注册
export function addRegister(_this) {
  Axios.post(_this.URLS + '/ThinkPHP/index.php/Home/Index/reg.html', qs.stringify({username: _this.zc_tel, password: _this.zc_tel, getVerifyCode: _this.zc_yzm2}))
    .then(function(response) {
      if (response.data.status === 0) {
        alert('验证码错误，请重新输入！')
      } else if (response.data.status === 1) {
        postdata(_this)
      } else if (response.data.status === 2) {
        postdata(_this)
      }
      // console.log(response.data)
    })
    .catch(function(error) {
      console.log(error)
    })
}

// retrievalPassword.vue 接口  修改密码
export function setPassword(_this) {
  Axios.post(_this.URLS + '/ThinkPHP/index.php/Home/Index/backPassword.html', qs.stringify({phone: _this.zh_tel, getVerifyCode: _this.zh_yzm, newpass: _this.zh_password1, newpassback: _this.zh_password2}))
    .then(function(response) {
      // console.log(response.data)
      if (response.data.status === 0) {
        alert('请输入手机号！')
      } else if (response.data.status === 1) {
        alert('请输入验证码！')
      } else if (response.data.status === 2) {
        alert('验证码验证错误！')
      } else if (response.data.status === 3) {
        alert('两次密码输入不一致！')
      } else if (response.data.status === 4) {
        alert('用户不存在！')
      } else if (response.data.status === 5) {
        alert('修改成功！')
        _this.$router.push('/') // 跳转首页
      }
    })
    .catch(function(error) {
      console.log(error)
    })
}

// retrievalPassword.vue 接口  获取短信验证码
export function getTelVerification2(_this) {
  Axios.get(_this.URLS + '/ThinkPHP/index.php/Home/Index/regsms1.html?phone=' + _this.zh_tel)
    .then(function(response) {
      if (response.data.status === 1) {
        alert('手机号不能为空！')
      } else if (response.data.status === 2) {
        alert('用户不存在！')
      } else if (response.data.status === 3) {
        alert('短信发送成功，请注意查收')
      }
      // console.log(response.data.status)
    })
    .catch(function(error) {
      console.log(error)
    })
}

// search.vue 接口  获取搜索结果
export function getSearchData(type, keyword, mythis) {
  Axios.get(mythis.URLS + '/ThinkPHP/index.php/Home/Index/sou.html?type=' + type + '&keyword=' + keyword)
    .then(function(response) {
      mythis.list = response.data
      mythis.startAN = false // 搜索按钮
      mythis.cancelAN = true // 取消按钮
      mythis.initial = false // 搜索前显示页面
      mythis.result = true // 搜索后结果页面
      mythis.loadings = true // 加载效果
      if (response.data === null) {
        mythis.loadings = false
        console.log('后台没有数据...')
      } else if (response.data.length > 0) {
        mythis.loadings = false
      } else {
        console.log('后台出错没有获取到，悲剧了...')
      }
      // console.log(response.data)
    })
    .catch(function(error) {
      console.log(error)
    })
}