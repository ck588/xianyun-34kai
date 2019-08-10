export const state=()=>{
  // 采用接口返回的数据结构
  return{
    userInfo: {
      token: '',
      user: {}
    },
  }
}

export const mutations={
  setUserInfo(state,data){
    state.userInfo=data
  },

  // 清除用户数据,退出登录
  clearUserInfo(state){
    state.userInfo={
      token:'',
      user:{}
    }
  }
}

export const actions={}
