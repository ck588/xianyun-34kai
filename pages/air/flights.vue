<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <FlightsFilters :data="cacheFlightsData" @getDataList="getDataList" />

        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班信息 -->
        <div>
          <flightsItem v-for="(item,index) in dataList" :key="index" :data="item" />

          <!-- 分页 -->
          <el-row type="flex" justify="center" style="margin-top:10px;">
            <!-- size-change：切换条数时候触发 -->
            <!-- current-change：选择页数时候触发 -->
            <!-- current-page: 当前页数 -->
            <!-- page-size：当前条数 -->
            <!-- total：总条数 -->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageIndex"
              :page-sizes="[1,2,3,4,5,6,7,8]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            ></el-pagination>
          </el-row>
        </div>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
      </div>
    </el-row>
  </section>
</template>

<script>
import FlightsListHead from "@/components/air/flightsListHead.vue";
import FlightsItem from "@/components/air/flightsItem.vue";
import FlightsFilters from "@/components/air/flightsFilters.vue";
export default {
  data() {
    return {
      //   后台返回的大的数据列表
      flightsData: {
        flights: [],
        info: {},
        options: {}
      },
      cacheFlightsData: {
        flights: [],
        info: {},
        options: {}
      },
      // 保存当前显示的列表数据
      dataList: [],

      //   当前页数
      pageIndex: 1,

      // 显示的条数
      pageSize: 2,

      // 总条数
      total: 0
    };
  },
  components: {
    FlightsListHead,
    FlightsItem,
    FlightsFilters
  },

  methods: {
    //   切换条数时候触发
    handleSizeChange(value) {
      this.pageSize = value;
      this.getDataList();
    },
    // 选择页数时候触发
    handleCurrentChange(value) {
      this.pageIndex = value;
      this.getDataList();
    },

    //   获取分页的数据
    getDataList(arr) {
      if (arr) {
        this.flightsData.flights = arr;
        this.total = arr.length;
      }

      this.dataList = this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        (this.pageIndex - 1) * this.pageSize + this.pageSize
      );
    }
  },
  mounted() {
    this.$axios({
      url: "/airs",
      method: "GET",
      params: this.$route.query
    }).then(res => {
      console.log(res.data);
      //获取所有数据
      this.flightsData = res.data;

      this.cacheFlightsData = {...res.data};
      //总条数
      this.total = this.flightsData.flights.length;
      // 切换出当前页面要显示的数据
      this.dataList = this.flightsData.flights.slice(0, 1);
    });
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>