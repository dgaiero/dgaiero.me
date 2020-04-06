import React from 'react'
export const delimiter = "|"
export const appTitle = "Dominic Gaiero"

const Title = props => {
   return (
      <React.Fragment>
         {props.name} {delimiter} {appTitle}
      </React.Fragment>
   )
};

export default Title;