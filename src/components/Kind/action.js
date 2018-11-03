import store from '@/store';

const action = {
  getProList: (dispatch) => {
    let id = store.getState().kinddata.id;
    return new Promise((resolve, reject) => {
      fetch(`/daxunxun/Product/AjaxSonCateList?cateId=&np=${id}&cateref=`).then(res => res.json())
        .then(data => {
          dispatch({
            type: 'KIND_PROLIST',
            data: data
          })
          // console.log(data)
          resolve()
        }).catch(err => {
        console.log(err)
        reject()
      })
    })
  }
}

export default action