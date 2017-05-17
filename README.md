
Peer-to-Peer ChatApp
## Getting Started
This repo shows an example chat application using Socket.io, Node and Angular 2
## Quick start
```bash
# clone the repo
git clone https://github.com/Shashank2406/ChatApp.git

# change into the repo directory
cd ChatApp

# install
npm install
npm install -g angular-cli: 1.0.0-beta.28.3
npm instal node: 7.9.0

# run
npm start
ng serve

```
Then visit [http://localhost:4200](http://localhost:4200) in your browser.


There are mainly three sections of the ChatApp:
* [`Chatbox`](client/Chatbox-component/Chatbox.component.ts) - for the interaction between different chat-Users/socket connections
* [`form`](client/form-component/form.component.ts) - to get the details of the user.
* [`index.js`](server/index.js) - to establish the connection between users using socket.


###Start Chatting
Enter your Details to open up a room for a client to join.
Get the ip address of local Server machine using ipconfig in windows and ifconfig in linux.
Use the [http://localip:4200](http://localip:4200) url to access the application on local network.
Enter details to join the hosted chat room.
Now you can chat.
