// eslint-disable-next-line no-unused-vars
import { collection, getDocs, addDoc, getDoc, doc, setDoc } from 'firebase/firestore'
// eslint-disable-next-line no-unused-vars
import { db, storage } from '@/firebase'
// eslint-disable-next-line no-unused-vars
import { getStorage, uploadBytes, getDownloadURL, connectStorageEmulator } from 'firebase/storage'
import { ref, computed } from 'vue'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const user = ref()
const userList = ref([])

const loading = ref({
  user: false,
  userList: false
})

const userToObject = computed(() => {
  if (user.value) {
    return {
      uid: user.value.uid,
      email: user.value.email,
      displayName: user.value.displayName,
      photoURL: user.value.photoURL,
      favourites: user.value.favourites ?? [],
      status: user.value.status ?? 'user',
      reviews: user.value.reviews ?? []
    }
  }
  return null
})

export const useUser = () => {
  const auth = getAuth()

  // войти с помощью окна гугл
  function googleRegister() {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then(async (userCredential) => {
        user.value = userCredential.user

        // проверка первый ли раз он зашел
        await addUserToMainDatabase()

        // достаем данные если не первый раз
        await getFromMainDatabase()

        // добавляем в локал сторадж
        addToLocalStorage()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async function addUserToMainDatabase() {
    loading.value.user = true
    try {
      if (userToObject.value) {
        await getAllUsers()
        if (!checkUserInDatabase()) {
          await addDoc(collection(db, 'users'), userToObject.value)
        } else {
          console.error('User already in database')
        }
      }
      loading.value.user = false
    } catch (error) {
      console.error(error)
    }
  }

  // получить всех юзеров
  async function getAllUsers() {
    loading.value.userList = true
    try {
      const querySnapshot = await getDocs(collection(db, 'users'))
      querySnapshot.forEach((doc) => {
        userList.value.push(doc.data())
      })
      loading.value.userList = false
    } catch (error) {
      console.error(error)
    }
  }

  // проверка есть ли юзер в базе данных
  function checkUserInDatabase() {
    return userList.value.some((item) => item.uid === userToObject.value?.uid)
  }

  // получить данные из базы данных
  async function getFromMainDatabase() {
    await getAllUsers()
    user.value = userList.value.find((item) => item.uid === user.value?.uid)
  }

  //обновить данные в базе данных
  async function updateUserInDatabase() {
    console.log(user.value)
    if (user.value) {
      try {
        const userDocRef = doc(db, 'users', user.value.uid)
        console.log(userDocRef)
        const existingUserDoc = await getDoc(userDocRef)
        console.log(existingUserDoc)
        const userData = existingUserDoc.data()
        console.log(userData)
        console.log('сюда пришел')
        if (existingUserDoc) {
          const userData = existingUserDoc.data()
          const updatedData = {
            ...userData,
            ...user.value
          }
          console.log(updatedData)
          await setDoc(userDocRef, updatedData)
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  function addToLocalStorage() {
    if (user.value) {
      localStorage.setItem('user', JSON.stringify(user.value))
    }
  }

  function getUserFromLocalStorage() {
    const userFromLocalStorage = localStorage.getItem('user')
    if (userFromLocalStorage) {
      user.value = JSON.parse(userFromLocalStorage)
    }
  }

  function removeFromLocalStorage() {
    localStorage.removeItem('user')
  }

  // выйти из гугла
  function googleLogout() {
    auth.signOut()
    user.value = null

    // удаляем из локал сторадж
    removeFromLocalStorage()
  }

  async function addToFavorites(id) {
    if (user.value.favourites.some((a) => a == id)) {
      console.log('work')
      return
    }
    if (user.value) {
      user.value.favourites.push(id)
      await updateUserInDatabase()
      return
    }
    return
  }

  async function deleteFavouriteItem(id) {
    try {
      user.value.favourites = user.value.favourites.filter((f) => f != id)
      console.log(user.value)
      console.log('здесь нахуй')
      await updateUserInDatabase()
      return
    } catch (error) {
      console.error(error)
    }
    return
  }
  // это надо не всем
  // для постоянной связи сервиса с базой данных
  //   watch(user.value, async (newValue) => {
  //     if (newValue) {
  //       await updateUserInDatabase()
  //     }
  //   })

  return {
    user,
    loading,
    googleRegister,
    googleLogout,
    getAllUsers,
    userToObject,
    userList,
    addToLocalStorage,
    getUserFromLocalStorage,
    deleteFavouriteItem,
    removeFromLocalStorage,
    addToFavorites
  }
}
