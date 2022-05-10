import { db, st } from "../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // storage
import { addDoc, collection, updateDoc, doc } from "firebase/firestore"; // firestore
export const upload = async (data, img) => {
  let images_to_push = [];
  const { address, district, rate, rooms_count, iskitchen, isFlat, desc } =
    data;

  for (var key in img) {
    if (img[key] === "") {
      return alert("Please select an images !");
    }
  }
  for (var key in data) {
    if (data[key] === "" || data[key] === "Choose a District") {
      return alert("all feilds are required !!");
    }
  }
  for (var key in img) {
    images_to_push.push(img[key]);
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
      thumbnail: [],
    });

    let downloadLink = [];
    const metadata = {
      contentType: "image/jpeg",
    };
    images_to_push.map(async (img) => {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", img, true);
        xhr.send(null);
      });
      const imageRef = ref(st, `images/${Date.now()}`);
      await uploadBytes(imageRef, blob, metadata)
        .then(async () => {
          const downloadURL = await getDownloadURL(imageRef);
          downloadLink.push(downloadURL);
          await updateDoc(doc(db, "rooms", docRef.id), {
            thumbnail: downloadLink,
          });
          blob.close();
        })
        .catch((e) => {
          console.log("err while upload", e);
        });
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
