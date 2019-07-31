import React, { Component } from 'react';
import '../index.css';



class HeaderLeftLogoWithText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header style={ Object.assign({ width: '100%', display: 'flex', flexWrap: 'nowrap', alignContent: 'flex-end', alignSelf: 'center', alignItems: 'center' }, { padding: '20px 0' }, this.props.containerStyle) }>
                <div id='id-header-left-logo-with-text-left-image-container' className='header-left-logo-with-text-left-image-container' style={ Object.assign({ marginLeft: 30 }, this.props.imageContainerStyle) }>
                    <img id='id-header-left-logo-with-text-left-image' className='header-left-logo-with-text-left-image' style={ Object.assign({ height: 50 }, this.props.imageStyle) } src={ this.props.logo } />
                </div>
                <div id='id-header-left-logo-with-text-left-text-container' className='header-left-logo-with-text-left-text-container' style={ Object.assign({ marginLeft: 10, paddingLeft: 10 }, this.props.textContainerStyle) } >
                    <div className='header-left-logo-with-text-left-label-h1-container'>
                        <label className='header-left-logo-with-text-left-label-h1' style={ Object.assign({ fontSize: 18 }, this.props.h1Style) }>{ this.props.heading1 }</label>
                    </div>
                    <div className='header-left-logo-with-text-left-label-h2-container'>
                        <label className='header-left-logo-with-text-left-label-h2' style={ Object.assign({ fontSize: 12 }, this.props.h2Style) }>{ this.props.heading2 }</label>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderLeftLogoWithText;