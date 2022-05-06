import { db, st } from "../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // storage
import { addDoc, collection } from "firebase/firestore"; // firestore
export const upload = async (data, img) => {
  const { address, district, rate, rooms_count, iskitchen, isFlat, desc } =
    data;
  for (var key in data) {
    if (data[key] === "" || data[key] === "Choose a District" || img === null) {
      return alert("all feilds are required !!");
    }
  }
  try {
    const docRef = await addDoc(collection(db, "rooms"), {
      room_id: Date.now(),
      user_id: 10,
      user_profile: "",
      address,
      district,
      rate,
      rooms_count,
      iskitchen,
      isFlat,
      desc,
      thumbnail: "",
    });
    if (docRef) {      
      const imgRef = ref(st, `images/${img.uri}`);
      uploadBytes(imgRef, img.uri)
        .then(async (res) => {
          const downloadURL = await getDownloadURL(imgRef);
          console.log("url", downloadURL);
        })
        .catch((err) => console.log("err while adding img", err));
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
