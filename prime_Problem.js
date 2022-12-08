let num=13;
let flag=true;
for(let i=2; i<=num; i++){
	if(num%i==0){
	flag=false;
	break;
	}
}
if(flag=false){
	console.log(num, "Is a Prime Number")
	}
	else{
	console.log(num, "is not a Prime number")
	}