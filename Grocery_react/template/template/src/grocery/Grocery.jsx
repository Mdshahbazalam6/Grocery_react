import React, { useEffect, useState } from 'react';
import GroceryInput from './GroceryInput';
import GroceryList from './GroceryList';
import './grocery.css'

const Grocery = () => {
    const[arr,setArr]=useState([])
    const[image,setImage]=useState(0)
    const[flag,setFlag]=useState(false)
    const [page,setPage]=useState(1)
    const[lenght,setLength]=useState('')
    const setData = (val) =>{
        // setArr([...arr,val])
        fetch(`http://localhost:3001/Grocery`,{
            method:"POST",
            body:JSON.stringify(val),
            headers :{
                "content-Type":"application/json"
            }
        }).then((res)=>{
            res.json().then((res)=>{
                // setLength
                // console.log(Headers)
                console.log(res)
                // console.log(headers.entries())
                get()
            })
        }).catch((error)=>{
            console.log(error)
        })
    }


    let imageArr=['https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/20285fe2-65ab-42af-a690-3557d3389dff.jpg',
    'https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/09/3.jpg.webp',
    'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1000,height=300,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/c6dea2ee-9930-47ac-a554-84ae4093a3f2.jpg',
    'https://www.everestfoods.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/09/1.jpg.webp']

    let get =async() =>{
      try {
        // console.log(1)
        let res=await fetch(`http://localhost:3001/Grocery?_page=${page}&_limit=3`)
        let total = res.headers.get("X-Total-Count");
        // console.log(total)
        setLength(total)
        let data =await res.json()
        // console.log(res)
        setArr(data)
      } catch (error) {
        console.log(arr)
      }
    }
 
    useEffect(()=>{
        get()
    },[flag,page])
    useEffect(()=>{
        let inter=setInterval(()=>{
            if(image === 3){
                setImage(0)
            }else{
                setImage(image+1)
            }
        },3000)
        return(()=>{
            return clearInterval(inter)
        })
    })
    const deleteData = (id)=>{
        //    let a= arr.filter(ele=>ele.id !== id)
        //    setArr(a)
        fetch(`http://localhost:3001/Grocery/${id}`,{
            method:"DELETE"
        })
        setFlag(!flag)
        }

  return (
    <>
    <header><h1>Your Favourite Grocery Store</h1></header>
    <div  className='sliderBox' ><img className='sliderImage' src={imageArr[image]} alt="" /></div>
   <div className="contentBox">
  <div className='contentBoxFirstChild'> 
  < GroceryInput arr={arr} onclick={setData} /></div>
  <div className='contentBoxsecChild'>

  {/* <div className='scrolebox' >  */}
  < GroceryList arr={arr} del={deleteData} incr={()=> setPage(page+1)}  decr={()=> setPage(page-1)} val={page} length={lenght}/>
  </div>
  </div>
   
   {/* </div> */}
    </>
  )
}

export default Grocery
//  const increasePage=()=>{
//     setPage(page+1)
//  }