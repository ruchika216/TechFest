import React, { useState } from 'react'
import Base from '../core/Base'
import { Link } from "react-router-dom"
function Signin() {
    const signinForm = () => {
        return (
            <form>

                <input type="email" placeholder="email" /><br />
                <input type="password" placeholder="password" /><br />
                <input type="submit" value="Submit" />
            </form>)
    }

    return (
        <Base title="signin page">
            {signinForm()}
        </Base>
    )
}
export default Signin