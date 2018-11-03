const data = (state = {
  proList: [],
  id: '10366',
  curTab: '推荐',
}, action) => {
  const { type, data } = action;
  // console.log(data)
  switch (type) {
    case 'KIND_PROLIST':
      return {...state, proList: data};
    case 'KIND_ID':
      return {
        ...state,
        id: data
      };
    default:
      return state
  }
}

export default data;
