/*TMODJS:{"version":1,"md5":"61d0841d5de114e1b78813ba3737c96b"}*/
template('search/brand',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,brandList=$data.brandList,$value=$data.$value,$index=$data.$index,brandId=$data.brandId,$string=$utils.$string,$out='';$out+='<option selected value="">选择品牌</option> ';
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
$out+=' ';
return new String($out);
});