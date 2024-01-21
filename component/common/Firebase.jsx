"use client";
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { logEvent, getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseConfig from "@/util/fbconfig";

export function logHandler(log, option) {
  const analytics = getAnalytics(app);
  logEvent(analytics, log, option);
}

export async function uploadHandler(data) {
  addDoc(collection(db, "users"), data)
    .then((response) => {
      console.log(`add Docs as: ${response.id}`);
    })
    .catch((e) => {
      console.log(`error: ${e}`);
    });
}

export let app, analytics, db;
export default function Firebase({}) {
  useEffect(() => {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    db = getFirestore(app);
    logHandler(analytics, "firebase-start", {
      page_path: window.location.pathname,
      page_title: document.title,
    });
  }, []);
  return <></>;
}
