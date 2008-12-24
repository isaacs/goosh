goosh.lib.namespace("goosh.modules");
goosh.lib.namespace("goosh.module");
goosh.lib.namespace("goosh.modobj");

//function yield(){
//  if(cmdqueue.length >0)  command(cmdqueue.pop());
//}


goosh.modules.list = new Array();


goosh.module.base = function(){

  this.mode = false;
//  this.more = false;
  this.parameters = "";
  this.help = "no helptext yet.";
  this.helptext = "";
  this.hasmore = false;
  this.results = new Array();

}

goosh.modules.register = function(name,base){
 if(!base) base = "base"; 
  eval(//"search_"+name+".prototype = new search_"+base+"();"+
       //"searchers_"+name+" = new search_"+name+"();"+
       'goosh.module.'+name+'.prototype = new goosh.module.'+base+';'+
       'goosh.modobj.'+name+' = new goosh.module.'+name+';'+
       'goosh.modules.list["'+name+'"] = goosh.modobj.'+name+";");
}

<?php

gooshload("module/web.js");
gooshload("module/*.js");
gooshload("module-exp/*.js");

?>
