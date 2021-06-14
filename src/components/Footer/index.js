import React from 'react'
import { CardFooter } from 'reactstrap';
import '../../styles/footer.scss';
function Footer() {
    return (
        <div className="fixed-bottom footer">
            <CardFooter>powered by @rabbit</CardFooter>
        </div>
    )
}

export default Footer
