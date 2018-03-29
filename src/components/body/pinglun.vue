<template>
  <div>
    <table class="booktable">
      <tr>
        <th>{{booklisthead.bookcode}}</th>
        <th>{{booklisthead.bookname}}</th>
        <th>{{booklisthead.edition}}</th>
        <th>{{booklisthead.pricing}}</th>
        <th>{{booklisthead.author}}</th>
        <th>{{booklisthead.press}}</th>
        <th>{{booklisthead.publicationtime}}</th>
        <th>{{booklisthead.active}}</th>
      </tr>
      <tr v-for="book,index in booklist" :key="index">
        <td>{{book.bookcode}}</td>
        <td>{{book.bookname}}</td>
        <td>{{book.edition}}</td>
        <td>{{book.pricing}}</td>
        <td>{{book.author}}</td>
        <td>{{book.press}}</td>
        <td>{{book.publicationtime}}</td>
        <td>
          <button  @click="delectbook(book.id, $event)">删除</button>
          <button  @click="chancebook(book.id, $event)">修改</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "test",
  created:function(){
    this.$options.methods.getbooklist.bind(this)()
  },
  data() {
    return {
      booklisthead: {
        id: "编号",
        bookcode: "图书编号",
        bookname: "图书名称",
        edition: "版次",
        pricing: "定价",
        author: "作者",
        press: "出版社",
        publicationtime: "出版时间",
        active: "操作"
      },
      booklist: []
        
    };
  },
  methods: {
    getbooklist: function(){

      this.$http.get('http://localhost:8080/study/book/' ,{
          // headers: {
          //     'Content-Type': 'application/json',
          //     "Access-Control-Allow-Origin": "*"
          //     // 这里有问题
          // }
      }).then(
        (res)=>{
          this.booklist = res.data
        },(err)=>{
          console.log(err)
        }
      )

    },
    delectbook: function(bookid,event){
      let url = 'http://localhost:8080/study/book/'+bookid
      this.$http.delete(url ,{
          // headers: {
          //     'Content-Type': 'application/json',
          //     "Access-Control-Allow-Origin": "*"
          //     // 这里有问题
          // }
      }).then(
        (res)=>{
          this.$options.methods.getbooklist.bind(this)()
        },(err)=>{
          console.log(err)
        }
      )
    },
    chancebook: function(bookid,event){
      let urlgo = '/shangjia/'+bookid
       this.$router.push({ path: urlgo});
    }
  }
};
</script>

<style scoped>
.booktable {
  display: inline-block;
  padding: 20px auto;

}
.booktable th{
  height: 40px;
  line-height: 40px;
  border: 1px solid white;
  padding: 0 7px 0 7px;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  background: rgb(126, 248, 146);

}
.booktable td{
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgb(190, 190, 190);
  padding: 0 7px 0 7px;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  /* background: rgb(126, 248, 146); */

}
</style>
