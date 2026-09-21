function register(cb){
    setTimeout(()=>{
   console.log("register here")
   cb();
    },10000)
    
}
function login(cb){
   setTimeout(()=>{
    console.log("login here")
    cb();
   },5000)
   
}
function getData(cb){
    setTimeout(()=>{
    console.log("fetch data from DB");
    cb();
    },4000)
    
}
function displayData(){
    setTimeout(()=>{
console.log("View User Data")
    },6000)
    
}
//callback Hell Problem
register(
    ()=>{
         login(
            ()=>{
                getData(
                    ()=>{
                        displayData();
                    });
            }
         );
});

console.log("Call Another Application")