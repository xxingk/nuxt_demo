export const state = () => ({
  series: ['h5','h7','h9'],
  radio: '',
  carmodels: '',
})
    
export const mutations = {
  upradio(state,radio) {
    state.radio = radio
  },
  upcarmodels(state,series) {
    state.carmodels = series.models
  }
}

export const actions = {
  getCarModels(context,series) {
    console.log(123123)
    if(series == 'h5') {
      context.commit('upcarmodels', {
        models : ['h5低配', 'h5中配', 'h5高配']
      }) 
    }else if(series == 'h7') {
      context.commit('upcarmodels', {
        models : ['h7低配', 'h7中配', 'h7高配']
      }) 
    }else if(series == 'h9') {
      context.commit('upcarmodels', {
        models : ['h9低配', 'h9中配', 'h9高配']
      }) 
    }else {
      context.commit('upcarmodels', {
        models : ''
      }) 
    }
  }
}