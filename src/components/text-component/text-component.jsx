//This is editable paragraph text

/* 
 * Recive data from parant and render as paragraph text
 * 
 * This should display paragraph text that should be able to be replaced with input fields when edited.
 */

 import React from 'react';
 class TextComp extends React. Component{
    constructor(props){
        super(props)
    }
     render(){
         return(
           <p>{ this.props.text }</p>
         );
     }
 }
 export default TextComp;