<template>
<div class="container">

  <fieldset>
    <legend>Retailer </legend>
    <div class="form-group">
      <label for="exampleInputRetailerCode">Retailer Code</label>
      <input type="text" class="form-control" id="exampleInputRetailerCode" aria-describedby="retailercodeHelp" placeholder="Enter retailer code" v-model="body.retailercode">
      <small id="retailercodedisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.retailercodeerrormessage">

      <h4 class="alert-heading">Warning!</h4>
      <p class="mb-0"><p>{{errors.retailercodeerrormessage}}</p>
    </div>
    </div>
    <div class="form-group">
      <label for="exampleInputRetailerName">Retailer Name</label>
      <input type="text" class="form-control" id="exampleInputRetailerName" aria-describedby="retailernameHelp" placeholder="Enter retailer name" v-model="body.retailername">
      <small id="retailernamedisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
       <div class="alert alert-dismissible alert-warning" v-if="errors.retailernameerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.retailernameerrormessage}}</p>
       </div>
    </div>
     <div class="form-group">
      <label for="exampleInputCity">City</label>
      <input type="text" class="form-control" id="exampleInputCity" aria-describedby="cityHelp" placeholder="Enter city" v-model="body.city">
    </div>
     <div class="form-group">
      <label for="exampleInputState">State</label>
      <input type="text" class="form-control" id="exampleInputState" aria-describedby="stateHelp" placeholder="Enter state" v-model="body.state">
    </div>
     </fieldset>
    <br>
    <fieldset class="form-group">
      <legend>Company</legend>
     <div class="form-check">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" v-on:click="getCompany()">
          Select
        </label>
      </div>
      <div class="form-check">
      <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" checked="" v-on:click="createCompany()">
          Create
        </label>
      </div>
     <div class="form-group" id="scomp">
      <label for="exampleSelect1">Company select</label>
      <select class="form-control" id="exampleSelectcompany" v-model="body.companyname" v-on:change="getcom(body.companyname)">
        <option v-for="comp in companylist" :key="comp">{{comp}}</option>
        </select>
      </div>
    <div class="form-group">
      <label for="exampleInputCompanyName">Company Name</label>
      <input type="text" class="form-control" id="exampleInputCompanyName" aria-describedby="companynameHelp" placeholder="Enter company name" v-model="body.companyname">
      <small id="companynameisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.companynameerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.companynameerrormessage}}</p>
       </div>
    </div>
    </fieldset>
    <fieldset class="form-group">
      <legend>Brand</legend>
     <!-- <div class="form-check">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
          Select
        </label>
      </div>
      <div class="form-check">
      <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
          Create
        </label>
      </div> -->
    <div class="form-check">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadiosb" id="optionsRadiosb1" value="option1" v-on:click="getBrand()">
          Select
        </label>
      </div>
      <div class="form-check">
      <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadiosb" id="optionsRadiosb2" value="option2" checked="" v-on:click="createBrand()">
          Create
        </label>
      </div>
      <div class="form-group" id="sbrand">
      <label for="exampleSelect2">Brand select</label>
      <select class="form-control" id="exampleSelectbrand" v-model="brand" v-on:change="setbrand(brand)">
        <option v-for="bran in brandList" :key="bran.brandname" v-bind:value="bran">{{bran.brandname}}</option>
        </select>
      </div>
    <div class="form-group">
      <label for="exampleInputCompanyName">Brand Name</label>
      <input type="text" class="form-control" id="exampleInputBrandName" aria-describedby="brandnameHelp" placeholder="Enter brand name" v-model="body.brandname">
      <small id="brandnameisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.brandnameerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.brandnameerrormessage}}</p>
       </div>
    </div>
    <div class="form-group">
      <label for="exampleInputCompanyName">Brand Code</label>
      <input type="text" class="form-control" id="exampleInputBrandCode" aria-describedby="brandcodeHelp" placeholder="Enter brand code" v-model="body.brandcode">
    </div>
    </fieldset>
    <fieldset>
    <legend>Admin</legend>
     <div class="form-check">
      <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadiosad" id="optionsRadiosad2" value="option2" checked="" v-on:click="createAdmin()">
          Create
        </label>
      </div>
    <div class="form-group">
      <label for="exampleInputAdminName">Admin Name</label>
      <input type="text" class="form-control" id="exampleInputAdminName" aria-describedby="adminnameHelp" placeholder="Enter admin name" v-model="body.adminname">
      <small id="adminnamedisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.adminnameerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.adminnameerrormessage}}</p>
       </div>
    </div>
    <div class="form-group">
      <label for="exampleInputAdminEmail">Admin Email</label>
      <input type="text" class="form-control" id="exampleInputAdminEmail" aria-describedby="adminemailHelp" placeholder="Enter admin email" v-model="body.adminemail">
      <small id="adminemaildisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.adminemailerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.adminemailerrormessage}}</p>
       </div>
    </div>
     <div class="form-group">
      <label for="exampleAdminPhone">Admin Phone</label>
      <input type="text" class="form-control" id="exampleInputAdminPhone" aria-describedby="adminphoneHelp" placeholder="Enter admin phone" v-model="body.adminphone">
      <small id="adminphonedisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.adminphoneerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.adminphoneerrormessage}}</p>
       </div>
    </div>
     </fieldset>
     <fieldset>
     <legend>NSM</legend>
      <div class="form-check">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadiosn" id="optionsRadiosn1" value="option1" v-on:click="getNSM()">
          Select
        </label>
      </div>
      <div class="form-check">
      <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadiosn" id="optionsRadiosn2" value="option2" checked="" v-on:click="createNSM()">
          Create
        </label>
      </div>
      <div class="form-group" id="snsm">
      <label for="exampleSelect2n">NSM select</label>
      <select class="form-control" id="exampleSelectnsm" v-model="nsm" v-on:change="setnsm(nsm)">
        <option v-for="n in nsmList" :key="n._id" v-bind:value="n">{{n.profile.name}}</option>
        </select>
      </div>
    <div class="form-group">
      <label for="exampleInputNSMName">NSM Name</label>
      <input type="text" class="form-control" id="exampleInputNSMName" aria-describedby="nsmnameHelp" placeholder="Enter nsm name" v-model="body.nsmname">
      <small id="nsmnamedisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.nsmnameerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.nsmnameerrormessage}}</p>
       </div>
    </div>
    <div class="form-group">
      <label for="exampleInputNSMEmail">NSM Email</label>
      <input type="text" class="form-control" id="exampleInputNSMEmail" aria-describedby="nsmemailHelp" placeholder="Enter nsm email" v-model="body.nsmemail">
      <small id="nsmemaildisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.nsmemailerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.nsmemailerrormessage}}</p>
       </div>
    </div>
     <div class="form-group">
      <label for="exampleNSMPhone">NSM Phone</label>
      <input type="text" class="form-control" id="exampleInputNSMPhone" aria-describedby="nsmphoneHelp" placeholder="Enter nsm phone" v-model="body.nsmphone">
      <small id="nsmphonedisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.nsmphoneerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.nsmphoneerrormessage}}</p>
       </div>
    </div>
     </fieldset>
     <fieldset>
     <legend>RSM</legend>
     <div class="form-check">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadiosr" id="optionsRadiosr1" value="option1" v-on:click="getRSM()">
          Select
        </label>
      </div>
      <div class="form-check">
      <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadiosr" id="optionsRadiosr2" value="option2" checked="" v-on:click="createRSM()">
          Create
        </label>
      </div>
      <div class="form-group" id="srsm">
      <label for="exampleSelect2r">RSM select</label>
      <select class="form-control" id="exampleSelectrsm" v-model="rsm" v-on:change="setrsm(rsm)">
        <option v-for="r in rsmList" :key="r._id" v-bind:value="r">{{r.profile.name}}</option>
        </select>
      </div>
    <div class="form-group">
      <label for="exampleInputRSMName">RSM Name</label>
      <input type="text" class="form-control" id="exampleInputRSMName" aria-describedby="rsmnameHelp" placeholder="Enter rsm name" v-model="body.rsmname">
      <small id="nsmnamedisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.rsmnameerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.rsmnameerrormessage}}</p>
       </div>
    </div>
    <div class="form-group">
      <label for="exampleInputNSMEmail">RSM Email</label>
      <input type="text" class="form-control" id="exampleInputRSMEmail" aria-describedby="rsmemailHelp" placeholder="Enter rsm email" v-model="body.rsmemail">
      <small id="rsmemaildisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.rsmemailerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.rsmemailerrormessage}}</p>
       </div>
    </div>
     <div class="form-group">
      <label for="exampleRSMPhone">RSM Phone</label>
      <input type="text" class="form-control" id="exampleInputRSMPhone" aria-describedby="rsmphoneHelp" placeholder="Enter rsm phone" v-model="body.rsmphone">
      <small id="rsmphonedisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.rsmphoneerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.rsmphoneerrormessage}}</p>
       </div>
    </div>
     </fieldset>
      <fieldset>
     <legend>ASM</legend>
     <div class="form-check">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadiosa" id="optionsRadiosa1" value="option1" v-on:click="getASM()">
          Select
        </label>
      </div>
      <div class="form-check">
      <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadiosa" id="optionsRadiosa2" value="option2" checked="" v-on:click="createASM()">
          Create
        </label>
      </div>
      <div class="form-group" id="sasm">
      <label for="exampleSelect2a">ASM select</label>
      <select class="form-control" id="exampleSelectasm" v-model="asm" v-on:change="setasm(asm)">
        <option v-for="a in asmList" :key="a._id" v-bind:value="a">{{a.profile.name}}</option>
        </select>
      </div>
    <div class="form-group">
      <label for="exampleInputASMName">ASM Name</label>
      <input type="text" class="form-control" id="exampleInputASMName" aria-describedby="asmnameHelp" placeholder="Enter asm name" v-model="body.asmname">
      <small id="asmnamedisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.asmnameerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.asmnameerrormessage}}</p>
       </div>
    </div>
    <div class="form-group">
      <label for="exampleInputASMEmail">ASM Email</label>
      <input type="text" class="form-control" id="exampleInputASMEmail" aria-describedby="asmemailHelp" placeholder="Enter asm email" v-model="body.asmemail">
      <small id="asmemaildisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.asmemailerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.asmemailerrormessage}}</p>
       </div>
    </div>
     <div class="form-group">
      <label for="exampleASMPhone">ASM Phone</label>
      <input type="text" class="form-control" id="exampleInputASMPhone" aria-describedby="asmphoneHelp" placeholder="Enter asm phone" v-model="body.asmphone">
      <small id="asmphonedisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.asmphoneerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.asmphoneerrormessage}}</p>
       </div>
    </div>
     </fieldset>
      <fieldset>
     <legend>ISR</legend>
    <div class="form-group">
      <label for="exampleInputISRName">ISR Name</label>
      <input type="text" class="form-control" id="exampleInputISRName" aria-describedby="isrnameHelp" placeholder="Enter isr name" v-model="body.isrname">
      <small id="isrnamedisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.isrnameerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.isrnameerrormessage}}</p>
       </div>
    </div>
    <div class="form-group">
      <label for="exampleInputISREmail">ISR Email</label>
      <input type="text" class="form-control" id="exampleInputISREmail" aria-describedby="isremailHelp" placeholder="Enter isr email" v-model="body.isremail">
      <small id="isremaildisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.isremailerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.isremailerrormessage}}</p>
       </div>
    </div>
     <div class="form-group">
      <label for="exampleISRPhone">ISR Phone</label>
      <input type="text" class="form-control" id="exampleInputISRPhone" aria-describedby="isrphoneHelp" placeholder="Enter isr phone" v-model="body.isrphone">
      <small id="isrphonedisclaimer" class="form-text text-muted" style="color:#FF0000;">Required.</small>
      <div class="alert alert-dismissible alert-warning" v-if="errors.isrphoneerrormessage">

          <h4 class="alert-heading">Warning!</h4>
          <p class="mb-0"><p>{{errors.isrphoneerrormessage}}</p>
       </div>
    </div>
     </fieldset>
    <button type="submit" class="btn btn-primary" v-on:click="submit()">Submit</button>
</div>
</template>

<script>


// const ssl_url="https://" + window.location.hostname+'/';
// const debug_url="http://" + window.location.hostname+':4000/';
// const Base_API_URL = debug_url;

const sslprotocol="https://";
const debugprotcol="http://";
const Base_API_URL=sslprotocol+ window.location.hostname.split(":")[0]+'/';

import fileuploadproductmaster from '../components/fileuploadproductmaster';

export default {
  data() {
    return {
      name: 'Flavio',
      companylist: [],
      comps: '',
      admincheck: true,
      errors: {
        retailercodeerrormessage: '',
        retailernameerrormessage: '',
        companynameerrormessage: '',
        brandnameerrormessage: '',
        adminnameerrormessage: '',
        adminemailerrormessage: '',
        adminphoneerrormessage: '',
        nsmnameerrormessage: '',
        nsmemailerrormessage: '',
        nsmphoneerrormessage: '',
        rsmnameerrormessage: '',
        rsmemailerrormessage: '',
        rsmphoneerrormessage: '',
        asmnameerrormessage: '',
        asmemailerrormessage: '',
        asmphoneerrormessage: '',
        isrnameerrormessage: '',
        isremailerrormessage: '',
        isrphoneerrormessage: '',
      },
      body: {
        retailercode: '',
        retailername: '',
        city: '',
        state: '',
        companyname: '',
        brandname: '',
        brandcode: '',
        adminname: '',
        adminemail: '',
        adminphone: '',
        nsmname: '',
        nsmemail: '',
        nsmphone: '',
        rsmname: '',
        rsmemail: '',
        rsmphone: '',
        asmname: '',
        asmemail: '',
        asmphone: '',
        isrname: '',
        isremail: '',
        isrphone: '',
      },
      brandList: [],
      brand: null,
      nsmList: [],
      nsm: null,
      rsmList: [],
      rsm: null,
      asmList: [],
      asm: null,
    };
  },
  mounted() {
    $('#scomp').hide();
    $('#sbrand').hide();
    $('#snsm').hide();
    $('#srsm').hide();
    $('#sasm').hide();
  },

  methods: {
    submit() {
      const self = this;
      console.log(this.body);
      this.errors.retailercodeerrormessage = '';
      this.errors.retailernameerrormessage = '';
      this.errors.companynameerrormessage = '';
      this.errors.brandnameerrormessage = '';
      this.errors.adminnameerrormessage = '';
      this.errors.adminemailerrormessage = '';
      this.errors.adminphoneerrormessage = '';
      this.errors.nsmnameerrormessage = '';
      this.errors.nsmemailerrormessage = '';
      this.errors.nsmphoneerrormessage = '';
      this.errors.rsmnameerrormessage = '';
      this.errors.rsmemailerrormessage = '';
      this.errors.rsmphoneerrormessage = '';
      this.errors.asmnameerrormessage = '';
      this.errors.asmemailerrormessage = '';
      this.errors.asmphoneerrormessage = '';
      this.errors.isrnameerrormessage = '';
      this.errors.isremailerrormessage = '';
      this.errors.isrphoneerrormessage = '';

      fetch(Base_API_URL+"postisr", {
        method: 'POST',
        body: JSON.stringify(this.body),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(response => response.json())
        .then((result) => {
          if (result.details) {
            // error
            console.log(result);
            if (result.details[0].context.key == 'retailercode') {
              this.errors.retailercodeerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'retailername') {
              this.errors.retailernameerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'companyname') {
              this.errors.companynameerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'brandname') {
              this.errors.brandnameerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'adminname') {
              this.errors.adminnameerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'adminemail') {
              this.errors.adminemailerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'adminphone') {
              this.errors.adminphoneerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'nsmname') {
              this.errors.nsmnameerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'nsmemail') {
              this.errors.nsmemailerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'nsmphone') {
              this.errors.nsmphoneerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'rsmname') {
              this.errors.rsmnameerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'rsmemail') {
              this.errors.rsmemailerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'rsmphone') {
              this.errors.rsmphoneerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'asmname') {
              this.errors.asmnameerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'asmemail') {
              this.errors.asmemailerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'asmphone') {
              this.errors.asmphoneerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'isrname') {
              this.errors.isrnameerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'isremail') {
              this.errors.isremailerrormessage = result.details[0].message;
            }
            if (result.details[0].context.key == 'isrphone') {
              this.errors.isrphoneerrormessage = result.details[0].message;
            }
          } else {
            // uniquesness check validation

            let insertion = true;
            fetch(Base_API_URL+'checkretailercode', {
              method: 'POST',
              body: JSON.stringify({ retailercode: self.body.retailercode }),
              headers: {
                'content-type': 'application/json',
              },
            }).then(response => response.json())
              .then((result) => {
                console.log(result);
                if (result.rcode == true) {
                  this.errors.retailercodeerrormessage =
                    'retailercode already exist';
                  insertion = false;
                  return;
                }
              })
              .then(() => {
                console.log(self.nsm,self.rsm,self.asm,"aya");
                if (
                  self.nsm==null &&
                  self.rsm==null &&
                  self.asm==null
                ) {
                  fetch(Base_API_URL+'checknsm', {
                    method: 'POST',
                    body: JSON.stringify({
                      email: self.body.nsmemail,
                      phone: self.body.nsmphone,
                      companyname: self.body.companyname,
                      brandname: self.body.brandname,
                    }),
                    headers: {
                      'content-type': 'application/json',
                    },
                  })
                    .then(response => response.json())
                    .then((result) => {
                      console.log(result);
                      if (result.email == true) {
                        this.errors.nsmemailerrormessage =
                          'email already exist';
                        insertion = false;
                        return;
                      } else if (result.phone == true) {
                        this.errors.nsmphoneerrormessage =
                          'phone already exists';
                        insertion = false;
                        return;
                      }
                    })
                    .then(() => {
                      fetch(Base_API_URL+'checkrsm', {
                        method: 'POST',
                        body: JSON.stringify({
                          email: self.body.rsmemail,
                          phone: self.body.rsmphone,
                          companyname: self.body.companyname,
                          brandname: self.body.brandname,
                        }),
                        headers: {
                          'content-type': 'application/json',
                        },
                      })
                        .then(response => response.json())
                        .then((result) => {
                          console.log(result);
                          if (result.email == true) {
                            this.errors.rsmemailerrormessage =
                              'email already exist';
                            insertion = false;
                          } else if (result.phone == true) {
                            this.errors.rsmphoneerrormessage =
                              'phone already exists';
                            insertion = false;
                          }
                        })
                        .then(() => {
                          fetch(Base_API_URL+'checkasm', {
                            method: 'POST',
                            body: JSON.stringify({
                              email: self.body.asmemail,
                              phone: self.body.asmphone,
                              companyname: self.body.companyname,
                              brandname: self.body.brandname,
                            }),
                            headers: {
                              'content-type': 'application/json',
                            },
                          })
                            .then(response => response.json())
                            .then((result) => {
                              console.log(result);
                              if (result.email == true) {
                                this.errors.asmemailerrormessage =
                                  'email already exist';
                                insertion = false;
                              } else if (result.phone == true) {
                                this.errors.asmphoneerrormessage =
                                  'phone already exists';
                                insertion = false;
                              }
                            })
                            .then(() => {
                              if (self.admincheck == true) {
                                fetch(Base_API_URL+'checkisr', {
                                  method: 'POST',
                                  body: JSON.stringify({
                                    email: self.body.isremail,
                                    phone: self.body.isrphone,
                                    companyname: self.body.companyname,
                                    brandname: self.body.brandname,
                                  }),
                                  headers: {
                                    'content-type': 'application/json',
                                  },
                                })
                                  .then(response => response.json())
                                  .then((result) => {
                                    console.log(result);
                                    if (result.email == true) {
                                      this.errors.isremailerrormessage =
                                        'email already exist';
                                      insertion = false;
                                    } else if (result.phone == true) {
                                      this.errors.isrphoneerrormessage =
                                        'phone already exists';
                                      insertion = false;
                                    }
                                  })
                                  .then(() => {
                                    fetch(Base_API_URL+'checkadmin', {
                                      method: 'POST',
                                      body: JSON.stringify({
                                        email: self.body.adminemail,
                                        phone: self.body.adminphone,
                                        companyname: self.body.companyname,
                                        brandname: self.body.brandname,
                                      }),
                                      headers: {
                                        'content-type': 'application/json',
                                      },
                                    })
                                      .then(response => response.json())
                                      .then((result) => {
                                        console.log(result);
                                        if (result.email == true) {
                                          this.errors.adminemailerrormessage =
                                            'email already exist';
                                          insertion = false;
                                        } else if (result.phone == true) {
                                          this.errors.adminphoneerrormessage =
                                            'phone already exists';
                                          insertion = false;
                                        }
                                      });
                                  })
                                  .then(() => {
                                    console.log("aya")
                                    // final insertion block ----
                                    if (insertion == true) {
                                      fetch(
                                        Base_API_URL+'createuser',
                                        {
                                          method: 'POST',
                                          body: JSON.stringify({
                                            user: self.body,
                                            nsmid: "",
                                            rsmid: "",
                                            asmid:"",
                                          }),
                                          headers: {
                                            'content-type': 'application/json',
                                          },
                                        },
                                      ).then((result) => {
                                        console.log(result);
                                        if (result.status == 200) {
                                          alert('created user');
                                        } else {
                                          alert('error');
                                        }
                                      });
                                    }
                                  });
                              } else {
                                fetch(Base_API_URL+'checkisr', {
                                  method: 'POST',
                                  body: JSON.stringify({
                                    email: self.body.isremail,
                                    phone: self.body.isrphone,
                                    companyname: self.body.companyname,
                                    brandname: self.body.brandname,
                                  }),
                                  headers: {
                                    'content-type': 'application/json',
                                  },
                                })
                                  .then(response => response.json())
                                  .then((result) => {
                                    console.log(result);
                                    if (result.email == true) {
                                      this.errors.isremailerrormessage =
                                        'email already exist';
                                      insertion = false;
                                    } else if (result.phone == true) {
                                      this.errors.isrphoneerrormessage =
                                        'phone already exists';
                                      insertion = false;
                                    }
                                  })
                                  .then(() => {
                                    // final insertion block ----
                                    if (insertion == true) {
                                      fetch(
                                        Base_API_URL+'createuser',
                                        {
                                          method: 'POST',
                                          body: JSON.stringify({
                                            user: self.body,
                                            nsmid: "",
                                            rsmid: "",
                                            asmid: "",
                                          }),
                                          headers: {
                                            'content-type': 'application/json',
                                          },
                                        },
                                      ).then((result) => {
                                        console.log(result);
                                        if (result.status == 200) {
                                          alert('created user');
                                        } else {
                                          alert('error');
                                        }
                                      });
                                    }
                                  });
                              }
                            });
                        });
                    });
                } else if (
                  self.nsm!=null &&
                  self.rsm!=null &&
                  self.asm==null
                ) {
                  fetch(Base_API_URL+'checkasm', {
                            method: 'POST',
                            body: JSON.stringify({
                              email: self.body.asmemail,
                              phone: self.body.asmphone,
                              companyname: self.body.companyname,
                              brandname: self.body.brandname,
                            }),
                            headers: {
                              'content-type': 'application/json',
                            },
                          })
                            .then(response => response.json())
                            .then((result) => {
                              console.log(result);
                              if (result.email == true) {
                                this.errors.asmemailerrormessage =
                                  'email already exist';
                                insertion = false;
                              } else if (result.phone == true) {
                                this.errors.asmphoneerrormessage =
                                  'phone already exists';
                                insertion = false;
                              }
                            })
                        .then(() => {
                          if (self.admincheck == true) {
                            fetch(Base_API_URL+'checkisr', {
                              method: 'POST',
                              body: JSON.stringify({
                                email: self.body.isremail,
                                phone: self.body.isrphone,
                                companyname: self.body.companyname,
                                brandname: self.body.brandname,
                              }),
                              headers: {
                                'content-type': 'application/json',
                              },
                            })
                              .then(response => response.json())
                              .then((result) => {
                                console.log(result);
                                if (result.email == true) {
                                  this.errors.isremailerrormessage =
                                    'email already exist';
                                  insertion = false;
                                } else if (result.phone == true) {
                                  this.errors.isrphoneerrormessage =
                                    'phone already exists';
                                  insertion = false;
                                }
                              })
                              .then(() => {
                                fetch(Base_API_URL+'checkadmin', {
                                  method: 'POST',
                                  body: JSON.stringify({
                                    email: self.body.adminemail,
                                    phone: self.body.adminphone,
                                    companyname: self.body.companyname,
                                    brandname: self.body.brandname,
                                  }),
                                  headers: {
                                    'content-type': 'application/json',
                                  },
                                })
                                  .then(response => response.json())
                                  .then((result) => {
                                    console.log(result);
                                    if (result.email == true) {
                                      this.errors.adminemailerrormessage =
                                        'email already exist';
                                      insertion = false;
                                    } else if (result.phone == true) {
                                      this.errors.adminphoneerrormessage =
                                        'phone already exists';
                                      insertion = false;
                                    }
                                  });
                              })
                              .then(() => {
                                // final insertion block ----
                                if (insertion == true) {
                                  fetch(Base_API_URL+'createuser', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                      user: self.body,
                                      nsmid: self.nsm._id,
                                      rsmid: self.rsm._id,
                                      asmid: '',
                                    }),
                                    headers: {
                                      'content-type': 'application/json',
                                    },
                                  }).then((result) => {
                                    console.log(result);
                                    if (result.status == 200) {
                                      alert('created user');
                                    } else {
                                      alert('error');
                                    }
                                  });
                                }
                              });
                          } else {
                            fetch(Base_API_URL+'checkisr', {
                              method: 'POST',
                              body: JSON.stringify({
                                email: self.body.isremail,
                                phone: self.body.isrphone,
                                companyname: self.body.companyname,
                                brandname: self.body.brandname,
                              }),
                              headers: {
                                'content-type': 'application/json',
                              },
                            })
                              .then(response => response.json())
                              .then((result) => {
                                console.log(result);
                                if (result.email == true) {
                                  this.errors.isremailerrormessage =
                                    'email already exist';
                                  insertion = false;
                                } else if (result.phone == true) {
                                  this.errors.isrphoneerrormessage =
                                    'phone already exists';
                                  insertion = false;
                                }
                              })
                              .then(() => {
                                // final insertion block ----
                                if (insertion == true) {
                                  fetch(Base_API_URL+'createuser', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                      user: self.body,
                                      nsmid: self.nsm._id,
                                      rsmid: self.rsm._id,
                                      asmid: '',
                                    }),
                                    headers: {
                                      'content-type': 'application/json',
                                    },
                                  }).then((result) => {
                                    console.log(result);
                                    if (result.status == 200) {
                                      alert('created user');
                                    } else {
                                      alert('error');
                                    }
                                  });
                                }
                              });
                          }
                        });
                    
                } else if (
                  self.nsm!=null &&
                  self.rsm==null &&
                  self.asm==null
                ) {
                  fetch(Base_API_URL+'checkrsm', {
                        method: 'POST',
                        body: JSON.stringify({
                          email: self.body.rsmemail,
                          phone: self.body.rsmphone,
                          companyname: self.body.companyname,
                          brandname: self.body.brandname,
                        }),
                        headers: {
                          'content-type': 'application/json',
                        },
                      })
                        .then(response => response.json())
                        .then((result) => {
                          console.log(result);
                          if (result.email == true) {
                            this.errors.rsmemailerrormessage =
                              'email already exist';
                            insertion = false;
                          } else if (result.phone == true) {
                            this.errors.rsmphoneerrormessage =
                              'phone already exists';
                            insertion = false;
                          }
                        }).then(()=>{
                          fetch(Base_API_URL+'checkasm', {
                            method: 'POST',
                            body: JSON.stringify({
                              email: self.body.asmemail,
                              phone: self.body.asmphone,
                              companyname: self.body.companyname,
                              brandname: self.body.brandname,
                            }),
                            headers: {
                              'content-type': 'application/json',
                            },
                          })
                            .then(response => response.json())
                            .then((result) => {
                              console.log(result);
                              if (result.email == true) {
                                this.errors.asmemailerrormessage =
                                  'email already exist';
                                insertion = false;
                              } else if (result.phone == true) {
                                this.errors.asmphoneerrormessage =
                                  'phone already exists';
                                insertion = false;
                              }
                            }).then(()=>{
                              if (self.admincheck == true) {
                        fetch(Base_API_URL+'checkisr', {
                          method: 'POST',
                          body: JSON.stringify({
                            email: self.body.isremail,
                            phone: self.body.isrphone,
                            companyname: self.body.companyname,
                            brandname: self.body.brandname,
                          }),
                          headers: {
                            'content-type': 'application/json',
                          },
                        })
                          .then(response => response.json())
                          .then((result) => {
                            console.log(result);
                            if (result.email == true) {
                              this.errors.isremailerrormessage =
                                'email already exist';
                              insertion = false;
                            } else if (result.phone == true) {
                              this.errors.isrphoneerrormessage =
                                'phone already exists';
                              insertion = false;
                            }
                          })
                          .then(() => {
                            fetch(Base_API_URL+'checkadmin', {
                              method: 'POST',
                              body: JSON.stringify({
                                email: self.body.adminemail,
                                phone: self.body.adminphone,
                                companyname: self.body.companyname,
                                brandname: self.body.brandname,
                              }),
                              headers: {
                                'content-type': 'application/json',
                              },
                            })
                              .then(response => response.json())
                              .then((result) => {
                                console.log(result);
                                if (result.email == true) {
                                  this.errors.adminemailerrormessage =
                                    'email already exist';
                                  insertion = false;
                                } else if (result.phone == true) {
                                  this.errors.adminphoneerrormessage =
                                    'phone already exists';
                                  insertion = false;
                                }
                              });
                          })
                          .then(() => {
                            // final insertion block ----
                            if (insertion == true) {
                              fetch(Base_API_URL+'createuser', {
                                method: 'POST',
                                body: JSON.stringify({
                                  user: self.body,
                                  nsmid: self.nsm._id,
                                  rsmid: '',
                                  asmid: '',
                                }),
                                headers: {
                                  'content-type': 'application/json',
                                },
                              }).then((result) => {
                                console.log(result);
                                if (result.status == 200) {
                                  alert('created user');
                                } else {
                                  alert('error');
                                }
                              });
                            }
                          });
                      } else {
                        fetch(Base_API_URL+'checkisr', {
                          method: 'POST',
                          body: JSON.stringify({
                            email: self.body.isremail,
                            phone: self.body.isrphone,
                            companyname: self.body.companyname,
                            brandname: self.body.brandname,
                          }),
                          headers: {
                            'content-type': 'application/json',
                          },
                        })
                          .then(response => response.json())
                          .then((result) => {
                            console.log(result);
                            if (result.email == true) {
                              this.errors.isremailerrormessage =
                                'email already exist';
                              insertion = false;
                            } else if (result.phone == true) {
                              this.errors.isrphoneerrormessage =
                                'phone already exists';
                              insertion = false;
                            }
                          })
                          .then(() => {
                            // final insertion block ----
                            if (insertion == true) {
                              fetch('/createuser', {
                                method: 'POST',
                                body: JSON.stringify({
                                  user: self.body,
                                  nsmid: self.nsm._id,
                                  rsmid: '',
                                  asmid: '',
                                }),
                                headers: {
                                  'content-type': 'application/json',
                                },
                              }).then((result) => {
                                console.log(result);
                                if (result.status == 200) {
                                  alert('created user');
                                } else {
                                  alert('error');
                                }
                              });
                            }
                          });
                      }
                            })
                        })
                  
                } else{
                  if (self.admincheck == true) {
                  fetch(Base_API_URL+'checkisr', {
                    method: 'POST',
                    body: JSON.stringify({
                      email: self.body.isremail,
                      phone: self.body.isrphone,
                      companyname: self.body.companyname,
                      brandname: self.body.brandname,
                    }),
                    headers: {
                      'content-type': 'application/json',
                    },
                  })
                    .then(response => response.json())
                    .then((result) => {
                      console.log(result);
                      if (result.email == true) {
                        this.errors.isremailerrormessage =
                            'email already exist';
                        insertion = false;
                      } else if (result.phone == true) {
                        this.errors.isrphoneerrormessage =
                            'phone already exists';
                        insertion = false;
                      }
                    })
                    .then(() => {
                      fetch(Base_API_URL+'checkadmin', {
                        method: 'POST',
                        body: JSON.stringify({
                          email: self.body.adminemail,
                          phone: self.body.adminphone,
                          companyname: self.body.companyname,
                          brandname: self.body.brandname,
                        }),
                        headers: {
                          'content-type': 'application/json',
                        },
                      })
                        .then(response => response.json())
                        .then((result) => {
                          console.log(result);
                          if (result.email == true) {
                            this.errors.adminemailerrormessage =
                                'email already exist';
                            insertion = false;
                          } else if (result.phone == true) {
                            this.errors.adminphoneerrormessage =
                                'phone already exists';
                            insertion = false;
                          }
                        });
                    })
                    .then(() => {
                      // final insertion block ----
                      if (insertion == true) {
                        fetch(Base_API_URL+'createuser', {
                          method: 'POST',
                          body: JSON.stringify({
                            user: self.body,
                            nsmid:  self.nsm._id,
                            rsmid: self.rsm._id,
                            asmid: self.asm._id,
                          }),
                          headers: {
                            'content-type': 'application/json',
                          },
                        }).then((result) => {
                          console.log(result);
                          if (result.status == 200) {
                            alert('created user');
                          } else {
                            alert('error');
                          }
                        });
                      }
                    });
                } else {
                  fetch(Base_API_URL+'checkisr', {
                    method: 'POST',
                    body: JSON.stringify({
                      email: self.body.isremail,
                      phone: self.body.isrphone,
                      companyname: self.body.companyname,
                      brandname: self.body.brandname,
                    }),
                    headers: {
                      'content-type': 'application/json',
                    },
                  })
                    .then(response => response.json())
                    .then((result) => {
                      console.log(result);
                      if (result.email == true) {
                        this.errors.isremailerrormessage =
                            'email already exist';
                        insertion = false;
                      } else if (result.phone == true) {
                        this.errors.isrphoneerrormessage =
                            'phone already exists';
                        insertion = false;
                      }
                    })
                    .then(() => {
                      // final insertion block ----
                      if (insertion == true) {
                        fetch(Base_API_URL+'createuser', {
                          method: 'POST',
                          body: JSON.stringify({
                            user: self.body,
                            nsmid:  self.nsm._id,
                            rsmid: self.rsm._id,
                            asmid: self.asm._id,
                          }),
                          headers: {
                            'content-type': 'application/json',
                          },
                        }).then((result) => {
                          console.log(result);
                          if (result.status == 200) {
                            alert('created user');
                          } else {
                            alert('error');
                          }
                        });
                      }
                    });
                }
                } 
                 
              })
              .catch((err) => {
                console.log(err);
              });
          }
          console.log(result);
        });
    },
    getCompany() {
      const self = this;
      $('#scomp').show();
      fetch(Base_API_URL+'getcompany')
        .then(response => response.json())
        .then((result) => {
          console.log(result);
          self.companylist = result;
          $('#exampleInputCompanyName').prop('disabled', true);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getBrand() {
      const self = this;
      console.log(self.body.companyname, 'dd');
      $('#sbrand').show();
      fetch(Base_API_URL+'getbrand', {
        method: 'POST',
        body: JSON.stringify({ comp: self.body.companyname }),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(response => response.json())
        .then((result) => {
          console.log(result);
          self.brandList = result;
          $('#exampleInputBrandName').prop('disabled', true);
          $('#exampleInputBrandCode').prop('disabled', true);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getNSM() {
      const self = this;
      $('#snsm').show();
      fetch(Base_API_URL+'getnsm', {
        method: 'POST',
        body: JSON.stringify({
          comp: self.body.companyname,
          brand: self.body.brandname,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(response => response.json())
        .then((result) => {
          console.log(result);
          self.nsmList = result;
          $('#exampleInputNSMName').prop('disabled', true);
          $('#exampleInputNSMEmail').prop('disabled', true);
          $('#exampleInputNSMPhone').prop('disabled', true);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getRSM() {
      const self = this;
      $('#srsm').show();
      var id="";
      console.log(self.nsm)
      if(self.nsm!=null){
        id=self.nsm._id
      }
     
      fetch(Base_API_URL+'getrsm', {
        method: 'POST',
        body: JSON.stringify({
          comp: self.body.companyname,
          brand: self.body.brandname,
          superviserid: id,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(response => response.json())
        .then((result) => {
          console.log(result);
          self.rsmList = result;
          $('#exampleInputRSMName').prop('disabled', true);
          $('#exampleInputRSMEmail').prop('disabled', true);
          $('#exampleInputRSMPhone').prop('disabled', true);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getASM() {
      const self = this;
      $('#sasm').show();
      var id="";
       if(self.rsm!=null){
        id=self.rsm._id
      }
      fetch(Base_API_URL+'getasm', {
        method: 'POST',
        body: JSON.stringify({
          comp: self.body.companyname,
          brand: self.body.brandname,
          superviserid: id,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(response => response.json())
        .then((result) => {
          console.log(result);
          self.asmList = result;
          $('#exampleInputASMName').prop('disabled', true);
          $('#exampleInputASMEmail').prop('disabled', true);
          $('#exampleInputASMPhone').prop('disabled', true);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getcom(com) {
      console.log(com);
    },
    setbrand(brand) {
      const self = this;
      this.body.brandname = brand.brandname;
      console.log(this.body);
      this.body.brandcode = brand.brandcode;

      fetch(Base_API_URL+'getadmin', {
        method: 'POST',
        body: JSON.stringify({
          comp: self.body.companyname,
          brand: self.body.brandname,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(response => response.json())
        .then((result) => {
          console.log(result);
          const adminlist = result;
          this.body.adminname = adminlist[0].profile.name;
          this.body.adminemail = adminlist[0].emails[0].address;
          this.body.adminphone = adminlist[0].profile.phonenumber;
          $('#exampleInputAdminName').prop('disabled', true);
          $('#exampleInputAdminEmail').prop('disabled', true);
          $('#exampleInputAdminPhone').prop('disabled', true);
          this.admincheck = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createAdmin() {
      this.body.adminname = '';
      this.body.adminemail = '';
      this.body.adminphone = '';
      $('#exampleInputAdminName').prop('disabled', false);
      $('#exampleInputAdminEmail').prop('disabled', false);
      $('#exampleInputAdminPhone').prop('disabled', false);
      this.admincheck = true;
    },
    setnsm(nsm) {
      console.log(nsm);
      this.body.nsmname = nsm.profile.name;
      this.body.nsmemail = nsm.emails[0].address;
      this.body.nsmphone = nsm.profile.phonenumber;
    },
    setrsm(rsm) {
      console.log(rsm);
      this.body.rsmname = rsm.profile.name;
      this.body.rsmemail = rsm.emails[0].address;
      this.body.rsmphone = rsm.profile.phonenumber;
    },
    setasm(asm) {
      console.log(asm);
      this.body.asmname = asm.profile.name;
      this.body.asmemail = asm.emails[0].address;
      this.body.asmphone = asm.profile.phonenumber;
    },
    createCompany() {
      $('#scomp').hide();
      this.body.companyname = '';
      $('#exampleInputCompanyName').prop('disabled', false);
      var self=this;
      this.body.nsmname = '';
      this.body.nsmemail = '';
      this.body.nsmphone = '';
      this.body.rsmname = '';
      this.body.rsmemail = '';
      this.body.rsmphone = '';
      this.body.asmname = '';
      this.body.asmemail = '';
      this.body.asmphone = '';
      $('#exampleInputNSMName').prop('disabled', false);
      $('#exampleInputNSMEmail').prop('disabled', false);
      $('#exampleInputNSMPhone').prop('disabled', false);
      $('#exampleInputRSMName').prop('disabled', false);
      $('#exampleInputRSMEmail').prop('disabled', false);
      $('#exampleInputRSMPhone').prop('disabled', false);
      $('#exampleInputASMName').prop('disabled', false);
      $('#exampleInputASMEmail').prop('disabled', false);
      $('#exampleInputASMPhone').prop('disabled', false);
      self.nsm=null;
      self.rsm=null;
      self.asm=null;
      self.nsmList=[];
      self.rsmList=[];
      self.asmList=[];
       this.body.adminname = '';
      this.body.adminemail = '';
      this.body.adminphone = '';
      $('#exampleInputAdminName').prop('disabled', false);
      $('#exampleInputAdminEmail').prop('disabled', false);
      $('#exampleInputAdminPhone').prop('disabled', false);
    },
    createBrand() {
      $('#sbrand').hide();
      this.body.brandname = '';
      this.body.brandcode = '';
      $('#exampleInputBrandName').prop('disabled', false);
      $('#exampleInputBrandCode').prop('disabled', false);
      this.body.adminname = '';
      this.body.adminemail = '';
      this.body.adminphone = '';
      $('#exampleInputAdminName').prop('disabled', false);
      $('#exampleInputAdminEmail').prop('disabled', false);
      $('#exampleInputAdminPhone').prop('disabled', false);
      var self=this;
      this.body.nsmname = '';
      this.body.nsmemail = '';
      this.body.nsmphone = '';
      this.body.rsmname = '';
      this.body.rsmemail = '';
      this.body.rsmphone = '';
      this.body.asmname = '';
      this.body.asmemail = '';
      this.body.asmphone = '';
      $('#exampleInputNSMName').prop('disabled', false);
      $('#exampleInputNSMEmail').prop('disabled', false);
      $('#exampleInputNSMPhone').prop('disabled', false);
       $('#exampleInputRSMName').prop('disabled', false);
      $('#exampleInputRSMEmail').prop('disabled', false);
      $('#exampleInputRSMPhone').prop('disabled', false);
      $('#exampleInputASMName').prop('disabled', false);
      $('#exampleInputASMEmail').prop('disabled', false);
      $('#exampleInputASMPhone').prop('disabled', false);
      self.nsm=null;
      self.rsm=null;
      self.asm=null;
      self.nsmList=[];
      self.rsmList=[];
      self.asmList=[];
    },
    createNSM() {
      $('#snsm').hide();
      var self=this;
      this.body.nsmname = '';
      this.body.nsmemail = '';
      this.body.nsmphone = '';
      this.body.rsmname = '';
      this.body.rsmemail = '';
      this.body.rsmphone = '';
      this.body.asmname = '';
      this.body.asmemail = '';
      this.body.asmphone = '';
      $('#exampleInputNSMName').prop('disabled', false);
      $('#exampleInputNSMEmail').prop('disabled', false);
      $('#exampleInputNSMPhone').prop('disabled', false);
      $('#exampleInputRSMName').prop('disabled', false);
      $('#exampleInputRSMEmail').prop('disabled', false);
      $('#exampleInputRSMPhone').prop('disabled', false);
      $('#exampleInputASMName').prop('disabled', false);
      $('#exampleInputASMEmail').prop('disabled', false);
      $('#exampleInputASMPhone').prop('disabled', false);
      self.nsm=null;
      self.rsm=null;
      self.asm=null;
      self.nsmList=[];
      self.rsmList=[];
      self.asmList=[];
    },
    createRSM() {
      var self=this;
      $('#srsm').hide();
      this.body.rsmname = '';
      this.body.rsmemail = '';
      this.body.rsmphone = '';
      this.body.asmname = '';
      this.body.asmemail = '';
      this.body.asmphone = '';
      $('#exampleInputRSMName').prop('disabled', false);
      $('#exampleInputRSMEmail').prop('disabled', false);
      $('#exampleInputRSMPhone').prop('disabled', false);
      $('#exampleInputASMName').prop('disabled', false);
      $('#exampleInputASMEmail').prop('disabled', false);
      $('#exampleInputASMPhone').prop('disabled', false);
       self.rsm=null;
      self.asm=null;
      self.rsmList=[];
      self.asmList=[];
    },
    createASM() {
      var self=this;
      $('#sasm').hide();
      this.body.asmname = '';
      this.body.asmemail = '';
      this.body.asmphone = '';
      $('#exampleInputASMName').prop('disabled', false);
      $('#exampleInputASMEmail').prop('disabled', false);
      $('#exampleInputASMPhone').prop('disabled', false);
       self.asm=null;
       self.asmList=[];
    },
    Uploadfile:function(){
    const input = document.querySelectorAll('input[type="file"]');
    const formData = new FormData();
    for (const file of input) {
    formData.append('jk', file.files[0]);
      }      
    console.log(formData);
    fetch('uploadproductmaster', { // Your POST endpoint
    method: 'POST',
    body:formData,
    })
    }
  },
  
};
</script>
