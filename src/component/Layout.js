import React, { Component } from 'react'

import Form from './Form'

class Layout extends Component {
    render() {
        return (
            <div className="formcontainer">
               <Form formData={this.props.formData}/> 
            </div>
        )
    }
}

export default Layout
