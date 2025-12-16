import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {

  const users=[
    {
  img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
  intro: 'Prime customers, that have access to bank credit and are satisfied with the current product',
  tag: 'Satisfied',
  color: '#2ECC71' 
},
{
  img: 'https://images.unsplash.com/photo-1663661759279-5edbf3d58e0c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob25lJTIwaW4lMjBoYW5kfGVufDB8fDB8fHww',
  intro: 'Prime customers, that have access to bank credit and are not satisfied with the current service',
  tag: 'Underserved',
  color: '#F39C12' 
},
{
  img: 'https://images.unsplash.com/photo-1585059599197-af24ac720e60?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhZCUyMGZlbWFsZSUyMGxvb2tpbmclMjBhdCUyMGhlciUyMHBob25lfGVufDB8fDB8fHww',
  intro: 'Customers from near-prime and sub-prime segments with no access to',
  tag: 'Underbanked',
  color: '#E74C3C' 
},
{
  img: 'https://images.unsplash.com/photo-1523952578875-e6bb18b26645?w=1000&auto=format&fit=crop&q=60',
  intro: 'Small business owners with steady revenue who struggle with slow lending processes',
  tag: 'Overlooked',
  color: '#9B59B6' 
},
{
  img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&auto=format&fit=crop&q=60',
  intro: 'Young professionals with growing income but limited access to tailored financial products',
  tag: 'Emerging',
  color: '#3498DB' 
},
{
  img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1000&auto=format&fit=crop&q=60',
  intro: 'Freelancers and gig workers facing inconsistent support from traditional banks',
  tag: 'Unserved',
  color: '#7F8C8D' 
}



  ]

  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App