<template>
  <div>
    <!-- 用户选择国家和地区 -->
    <label>国家：</label>
    <select v-model="selectedCountry" >
      <option v-for="country in countries" :value="country">{{ country }}</option>
    </select>
    <br>
  <div >
      <label>地区：</label>
      <select v-model="selectedLocation" @change="loadWeatherAndAccommodation">
        <option v-for="location in locations" :value="location">{{ location }}</option>
      </select>
      <hr>
      <p>公共假日:</p>
      <ul>
        <li v-for="holiday in holidays">{{ holiday }}</li>
      </ul>
      <p>天气：</p>
      <table>
        <tr v-for="(weather, index) in weatherList" :key="index">
          <td>{{ weather.date }}</td>
          <td>{{ weather.temperature }}</td>
          <td>{{ weather.condition }}</td>
        </tr>
      </table>
      <p>住宿租赁信息：</p>
      <ul>
        <li v-for="accommodation in accommodationList">{{ accommodation }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      selectedCountry: '',
      selectedLocation: '',
      countries: ['中国', '美国', '英国'],
      locations: [],
      holidays: [],
      weatherList: [{
        data:'1',
        temperature: '2',
        condition: '3'
      }],
      accommodationList: []
    }
  },
  async mounted(){
       this.countries = await axios.get('/api/locations');
  },
  methods: {
    // 根据所选国家加载地区列表
  async  updateHolidays() {
   //加载地区
   this.locations= await axios.get(`/api/locations?country=${this.selectedCountry}`)
      this.holidays = []
      this.weatherList = []
      this.accommodationList = []
    },
    // 加载天气和住宿租赁信息
    async loadWeatherAndAccommodation() {
      // 根据所选地区获取公共假日
      this.holidays = await axios.get(`/api/holiday?location=${this.selectedLocation}`)
      
      // 加载天气信息,传递地区和公共假日参数。
      this.weatherList = await axios.get(`/api/weather?location=${this.selectedLocation}&holidays=${this.holidays}`)
      
      // 加载住宿租赁信息
      this.accommodationList = await axios.get(`/api/accommodation?location=${this.selectedLocation}&holidays=${this.holidays}`)
    }
  }
}