import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { profileType, putProfileInfoTC, setProfileTC } from '../../../../redux/profileReducer';
import Loading from '../../../../common/loading/loading';
import EditProfile from './EditProfile';
import { compose } from 'redux';
import { withAuthRedirectComponent } from '../../../hoc/withAuthRedirect';
import { AppStateType } from '../../../../redux/reduxStore';

type FormDataType = {
  email: string,
  password: string
}

type PropsType = {
  profile: profileType,
  authId: number,
  putProfileInfo: (formData:FormDataType) => void;
  setProfile: (authId:number) => void;
}

const EditProfileContainer:React.FC<PropsType> = (props) => {
  useEffect(() => {
    if (props.profile == null) props.setProfile(props.authId);
  }, [props.profile])

  const EditProfileForm = reduxForm({
    form: 'editMode',
    //@ts-ignore
  })(EditProfile);

  const onSubmit = (formData: FormDataType) => {
    props.putProfileInfo(formData);
  }
  return (
    (props.profile !== null) ? <div>
      {/* @ts-ignore */}
      <EditProfileForm initialValues={props.profile} onSubmit={onSubmit} {...props} />
    </div> : <Loading />
  )
}

let mapStateToProps = (state: AppStateType) => {
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