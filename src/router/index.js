
import home from '../components/Home'
import message from '../components/Message'
import notice from '../components/Notice'
import alumni from '../components/Alumni'
import dynamic from '../components/Dynamic'

export const routes = [
  { path: '/Home', component: home },
  { path: '/Message', component: message },
  { path: '/Notice', component: notice },
  { path: '/Alumni/', component: alumni },
  { path: '/Dynamic', component: dynamic }
]
