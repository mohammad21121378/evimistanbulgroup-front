import React from 'react';
import classes from "./Loading.module.css"
const Loading = () => {
    return (
        <div className={ classes.loading_spinner}>
            <div className={ classes.loading_spinner__circle }></div>
        </div>
    );
};

export default Loading;