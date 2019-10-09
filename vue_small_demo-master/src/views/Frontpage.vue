<template>
  <v-app>
  <main>
    <section>
      <div class="container" id="caro-css">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <!-- Wrapper for slides -->
          <div class="carousel-inner">
            
            <div class="item active">
            <img src="@/assets/caro1.png" alt />
            </div>

            <div class="item">
              <img src="@/assets/caro2.png" alt  /> 
              </div>

            <div class="item">
              <img src="@/assets/caro4.png" alt  /> 
            </div>
          </div>

          <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
    <section id="main_box">
      <div>
        <div>
          <v-container>
            <v-row wrap>
              <v-col cols="12">
                <v-row justify="center">
                  <v-btn v-for="n in 3" :key="n"  outline>1</v-btn>
                </v-row>
              </v-col>
              <v-col class="col-sm-4">
                <v-btn outline block>2</v-btn>
              </v-col>
              <v-col class="col-sm-4">
                <v-btn outline block>2</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </section>
  </main>
  </v-app>
</template>

<script>
  import restApi from '../api/api';
  export default {
    mounted() {
      this.fetchProducts()
    },
    data: ()  => ({
      products: []
    }),
    methods: {
      fetchProducts() {
        restApi.get('shoes')
                .then((data)=>{
                  this.products = data.data;
                });
      },
    }
  };


</script>

<style>

  .sko-cards{
    margin: 5px;
  }

#diven {
  height: 400px;
  width: 800px;
  display: flex;
  margin: 0 auto;
  background-color: white;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 30px;
}

#main-box-box {
  background-color: rgb(255, 255, 255);
  height: 250px;
  width: 260px;
  padding-right: 25px;
  border: 1.5px solid black;
  margin: 2.5px 0 2.5px 0;
  padding-top: 20px;
  padding-left: 40px;
}

main {
  background-color: white;
  height: auto;
}

.main-box {
  height: 160px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}

#main_box {
  height: auto;
  background-color: white;
}

</style>


