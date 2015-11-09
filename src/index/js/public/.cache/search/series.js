/*TMODJS:{"version":4,"md5":"68e3a7295dd647694e6c4dfda4e78d5e"}*/
template('search/series',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,seriesList=$data.seriesList,$value=$data.$value,$index=$data.$index,seriesId=$data.seriesId,$string=$utils.$string,$out='';$out+='<option selected value="">选择车系</option> ';
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
$out+=' ';
return new String($out);
});