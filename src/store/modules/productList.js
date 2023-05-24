import json from "@/assets/products.json"

export default {
    state: {
        items: [],
        item: null,
        // imageUrl: null,
        page : 1,
        limit: 6,
        totalPages: null
    },
    getters: {
        getAllItems(state){
            return state.items
        },
        getItem(state){
            return state.item
        },
        getLimitedItems(state){
            return state.items.slice((state.page-1)*(state.limit), state.page*(state.limit))
        },
        getTotalPages(state){
            return state.totalPages
        },
        getCurrentPage(state){
            return state.page
        }
    },
    mutations: {
        reqAllItems(state, json){
            state.items = json
        },
        reqItem(state, id){
            state.item = state.items[id]
        },
        reqTotalPages(state){
            state.totalPages = Math.ceil(state.items.length/state.limit)
        },
        reqPage(state, pageNumber){
            state.page = pageNumber
        }
    },
    actions: {
        setAllItems({commit}){
            commit ("reqAllItems", json)
        },
        setItem({commit}, id){
            commit ("reqItem", id)
        },
        setTotalPages({commit}){
            commit ("reqTotalPages")
        },
        fetchPage ({commit}, pageNumber){
            commit("reqPage", pageNumber)
        }
    },
    namespaced: true
};
