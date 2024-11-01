// function greeting(name,time)
// {
//     if(time<12)
//     {
//     console.log(`good morning ${name}`);
//     }
//     else if(time< 18)
//     {
//         console.log(`good afternoon ${name}`);
//     }
//     else{
//         console.log(`good evening ${name}`)
//     }

// }
// greeting("dibyananda","10");
// const  calculator=(a,b,operator)=>{

//     switch(operator)
//     {
//         case '+':
//             return a+b;
//             break;
//          case '-':
//             return a-b;
//             break;
//           case '*':
//             return a*b;
//             break;
//           case '/':
//             return a/b;
//             break;
//            default :
//            return "invalid";        
//     }
// };
// const output=calculator(10,5,"+");
// console.log(output);
// const add=(a,b)=>console.log(add(5,6));
// const add=(a,b)=>a+b;
// console.log(add(5,7));/
//const calculateBmi=(weight,height)=>
// {
//     const bmi=weight/(weight*height);
//     return bmi.toFixed(2);
    
// }
// const bmi=calculateBmi(70,3.75);
// console.log(bmi);
// callback function
// when a function is called as an argument in an another function
// syntax:
// function say(num,callback)
// {
//     return `my name $(name)`;
// }
// function  hello()
// {
//     return"hello";
// }
//todo: make a user authentication system using callback function
// 
// const userDatabase = [
//     { username: 'dibyananda', password: 'password123' },
    
//   ];
// n
//   function authenticate(username, password, callback) {
   
//     const user = userDatabase.find(
//       (user) => user.username === username && user.password === password
//     );
  
//     // 3. Use the callback for success or failure
//     if (user) {
//       callback(null, `Welcome, ${username}!`);
//     } else {
//       callback('Invalid username or password');
//     }
//   }
  
//   // 4. Define the success and failure handler
//   function authCallback(error, successMessage) {
//     if (error) {
//       console.log(`Authentication failed: ${error}`);
//     } else {
//       console.log(successMessage);
//     }
//   }
  
//   // 5. Test the authentication system
//   authenticate('john_doe', 'password123', authCallback); // Should succeed
//   authenticate('john_doe', 'wrongpassword', authCallback); // Should fail
//   setTimeout(()=>{
//     console.log("hey usbm students")
//   },5000);//after 5s it will be print
  // setInterval(()=>{
  //   console.log("hey");
  // },1000);
   let arr=[1,2,3,4,5];
  // arr.forEach((el,i,ar)=>{
  // {
  //   console.log(el,i);
  // }});;
//   const map1=arr.map((el,i)=>{

//  console.log(el*2);
// //  console.log(map1);

//   });
//   console.log(map1);
// let arr1=["A","B","C","D","E"];
// let arr2=arr1.map((el)=>{
// return el.toLowerCase();

// });
// console.log(arr2);
// arr.map((el,i,ar)=>{

// if(el%2===0)
// {
//   console.log( el);
// }
// });
  
//filter method
// const oddnumber=arr.filter((e1)=>
// {
//    return e1%2!==0;
// });
// console.log(oddnumber);
// object
// there have key,value
// key:type a variable to store any datatype
  // let student={
  //   name:"promod",
  //   age:25,
  //   batch:"B.tech",
  //   roll:21

  // };
  //console.log(student);
  // const student=new Object();
  // student.name="Dibya";
  // student.age=23;
  // student.batch="mca";
  // student.roll=21;
  // console.log(student);
  // access element
  // bracket[]
  // dot .
  // console.log(student.["name"]);
  // consle.log(student.age)
  // todo:to create an array ob object of 50 students
  // let ob=[];
  // for(let i=0;i<50;i++)
  // {
  //     ob.push({name:`student ${i}`,
  //              age:Math.floor(Math.random()*(25-15+1))+15,
  //              marks:Math.floor(Math.random()*(100-80+1))+80});
  
  // }
  // console.log(ob);