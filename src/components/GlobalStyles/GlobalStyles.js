import './GlobalStyles.scss';
import PropTypes from 'prop-types';
import React from 'react';

function GlobalStyles({ children }) {
    return React.Children.only(children); // Chỉ cho truyền 1 element vào giữa
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired
}

export default GlobalStyles