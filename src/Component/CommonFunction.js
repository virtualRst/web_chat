import db from "./Firebase";

const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const startNewChat = () => {
  let userid=getUserId("userid");
  // setDataInFirebase("available_users",{userid:"ramdomchatid"});
  // setDataInFirebase("",{"test":"test"});
  getDataFromFirebase();
}
const setDataInFirebase=(ref,dataObject)=>{
  db.ref(ref).set(dataObject);
}
const getDataFromFirebase=()=>{
let dbRef =db.ref("available_users");
dbRef.on("value", function(snapshot) {
  console.log(snapshot.val());
  let dataObject=snapshot.val();

}, function (error) {
  console.log("Error: " + error.code);
});
}
const getUserId = () => {
  let userId="";
  if (getCookie("userid") == "") {
    userId=createUserId();
  } else {
    userId=getCookie("userid");
    console.log("From Cookie : " + getCookie("userid"));
  }
  return userId;
}
const uuidv4 = () => {
  return ([1e5] + 1e3 + 4e3 + 8e3 + 1e5).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}
const createUserId=() => {
    let userId = uuidv4();
    setCookie("userid", userId, 1);
    return userId;
}

export { getCookie, setCookie, startNewChat,getUserId,createUserId}