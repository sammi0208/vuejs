<template>
    <div id="app">
        <button @click="content='my-component1'">1</button>
        <button @click="content='my-component2'">2</button>
        <component :is="content"></component>
        <div>
            <div>
                <div><h1>測試資料</h1></div>
                <div v-if="meals.length">
                    <b-row>
                        <div v-bind:key="data.index" v-for="data in meals">
                            <b-col l="4">
                                <b-card v-bind:title="data.strCategory" v-bind:img-src="data.strCategoryThumb" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                                    <b-card-text>{{ `${data.strCategoryDescription.slice(0,100)}...` }}</b-card-text>
                                    <b-button href="#" variant="primary">View food</b-button>
                                </b-card>
                            </b-col>
                        </div>
                    </b-row>
                </div>
                <div v-else>
                    <h5>No meals available yet </h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from "axios"
export default {
    name: 'test',
    data() { 
      return { meals: [] }; 
    }, 
    mounted() { 
      axios 
        .get("https://www.themealdb.com/api/json/v1/1/categories.php") 
        .then(response => { this.meals = response.data.categories; }) 
        .catch(err => { console.log(err); }); 
    } 
}
</script>