import React from 'react'

function Es6() {
    const numbers=[2,4,6,8,10];

    // const newNumber=[];

    // function double(x){
    //     newNumber.push(x*2)
    // }
    // numbers.forEach(double);
    // console.log(newNumber);

    // const newNumber=numbers.map(function(x){
    //     return x*2
    // });
    // console.log(newNumber);

    // const filtsNumber=[];
    // numbers.forEach(function(num){
    //      if(num > 4){
    //          filtsNumber.push(num)
    //      }
    // })
    // console.log(filtsNumber)

    // const filtsNumber=numbers.filter(function(num){
    //      return num >4
    // });
    // console.log(filtsNumber);

    const addnumbers=numbers.reduce(function(accumukator,reducer){
         return accumukator+reducer
    })
   console.log(addnumbers);
  return (
    <div>
      
    </div>
  )
}

export default Es6
