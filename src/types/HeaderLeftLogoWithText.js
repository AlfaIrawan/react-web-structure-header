import React, { Component } from 'react';
import '../index.css';



class HeaderLeftLogoWithText extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header id='id-header-left-logo-with-text-left' className='header-left-logo-with-text-left' style={ Object.assign({ width: '100%', display: 'flex', flexWrap: 'nowrap', alignContent: 'flex-end', alignSelf: 'center', alignItems: 'center' }, this.props.containerStyle) } >
                <div id='id-header-left-logo-with-text-left-image-container' className='header-left-logo-with-text-left-image-container' style={ this.props.imageContainerStyle }>
                    <img id='id-header-left-logo-with-text-left-image' className='header-left-logo-with-text-left-image' style={ this.props.imageStyle } src={ this.props.logo } />
                </div>
                <div id='id-header-left-logo-with-text-left-text-container' className='header-left-logo-with-text-left-text-container' style={ Object.assign({ marginLeft: 10, paddingLeft: 10, display: 'flex', flex: '1', flexDirection: 'column' }, this.props.textContainerStyle) } >
                    <div id='id-header-left-logo-with-text-left-label-h1-container' className='header-left-logo-with-text-left-label-h1-container'>
                        <label id='id-header-left-logo-with-text-left-label-h1' className='header-left-logo-with-text-left-label-h1' style={ this.props.h1Style }>{ this.props.heading1 }</label>
                    </div>
                    <div id='id-header-left-logo-with-text-left-label-h2-container' className='header-left-logo-with-text-left-label-h2-container'>
                        <label id='id-header-left-logo-with-text-left-label-h2' className='header-left-logo-with-text-left-label-h2' style={ this.props.h2Style }>{ this.props.heading2 }</label>
                    </div>
                </div>
                <div id='id-header-left-logo-with-text-left-menu-icon-container' className='header-left-logo-with-text-left-menu-icon-container' style={ Object.assign({ marginRight: 10 }, this.props.iconMenuContainerStyle) }>
                    <img id='id-header-left-logo-with-text-left-menu-icon' className='header-left-logo-with-text-left-menu-icon' onClick={this.props.iconMenuClick} style={ this.props.iconMenuStyle } src={ this.props.iconMenu } />
                </div>
            </header>
        )
    }
}

export default HeaderLeftLogoWithText;