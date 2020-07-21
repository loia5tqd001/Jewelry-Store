import firebase, { auth, firestore } from './index';

// Google auth
const ggProvider = new firebase.auth.GoogleAuthProvider();
ggProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(ggProvider);

// Facebook auth
const fbProvider = new firebase.auth.FacebookAuthProvider();
fbProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = () => auth.signInWithPopup(fbProvider);

// Email/password auth
export const signUpWithEmailAndPassword = async (email, password, additionalData) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  await createUserProfileDocument(user, additionalData);
};
export const signInWithEmailAndPassword = async (email, password) => {
  await auth.signInWithEmailAndPassword(email, password);
};

// Sign out
export const signOut = async () => await auth.signOut();

// Copied from: https://github.com/ZhangMYihua/lesson-26-complete/blob/master/src/firebase/firebase.utils.js
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// export const getAllBrands = () => {
//   return database
//     .ref('/brands')
//     .once('value')
//     .then((snapshot) => {
//       return snapshot.val();
//     });
// };
//
// // Limit number of items to get: https://firebase.google.com/docs/database/web/lists-of-data?authuser=0#get_a_database_reference
// export const getFirstProducts = (number) => {
//   const productsRef = database.ref('/products');
//   const limitedProducts = number ? productsRef.limitToFirst(number) : productsRef;
//
//   return limitedProducts.once('value').then((snapshot) => {
//     return snapshot.val();
//   });
// };
//
// export const getAllProducts = () => {
//   return getFirstProducts();
// };
//
// export const getProductById = (productId) => {
//   return database
//     .ref('/products/' + productId)
//     .once('value')
//     .then((snapshot) => {
//       return snapshot.val();
//     });
// };
