const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// // Firebase Admin
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

// // Create a notification collection to firestore
const createNotification = notification => {
    return admin.firestore()
        .collection('notifications')
        .add(notification)
        .then(doc => console.log('Notification added: ', doc))
}

// // New Project Creation Function Trigger
exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc => {
        const project = doc.data();
        const notification = {
            content: 'Added a new project',
            user: `${project.author_fname} ${project.author_lname}`,
            timestamp: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification)
    })
