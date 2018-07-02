import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'

// 111 KiB build
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog'
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt'
import { faSort } from '@fortawesome/free-solid-svg-icons/faSort'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'

// 585 KiB build
// import {
//   faCog,
//   faInfo,
//   faSearch,
//   faSignInAlt,
//   faSignOutAlt,
//   faSort,
//   faSpinner,
//   faUser
// } from '@fortawesome/free-solid-svg-icons'

import App from './App'

library.add(
  faCog, faInfo, faSearch, faSignInAlt, faSignOutAlt, faSort, faSpinner, faUser
)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
})
