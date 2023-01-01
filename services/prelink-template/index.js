import { db } from '~/plugins/firebase'
import { collection, getDocs, Timestamp, orderBy, query } from 'firebase/firestore'

export const getPrelinkTemplates = async () => {
  let result = []
  const collectionRef = collection(db, 'prelink_template')
  const q = query(collectionRef, orderBy("type", "desc"))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    result.push({id: doc.id, ...doc.data()})
  })

  return result
}

export const createPrelinkTemplate = async ({
  name,
  html_template,
  ratio,
  type,
}) => {
  try {
    const docRef = await addDoc(collection(db, 'prelink_template'), {
      name,
      html_template,
      ratio,
      type,
      created_at: Timestamp.fromDate(new Date())
    })

    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", e);
  }
}
