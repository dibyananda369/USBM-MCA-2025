todo:to create an array ob object of 50 students
let ob=[];
  for(let i=0;i<50;i++)
  {
      ob.push({name:`student ${i}`,
               age:Math.floor(Math.random()*(25-15+1))+15,
               marks:Math.floor(Math.random()*(100-80+1))+80});
  
  }
  console.log(ob);