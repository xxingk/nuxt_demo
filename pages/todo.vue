<template>
  <div class="mycontainer">
    <!-- <el-input placeholder="请输入需要完成的任务，按下回车保存" v-model="newTodo" @keyup.enter.native="addTodo"></el-input>
    <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
      <div class="todo-item-left">
        <el-checkbox v-model="todo.completed"></el-checkbox>
        <el-input v-model="todo.title" v-if="todo.editing" @keyup.enter.native="saveTodo(todo)" @blur="saveTodo(todo)"></el-input>
        <div class="todo-list-item" v-else @dblclick="editTodo(todo)" :class="{completed:todo.completed}">{{todo.title}}</div>
      </div>
      <div class="remove" @click="removeTodo(index)">&times;</div>
    </div> -->
    <ul>
      <li v-for="todo in todos" class="todo-item" :key="todo">
        <input type="checkbox" :checked="todo.completed" @change="toggle(todo)">
        <span :class="{completed: todo.completed}">{{todo.title}}</span>
        <span @click="removeTodo(todo)" class="remove">&times;</span>
      </li>
      <li>
        <el-input placeholder="请输入需要添加的任务，并按下回车保存" @keyup.enter.native="addTodo" v-model="newTodo"></el-input>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { Button, Select, Input, Checkbox} from 'element-ui'
Vue.component(Button.name, Button, Input, Checkbox)
Vue.component(Select.name, Select, Input, Checkbox)
export default {
  name: 'todo',
  computed: {
    todos() {
      return this.$store.state.todo.list
    }
  },
  data () {
    return {
      newTodo: '',
      idForTodo: 3,
    }
  },
  methods: {
    removeTodo(todo) {
      this.$store.commit('todo/remove',todo)
    },
    addTodo() {
      if (this.newTodo.trim().length ==0) {
        return
      }
      this.$store.commit('todo/add', {tid: this.idForTodo,title: this.newTodo})
      console.log(this.idForTodo)
      this.newTodo = ''
      this.idForTodo++
    },
    ...mapMutations({
      toggle: 'todo/toggle'
    })
  },
}
</script>
<style scoped>
  .mycontainer {
    width: 800px;
    margin: 20px auto;
  }
  .center {
    text-align: center;
  }
  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
  }
  .todo-item-left {
    display: flex;
    align-items: center;
  }
  .todo-list-item {
    line-height: 40px;
    padding: 0 16px;
    
    color: #606266;
  }
  .remove {
    line-height: 40px;
    padding: 0 16px;
    color: #606266;
    cursor: pointer;
  }
  .completed {
    text-decoration: line-through;
    color: gray;
  }
</style>