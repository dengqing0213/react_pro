const action = {
 /* getBannerList: (dispatch) => {
    Toast.loading();
    const url = 'https://mhjkm.1391.com/comic_v2/getproad?apptype=8&appversion=1.0&channel=web-app&adgroupid=123';
    fetch(url).then(res => res.json())
      .then(data => {
       // console.log(data.info)

        setTimeout(() => {
          Toast.hide();
          dispatch({
            type: 'CHANGE_BANNER',
            data: data.info
          })
        }, 1000)

      }).catch(err => console.log(err))
  },
  getProlist: (dispatch) => {
    return new Promise((resolve, reject) => {
      fetch('/daxunxun/douban').then(res => res.json())
        .then(data => {
          dispatch({
            type: 'CHANGE_PROLIST',
            data: data
          })
          resolve()
        }).catch(err => {
          console.log(err)
          reject()
        })
    })
  }*/
}

export default action
