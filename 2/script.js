import userData from "./data.js";

/* Totally Private Data Farm 
Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 
We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   
Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 
{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}
Read about toDateString() for info on formatting a readable date. 

*/

console.log("userData content: ", userData);

function transformData(data){
 /*
 for (let index = 0; index < data.length; index++) {
   let fullName = data[index]["name"]["first"] + " " + data[index]["name"]["last"] ;
   let birth = data[index]["dob"]["date"];
   let d = new Date(birth);
   let birthday = d.toDateString();
   console.log("todate()-el a birthday felül írva: ", birthday)
      let userData ={fullName, birthday};
   
      console.log("let fullName alatt: ",fullName);
      console.log("birthday alatt: ", birthday)
      console.log("userData alatt: ", userData);
  }
*/
    data = userData.map(item => {
    data = {};
    let birth = item.dob.date;
    let d = new Date(birth);
    let birthday = d.toDateString();
    data = {"fullName" : item.name.first + " " +item.name.last,
            "birthday" : birthday};
    console.log("Objects: ",data);
    return data;
    });
    let array = [];
    array.push(data);
    console.log("let array []: ",array);
    data = array;
    console.log("data: ", data)
}

console.log(transformData(userData));
