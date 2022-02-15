import * as React from 'react'
import Navbar from '../Navbar'
import Footer from "../Footer"
import Head from '../Head'

interface IProps {
    navBarVariant?: boolean
}

const Layout: React.FC<IProps> = ({ children, navBarVariant }) => {

    return <>
        <Head />
        <Navbar variant={navBarVariant} />
        <main>
            {children}
        </main>
        <Footer />
    </>
}

export default Layout