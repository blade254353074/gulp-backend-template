/*TMODJS:{"version":4,"md5":"3c04eb649c96a7ab16eecd14992a317a"}*/
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