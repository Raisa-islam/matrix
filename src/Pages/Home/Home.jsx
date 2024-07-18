import { useState } from "react";



const Home = () => {
 
  const initialState = Array(9).fill('bg-white')
  const [colors, setColors] = useState(initialState)
  const [order, setOrder] = useState([])

  const handleClick = (idx)=>{
    const newColors = [...colors];
    newColors[idx]='bg-green-500';
    setColors([...newColors]);
    setOrder([...order, idx])

    if(idx===8){
      changeToOrange();
    }
  }

  const changeToOrange=()=>{
    const newColors = [...colors]
    order.forEach((idx, i)=>{
      setTimeout(()=>{
        newColors[idx]= 'bg-orange-500'
        setColors([...newColors])
      }, i*200)
    })
  }

  return (
    <div  className="flex justify-center">
      <div className="grid grid-cols-3 gap-2">
          {colors.map((color, idx)=>(
            <div
            key={idx}
            className={`w-24 h-24 ${color} border border-black cursor-pointer`}
            onClick={()=>handleClick(idx)}>

            </div>
          ))}
      </div>
    </div>

  );
};

export default Home;