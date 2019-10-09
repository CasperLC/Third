<template>
    <div>
        <v-app>
        <v-container>
            <v-row justify="center">
                <v-col sm="9">
                    <v-col sm="3" align="right">
                        <v-card @click="imageChange1" class="billed-kort black" height="100%" width="180">
                            <v-img
                                    class="white--text"
                                    src="@/assets/salg2.png"
                            />
                        </v-card>
                        <v-card @click="imageChange2" class="billed-kort black" height="100%" width="180">
                            <v-img
                                    class="white--text"
                                    src="@/assets/salg4.jpeg"
                            />
                        </v-card>
                        <v-card @click="imageChange3" class="billed-kort black" height="100%" width="180">
                            <v-img
                                    class="white--text"
                                    src="@/assets/salg5.jpg"
                            />
                        </v-card>
                    </v-col>
                    <v-col sm="5">
                    <video width="300" autoplay muted loop class="billed-kort black">
                        <source src="@/assets/video.webm" type="video/mp4">
                    </video>
                    </v-col>
                    <v-col sm="4">
                        <v-card class="billed-kort" height="375">
                            <v-img
                                    class="white--text"
                                    :src="image"
                            />
                            <v-card-title>{{product.productName}}</v-card-title>
                            <v-card-text>
                                Size: {{product.size}}<br>
                                Color: {{product.color}}<br>
                                Type: {{product.type}}<br>
                                Price: {{product.price}}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-col>
            </v-row>
        </v-container>
        </v-app>
    </div>
</template>

<script>
    import restApi from '../api/api'
    export default {
        data: () => ({
            product:{},
            image: {
                src: require('../assets/salg2.png'),
            }
        }),
        mounted() {
            const { id } = this.$route.params;
            this.fetchProduct(id);
        },
        methods: {
            imageChange1(){
              this.image = {src: require('../assets/salg2.png')}
            },
            imageChange2(){
                this.image = {src: require('../assets/salg4.jpeg')}
            },
            imageChange3(){
                this.image = {src: require('../assets/salg5.jpg')}
            },
            fetchProduct(id){
                restApi.get('shoes/'+id)
                    .then((data) => {
                        this.product = data.data;
                    });
            },
        },
    }
</script>

<style>
    .billed-kort{
        border: 2px solid;
        margin-bottom: 5px;
    }
</style>