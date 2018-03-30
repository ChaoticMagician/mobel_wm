<template>
  <div>
    <table  v-for="tiem,key,index in booklisthead"  :key="index">
      <tr  v-if="!index == 0">
         <td class="booklabel" ><label>{{tiem}}:</label></td><td class="bookinput" ><input v-model="bookdata[key]" :placeholder="booktishi[key]"></td>
      </tr>
    </table>
    <button @click="addbook" >确定创建</button>
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
        id: "",
        bookcode: "",
        bookname: "",
        edition: "",
        pricing: "",
        author: "",
        press: "",
        publicationtime: ""
      },
       booktishi: {
        id: "",
        bookcode: "请填写数字",
        bookname: "请填写中文",
        edition: "请填写数字",
        pricing: "请填写价格",
        author: "请填写中文",
        press: "请填写中文",
        publicationtime: "请填写时间"
      }
    }
  },
  methods: {
    addbook:function(){
      this.$http.post('http://localhost:8080/study/book/',
       this.bookdata
          // headers: {
          //     'Content-Type': 'application/json',
          //     "Access-Control-Allow-Origin": "*"
          //     // 这里有问题
          // }
      ).then(
        (res)=>{
          this.$router.push({ path:'/pinglun'});
        },(err)=>{
          console.log(err)
        }
      )
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
