<template>
  <div class="mycontainer">
    <div class="series">
      <el-radio-group v-model="radio" @change='seriesChange'>
        <el-radio v-for="(item) in series" :label='item' v-bind:key='item' border>{{item}}</el-radio>
      </el-radio-group>
    </div>
    <div class="models">
      <el-checkbox-group v-model="checkedList">
        <el-checkbox v-for="model in carmodels" :label="model" :key="model" border>{{model}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <el-input v-model="testinput" clearable=""></el-input>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { Button, Select, Input, Checkbox, Radio, RadioGroup, CheckboxGroup} from 'element-ui'
Vue.component(Button.name, Button, Input, Checkbox, Radio, RadioGroup, CheckboxGroup)
export default {
  name: 'carseries',
  computed: {
    series() {
      return this.$store.state.carseries.series
    },
    carmodels() {
      return this.$store.state.carseries.carmodels
    }
  },
  data () {
    return {
      radio: '',
      checkedList: [],
      testinput: ''
    }
  },
  methods: {
    seriesChange(val) {
      this.$store.dispatch('carseries/getCarModels', val)
      this.$store.commit('carseries/upradio', val)
    }
  },
}
</script>
<style scoped>
  .mycontainer {
    width: 1200px;
    margin: 20px auto;
  }
  .center {
    text-align: center;
  }
</style>