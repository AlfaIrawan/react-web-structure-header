import React, { Component } from 'react';
import '../index.css';



class HeaderLeftLogo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header style={ Object.assign({ width: '100%', display: 'flex', flexWrap: 'nowrap', alignContent: 'flex-end', alignSelf: 'center', alignItems: 'center' }, { padding: '20px 0' }, this.props.style) }>
                <div id='id-header-left-logo-left-image-container' className='header-left-logo-left-image-container' style={{ marginLeft: 30 }}>
                    <img id='id-header-left-logo-left-image' className='header-left-logo-left-image' style={ Object.assign({ height: 50}) } src={this.props.logo} />
                </div>
            </header>
        )
    }

}

export default HeaderLeftLogo;