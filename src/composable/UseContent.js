/* eslint-disable no-unused-vars */
// import { getDocs, addDoc, doc, collection, deleteDoc } from 'firebase/firestore'
// // eslint-disable-next-line no-unused-vars
// import { db, storage } from '@/firebase'
// // eslint-disable-next-line no-unused-vars
// import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
// // eslint-disable-next-line no-unused-vars
// import { ref, computed } from 'vue'
// // eslint-disable-next-line no-unused-vars
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// // eslint-disable-next-line no-unused-vars
// import { createId, formatDate } from '@/services/method'

// import { useUser } from './useUser'

// export const useContent = () => {
//   const content = ref()
//   const contentList = ref([])
//   const newContent = ref({
//     author: ''
//   })

//   // eslint-disable-next-line no-unused-vars
//   const newRestaurants = ref({
//     id: createId(),
//     brand: '',
//     location: '',
//     typeOfCuisine: '',
//     workingHours: '',
//     description: '',
//     map: '',
//     image: null
//   })

//   const loading = ref({
//     content: false,
//     contentList: false,
//     newContent: false
//   })

//   async function getAllContent() {
//     loading.value.contentList = true
//     try {
//       const querySnapshot = await getDocs(collection(db, 'contents'))
//       contentList.value = querySnapshot.docs.map((doc) => doc.data())
//       loading.value.contentList = false
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   async function getContentById(id) {
//     loading.value.content = true
//     try {
//       const querySnapshot = await getDocs(collection(db, 'contents'))
//       content.value = querySnapshot.docs.map((doc) => doc.data()).find((item) => item.id === id)
//       loading.value.content = false
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   async function addContent() {
//     const { userRemake } = useUser()
//     loading.value.newContent = true
//     try {
//       if (newContent.value && userRemake.value) {
//         newContent.value.author = userRemake.value
//         await addDoc(collection(db, 'contents'), newContent.value)
//         loading.value.newContent = false
//       }
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   async function deleteContent(id) {
//     try {
//       if (content.value) {
//         await deleteDoc(doc(db, 'contents', id))
//       }
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return {
//     content,
//     contentList,
//     loading,
//     newContent,
//     getAllContent,
//     getContentById,
//     addContent,
//     deleteContent,
//     newRestaurants
//   }
// }

import { getDocs, addDoc, doc, collection, deleteDoc } from 'firebase/firestore'
import { db, storage } from '@/firebase'
import { ref, computed } from 'vue'
import { createId, formatDate } from '@/services/method'
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useUser } from './useUser'
import * as firebase from 'firebase/storage'

export const useContent = () => {
  const newContent = ref({
    id: createId(),
    author: '',
    brand: '',
    location: '',
    typeOfCuisine: '',
    workingHours: '',
    description: '',
    numberOfSeats: 0,
    childrensMenu: '',
    delivery: '',
    image: null
  })

  const contentList = ref([])
  const content = ref(null)

  const loading = ref({
    content: false,
    contentList: false,
    newContent: false
  })

  const contentListRemake = computed(() => {
    if (contentList.value) {
      const _contentListRemake = contentList.value.map((content) => {
        content.brand = `${content.brand} `
        content.location = `${content.location}`
        content.typeOfCuisine = `${content.typeOfCuisine}`
        content.workingHours = `${content.workingHours}`
        content.description = `${content.description}`
        content.numberOfSeats = `${content.numberOfSeats}`
        content.childrensMenu = `${content.childrensMenu}`
        content.delivery = `${content.delivery}`
        return content
      })
      return _contentListRemake || []
    }
    return []
  })

  const { userToObject } = useUser()

  async function addContent() {
    loading.value.newContent = true
    try {
      if (newContent.value && userToObject.value) {
        newContent.value.author = userToObject.value
        await addDoc(collection(db, 'contents'), newContent.value).finally(async () => {
          await getAllContent()
        })
        loading.value.newContent = false
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function getAllContent() {
    loading.value.contentList = true
    try {
      const querySnapshot = await getDocs(collection(db, 'contents'))
      contentList.value = querySnapshot.docs.map((doc) => doc.data())
      console.log(contentList.value)
      loading.value.contentList = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getContentById(id) {
    loading.value.content = true
    try {
      const querySnapshot = await getDocs(collection(db, 'contents'))
      content.value = querySnapshot.docs.map((doc) => doc.data()).find((item) => item.id === id)
      loading.value.content = false
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

  async function uploadImage(file) {
    const storage = getStorage()
    const storageRef = firebase.ref(storage, 'contents/' + file.name)

    uploadBytes(storageRef, file)
      .then(() => {
        console.log('Файл успешно загружен!')

        firebase.getDownloadURL(storageRef)
          .then((downloadURL) => {
            newContent.value.image = downloadURL
          })
          .catch((error) => {
            console.error('Ошибка получения ссылки на загруженный файл:', error)
          })
      })
      .catch((error) => {
        console.error('Ошибка загрузки файла:', error)
      })
  }

  function clear() {
    newContent.value = {
      author: '',
      brand: '',
      location: '',
      typeOfCuisine: '',
      workingHours: '',
      description: '',
      numberOfSeats: 0,
      childrensMenu: '',
      delivery: '',
      image: null
    }
    contentList.value = []
    content.value = null
  }

  return {
    newContent,
    contentList,
    content,
    loading,
    contentListRemake,
    getAllContent,
    getContentById,
    addContent,
    deleteContent,
    uploadImage,
    clear
  }
}
