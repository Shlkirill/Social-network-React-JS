import React from 'react';

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
    }



    toogleEditMode(e) {
        console.log(e.target.value);
        this.state.editMode == false ?
            this.setState({
                editMode: true
            }) :
            this.setState({
                editMode: false
            })
    }



    render() {
        return (
            <div>{this.state.editMode == true ?
                <div>
                    <input autoFocus={true} onBlur={this.toogleEditMode.bind(this)} type="text" />
                </div> :
                <div>
                    <span onClick={this.toogleEditMode.bind(this)}>Спанчик</span>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus