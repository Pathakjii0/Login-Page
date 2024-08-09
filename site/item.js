let savedRecord=localStorage.getItem("userdata");
let items=savedRecord?JSON.parse(savedRecord):[
    {
    name:'Ankur Pathak',
    mobile:9648587003,
    email:'pathakankur457@gmail.com',
    gender:'male',
    college:'future',
    course:'bca',
    year:"1st year",
    pass:"123",
},];

