import axios from 'axios'

const state = () => ({
    article: [],
});

const mutations = {
    setArticle(state, param){
        console.log(param, 'cek param')
        state.article = param
    }
};

const actions = {
    fetchArticle(store){
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-03-09&sortBy=publishedAt&apiKey=c0738615eaa343ba8843d9ff38c5b065').then((response) => {
        store.commit('setArticle', response.data.articles)
        })
        .catch((error)=>{
            store.commit('setArticle', error)
        })
    }
}

export default {
    state,
    mutations,
    actions
}