document.addEventListener('DOMContentLoaded', function() {
  var config = {
    apiKey: "AIzaSyCVwlufUTFJ93ptOc-MCElh94CB-9G9w9c",
    authDomain: "playbook-41a3a.firebaseapp.com",
    databaseURL: "https://playbook-41a3a.firebaseio.com",
    projectId: "playbook-41a3a",
    storageBucket: "",
    messagingSenderId: "788381501788"
  };
  firebase.initializeApp(config);

  var instances = M.Sidenav.init(document.querySelectorAll('.sidenav'), {
inDuration:200,
outDuration:150
  });
});







