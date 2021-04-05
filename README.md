Project created in order to study about ReactJS.

The studied course was: 'React Js do zero ao avançado na prática' from the Udemy platform.

To run the project you need to follow the steps below:

<ol type="1">

<li>Create a file named fireConnection.js in /src/classes/firebase/. The file contains the following structure:
<br />

```javascript

import firebase from 'firebase';

let config = {
    apiKey: "Type here your API key",
    authDomain: "Type here your domain",
    databaseURL: "Type here your database URL",
    projectId: "Type here the project ID",
    storageBucket: "Type here your storage bucket",
    messagingSenderId: "Type here the sender ID",
    appId: "Type here the app ID"
};

firebase.initializeApp(config);

export default firebase;

```

</li>


<li> Finally run the commands below:

```console

npm install

npm start 

```

</li>

</ol>


This application uses these installed libraries:

<ul>
<li>react-router-dom</li>
<li>styled-components</li>
<li>axios</li>
<li>react-icons</li>
<li>react-router-hash-link</li>
</ul>