/*TMODJS:{"version":1,"md5":"ebf4782422b997ca1a5e5543d2c59523"}*/
template('search/factory',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,factoryList=$data.factoryList,$value=$data.$value,$index=$data.$index,$string=$utils.$string,$out='';$out+='<option selected value="">选择厂商</option> ';
$each(factoryList,function($value,$index){
$out+=' <option value="';
$out+=$string($value.factoryId);
$out+='">';
$out+=$string($value.factoryName);
$out+='</option> ';
});
$out+=' ';
return new String($out);
});