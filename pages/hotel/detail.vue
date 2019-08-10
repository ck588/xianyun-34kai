<template>
  <div class="box">
    <div class="win">
      <!--头部导航   面包屑 -->
      <div class="mianbaoxie">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'/hotel'}">南京酒店</el-breadcrumb-item>
          <el-breadcrumb-item>好来阁商务宾馆</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <!-- 宾馆级别 和 信息 -->
      <div class="hotelName">
        <h4>好来阁商务宾馆</h4>
        <span class="aa">
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
          <i class="iconfont iconhuangguan"></i>
        </span>
        <span class="pinyin">hao lai ge shang wu hotel</span>
        <p class="iconfont iconlocation dizhi">高淳县淳溪镇镇兴路118号(高淳县委党校对面)</p>
      </div>

      <!-- 酒店图片 -->
      <el-row type="flex" class="hotelImgs" justify="space-around">
        <el-col :span="16">
          <div class="hotelSmallImgs">
            <img
              height="360"
              width="640"
              src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg"
              alt="好来阁商务宾馆"
            />
          </div>
        </el-col>
        <el-col :span="8">
          <div
            class="hotelSmallImgs clearfix"
            :@click="TebImgs(index)"
            :class="{active:current===index}"
            {{item}}
          >
            <!-- 第1张小图片 -->
            <a href="javascript:void(0)">
              <img src="http://157.122.54.189:9093/images/hotel-pics/1.jpeg" alt />
            </a>
            <!-- 第2张小图片 -->
            <a href="javascript:void(0)">
              <img src="http://157.122.54.189:9093/images/hotel-pics/2.jpeg" alt />
            </a>
            <!-- 第3张小图片 -->
            <a href="javascript:void(0)">
              <img src="http://157.122.54.189:9093/images/hotel-pics/3.jpeg" alt />
            </a>
            <!-- 第4张小图片 -->
            <a href="javascript:void(0)">
              <img src="http://157.122.54.189:9093/images/hotel-pics/4.jpeg" alt />
            </a>
            <!-- 第5张小图片 -->
            <a href="javascript:void(0)">
              <img src="http://157.122.54.189:9093/images/hotel-pics/5.jpeg" alt />
            </a>
            <!-- 第6张小图片 -->
            <a href="javascript:void(0)">
              <img src="http://157.122.54.189:9093/images/hotel-pics/6.jpeg" alt />
            </a>
          </div>
        </el-col>
      </el-row>

      <!-- 价格来源 -->
      <div class="HotelPrices" :highlight-current-row="true">
        <el-row>
          <el-col :span="10">
            <div class="grid-content bg-purple jiage_laiyuan">价格来源</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content bg-purple jiage_laiyuan">低价房型</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple jiage_laiyuan">最低价格/每晚</div>
          </el-col>
        </el-row>

        <a href="https://hotels.ctrip.com/hotel/694679.html" target="targer">
          <el-row>
            <el-col :span="10">
              <div class="grid-content bg-purple jiage">
                <span>携程</span>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="grid-content bg-purple jiage">高级大床房A</div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple jiage">
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i>¥&nbsp;48&nbsp;</i>起&nbsp;&nbsp;
                  <i>&gt;</i>
                </span>
              </div>
            </el-col>
          </el-row>
        </a>

        <a href="https://hotels.ctrip.com/hotel/694679.html" target="targer">
          <el-row>
            <el-col :span="10">
              <div class="grid-content bg-purple jiage">
                <span>艺龙</span>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="grid-content bg-purple jiage">高级大床房A</div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple jiage">
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i>¥&nbsp;63&nbsp;</i>起&nbsp;&nbsp;
                  <i>&gt;</i>
                </span>
              </div>
            </el-col>
          </el-row>
        </a>

        <a href="https://hotels.ctrip.com/hotel/694679.html" target="targer">
          <el-row>
            <el-col :span="10">
              <div class="grid-content bg-purple jiage">
                <span>Hotels.com</span>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="grid-content bg-purple jiage">高级大床房A</div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple jiage">
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i>¥&nbsp;117&nbsp;</i>起&nbsp;&nbsp;
                  <i>&gt;</i>
                </span>
              </div>
            </el-col>
          </el-row>
        </a>
      </div>

      <!-- 高德地图 -->
      <el-row>
        <el-col :span="16">
          <div class="grid-content bg-purple" id="container"></div>
        </el-col>

        <el-col :span="8">
          <template>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="风景" name="first">
                <template>
                  <el-table
                   
                    :show-header="false"
                    :data="tableData3"
                    max-height="350"
                    style="width: 100%"
                  >
                    <el-table-column prop="place" min-width="190"
                    ></el-table-column>
                    <el-table-column prop="distance" min-width="70"
                   ></el-table-column>
                  </el-table>
                </template>
              </el-tab-pane>
               <el-tab-pane label="交通" name="second">交通</el-tab-pane>
            </el-tabs>

           
          </template>
        </el-col>
      </el-row>

      <!-- 入住的基本信息 -->
      <div class="hotel_ruzu">
        <el-row>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <span>基本信息</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <i>入住时间:14:00之后</i>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <i>离店时间:12:00之前</i>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <i>2010年开业 / 2015年装修</i>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <i>酒店规模:148间客房</i>
            </div>
          </el-col>
        </el-row>

        <el-row class="lll">
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <span>主要设施</span>
            </div>
          </el-col>
          <el-col :span="21">
            <div class="grid-content bg-purple">
              <el-tag type="info">外币兑换服务</el-tag>
              <el-tag type="info">电梯</el-tag>
              <el-tag type="info">洗衣服务</el-tag>
              <el-tag type="info">热水壶</el-tag>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <span>停车服务</span>
            </div>
          </el-col>
          <el-col :span="21">
            <div class="grid-content bg-purple">-</div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <span>品牌信息</span>
            </div>
          </el-col>
          <el-col :span="21">
            <div class="grid-content bg-purple">-</div>
          </el-col>
        </el-row>
      </div>
 <!-- 用户评论 -->
      <div class="userComments">
        <h4>0条真实用户评论</h4>
        <el-row type="flex" class="row-bg">
          <el-col :span="10">
            <div class="grid-content bg-purple">
              <p>总评数&nbsp;:&nbsp;9</p>
              <p>好评数&nbsp;:&nbsp;1</p>
              <p>差评数&nbsp;:&nbsp;2</p>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content bg-purple-light">
              <span>环境</span>
              <span>产品</span>
              <span>服务</span>
            </div>
          </el-col>
        </el-row>
        <!-- 定位星星图标 -->
        <div class="recommended">
          <div class="tuijian x-large height-light stamp">
            <span>推荐</span>
          </div>
          <div class="xx">
            <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"></i>
            <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"></i>
            <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);"></i>

            <i class="el-rate__icon el-icon-star-on" style="color: rgb(239, 242, 247);">
              <i
                class="el-rate__decimal el-icon-star-on"
                style="color: rgb(247, 186, 42); width: 50%;"
              ></i>
            </i>
            <i class="el-rate__icon el-icon-star-on" style="color: rgb(239, 242, 247);"></i>
          </div>
          <span>3.5分</span>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      activeName: "first",
      current: 0,
      tableData3: [
        {
          place: "甘霖路口(公交站)",
          distance: "0.09公里"
        },
        {
          place: "甘霖路口(公交站)",
          distance: "0.09公里"
        },
        {
          place: "甘霖路口(公交站)",
          distance: "0.09公里"
        },
        {
          place: "甘霖路口(公交站)",
          distance: "0.09公里"
        },
        {
          place: "甘霖路口(公交站)",
          distance: "0.09公里"
        },
        {
          place: "甘霖路口(公交站)",
          distance: "0.09公里"
        },
        {
          place: "甘霖路口(公交站)",
          distance: "0.09公里"
        },
        {
          place: "甘霖路口(公交站)",
          distance: "0.09公里"
        },
        {
          place: "甘霖路口(公交站)",
          distance: "0.09公里"
        },
        {
          place: "甘霖路口(公交站)",
          distance: "0.09公里"
        },
        {
          place: "甘霖路口(公交站)",
          distance: "0.09公里"
        }
      ]
    };
  },
  methods: {
    TebImgs(index) {
      //  this.current=index;
    },
    // 风景,交通 点击切换时候触发
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  },
  mounted() {
    this.$axios({
      url: "/hotels",
      method: "GET"
    }).then(res => {
      //  hotelHHHH=res.data.data
      params: {
      }
    });
    // 高德地图
    window.onLoad = function() {
      var map = new AMap.Map("container", {
        zoom: 11, //级别
        center: [118.8718107, 31.32846821], //中心点坐标
        viewMode: "3D" //使用3D视图
      });
    };

    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=8205e8295ae64dd2d94937ea12091506&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
    window.onLoad = function() {
      var map = new AMap.Map("container", {
        zoom: 11, //级别
        center: [118.8718107, 31.32846821], //中心点坐标
        viewMode: "3D" //使用3D视图
      });

      // 创建一个 Marker 实例：
      var marker = new AMap.Marker({
        position: new AMap.LngLat(118.8718107, 31.32846821), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "北京"
      });

      // 将创建的点标记添加到已有的地图实例：
      map.add(marker);
    };
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
em,
i {
  font-style: normal;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.clearfix:after {
  visibility: hidden;
  clear: both;
  display: block;
  content: ".";
  height: 0;
}
.win {
  width: 1000px;
  margin: 0 auto;
}
.hotelName {
  position: relative;
  margin-top: 20px;
  h4 {
    font-size: 30px;
    font-weight: normal;
  }
  .pinyin {
    color: #666;
    font-size: 17px;
  }
}

.mianbaoxie {
  margin-top: 20px;
}
.aa {
  color: #f90;
  position: absolute;
  top: 10px;
  left: 220px;
}
.dizhi {
  color: #666;
  font-size: 16px;
}
.hotelPigImgs {
  margin-top: 40px;
}

.hotelImgs {
  margin-top: 40px;
  .hotelSmallImgs {
    a {
      display: block;
      float: left;
      width: 50%;

      img {
        width: 95%;
        // padding-left: 20px;
        margin-bottom: 10px;
      }
    }
  }
}
.HotelPrices {
  margin-top: 25px;
  margin-bottom: 30px;
  padding-bottom: 15px;

  .jiage {
    color: #606266;
    font-size: 14px;
    padding-bottom: 15px;
    padding-top: 15px;
    font-size: 14px;
    border-bottom: 1px solid #ebeef5;
    i {
      color: #ff9900;
    }
  }
  .jiage_laiyuan {
    font-weight: 600;
    color: #909399;
  }
  .hotel_11 {
    &:hover {
      color: #f5f7fa;
    }
  }
}
#container {
  width: 650px;
  height: 400px;
}
.hotel_ruzu {
  margin-top: 50px;
  span {
    font-size: 15px;
    font-weight: 500;
  }
  i {
    font-size: 13px;
    color: #666666;
  }
  .grid-content {
    border-bottom: 1px solid #ebeef5;
    height: 60px;
    line-height: 60px;
  }
}
.userComments {
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  h4 {
    padding: 20px 0;
  }
  p {
    color: #666666;
  }
  span {
    color: #ff9900;
    padding-right: 100px;
  }
}
.recommended {
  .tuijian {
    width: 90px;
    height: 90px;
    border: 1px solid #ffebcf;
    border-radius: 50%;
    position: absolute;
    left: 200px;
    top: 50px;
    span {
      position: absolute;
      left: 35px;
      top: 20px;
      color: #ffebcf;
      font-size: 25px;
      font-weight: normal;
    }
  }
  .xx {
    position: absolute;
    left: 190px;
    top: 85px;
  }
  span {
    position: absolute;
    left: 320px;
    top: 85px;
    font-size: 13px;
  }
}
</style>

