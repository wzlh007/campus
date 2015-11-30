var xmlHttp

function getdata(str)
{
xmlHttp=GetXmlHttpObject()
if (xmlHttp==null)
  {
  alert ("Browser does not support HTTP Request")
  return
  } 
var url='../phptest/testPHPfunc.php'
url=url+"?q="+str
url=url+"&sid="+Math.random()
xmlHttp.onreadystatechange=stateChanged 
xmlHttp.open("GET",url,false)
xmlHttp.send(null)
//document.getElementById("test3").innerHTML=xmlHttp.responseText 
}
 
function getCol(data,colnum)
{
	var xdata=new Array();
	for(var i=0;i<data.length;i++)
	{
		xdata[i]=data[i][colnum];
		//document.getElementById("test").innerHTML+=xdata[i]+" My First JavaScript<br>";
	}
	return xdata;
}

function stateChanged() 
{ 
if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
 { 
 //document.getElementById("test3").innerHTML=xmlHttp.responseText 
 document.write(xmlHttp.responseText)
 console.log(data);

 } 
}

function GetXmlHttpObject()
{
var xmlHttp=null;
try
 {
 // Firefox, Opera 8.0+, Safari
 xmlHttp=new XMLHttpRequest();
 }
catch (e)
 {
 // Internet Explorer
 try
  {
  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
  }
 catch (e)
  {
  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 }
return xmlHttp;
}

