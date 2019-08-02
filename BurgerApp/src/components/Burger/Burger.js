import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import Styles from '../Burger/Burger.module.css';

const Burger =(props)=>{
    
        let transformedIngredients = Object.keys( props.ingredients )
            .map( igKey => {
                return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                    return <BurgerIngredients key={igKey + i} type={igKey} />;
                } );
            } )
            .reduce((arr, e1)=>{
                return arr.concat(e1)
            },[]);
            if(transformedIngredients.length===0){
                transformedIngredients = <p>Please start adding ingredients!</p>;
            }
   return(
    <div className={Styles.Burger}>
        <BurgerIngredients type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredients type="bread-top"/>
    </div>
   );
};
export default Burger;