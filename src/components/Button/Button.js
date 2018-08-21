import React from 'react';
import button from './styles.css';
import PropTypes from 'prop-types';

/**
 *
 * @visibleName Button
 * @version 1.0.0
 * @author [Mazi Muhlari](https://github.com/mazimuhlari)
 */
export default class Button extends React.Component {
    render() {

        const { children, onClick } = this.props;

        return (
            <button style={button.button} onClick={onClick}>
                {children}
            </button>
        );

    }
}

Button.propTypes = {
    /** Content for button */
    children: PropTypes.string.isRequired,
    /** Function or method to be called on click */
    onClick: PropTypes.func
};