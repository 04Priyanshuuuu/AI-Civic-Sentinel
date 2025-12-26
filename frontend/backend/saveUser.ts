// backend/saveUser.ts
import { db } from "../firebase"; // path check karo
import { doc, setDoc } from "firebase/firestore";

/**
 * Firestore me user info save kare
 */
export const saveUserInfo = async (
  uid: string,
  data: { name: string; phone: string; location: string; email: string }
) => {
  try {
    await setDoc(doc(db, "users", uid), data); // collection 'users', document = uid
    console.log("User info saved to Firestore ✅");
  } catch (err) {
    console.error("Error saving user info:", err);
    throw err;
  }
};
