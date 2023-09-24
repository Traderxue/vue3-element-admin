<script setup>

</script>
<template>
    <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/homepage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
        </el-breadcrumb>
    <el-card>
        <div class="my-collapse">
            <el-collapse >
            <el-collapse-item title="菜单管理" name="1">
                <div>
                Consistent with real life: in line with the process and logic of real
                life, and comply with languages and habits that the users are used to;
                </div>
                <div>
                Consistent within interface: all elements should be consistent, such
                as: design style, icons and texts, position of elements, etc.
                </div>
            </el-collapse-item>
            <el-collapse-item title="图表管理" name="2">
                <div>
                Operation feedback: enable the users to clearly perceive their
                operations by style updates and interactive effects;
                </div>
                <div>
                Visual feedback: reflect current state by updating or rearranging
                elements of the page.
                </div>
            </el-collapse-item>
            <el-collapse-item title="用户管理" name="3">
                <div>
                Simplify the process: keep operating process simple and intuitive;
                </div>
                <div>
                Definite and clear: enunciate your intentions clearly so that the
                users can quickly understand and make decisions;
                </div>
                <div>
                Easy to identify: the interface should be straightforward, which helps
                the users to identify and frees them from memorizing and recalling.
                </div>
            </el-collapse-item>
            <el-collapse-item title="权限管理" name="3">
                <div>
                Simplify the process: keep operating process simple and intuitive;
                </div>
                <div>
                Definite and clear: enunciate your intentions clearly so that the
                users can quickly understand and make decisions;
                </div>
                <div>
                Easy to identify: the interface should be straightforward, which helps
                the users to identify and frees them from memorizing and recalling.
                </div>
            </el-collapse-item>
            <el-collapse-item title="咨询作者" name="4">
                <div>
                Decision making: giving advices about operations is acceptable, but do
                not make decisions for the users;
                </div>
                <div>
                Controlled consequences: users should be granted the freedom to
                operate, including canceling, aborting or terminating current
                operation.
                </div>
            </el-collapse-item>
            </el-collapse>
        </div>
    </el-card>
</template>

<style lang="scss" scoped>
.el-breadcrumb{
    margin: 20px 0px;
}
</style>

