// ------------------------------------
// Constants
// ------------------------------------
// export const ADD_USER = 'ADD_USER'

// ------------------------------------
// States
// ------------------------------------
const state = {
  userinfo:{}
};

// ------------------------------------
// Getters
// ------------------------------------
export const getters = {

};

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
    getUserInfo(){
        
    }
};

// ------------------------------------
// Mutations
// ------------------------------------
export const mutations = {
    ["GET_USERINFO"](state,user){
        state.userinfo = {
            userName:"zhangsan"+user.name
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};