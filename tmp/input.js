keystates = new Array();
document.body.onkeydown = function(event){
	keystates[event.keyCode] = true;
}
document.body.onkeyup = function(event){
	keystates[event.keyCode] = false;
}
function keystate_check(x){
	return keystates[x.charCodeAt(0)];
}