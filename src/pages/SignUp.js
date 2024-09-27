import {auth, googleProvider} from '../config/firebase';
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import {useState} from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(auth?.currentUser?.email)
  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    }
    catch (error) {
      console.log(error);
    }
  };
  const signUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    }
    catch (error) {
      console.log(error);
    }
  };
  const getOut = async () => {
    try {
      await signOut(auth);
    }
    catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
    <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
    <input placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
    <button onClick={signUp}>Sign Up</button>
    <button onClick={signUpWithGoogle} className='mx-10'>Sign Up with Google</button>
    <button onClick={getOut}>Sign Out</button>
    </div>
  );
}
