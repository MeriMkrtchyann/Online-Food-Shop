import { getDatabase } from "firebase/database";

const app = {
  apiKey: "AIzaSyDrpkNsWUsDqQ16DghLd-kMht5waXvUCHk",
  authDomain: "online-food-shop-9ab71.firebaseapp.com",
  databaseURL: "https://online-food-shop-9ab71-default-rtdb.firebaseio.com",
  projectId: "online-food-shop-9ab71",
  storageBucket: "online-food-shop-9ab71.appspot.com",
  messagingSenderId: "995369809521",
  appId: "1:995369809521:web:9d497cb55a79d734700dd0",
  measurementId: "G-0DM0MP65PX"
};

const database = getDatabase(app);