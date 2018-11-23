<template> 
   <div class="jumbotron">
       <form ref='uploadForm' 
      id='uploadForm' 
      action='http://localhost:4000/uploadproductmaster' 
      method='post' 
      encType="multipart/form-data">
            <div class="form-group">
            <label for="exampleInputFile">Product Upload Master</label>
            <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
            <small id="fileHelp" class="form-text text-muted">Product Master</small></div>
            <button type="submit" class="btn btn-primary">Upload</button>
       </form>      
    </div>
</template>