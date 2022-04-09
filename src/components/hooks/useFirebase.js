import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase.init";
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const useFirebase = () => {

    const [user, setUser] = useState({})
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                setUser(newUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {

        });

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
    }, [])
    return {
        user,
        handleGoogleLogin,
        handleSignOut
    }

};
export default useFirebase;