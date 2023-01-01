import { db } from '~/plugins/firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

export const getProfiles = async () => {
  let result = []
  const collectionRef = collection(db, 'profile')
  const q = query(collectionRef, orderBy("full_name", "asc"))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    result.push({id: doc.id, ...doc.data()})
  })
  console.log({ result })
  return result
}