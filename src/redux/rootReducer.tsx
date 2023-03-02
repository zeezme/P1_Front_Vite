import login from '../views/login/store/index'
import generalReducer from './generalReducer'
import PayWall from '../views/paywall/store/index'
import home from '../views/home/store/index'
export const rootReducer = {
  login,
  generalReducer,
  PayWall,
  home
}
