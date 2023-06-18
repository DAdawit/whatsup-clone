import {
  browserSessionPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { addUserToFireStore } from "@/lib/firebase/userController";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export const handleSignIn = (router: AppRouterInstance) => {
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      signInWithPopup(auth, googleProvider)
        .then((res) => {
          const user = res?.user;
          addUserToFireStore(user);
          router.push("/");
        })
        .catch((err) => {
          throw new Error(err.message);
        });
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};
