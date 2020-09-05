var width = 100;
function startCode(){
	var num = Number(document.getElementById('number').value);
	width = width/(num+1) ;
	if(Number.isNaN(num) || typeof num ==='string' || num<=0 || num>=20 )
		alert("Input Field is invalid");
	else{
		document.getElementById('code').style.visibility='visible';
		document.getElementById('start').disabled = true;
		document.getElementById('next').disabled = false;

		document.getElementById('next').style.backgroundColor ="#229954";
			document.getElementById('start').style.backgroundColor ="#d6d6d6";
		main();
	}
}
function fib(n){
	id.push('one');
	if(n === 0){
		id.push('two');
		return 0;
	}
	else if(n === 1 || n === 2){
		id.push('three');
		return 1;
	}
	else{
		id.push('four');
		return fib(n-2) + fib(n-1);
	}
}
var array=[];
function main(){
	id.push('five');
	var num = Number(document.getElementById('number').value);
	if(num>0&&num<=20){
		id.push('six');
		var i, fibonacci;
		for(i=0; i<=num; i++){
			id.push('seven');
			id.push('eight');
			fibonacci = fib(i)
			id.push('nine');

			array.push(fibonacci);
		}
		id.push("ten");
		//document.getElementById('result').innerHTML = "The fibonacci of "+num+" :";
	}
	else{
		alert("Enter any number in the range 0-20.");
	}
	id.push("eleven");
}
function resetE(){
	if(confirm("Are you sure you want to reset?")){
		document.getElementById('number').value="";
		document.getElementById('code').style.visibility='hidden';
		//document.getElementById('result').innerHTML="";
		document.querySelector(".cont").innerHTML = " ";
		document.getElementById('res').innerHTML="";
		document.getElementById('start').disabled = false;
		document.getElementById('next').disabled = true;
		document.getElementById('start').style.backgroundColor = "#0D85C9";
		document.getElementById('next').style.backgroundColor = "#d6d6d6";

	}
}
var count=0, id=[], countnine=0;
function hightlight(){
	for(var i=0;i<id.length;i++){
			document.getElementById(id[i]).style.color='black';
	}
	if(count<id.length){
		document.getElementById(id[count]).style.color = 'red';
		if(id[count]=='nine'){
			if(countnine > 1){
				var cont = document.querySelector(".cont");
				cont.innerHTML += '<div class="some" style = "width:'+width+'%"> 	<div class="a">'+array[countnine - 2]+'</div>	<div class="b">'+array[countnine -1]+'</div><div class="c cee">'+array[countnine]+'</div>	</div>';
				setTimeout(function (){
					document.querySelector(".a").remove();
					document.querySelector(".b").remove();
					document.querySelector(".cee").style.visibility = "visible";
					document.querySelector(".cee").classList.remove("cee");
				},1000);
		  }
			else{
				var cont = document.querySelector(".cont");
				cont.innerHTML += '<div class="some" style = "width:'+width+'%"> <div class="c cee">'+array[countnine]+'</div>	</div>';
				setTimeout(function (){
					document.querySelector(".cee").style.visibility = "visible";
					document.querySelector(".cee").classList.remove("cee");
				},1000);

			}
		document.getElementById('res').innerHTML += array[countnine++];
	}
		count++;
	}
	if(count==id.length){
		document.getElementById('next').disabled = true;
		document.getElementById('next').style.backgroundColor = "#d6d6d6";
		alert('End of function');
		var code = document.getElementById('code');
		var div = code.getElementsByTagName('div');
		for(var i=0;i<div.length;i++){
			div[i].style.color='black';
	}
		//.style.color='black';
	}
}
