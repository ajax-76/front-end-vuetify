<template>
<div class="container">
<div class="row">
    <div class="col-md-4">
        <div class="form-group" id="scomp">
      <label for="exampleSelect1">Brand select</label>
      <select class="form-control" id="exampleSelectcompany" v-model="brand">
        <option v-for="br in brandList" :key="br">{{br}}</option>
        </select>
      </div>
    </div>
</div>

  <div class="jumbotron">
       <form ref='uploadForm' 
      id='uploadForm' 
      v-bind:action="urltoupload" 
      method='post' 
      encType="multipart/form-data">
            <div class="form-group">
            <label for="exampleInputFile">File input</label>
            <input type="hidden" name="brandname" v-bind:value="brand">
            <input name="pupload" type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
            <small id="fileHelp" class="form-text text-muted">Product Master</small></div>
            <input type='submit' value='Upload!' />
       </form>      
    </div>
</div>
</template>

<script>
var sslprotocol="https://";
var debugprotcol="http://";
var base_url=sslprotocol+ window.location.hostname.split(":")[0]+'/';
export default{
    data(){
        return{
         companylist:[],
         comp:"",
         brandList:[],
         brand:"",
         urltoupload:base_url+"uploadproduct"
        } 
    },
    mounted(){
        var self=this;
        fetch(base_url+'getbrandwithoutcompany')
        .then(response => response.json())
        .then((result) => {
          console.log(result);
          self.brandList = result;     
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // methods:{
    //     getbrand(comp){
    //         this.comp=comp;
    //         fetch('http://localhost:4000/getbrand', {
    //     method: 'POST',
    //     body: JSON.stringify({ comp: this.comp }),
    //     headers: {
    //       'content-type': 'application/json',
    //     },
    //   })
    //     .then(response => response.json())
    //     .then((result) => {
    //       console.log(result);
    //       self.brandList = result;
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //     }
    // }
}
</script>