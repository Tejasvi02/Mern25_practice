
//Question :
//1. create a callback function example for account
//2. PrintAccount details should accept this call back and the account information
//3. Upon executing PrintAccntDetails it should show the account details with a message
//4. Use the same call back to print multiple sessions planned for the day

function PrintAccount(info){
    console.log(info)
}
function getAccountdetails(userName, accountNo, callbackfn){
    callbackfn(`Username: ${userName}`)
    callbackfn(`Account Number: ${accountNo}`)
}

getAccountdetails("kaushik",1234, PrintAccount)

//Using the same call back (PrintAccount) to print multiple sessions planned for the day 
function sessionsDay1(s1, s2, s3, s4, callbackfn){
    callbackfn(`session 1 - ${s1}`)
    callbackfn(`session 2 - ${s2}`)
    callbackfn(`session 1 - ${s3}`)
    callbackfn(`session 2 - ${s4}`)
}


sessionsDay1("Math","Phy","Chem","Bio", PrintAccount)