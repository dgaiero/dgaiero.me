import Head from 'next/head'
import React from 'react'

export const delimiter = "|"
export const appTitle = "Dominic Gaiero"

export default function(props) {
   return (
      <Head>
         <title>
            {props.title} {delimiter} {appTitle}
         </title>
      </Head>
   )
};
