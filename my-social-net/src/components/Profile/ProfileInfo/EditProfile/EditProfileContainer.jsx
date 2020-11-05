import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { putProfileInfoTC, setProfileTC } from '../../../../redux/profileReducer';
import Loading from '../../../../common/loading/loading';
import EditProfile from './EditProfile';
import { compose } from 'redux';
import { withAuthRedirectComponent } from '../../../hoc/withAuthRedirect';

const EditProfileContainer = (props) => {
  useEffect(() => {
    if (props.profile == null) props.setProfile(props.authId);
  }, [props.profile])

  const EditProfileForm = reduxForm({
    form: 'editMode',
  })(EditProfile);

  const onSubmit = (formData) => {
    props.putProfileInfo(formData);
  }
  return (
    (props.profile !== null) ? <div>
      <EditProfileForm initialValues={props.profile} onSubmit={onSubmit} {...props} />
    </div> : <Loading />
  )
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    authId: state.auth.id,
  }
}
let mapDispatchToProps = {
  putProfileInfo: putProfileInfoTC,
  setProfile: setProfileTC,
}

export default compose( 
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirectComponent)
  (EditProfileContainer);