import React,{useState,useEffect} from "react";
import {NativeSelect,FormControl, } from "@material-ui/core";
import  styles  from "./Country.module.css"
import {fetchCountries} from "../../api"

 const CountryPicker = ({handleCountryChange}) => {
     const  [fetchedCountries,setFetchedCountries] = useState([]);
     
     useEffect (()=>{
         const fetchAPI = async () => {
             setFetchedCountries(await fetchCountries());

         }
         fetchAPI();
     },[setFetchedCountries]);
     return (
         <FormControl className={styles.fromControl}>
             <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                 <option value="global" style={{fontWeight:'lighter'}} >SELECT COUNTRY</option>
                 {fetchedCountries.map((country,i) =><option key={i} value={country}>{country}</option>)}
             </NativeSelect>
         </FormControl>
     );
 }
 export default CountryPicker;