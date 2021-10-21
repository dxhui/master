<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-6 col-lg-6 ">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/t1.jpg" class="d-block w-100" alt="../assets/t1.jpg">
              <div class="carousel-caption d-none d-md-block">
                <h5>第一张</h5>
                <p>一些内容</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/t2.jpg" class="d-block w-100" alt="../assets/t1.jpg">
              <div class="carousel-caption d-none d-md-block">
                <h5>第二张</h5>
                <p>一些内容</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/t3.jpg" class="d-block w-100" alt="../assets/t1.jpg">
              <div class="carousel-caption d-none d-md-block">
                <h5>第三张</h5>
                <p>一些内容</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions"  data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions"  data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-6">
        <div class="img-thumbnail">
          <img src="../assets/tb.jpg" class="img-fluid rounded mx-auto d-block" alt="">
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-6">
        <div class="img-thumbnail">
          <img src="../assets/tb2.jpg" class="img-fluid rounded mx-auto d-block" alt="">
        </div>
      </div>
    </div>
  </div>
      
</template>

<script>
export default {
  //该组件为轮播区域
  name:'Rotation',
}
</script>

<style scoped>

</style>