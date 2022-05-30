import axios from 'axios';
import Vuex from 'vuex'

const store = new Vuex.Store({
    state:{
        objUsers:[],
        image:[],
    },
    actions:{
        async GET_NAME_API(ctx){
            const payload = await (await axios('http://localhost:3000/touch/output', {method:'GET'})).data;
            ctx.commit('SET_NAME_API',payload);
        },
        GET_PATH_IMAGE(ctx){
            ctx.commit('SET_PATH_IMAGE')
        },
    },
    mutations:{
        SET_NAME_API(state,payload){
            state.objUsers = payload;
        },
        SET_PATH_IMAGE(state){
            for(let i = 0; i < 6 ; i++){
                state.image[i] = i+1;
            }
        }
    },
    getters:{
        NAME_API(state){
            return state.objUsers;
        },
        IMAGE(state){
            return state.image;
        }
    }
})

export default store;