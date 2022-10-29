import React,{useEffect,useState} from 'react'
import Foodcontainer from './Foodcontainer';
import styles from '../styles/Styles.module.css'
import  { Starter, Beef, Chicken,Dessert,Seafood, Breakfast, Pasta, Vegetarian, Categorie } from './Data'
const Categories = () => {
    const [categories , setCategories] = useState([])
    const [categorie , setCategorie] = useState([])
    const [food,setFood] = useState([]);
    console.log(Breakfast);
    useEffect(()=>{
        setCategories(Categorie)
        setCategorie('Starter')
        setFood(Starter)
      },[])

      const myFun=(data)=>{
        if(data=="Breakfast"){
          setFood(Breakfast)
          setCategorie('Breakfast')
        }
        else if(data=="Pasta"){
          setFood(Pasta)
          setCategorie('Pasta')
        }
        else if(data=="Starter"){
          setFood(Starter)
          setCategorie('Starter')
        }
        else if(data=="Beef"){
          setFood(Beef)
          setCategorie('Beef')
        }
        else if(data=="Chicken"){
          setFood(Chicken)
          setCategorie('Chicken')
        }
        else if(data=="Dessert"){
          setFood(Dessert)
          setCategorie('Dessert')
        }
        else if(data=="Vegetarian"){
          setFood(Vegetarian)
          setCategorie('Vegeterian')
        }
        else{
          setFood(Seafood)
          setCategorie('Seafood')
        }
      }
       
  return (
    <>
    <div id="menu" className={`container ${styles.container}`}>
    <h1>Menu</h1>
    <div className={styles.categories}>
        {categories.map((categorie,index)=>{
            return(
                <div className={styles.list} key={index} onClick={()=>myFun(categorie.strCategory)} >{categorie.strCategory} </div> 
            )
        })}
    </div>
      <h2>{categorie}</h2>
      <Foodcontainer food={food}></Foodcontainer>
    </div>
    </>
  )
}

export default Categories
