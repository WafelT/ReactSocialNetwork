
import React from 'react';
import styles from './AboutUser.module.css';

class AboutUserStatus extends React.Component {
    
    state = {
        editMode : false,
        status : this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode : true
        })
    }

    disableEditMode = () => {
        this.setState({
            editMode : false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status : e.currentTarget.value,
        });
    }

    render() {
        return(
            <div className={styles.statusWrapper}>
                {!this.state.editMode &&
                    <p onClick={this.activateEditMode} className={styles.status}>
                        {this.props.status}
                    </p>
                }
                

                {this.state.editMode &&
                    <input 
                        type="text"
                        className={styles.statusInput} 
                        value={this.state.status}
                        onBlur={this.disableEditMode}
                        onFocus={(e) => {e.target.select()}}
                        onChange={this.onStatusChange}
                    />
                }
            </div>
        );
    }
}

export default AboutUserStatus;