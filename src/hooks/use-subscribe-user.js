import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import { setCurrentUser } from '../redux/user/actions';

import { createUserProfileDocument } from '../firebase/utils';
// https://usehooks.com/useWindowSize/
export function useSubscribeUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot((snapShot) => {
            dispatch(setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            }));
          });
        } else {
          dispatch(setCurrentUser(userAuth));
        }
      },
    );

    return () => unsubscribeFromAuth();
  }, [dispatch]);
}
