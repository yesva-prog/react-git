import React from 'react'


class Firstchild extends React.Component
{
    render(){
        return(
            <h1>THis is the first child</h1>
        )
    }
}

class Secondchild extends React.Component
{
    render(){
        return(
            <>
            <h2>THis is the second child</h2>
            <Thirdchild/>
            </>
        )
    }
}

class Thirdchild extends React.Component
{
    render(){
        return(
            <h3>THis is the third child</h3>
        )
    }
}


function Nested() {
  return (
    <div>
       <Firstchild/>
       <Secondchild/>
       <Fourthchild/>
    </div>
  )
}

function Fourthchild (){
    return(
        <h4>THis is the functional child</h4>
    )
}
export default Nested
