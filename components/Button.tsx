import Link from 'next/link';
import React, { FunctionComponent } from 'react';

const Button: FunctionComponent<any> = ({ label, href }) => {
    return (
        <Link className='inline-block px-5 py-2 my-3 bg-cyan-900 hover:bg-cyan-800 cursor-pointer rounded-lg' href={href} >
            {label}
        </Link>
    )
}

export default Button