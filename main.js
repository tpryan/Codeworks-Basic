

function replacePage(link){
	
	var href= link.getAttribute('href');
	var stateObj = { foo: "bar" };
	
	var ajax = new XMLHttpRequest();
	ajax.open("GET",href,true);
	ajax.send();
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && (ajax.status==200)){
			//document.getElementById('main').innerHTML = ajax.responseText;
			document.body.innerHTML = ajax.responseText;
			history.pushState(stateObj, "page 2", href);
			
			
		}
	} 
	
}
