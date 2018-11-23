<template>
<div class="container">
<div class="row">
    <div class="col-md-4">
        <div class="form-group" id="scomp">
      <label for="exampleSelect1">Brand select</label>
      <select class="form-control" id="exampleSelectcompany" v-model="brand" v-on:change="getretailer(brand)">
        <option v-for="br in brandList" :key="br">{{br}}</option>
        </select>
      </div>
    </div>
    <div class="col-md-4">
        <div class="form-group" id="rcomp">
      <label for="exampleSelect2">Retailer select</label>
      <select class="form-control" id="exampleSelectretailer" v-model="retailer" v-on:change="setretailer(retailer)">
        <option v-for="r in retailerList" :key="r.retailercode" v-bind:value="r">{{r.retailercode}} + {{r.retailername}}</option>
        </select>
      </div>
    </div>
    <div class="col-md-4">
        <div class="form-group" id="rcomp">
      <label for="exampleSelect2">Option for update</label>
      <select class="form-control" id="exampleSelectretailer" v-model="option" v-on:change="setoption(option)">
        <option v-bind:value="true">Add</option>
        <option v-bind:value="false">Replace</option>
        </select>
      </div>
    </div>
</div>

  <div class="jumbotron">
       <form ref='uploadForm' 
      id='uploadForm' 
      v-bind:action="url"
      method='post' 
      encType="multipart/form-data">
            <div class="form-group">
            <label for="exampleInputFile">File input</label>
            <input type="hidden" name="brandname" v-bind:value="brand">
            <input type="hidden" name="retailercode" v-bind:value="retailer.retailercode">
            <input type="hidden" name="option" v-bind:value="option">
            <input name="pupload" type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
            <small id="fileHelp" class="form-text text-muted">Product Store Wise Stock</small></div>
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
         brandList:[],
         brand:"",
         retailerList:[],
         retailer:{},
         url:base_url+"uploadproductstorewisestock",
         option:null
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
    methods:{
        getretailer(brand){
            var self=this;
            console.log(self.brand);
            fetch(base_url+'getbrandwiseretailer', {
            method: 'POST',
            body: JSON.stringify({
                brand: self.brand,
            }),
            headers: {
                'content-type': 'application/json',
                },
            })
            .then(response => response.json())
            .then((result) => {
            console.log(result);
            self.retailerList = result;
            })
            .catch((err) => {
            console.log(err);
            });
        },
        setretailer(retailer){
            console.log(retailer);
            this.retailer.retailercode=retailer.retailercode;
            this.retailer.retailername=retailer.retailername;
            console.log(this.retailer.retailercode);
        },
        setoption(option){
            console.log(option)
            this.option=option
        }
    }
}
</script>