import React from 'react';
import styles from'./styles.css';

console.log('styles', JSON.stringify(styles));

export class App extends React.Component {
    render(){
        return(
            <div>
                <header className={styles.header}>
                    CSS-MODULES
                </header>
                <h4 className={styles.title}>
                    Example css modules with css-loader
                </h4>
            </div>
        )
    }
}