import { getDocs, addDoc, doc, collection, deleteDoc } from 'firebase/firestore'
// eslint-disable-next-line no-unused-vars
import { db, storage } from '@/firebase'
// eslint-disable-next-line no-unused-vars
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
// eslint-disable-next-line no-unused-vars
import { ref, computed } from 'vue'
// eslint-disable-next-line no-unused-vars
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { useUser } from './useUser'

export const useContent = () => {
  const content = ref()
  const contentList = ref([])
  const newContent = ref({
    author: ''
  })

  const loading = ref({
    content: false,
    contentList: false,
    newContent: false
  })

  async function getAllContent() {
    loading.value.contentList = true
    try {
      const querySnapshot = await getDocs(collection(db, 'contents'))
      contentList.value = querySnapshot.docs.map((doc) => doc.data())
      loading.value.contentList = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getContentById(id) {
    loading.value.content = true
    try {
      const querySnapshot = await getDocs(collection(db, 'contents'))
      content.value = querySnapshot.docs
        .map((doc) => doc.data())
        .find((item) => item.id === id)
      loading.value.content = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addContent() {
    const { userRemake } = useUser()
    loading.value.newContent = true
    try {
      if (newContent.value && userRemake.value) {
        newContent.value.author = userRemake.value
        await addDoc(collection(db, 'contents'), newContent.value)
        loading.value.newContent = false
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteContent(id) {
    try {
      if (content.value) {
        await deleteDoc(doc(db, 'contents', id))
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    content,
    contentList,
    loading,
    newContent,
    getAllContent,
    getContentById,
    addContent,
    deleteContent
  }
}