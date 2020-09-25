import React from 'react';
import styles from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        statusText: 'Введите Ваш первый статус',
    }

    onEditMode() {
        this.setState({
            editMode: true
        })
    }
    offEditMode(e) {
        if (e.target.value.match(/^[ ]+$/) || e.target.value=='') {
            this.setState({
                editMode: false,
                statusText: 'Введите Ваш первый статус',
            })
        } else {
            this.setState({
                editMode: false,
                statusText: e.target.value,
            })
        }
    }

    render() {
        return (
            <div>{this.state.editMode == true ?
                <div>
                    <input autoFocus={true} type="text" onBlur={this.offEditMode.bind(this)} />
                </div> :
                <div className={styles.status}>
                    <span onClick={this.onEditMode.bind(this)}>{this.state.statusText}</span>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus