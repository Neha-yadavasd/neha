import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Componet.jsx'
import './Navbar.jsx'
import Component from './Componet.jsx'
import Navbar from './Navbar.jsx'

function App() {
 const data=[
  {
  image:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D',
  name:'Mac & Cheese',
  rate:'$8.99',
  description:'Macaroni and cheese is a dish of macaroni and a cheese',
  Avalible:true,
 },
 {
  image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww',
  name:'Chicken Burger. ...',
  rate:'$9.9',
  description:'A chicken sandwich is a sandwich that typically consists of boneless',
  Avalible:true,
 },
 {
  image:'https://images.unsplash.com/photo-1665033628673-7de125eb6b12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhbmVlciUyMHBpenphfGVufDB8fDB8fHww',
  name:'Paneer & Cheese',
  rate:'$7.8',
  description:'Macaroni and cheese is a dish of macaroni and a cheese',
  Avalible:true,
 },
 {
  image:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D',
  name:'MixVeg Burger',
  rate:'$10.9',
  description:'A MixVeg burger is a hamburger made from ground vegitables',
  Avalible:true,
 },
 {
  image:'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D',
  name:'Pepperoni Pizza',
  rate:'$8.11',
  description:
'Pizza is a traditional Italian dish typically consisting of a flat base',
  Avalible:true,
 },
 {
  image:'https://images.unsplash.com/photo-1657205937856-efd796433ca1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhbmNoJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D',
  name:'French Fries',
  rate:'$9.80',
  description:'French fries, and chips or allumette-cut',
  Avalible:true,
 },
 {
  image:'https://plus.unsplash.com/premium_photo-1671580681938-46dfec03b457?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBpenphfGVufDB8fDB8fHww',
  name:'Cheese Loaded',
  rate:'$10.92',
  description:'Macaroni and cheese is a dish of macaroni and a cheese',
  Avalible:false,
 },
 ]
  const[val,setval]  = useState(data);

  const handelClicks=(index)=>alert(index);
  return (
     <>
    <Navbar/>
    <div className='bg-zinc-800 h-full w-full flex justify-center items-center gap-10 flex-wrap px-40 -py-40 py-10'>
        {val.map((items,index)=><Component image={items.image} name={items.name} rate={items.rate}
          description={items.description} Avalible={items.Avalible}  Handle={handelClicks} key={index} index={index}/>)}
    </div>
    </>
  )
 }

export default App
