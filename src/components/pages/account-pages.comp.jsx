import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../utils/routes';
import { selectCurrentUser } from '../../redux/user/selectors';
import { useSelector } from 'react-redux';

// pages
import Account from '../organisms/account-pages/account.comp';
import AccountLogin from '../organisms/account-pages/account-login.comp';
import AccountRecover from '../organisms/account-pages/account-recover.comp';
import AccountRegister from '../organisms/account-pages/account-register.comp';

// styles
import { PageContainer } from './account-pages.styled';

function AccountPages(props) {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <PageContainer>
      <Switch>
        <Route exact path={routes.account.path}
               render={() => currentUser ? <Account/> : <Redirect to={routes.accountLogin.path}/>}/>
        <Route exact path={routes.accountAddresses.path}
               render={() => currentUser ? <Account/> : <Redirect to={routes.accountLogin.path}/>}/>
        <Route exact path={routes.accountProducts.path}
               render={() => currentUser ? <Account/> : <Redirect to={routes.accountLogin.path}/>}/>
        <Route exact path={routes.accountLogin.path}
               render={() => !currentUser ? <AccountLogin/> : <Redirect to={routes.account.path}/>}/>
        <Route exact path={routes.accountRecover.path}
               render={() => !currentUser ? <AccountRecover/> : <Redirect to={routes.account.path}/>}/>
        <Route exact path={routes.accountRegister.path}
               render={() => !currentUser ? <AccountRegister/> : <Redirect to={routes.account.path}/>}/>
      </Switch>
    </PageContainer>
  );
}

export default AccountPages;
