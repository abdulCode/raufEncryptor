$(document).ready(
() =>
{


function encode (str ,  num )//let's say we are checking at "aBc p", 30
{
//our regedx is gonna checck each letter to be a-z 
const regex =  /[a-z]/;
str = str.toLowerCase();
let arr =  str.split('');
//arr contains all of our letters
let code ;
for(let i = 0 ; i < arr.length ; i++)
{

		if(regex.test(arr[i]))
		{
			code  =  arr[i].charCodeAt(0);
				for(let j = 1; j <= num; j++)
				{
					//add 30 to it, loop
					code  = arr[i].charCodeAt(0);
					if(code >= 97 && code < 122)
					{
						arr[i] = String.fromCharCode(code + 1);
					}
					else
					{
						arr[i] = String.fromCharCode(97);
					}


				}


		}


}

let caeser = arr.join("");
return caeser;



}


function decode (str ,  num )//let's say we are checking at "aBc p", 30
{
//our regedx is gonna checck each letter to be a-z 
const regex =  /[a-z]/;
str = str.toLowerCase();
let arr =  str.split('');
//arr contains all of our letters
let code ;
for(let i = 0 ; i < arr.length ; i++)
{

		if(regex.test(arr[i]))
		{
			code  =  arr[i].charCodeAt(0);
				for(let j = 1; j <= num; j++)
				{
					//add 30 to it, loop
					code  = arr[i].charCodeAt(0);
					if(code >= 98 && code <= 122)
					{
						arr[i] = String.fromCharCode(code - 1);
					}
					else
					{
						arr[i] = String.fromCharCode(122);
					}


				}


		}


}

let caeser = arr.join("");
return caeser;



}


$("#encode").click(
	()=>
	{
	const enc =  parseInt($("#encoding").val());	
	const str =  $("#inputText").val();
	const out = encode(str, enc);
	$("#outputTextEncoded").text(out);
	console.log(str, out);
	});
$("#decode").click(
	()=>
	{
	const dec =  parseInt($("#decoding").val());	
	const str =  $("#inputTextDecoding").val();
	const out = decode(str, dec);
	$("#outputTextDecoded").text(out);
	console.log(str, out);
	});



}
	);


