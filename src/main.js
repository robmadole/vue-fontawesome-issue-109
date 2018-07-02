import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'

//  DONE  Compiled successfully in 4840ms                                                                                                                                                                                                                09:31:59

//  File                                 Size               Gzipped
//
//  dist/js/chunk-vendors.4b1e3049.js    116.94 kb          40.85 kb
//  dist/js/app.1828223d.js              2.01 kb            1.03 kb
//
//  Images and other types of assets omitted.
//
// DONE  Build complete. The dist directory is ready to be deployed.
import {
  faCog,
  faInfo,
  faSearch,
  faSignInAlt,
  faSignOutAlt,
  faSort,
  faSpinner,
  faUser
} from '@fortawesome/free-solid-svg-icons'

import App from './App'

library.add(
  faCog, faInfo, faSearch, faSignInAlt, faSignOutAlt, faSort, faSpinner, faUser
)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
})
