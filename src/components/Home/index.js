import { connect } from 'react-redux';
import store from '@/store';
import action from './action'
import UI from './UI';
const Com = connect(
  (state) => { // 給UI组件值
    return {
      prolist: state.homedata.prolist,
      bannerlist: state.homedata.bannerlist
    }
  },
  (dispatch) => { // 响应UI组件的行为
    return {
      getData: () => {
        // store.dispatch(action.getProlist)
        store.dispatch(action.getProlist).then(() => {
          // console.log('数据加载完毕')
        }).catch(() => {
          console.log('err')
        })
        store.dispatch(action.getBannerList)
      }
    }
  }
)(UI);

export default Com;
