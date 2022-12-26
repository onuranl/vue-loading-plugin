## Introduction
Simple, customizable loading screen for Vue developers.
## Installation
```
npm i @onuranl/vue-loading-plugin
```
## Set Up
VUE Users
```javascript
// main.js

import Vue from 'vue'
import App from './App.vue'

import Loading from '@onuranl/vue-loading-plugin'

// default options
Vue.use(Loading)

// customize
Vue.use(Loading, {
  dark: true, // dark theme - default false
  classes: ['myclass'], // array, object or string
  backgroundColor: 'rgb(255,255,255)', // set custom background, it's not gonna be work if dark theme is true
  icon: null, // use custom icon
})

new Vue({
  render: h => h(App),
}).$mount('#app')
```
NUXT Users
```javascript
// Create file named 'vue-loading-plugin.js' in plugins folder

import Vue from 'vue'
import Loading from '@onuranl/vue-loading-plugin'

// default options
Vue.use(Loading)

// customize
Vue.use(Loading, {
  dark: true, // dark theme - default false
  classes: ['myclass'], // array, object or string
  backgroundColor: 'rgb(255,255,255)', // set custom background, it's not gonna be work if dark theme is true
  icon: null, // use custom icon
})
```

```javascript
// nuxt.config.js

plugins: ['~/plugins/vue-loading-plugin'],
```
## Usage
```javascript
// set state

this.$loading(true)

this.$loading(false)
```
