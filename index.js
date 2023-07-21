const admin = require("firebase-admin");
const serviceAccount = require("./unicef-e6d80-firebase-adminsdk-xsj73-8e40a8b269");
// const databaseUrl = "https://unicef-e6d80-default-rtdb.asia-southeast1.firebasedatabase.app/"

async function getData(){
    try{
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
          databaseURL: "https://unicef-e6d80-default-rtdb.asia-southeast1.firebasedatabase.app/"
        });
        
        // The app only has access as defined in the Security Rules
        var db = admin.database();
        var ref = db.ref("/UNICEF");
        const data = await ref.once("value");
        console.log(data.val());
    }catch(err){
        console.log(err);
    }
    finally{
        await admin.app().delete();
    }

}

// getData();

async function setData(sample){
    try{
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
          databaseURL: "https://unicef-e6d80-default-rtdb.asia-southeast1.firebasedatabase.app/"
        });
        
        // The app only has access as defined in the Security Rules
        var db = admin.database();
        var ref = db.ref("/UNICEF");
        
        await ref.set(sample);
    }catch(err){
        console.log(err);
    }
    finally{
        await admin.app().delete();
    }

}

// const sample = {
//     Name: "Testing123",
//     Score: "5",
//     Grade: "Testing",
//     Age: "25"
// }
// setData(sample);

module.exports = {
    getData,
    setData
}






