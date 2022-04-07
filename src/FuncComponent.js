import React, { useEffect, useState } from 'react'

export const FuncComponent = () => {
    const [count,setcount] = useState(0)
    // similary componentDidMount 
  
    //[depen] điều kiện để callback đc chạy lại nếu thấy depen truyền vào thay đổi
    useEffect(() => {
        console.log('update func',count);
    },[count])
    useEffect(() => {
        console.log('useEffect  render lan 1');
        return () => {
            console.log('reder lan cuoi',count);
        }
    },[])
    return (
    <div>FuncComponent
        <button onClick={() => setcount(count+1)}>plus</button>
        <h3>{count}</h3>
    </div>
  )
}
