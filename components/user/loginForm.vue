<template>
    <el-form 
        :model="form" 
        ref="form"
        :rules="rules" 
        class="form">

        <el-form-item class="form-item" prop="username">
            <el-input v-model="form.username"
            placeholder="用户名/手机">
            </el-input>
        </el-form-item>

        <el-form-item class="form-item" prop="password">
            <el-input v-model="form.password"
            placeholder="密码" 
            type="password">
            </el-input>
        </el-form-item>

        <p class="form-text">
            <nuxt-link to="#">忘记密码</nuxt-link>
        </p>

        <el-button 
        class="submit"
        type="primary"
        @click="handleLoginSubmit">
            登录
        </el-button>
    </el-form>

</template>

<script>
export default {
    data(){
 const validateuserName = (rule, value, callback) => {
const isvalid=/^1[3,4,5,6,7,8,9][0-9]{9}$/.test(value)
if(!isvalid){
    callback(new Error('输入的用户名错误'))
}else{
    callback()
}
 }


        return {
            // 表单数据
            form: {
                username:'',
                password:''
            },
            // 表单规则
            rules: {
                username:[{validator: validateuserName,message:'请输入用户名', trigger: 'blur'}],
                password:[{required:true,message:'请输入正确密码',trigger: 'blur'}]
            },
        }
    },
    methods: {
        // 提交登录
        handleLoginSubmit(){
           console.log(this.form)
           this.$refs.form.validate((valid) =>{
               if(valid){
                   this.$axios({
                       method:'post',
                       url:'/accounts/login',
                       data:this.form
                   }).then(res=>{
                       console.log(res)
                       const {data}=res
                       //调用mutation方法将数据存储到store/vuex里面
                       this.$store.commit('user/setuserInfo',data)

                   })
               }
           })
        }
    }
}
</script>

<style scoped lang="less">
    .form{
        padding:25px;
    }

    .form-item{
        margin-bottom:20px;
    }

    .form-text{
        font-size:12px;
        color:#409EFF;
        text-align: right;
        line-height: 1;
    }

    .submit{
        width:100%;
        margin-top:10px;
    }
</style>