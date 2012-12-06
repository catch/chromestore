function go_to_catch(){
    window.location = "https://catch.com";    
}
if(window.location.pathname.search("index.html") != -1){
	window.onload = go_to_catch();
}
