import React, { Component } from 'react'
import load from "./load2.gif"
export default class loader2 extends Component {
    render() {
        return (
            <div>
                <div className='text-center my-5'>

                    <img src={load} style={{width:"10%"}}/>

                </div>
            </div>
        )
    }
}
