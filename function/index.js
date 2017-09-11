/*
* @Author: acer
* @Date:   2017-09-09 15:08:04
* @Last Modified by:   acer
* @Last Modified time: 2017-09-11 17:59:08
*/
//将元素添加到数组中然后形成新的数组
function push(arr,...rest){
	var newarr=[];
	for(var i=0;i<rest.length;i++){
        newarr[newarr.length]=rest[i]
	}
	return newarr;
}
//将所有元素做相应的运算  回掉函数--映射
function map(arr,fn){
	var newarr1=[];
	for(var i=0;i<arr.length;i++){
		newarr1[newarr1.length]=fn(arr[i]);
	}
	return newarr1;
}

//将符合条件的数组元素挑选出来
function filter(arr,fn){
	var newarr2=[];
	for(var i=0;i<arr.length;i++){
		if(fn(arr[i])){
		   newarr2[newarr2.length]=arr[i];
	    }
	}
	return newarr2;
}

//只要数组里面的数有一个满足条件就返回true
function some(arr,fn){
	for(var i=0;i<arr.length;i++){
       if(fn(arr[i])){
       	  return true;
       }
	}
	return false;
}

//只要数组里面的数全部满足条件就返回true，有一个不满足条件就返回false
function every(arr,fn){
	for(var i=0;i<arr.length;i++){
       if(!fn(arr[i])){
       	  return false;
       }
	}
	return true;
}

//递归函数
dg(1)
function dg(num){
	if(num<5){
		dg(++num);
	}
	console.log (num);
}

//用递归的方式对一个数组进行拷贝
var arr=[1,2,3,4,['a','b','c']];
//console.log(copy(arr));

//改变arr的数组元素，result不会改变
arr[2]='a';
arr[4][0]='b';
console.log(arr)

//改变result的数组元素，arr不会改变
var result4=copy(arr);
result4[1]='x';
console.log(result4);
function copy(arr){
	var newarr3=[];
	for(var i=0;i<arr.length;i++){
		if(typeof arr[i]=="object"){
          newarr3[i]=copy(arr[i]);
       }else{
       	  newarr3[i]=arr[i];
       }
	}
    return newarr3;
}


//同时调用，先加载哪个
function load(){
	alert(50);
}
var load=function(){
    alert(60);
}
load();  //弹出60  var会保存load不会赋值，当调用时会覆盖，不管在前在后都会执行var load

//实参比形参多 arguements、rest参数会保存 形参比实参多 没有赋值的将是undefined
//arguements  ...rest(还可以写其他名字)


//闭包函数
function fn1(){
	var n=10;
	return fn2;  
	//把函数当作返回值返回出来，在外调用不会是undefined，可以将里面的值返回出去
	function fn2(){
		n++;
		return n;
	}
}
var r=fn1();
alert(r());  //11


//变量的另一种声明
//暂时性的死区  var变量的提升
/*let w=1;  //同一个作用域只能声明一个*/

var arr=[];
for(let i=0;i<10;i++){
	arr[i]=function(){
		console.log(i);
	}
}
arr[5]();


//内置顶层函数 
console.log(escape('张三'));
console.log(unescape('%u8BB8%u6770'));


console.log(Number(0111))    //73
console.log(Number(12457))  //12457  
console.log(Number(012457))  //5423 加0将会识别为8进制的，如果后面的数字没有大于8  
console.log(Number('00111'))  //111
console.log(Number('100px'))  //NaN
console.log(Number('0o145'))  //101 可以识别进制类型的字符串 

console.log(String(0111))     //73
console.log(String('00111'))	//00111
console.log(String(0o145))   //101 
console.log(String('0o145')) //0o145 不识别进制类型的字符串
console.log(String(012457))  //八进制转化为10进制  5423
console.log(String(true))   //true

console.log(Boolean(null))  //false
/*console.log(Boolean(abc))   //报错*/
console.log(Boolean('abc'))   //true

console.log(parseInt('100px'))  //100
console.log(parseInt('100.05px'))  //100

console.log(parseFloat('100.05px'))  //1000.05

console.log(isNaN(true))  //flase




//创建对象
//json方式创建
let lisi={};
lisi.age=19;
console.log(lisi);

//构造函数创建对象
function Person(){

}
let zhangsan=new Person();
zhangsan.age=18;
zhangsan.name="张三"
zhangsan.say=function(){
	alert(1);
}
console.log(zhangsan);
zhangsan.say();
let wang=new Person();
wang.age=19;
wang.name="王五";
console.log(wang)