
// OOP
function Car(model,mileage,yearsOfProduction,price,type,url){
var car={};
car.url=url;
car.model=model;
car.mileage=mileage;
car.yearsOfProduction=yearsOfProduction;
car.price=price;
car.type=type;
return car;
}
var cars=[];

var car1=Car('BMW-sreie-3',150000,2019,250000,'luxury','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCG-8Dm5ZKeFCaVRCuwJ8WDeTltuX8XgfT9w&usqp=CAU');
var car2=Car('Mercedes-class-E',98000,2019,280000,'luxury','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwcrrcrLwc0S6oA5Sc4CyG4cvRe6SyR1LClw&usqp=CAU');
var car3=Car('opel-corsa-C',250000,2004,14000,'compac','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3cUV9RDKXIY6ZLX0t4LtAsveGvM78EaWMnQ&usqp=CAU');
var car4=Car('ford-fiesta',180000,2010,22000,'compac','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRTkj9XahcvNIuPHWniQ9B0t6vbIMVEJDDpw&usqp=CAU');
var car5=Car('Kia-Sportage',150000,2012,70000,'SUV','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdFJtNP4yHFZqB8OJuobx577XdDZDtkXyZCw&usqp=CAU');
var car6=Car('porsche-macan',60000,2019,650000,'SUV','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSio6WIlisSlSjcHx5P95FEwyIB-Ggp_xyP2g&usqp=CAU')
var car7=Car('Renault-symbol',150000,2017,35000,'sedan','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqXL_T3uUjBng74edU8WeDehu2VjjdNZehZg&usqp=CAU');
var car8=Car('renault-fluence',180000,2018,65000,'sedan','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC5IK5EDv4iTZU2Go0qmGTl4MuTZqnE8UoIw&usqp=CAU');
var car9=Car('ford ranger',85000,2019,190000,'pickUp','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNcRN8eMuPVZfTp7l4Ahnkma4rh79Gt8aGZg&usqp=CAU');
var car10=Car('toyota-hilux',120000,2018,100000,'pickUp','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7-uF5VXR2zQbejRzRxD1klM0l1_uDQMfcrg&usqp=CAU');





var car=[car1,car2,car3,car4,car5,car6,car7,car8,car9,car10]

function clickCar(value){
//<h2 style="color:#997500;font-size:300%">welcom to the show room:</h2>
var d1=document.getElementById("d1");
var result="";
for(var i=0; i<car.length;i++){
	if(car[i].type === value){
result+="<img width='400' heigh = '400' src= "+car[i].url+"/>";

result+= "<h1>"+car[i].model +"<br>"+car[i].mileage+"<br>"+car[i].yearsOfProduction+"<br>"+car[i].price+"<br>"+car[i].type+"</h1>";

}
}
	
d1.innerHTML=result;
  

}
function clickSearch(val){
	console.log(val)
	var d1=document.getElementById("d1");
var result="";
for(var i=0; i<car.length;i++){
	if(car[i].price <= val){
result=result+"<img width='400' heigh = '400' id="+i+" src= "+car[i].url+"/>";
result+= "<h1>"+car[i].model +"<br>"+car[i].mileage+"<br>"+car[i].yearsOfProduction+"<br>"+car[i].price+"<br>"+car[i].type+"</h1>";
}
}if (result.length===0){
	d1.innerHTML= "<h1>you dont have enough money</h1>"
}else

d1.innerHTML=result;

}

