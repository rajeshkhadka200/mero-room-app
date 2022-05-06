import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export const upload = async (data, img) => {
  const { address, district, rate, rooms_count, iskitchen, isFlat, desc } =
    data;
  for (var key in data) {
    if (
      data[key] === "" ||
      data[key] === "Choose a District" ||
      img === null
    ) {
      return alert("All feilds are required");
    }
  }
  try {
    const res = await addDoc(collection(db, "rooms"), {
      address,
      district,
      rate,
      rooms_count,
      iskitchen,
      isFlat,
      desc,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
