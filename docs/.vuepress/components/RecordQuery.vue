<script lang="ts" setup>
// import { usePageData } from '@vuepress/client'
import { ref } from 'vue'

/* 搜索 */
const searchText = ref('')
const listData = ref([
  {
    content: '这是测试信息1'
  },
  {
    content: '这是测试信息2'
  },
  {
    content: '这是测试信息3'
  },
])
let list = ref([...listData.value])

const onSearch = () => {
  const newList = listData.value.filter(item => {
    return item.content.indexOf(searchText.value) !== -1
  })
  list.value = [...newList]
}

// const pageData = usePageData()
// console.log(pageData.value.frontmatter.test)

/* 新增 */
const addInputText = ref('')
const onAdd = () => {
  list.value.push({
    content: addInputText.value
  })
}

</script>

<template>
  <input type="text" class="add-input" v-model="addInputText" placeholder="新增" /><button @click="onAdd">新增</button>
  <input type="text" class="search-input" v-model="searchText" @input="onSearch" placeholder="搜索" />
  <ul>
    <li v-for="(item, index) in list" :key="index">{{item.content}}</li>
  </ul>
</template>

<style lang="scss" scoped>
.search-input {
  --docsearch-text-color: var(--c-text);
  --docsearch-muted-color: var(--c-text-quote);
  --docsearch-searchbox-background: var(--c-bg-lighter);
  --docsearch-searchbox-focus-background: var(--c-bg);
  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--c-brand);

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  display: block;
  width: 80%;
  height: 36px;
  margin: 10px auto;
  padding: 5px 10px;
  color: var(--docsearch-muted-color);
  border: 2px solid transparent;
  border-radius: 36px;
  background: var(--docsearch-searchbox-background);

  &:focus {
    background: var(--docsearch-searchbox-focus-background);
    box-shadow: var(--docsearch-searchbox-shadow);
    color: var(--docsearch-text-color);
  }
}
</style>