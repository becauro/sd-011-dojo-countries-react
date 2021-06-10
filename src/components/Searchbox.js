import React from 'react';

const Searchbox = (props) => {
  return(
    <input 
      onChange={props.handleChange}
    />
  );
}


export default Searchbox;
