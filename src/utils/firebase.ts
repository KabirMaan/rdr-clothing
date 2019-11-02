import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC5VE3q2vS0LV6DsSDJzrD9-mI99MarMDw",
  authDomain: "rdr-clothing-db.firebaseapp.com",
  databaseURL: "https://rdr-clothing-db.firebaseio.com",
  projectId: "rdr-clothing-db",
  storageBucket: "rdr-clothing-db.appspot.com",
  messagingSenderId: "1079119793487",
  appId: "1:1079119793487:web:020610d48863a056dd093a",
  measurementId: "G-E145TQR39V"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData?: any
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;

    const createdAt = new Date();
    const obj = {
      email,
      createdAt,
      ...additionalData
    };

    try {
      await userRef.set(obj);
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey: any,
  objectsToAdd: any
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj: any) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections:any) => {
  const transformedCollection = collections.docs.map((doc:any) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator:any, collection:any) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
