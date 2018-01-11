<template>
	<div class="wrap bs">
		<top></top>
        
    <div class="release_nav">
        <p class="zx">个人中心</p>
    </div>

    <div class="personal">
        
        <dl class="personal_dl flex">
            <dd></dd>
            <dd>
                <img src="../assets/img/tgb31.png" alt="">
                <span>{{users.username}}</span>
            </dd>
            <dd>
                <p><a @click="tuichu">退出</a> | <a @click="shezhi">设置</a></p>
            </dd>
        </dl>

        <dl class="personal_dl2 flex">
            <dd>
                <router-link tag="a"  to="/personalList/xq">{{users.countlist1}}</router-link>
                <span>我发布的需求</span>
            </dd>
            <dd>
                <router-link tag="a"  to="/personalList/fw">{{users.countlist2}}</router-link>
                <span>我发布的服务</span>
            </dd>
            <dd>
                <a>0</a>
                <span>通知消息</span>
            </dd>
        </dl>
        <p class="personal_p flex">
            <router-link tag="a"  to="/release/xq">发布需求</router-link>
            <router-link tag="a"  to="/release/fw">发布服务</router-link>
        </p>
    </div>
	</div>
</template>

<script>
import Top from '../components/top'
import {personalTuichu, personalGetdataPersonal} from '../assets/js/sql'

export default {
  data() {
    return {
      users: ''
    }
  },
  methods: {
    shezhi() {
      alert('相关设置请登陆PC版！')
    },
    tuichu() {
      // 注销用户
      personalTuichu(this)
    },
    getdataPersonal() {
      // 调取当前用户的所有参数
      personalGetdataPersonal(this)
    }
  },
  created() {
    personalGetdataPersonal(this)
  },
  components: {
    Top
  }
}
</script>

<style>
/**个人中心**/
.release_nav{background: #00b38b; padding: 0.15625rem 0.390625rem; margin-top: 1.28125rem;}
.release_nav p.zx{font-size: 0.46875rem; color: #fff; text-align: center;}
.personal{padding: 0.390625rem 0;    border-top: 0.03125rem solid #cccccc;}
.personal .personal_dl{margin-bottom: 0.3125rem;}
.personal .personal_dl dd{font-size: 0.4375rem; color: #b8b7b6;}
.personal .personal_dl dd img{display: block; width: 1.875rem; height: 1.875rem;}
.personal .personal_dl dd span{display: block; height: 0.46875rem; text-align: center; font-size: 0.4375rem;padding: 0.15625rem 0 0;}
.personal .personal_dl dd p{padding: 0.78125rem 0.5rem 0;}
.personal .personal_dl dd p a{font-size: 0.4375rem; display:inline-block; color: #b8b7b6; }
.personal .personal_dl2{border-bottom: 1px solid #b4b4b4;border-top: 1px solid #b4b4b4; padding: 0.234375rem 0.3125rem;}
.personal .personal_dl2 dd{height: 2.8125rem; background: url(../assets/img/tgb32.jpg) right center / 0.03125rem 2.125rem no-repeat;}
.personal .personal_dl2 dd:last-of-type{background: none;}
.personal .personal_dl2 dd a{display: block; text-align: center; height: 2.1875rem; line-height: 2.1875rem; color: #00b38b; font-size: 0.65625rem;}
.personal .personal_dl2 dd span{display: block; font-size: 0.28125rem; color: #969594;text-align: center;}
.personal .personal_p{ padding: 2.34375rem 0.3125rem 5.0rem; }
.personal .personal_p a{flex: 1; color: #fff; text-align: center; font-size: 0.515625rem; height: 1.34375rem; line-height: 1.34375rem; background: #00b38b;}
.personal .personal_p a:nth-child(1){border-radius: 0.15625rem 0 0 0.15625rem;margin-right: 0.078125rem;}
.personal .personal_p a:nth-child(2){border-radius:0 0.15625rem 0.15625rem 0;}
</style>