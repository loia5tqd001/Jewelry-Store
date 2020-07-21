import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/selectors';

function AccountInformationComp(props) {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div>
      <p>Họ và tên: {currentUser.displayName}</p>
      <p>Địa chỉ email: {currentUser.email}</p>
    </div>
  );
}

export default AccountInformationComp;
