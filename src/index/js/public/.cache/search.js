/*TMODJS:{"version":6,"md5":"0812890a8343b024845819cf899533da"}*/
template('search',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,brandList=$data.brandList,$value=$data.$value,$index=$data.$index,brandId=$data.brandId,$string=$utils.$string,factoryList=$data.factoryList,factoryId=$data.factoryId,seriesList=$data.seriesList,seriesId=$data.seriesId,$out='';$out+='<form id="carSearch" action=""> <div class="select"> <input type="hidden" name="brand"> <label>品牌</label> <ul id="brandSelect"> <li class="active" data-value="0">选择品牌</li> ';
$each(brandList,function($value,$index){
$out+=' ';
if(brandId == $value.id){
$out+=' <li data-value="';
$out+=$string($value.id);
$out+='" class="active">';
$out+=$string($value.name);
$out+='</li> ';
}else{
$out+=' <li data-value="';
$out+=$string($value.id);
$out+='">';
$out+=$string($value.name);
$out+='</li> ';
}
$out+=' ';
});
$out+=' </ul> </div> <div class="select"> <input type="hidden" name="factory"> <label>厂商</label> <ul id="factorySelect"> <li class="active" data-value="0">选择厂商</li> ';
$each(factoryList,function($value,$index){
$out+=' ';
if(factoryId == $value.factoryId){
$out+=' <li data-value="';
$out+=$string($value.factoryId);
$out+='" class="active">';
$out+=$string($value.factoryName);
$out+='</li> ';
}else{
$out+=' <li data-value="';
$out+=$string($value.factoryId);
$out+='">';
$out+=$string($value.factoryName);
$out+='</li> ';
}
$out+=' ';
});
$out+=' </ul> </div> <div class="select"> <input type="hidden" name="series"> <label>车系</label> <ul id="seriesSelect"> <li class="active" data-value="0">选择车系</li> ';
$each(seriesList,function($value,$index){
$out+=' ';
if(seriesId == $value.id){
$out+=' <li data-value="';
$out+=$string($value.id);
$out+='" class="active">';
$out+=$string($value.name);
$out+='</li> ';
}else{
$out+=' <li data-value="';
$out+=$string($value.id);
$out+='">';
$out+=$string($value.name);
$out+='</li> ';
}
$out+=' ';
});
$out+=' </ul> </div> </form> ';
return new String($out);
});