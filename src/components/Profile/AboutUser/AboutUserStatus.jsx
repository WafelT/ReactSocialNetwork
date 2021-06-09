
import React from 'react';
import styles from './AboutUser.module.css';

class AboutUserStatus extends React.Component {

    state = {
        editMode : false,
    }

    activateEditMode() {
        this.setState({
            editMode : true
        })
    }

    disableEditMode() {
        this.setState({
            editMode : false,
        })
    }

    render() {
        return(
            <div className={styles.statusWrapper}>
                {!this.state.editMode &&
                    <p onDoubleClick={this.activateEditMode.bind(this)} className={styles.status}>{this.props.status}</p>
                }

                {this.state.editMode &&
                    <input 
                        type="text"
                        className={styles.statusInput} 
                        value={this.props.status}
                        onBlur={this.disableEditMode.bind(this)}
                        onFocus={(e) => {e.target.select()}}
                    />
                }
            </div>
        );
    }
}

export default AboutUserStatus;