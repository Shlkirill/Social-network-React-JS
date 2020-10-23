import React from 'react';
import styles from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        statusText: this.props.status,
    }

    onEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    offEditMode(e) {
        if (e.target.value.match(/^[ ]+$/) || e.target.value == '') {
            this.setState({
                editMode: false,
                statusText: 'Введите Ваш первый статус',
            })
        } else {
            this.setState({
                editMode: false,
                statusText: e.target.value,
            })
            this.props.getUpdateSatus(e.target.value);
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                statusText: this.props.status
            })
        }
    }
    render() {
        return (
            <div>{this.state.editMode == true ?
                <div className={styles.statusEditOn}>
                    <input placeholder="max-60 symbol" maxLength={60} autoFocus={true} type="text" onBlur={this.offEditMode.bind(this)} />
                    <button onClick={this.offEditMode.bind(this)}><i className="fas fa-arrow-circle-right"></i></button>
                </div> :
                <div className={styles.statusEditOff}>
                    <span onClick={this.onEditMode}>{this.state.statusText || 'Статус пуст =('}</span>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus