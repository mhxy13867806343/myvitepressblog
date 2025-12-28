# 🌿 Vue.js 笔记

<div style="text-align: center; padding: 30px 20px; margin-bottom: 40px; background: linear-gradient(135deg, rgba(65, 184, 131, 0.1) 0%, rgba(53, 73, 94, 0.1) 100%); border-radius: 16px;">

## Vue.js 开发技巧与心得

从 Vue 2 到 Vue 3，记录实战中的问题与解决方案

</div>

## 📚 Vue 3 新特性

### Composition API

```javascript
import { ref, reactive, computed, watch, onMounted } from 'vue'

export default {
  setup() {
    // 响应式数据
    const count = ref(0)
    const state = reactive({
      name: '勿扰',
      age: 28
    })
    
    // 计算属性
    const doubleCount = computed(() => count.value * 2)
    
    // 侦听器
    watch(count, (newVal, oldVal) => {
      console.log(`count changed from ${oldVal} to ${newVal}`)
    })
    
    // 生命周期
    onMounted(() => {
      console.log('组件已挂载')
    })
    
    return { count, state, doubleCount }
  }
}
```

### Script Setup 语法糖

```vue
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)

const increment = () => {
  count.value++
}
</script>

<template>
  <button @click="increment">
    Count: {{ count }} (Double: {{ doubleCount }})
  </button>
</template>
```

## 🎯 常用技巧

### 1. 组件通信

```vue
<!-- 父组件 -->
<template>
  <ChildComponent 
    :data="parentData"
    @update="handleUpdate"
  />
</template>

<!-- 子组件 -->
<script setup>
const props = defineProps(['data'])
const emit = defineEmits(['update'])

const handleClick = () => {
  emit('update', newValue)
}
</script>
```

### 2. 自定义 Hooks

```javascript
// useCounter.js
import { ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue
  
  return {
    count,
    increment,
    decrement,
    reset
  }
}
```

## 🔧 性能优化

- **v-show vs v-if**: 频繁切换用 `v-show`，条件渲染用 `v-if`
- **v-for key**: 使用唯一 key 提升列表渲染性能
- **组件懒加载**: `defineAsyncComponent` 实现按需加载
- **keep-alive**: 缓存不活动组件状态

---

<div style="text-align: center; margin-top: 40px;">

[返回博客首页](/blog/) | [AI 探索之路](/blog/ai)

</div>
