<script setup>
import { ElMessage } from 'element-plus';
import {useRouter} from "vue-router"
import {ref} from 'vue'

const router  =useRouter()
const ruleForm = ref({
    username:"admin",
    password:"123456"
})
const rules={
    username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 5, max: 10, message: 'Length should be 5 to 10', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 6, max: 16, message: 'Length should be 6 to 16', trigger: 'blur' },
  ],
}
const ruleFormRef = ref(null)
const login=()=>{
    ruleFormRef.value.validate((valid)=>{
        if(!valid) return ElMessage.error("登录失败")
        ElMessage.success("登录成功")
        localStorage.setItem("username",ruleForm.value.username)
        router.push('/home')
    })
}
</script>


<template>
     <div class="container">
                <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            class="demo-ruleForm"
            :size="formSize"
            status-icon
        >
                <el-form-item  prop="username">
                    <el-input
                            v-model="ruleForm.username"
                            placeholder="请输入用户名"
                            class="input-with-select"
                           
                            >
                            <template #prepend>
                                <el-icon><User /></el-icon>
                            </template>
                    </el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input
                        v-model="ruleForm.password"
                        placeholder="请输入密码"
                        class="input-with-select"
                        type="password"
                        >
                        <template #prepend>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
                <span class="forgetpwd">忘记密码？</span>
            </el-form>
     </div>
</template>

<style scoped lang="scss">
.container{
    width: 100%;
    height: 100%;
    background: #364f6b;
    padding-top: 160px;
    .el-form{
        width: 280px;
        height: 240px;
        background: #3d84a8;
        padding: 20px;
        margin: 0 auto;
        border-radius: 5px;
        position: relative;
        .el-form-item{
            margin: 30px 0px;
        }
        .el-button{
            width: 100%;
        }
    }
    .forgetpwd{
        position: absolute;
        right: 20px;
        bottom: 40px;
        font-size: 14px;
        color: #59ABFF;
        cursor: pointer;
    }

}
</style>