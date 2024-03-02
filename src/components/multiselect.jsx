import React, { useState, useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown'; 


function MultiselectComponent() {
    //const[options, setOptions] = useState(['']);
    const[country, setCountry]= useState([]);
    useEffect(()=> {
        const getCountrydate = async() => {
            const getCountryName =[];
            const reqData = await fetch('https://restcountries.com/v3.1/all');
            const resData = await reqData.json();
            //console.log(resData);
            for (let i=0; i< resData.length; i++)
            {
                  // Extract the name property from each country object
                 const countryName = resData[i].name.common;
                    // Push the name to the options array
                 getCountryName.push(countryName);
            }
            setCountry(getCountryName);
        }
        getCountrydate();
    });
    return(<React.Fragment>
        {/* <Container className="content"> */}
       <div className="row">
         <div className="col-sm-12">
        <h3 className='mt-3'>Select Multi Dropdown Checkbox in React js</h3>

        <form className="row g-3" method='post'>

            <div className="col-md-5">
               <label  className="form-label"> </label>
           
                   <div className="text-dark"> 
                     <Multiselect 
                     isObject={false}                    
                     options={country}  
                     onRemove={(event) => {
                        console.log( event);
                     }}   
                     onSelect={(event) => {
                       console.log( event);
                     }}   
                    //  showCheckbox            
                     />                           
                   </div>
                   </div>

       </form>
       </div>
       </div>
       {/* </Container> */}
      
   </React.Fragment>);
}

export default MultiselectComponent