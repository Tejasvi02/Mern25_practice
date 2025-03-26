
// create a promise with name student login
// resolve it after 3 seconds and set student details with call status in the response object
// reject it after 4 seconds and set error details with call status in the response object

let studenLogin = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            status: "Success",
            code: 200,
            student : {id: 23, Name: "Suresh"}
        });
    },3000); //resolving after 3 seconds

    setTimeout(()=>{
        reject({
            status: "Failed",
            code: 403,
            message: "Access Denied"
        });
    },4000) ;//rejecting after 4 seconds
})

studenLogin.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
});