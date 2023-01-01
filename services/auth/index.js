import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

import { app } from '~/plugins/firebase'

const auth = getAuth(app)

// sign in with email and password
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user

    return { isSuccess: true, data: user }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return { isError: true, errorDetail: { errorCode, errorMessage } }
  }
}

export const logout = async () => {
  try {
    await signOut(auth)
    return {
      message: 'You are logged out',
      status: 'success',
      success: true
    }
  } catch (error) {
    return error
  }
}

// register new user
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user

    return { isSuccess: true, data: user }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return { isError: true, errorDetail: { errorCode, errorMessage } }
  }
}

// check if the user is already login
export const isLogin = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return true
    } else {
      return false
    }
  })
}
