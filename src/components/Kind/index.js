import { connect } from 'react-redux';
import store from '@/store';
import action from './action'
import UI from './UI';

const Com = connect(
  (state) => {
     // console.log(state)
    return {
      proList: state.kinddata.proList,
      id: state.kinddata.id,
      navList: state.kinddata.navList
    }
  },
  (dispatch) => {
    return {
      getData: () => {
        // console.log(9090909090)
        store.dispatch(action.getProList).then(() => {
          // console.log('111111111111')
        }).catch(() => {
          // console.log('err')
        })
      },
      handleClick: (e) => {
        let id = e.target.id;
        store.dispatch({
          type: 'KIND_ID',
          data: id
        });
        store.dispatch(action.getProList).then(() => {
        }).catch(() => {
        })
        // console.log(store.getState());
      },
    }
  }
)(UI);

export default Com
