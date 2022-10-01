import React,{useState} from 'react'
import { Grid, Typography } from '@mui/material'
import './style.css'

const Meme = () => {

    const RL="https://i.pinimg.com/736x/16/d1/57/16d15772ee129ed081661c1e875c6204.jpg"

    const [top, setTop] = useState("");
    const [bottom, setBottom] = useState("");
    const[img,setImg]=useState(RL)


    const handleTop = (e) => {
      e.preventDefault();
    setTop(e.target.value)
    };
    const handleBottom = (e) => {
        e.preventDefault();
      setBottom(e.target.value)
      };

     const handleImg=(e)=>{
        e.preventDefault();
        console.log(e.target.files[0])
        setImg(URL.createObjectURL(e.target.files[0]));
     } 
    

  return (
    <Grid container>
        <Grid lg={12} md={12} xs={12} sm={12}>
        <input className='input1' type="text" name="top" onChange={handleTop} placeholder="Top Text"/>
        <input className='input2' type="text" name="bottom" onChange={handleBottom} placeholder="bottom Text"/>
        <input  className='input3'  type="file"  name="img" onChange={handleImg} />
      </Grid>
     <Grid item lg={12} md={12} xs={12} sm={12} >
        <Typography className='img' sx={{height:500,width:500,border:"2px solid black",ml:"30%",mt:30}} >
        <p className='top'>{top}</p>
        <img style={{height:500,width:500}} src={img} alt=""/>
      <p className='bottom'>{bottom}</p>
      </Typography>
      <button className='button'>Meme Generator</button>
    </Grid>  
    
    </Grid>
  )
}

export default Meme



