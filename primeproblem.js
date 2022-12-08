let num=2;
if(checkprime(num)==true)
{
    console.log("Prime")
}
else{
    console.log("Not prime")
}

function checkprime(num){
    let count=0; 
    for(let i=2; i<num; i++)
    {
        if(num%i==0)
        {
            count++;
        }
    }
    if(count==0)
    {
        return true;
    }
    else{
        return false;
    }
}
