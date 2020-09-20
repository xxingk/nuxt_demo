export const state = () => ({
  list: [
    {
      'tid':1,
      'title': '学习Vue',
      'completed': false,
      'editing': false,
      'beforeEditCache': '',
      'completed': true
    },
    {
      'tid':2,
      'title': '学习Nuxt',
      'completed': false,
      'editing': false,
      'beforeEditCache': '',
      'completed': false
    },
  ],
  idForTodo: 3
})
  
export const mutations = {
  add(state, todo) {
    state.list.push({
      title: todo.title,
      tid: todo.tid,
      completed: false
    })
  },
  remove(state, todo) {
    console.log(todo.tid)
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.completed = !todo.completed
  },
}