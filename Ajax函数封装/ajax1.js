function ajax(url,funSucc,fnFaild){

	var xhr=new XMLHttpRequest();

	xhr.open('GET',url,true);

	xhr.send(null);

	xhr.onreadystatechange=function(){

		if (xhr.readyState==4) {

			if (xhr.status==200) {

				funSucc(xhr.responseText)


			}else{
				if (fnFaild){
				 	fnFaild(xhr.statusText)
				}

			}
		}
	}

}