import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

export const saveUserInfo = async (
  uid: string,
  data: { name: string; phone: string; location: string; email: string }
) => {
  await setDoc(doc(db, "users", uid), data);
};
