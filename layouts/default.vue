<template>
  <div>
    <!-- 头部 -->
    <Header/>

    <!-- 组件占位符 -->
    <nuxt/>

    <!-- 底部占位符 -->
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
// 注册组件
components: {
Header,
Footer
}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
ul,li,ol{
  list-style: none;
}
a{
  color:inherit;
  text-decoration: none;
}
em,i{
  font-style: normal;
}
</style>
