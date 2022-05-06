import { db, st } from "../../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // storage
import { addDoc, collection, updateDoc, doc } from "firebase/firestore"; // firestore
export const upload = async (data, img) => {
  let dummy_arrar = [
    {
      name: "img_1",
      uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540rajeshkhadka200%252Fmobile_project/ImagePicker/a5426065-3f5f-42cf-b804-4b55841d81ff.png",
    },
    {
      name: "imgs_2",
      uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540rajeshkhadka200%252Fmobile_project/ImagePicker/a5426065-3f5f-42cf-b804-4b55841d81ff.png",
    },
    {
      name: "3",
      uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540rajeshkhadka200%252Fmobile_project/ImagePicker/a5426065-3f5f-42cf-b804-4b55841d81ff.png",
    },
    {
      name: "img_4",
      uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540rajeshkhadka200%252Fmobile_project/ImagePicker/a5426065-3f5f-42cf-b804-4b55841d81ff.png",
    },
  ];
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
      thumbnail: [],
    });

    let imgs_array = [];
    // handle file upload
    const metadata = {
      contentType: "image/jpeg",
    };
    dummy_arrar.map(async (imgs) => {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          console.log(e);
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", imgs.uri, true);
        xhr.send(null);
      });
      const imageRef = ref(st, `images/${Date.now()}`);
      await uploadBytes(imageRef, blob, metadata)
        .then(async () => {
          const downloadURL = await getDownloadURL(imageRef);
          imgs_array.push(downloadURL);
          await updateDoc(doc(db, "rooms", docRef.id), {
            thumbnail: imgs_array,
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
