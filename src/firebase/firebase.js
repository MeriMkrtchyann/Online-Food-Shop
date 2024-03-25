import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    // apiKey: "AIzaSyDrpkNsWUsDqQ16DghLd-kMht5waXvUCHk",
    // authDomain: "online-food-shop-9ab71.firebaseapp.com",
    // databaseURL: "https://online-food-shop-9ab71-default-rtdb.firebaseio.com",
    // projectId: "online-food-shop-9ab71",
    // storageBucket: "online-food-shop-9ab71.appspot.com",
    // messagingSenderId: "995369809521",
    // appId: "1:995369809521:web:9d497cb55a79d734700dd0",
    // measurementId: "G-0DM0MP65PX"
    apiKey: "AIzaSyAjFUIOrKx_wPageYkzx8O2WwdsQ0DPdgI",
    authDomain: "baaaa-d3d1a.firebaseapp.com",
    projectId: "baaaa-d3d1a",
    storageBucket: "baaaa-d3d1a.appspot.com",
    messagingSenderId: "739535911614",
    appId: "1:739535911614:web:906eaf50eeac38f16c3cef",
    measurementId: "G-TLM538DWZM"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
