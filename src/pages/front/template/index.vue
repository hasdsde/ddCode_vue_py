<template><div class="q-pa-md" >


    <q-card class="q-pa-xs" >
      <q-btn size="16px" icon="map" label="Button Label" color="primary" @click="hander" class="">
      </q-btn>
    </q-card>
    <q-table :rows="rows" :columns="columns" title="表格" class="" >
</q-table>
  
<q-card class="" >

<q-input label="qwe" :model-value="qwe" filled="" class="" ></q-input></q-card></div>

</template><script setup lang="ts">
import {ref} from "vue"

const columns :any = [{
  "name": "id",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "主键",
  "field": "id"
}, {
  "name": "icon",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "图表",
  "field": "icon"
}, {
  "name": "name",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "名称",
  "field": "name"
}, {
  "name": "orders",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "排序，越高越靠前",
  "field": "orders"
}, {
  "name": "parentId",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "父级Id",
  "field": "parentId"
}, {
  "name": "url",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "URL",
  "field": "url"
}, {
  "name": "authorityId",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "权限Id",
  "field": "authorityId"
}];
const rows :any = ref([{
  "authorityId": "authorityId0",
  "icon": "icon0",
  "id": "id0",
  "name": "name0",
  "orders": "orders0",
  "parentId": "parentId0",
  "url": "url0"
}, {
  "authorityId": "authorityId1",
  "icon": "icon1",
  "id": "id1",
  "name": "name1",
  "orders": "orders1",
  "parentId": "parentId1",
  "url": "url1"
}]);
const qwe :any = ("") ;

function hander(){
  
}

</script>