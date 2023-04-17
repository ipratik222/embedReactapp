# POC for integrating web components in React application

In this project, we have developed a web compoenent (ChatModal.js) that will render the chat UI.

* Passing data from web component to react: 
<p>We have binded the button element with click listener event, so that everytime if we click "send" button it will trigger an event. To pass the message from custom element to react, we have used custom event ("getmessage"). Custom event will trigger, once we click the button and useEffect hook will listen to the respective event. It will append the message in a state defined as "chat".</p>

* Passing data from react to web component: 
<p>We have defined an attribute on custom-element called "chat" that will store chat state. "attributeChangedCallback" is one of the lifecycle callback, that will trigger whenever we have change in our custom element's attribute i.e. (added, removed, or changed). It also comes along with a static method called observedAttributes that assits to maintain a track of specific attributes. So, wehenever we alter the state of chat, that will directly change the value of attribute on custom elemment, and will be able to change the DOM element as we did with chat body through callbacks.</p>

## SET UP

In the project directory, you can run:

### `npm i && npm start`


Runs the app in dev mode
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


