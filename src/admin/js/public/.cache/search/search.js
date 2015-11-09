/*TMODJS:{"version":3,"md5":"134e04d9e5d77e937c1bf715771de1e0"}*/
template('search/search',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,brandList=$data.brandList,$value=$data.$value,$index=$data.$index,brandId=$data.brandId,$string=$utils.$string,factoryList=$data.factoryList,factoryId=$data.factoryId,seriesList=$data.seriesList,seriesId=$data.seriesId,$out='';$out+='<form action="/carSearch"> <div class="select"> <label for="brandSelect">品牌：</label> <select name="brandId" id="brandSelect" class="form-control"> <option selected value="">选择品牌</option> ';
$each(brandList,function($value,$index){
$out+=' ';
if(brandId == $value.id){
$out+=' <option value="';
$out+=$string($value.id);
$out+='" selected>';
$out+=$string($value.name);
$out+='</option> ';
}else{
$out+=' <option value="';
$out+=$string($value.id);
$out+='">';
$out+=$string($value.name);
$out+='</option> ';
}
$out+=' ';
});
$out+=' </select> </div> <div class="select"> <label for="factorySelect">厂商：</label> <select name="factoryId" id="factorySelect" class="form-control"> <option selected value="">选择厂商</option> ';
$each(factoryList,function($value,$index){
$out+=' ';
if(factoryId == $value.factoryId){
$out+=' <option value="';
$out+=$string($value.factoryId);
$out+='" selected>';
$out+=$string($value.factoryName);
$out+='</option> ';
}else{
$out+=' <option value="';
$out+=$string($value.factoryId);
$out+='">';
$out+=$string($value.factoryName);
$out+='</option> ';
}
$out+=' ';
});
$out+=' </select> </div> <div class="select"> <label for="seriesSelect">车系：</label> <select name="series.seriesId" id="seriesSelect" class="form-control upload-data"> <option selected value="">选择车系</option> ';
$each(seriesList,function($value,$index){
$out+=' ';
if(seriesId == $value.id){
$out+=' <option value="';
$out+=$string($value.id);
$out+='" selected>';
$out+=$string($value.name);
$out+='</option> ';
}else{
$out+=' <option value="';
$out+=$string($value.id);
$out+='">';
$out+=$string($value.name);
$out+='</option> ';
}
$out+=' ';
});
$out+=' </select> </div> </form> ';
return new String($out);
});