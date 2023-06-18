import { User } from "firebase/auth";
import { firestoreApp } from ".";
import { getFirestore, doc, serverTimestamp, setDoc } from "firebase/firestore";
export const firestore = getFirestore(firestoreApp);
export const addUserToFireStore = async (user: User) => {
  const usefRef = doc(firestore, "users", user.uid);
  await setDoc(
    usefRef,
    {
      uid: user.displayName,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      lastOnline: serverTimestamp(),
    },
    { merge: true }
  );
};
