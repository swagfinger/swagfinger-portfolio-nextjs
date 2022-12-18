import React from 'react';

type ButtonProps = {
    children: React.ReactNode
}

export const Button = ({children}:ButtonProps) => {
    return ( <div className='btn bg-red-500 h-30'>{children}</div> );
}
 
