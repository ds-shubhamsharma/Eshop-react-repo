const getSubString =(string)=>{

	if(string && string.length>255){
		return string.substring(0,255)+'...'
	}else{
		return string
	}
}

const getDBFormateDate = (date)=>{
	let bookingDate="";
	if(typeof date =="object"){
		 bookingDate = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2,0) + "-" + date.getDate().toString().padStart(2, "0");
	}else{
		bookingDate = date;
	}
	return bookingDate
	
}
 const clientFormattedDate=(date)=>{
	let bookingDate="";
	date = new Date(date)
	if(typeof date =="object"){
		 bookingDate = date.getDate().toString().padStart(2, "0") + "-" + (date.getMonth() + 1).toString().padStart(2,0) + "-" + date.getFullYear();
	}else{
		bookingDate = date;
	}
	return bookingDate
 }
 const createSlug = (name)=>{
	if(name.length){
		return name.toLowerCase()
		.replace(/[^\w ]+/g, '-')
		.replace(/ +/g, '-');
	}else{
		return name
	}
 }


export{
	getSubString,
	getDBFormateDate,
	clientFormattedDate,
	createSlug
}