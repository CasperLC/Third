<template>
    <div id="app">
        <v-app id="inspire">
            <div>
            <v-container>
                <v-row justify="center">
                    <v-col sm="8">
            <v-carousel cycle>
                <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                ></v-carousel-item>
            </v-carousel>
                    </v-col>
                </v-row>
            </v-container>
            </div>
            <div>
                <v-container>
                    <v-row class="row wrap" justify="center">
                        <v-col sm="8">
                            <v-col  sm="4" v-for="product in products.slice(0,6)" v-bind:key="product.productid">
                        <v-card>
                    <v-img
                            class="white--text"
                            src="@/assets/salg3.jpg"
                    >
                        <v-card-title class="align-end fill-height">{{product.productName}}</v-card-title>
                    </v-img>
                    <v-card-text>Price: {{product.price}} DKK</v-card-text>
                    <v-card-actions>
                        <v-row justify="center">
                        <v-btn outlined :to="{
                    name: 'productdetails',
                    params: {
                    id: product.productid
                    }}">Order Here</v-btn>
                        </v-row>
                    </v-card-actions>
                    </v-card>
                            </v-col>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </v-app>
    </div>
</template>

<script>
    import restApi from '../api/api'
    export default {
        mounted() {
            this.fetchProducts()
        },
        data() {
            return {
                products: [],
                items: [
                    {
                        src: require('../assets/caro1.png'),
                    },
                    {
                        src: require('../assets/caro2.png'),
                    },
                    {
                        src: require('../assets/caro4.png'),
                    }
                ],
            }
        },
        methods: {
            fetchProducts() {
                restApi.get('shoes')
                    .then((data) => {
                        this.products = data.data;
                    });
            },
        }
    }
</script>