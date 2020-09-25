import React from 'react';

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
    }

    onEditMode() {
        this.setState({
            editMode: true
        })
    }
    offEditMode(e) {
        this.setState({
            editMode: false
        })
        console.log(e.target.value)
    }

    render() {
        return (
            <div>{this.state.editMode == true ?
                <div>
                    <input autoFocus={true} onBlur={this.offEditMode.bind(this)} type="text" />
                </div> :
                <div>
                    <span onClick={this.onEditMode.bind(this)}>Спанчик</span>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus