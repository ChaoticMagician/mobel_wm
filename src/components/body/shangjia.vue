<template>
  <div>
    <table  v-for="tiem,key in booklisthead"  key="key">
      <tr>
         <td class="booklabel" ><label>{{tiem}}:</label></td><td class="bookinput" ><input type="input"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name:"test",
  data (){
    return{
        booklisthead: {
        id: "编号",
        bookcode: "图书编号",
        bookname: "图书名称",
        edition: "版次",
        pricing: "定价",
        author: "作者",
        press: "出版社",
        publicationtime: "出版时间"
      },
       bookdata: {
        id: "编号",
        bookcode: "图书编号",
        bookname: "图书名称",
        edition: "版次",
        pricing: "定价",
        author: "作者",
        press: "出版社",
        publicationtime: "出版时间"
      }
    }
  }
}
</script>

<style scoped>
.booklabel{
  width: 100px;
  font-size: 17px;
padding-top: 10px;
padding-bottom: 10px;
}
input{
  width: 240px;
  font-size: 17px;
  border: 1px solid black;
padding-top: 10px;
padding-bottom: 10px;
}
</style>
