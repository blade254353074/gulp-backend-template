/*TMODJS:{"version":15,"md5":"5be34399b0b54814b93f2cf0cebe5b1b"}*/
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
$out+=' </select> </div> <div class="select"> <label for="seriesSelect">车系：</label> <select name="seriesId" id="seriesSelect" class="form-control"> <option selected value="">选择车系</option> ';
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
$out+=' </select> </div> <input id="searchSubmit" type="submit" value="搜索" class="btn btn-primary"> </form> ';
return new String($out);
});