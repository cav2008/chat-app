import socketIO from 'socket.io';

export default class WebSocket {
  constructor(server) {
    this.createSocket(server);
    this.createUserList();
    this.listen();
  }

  createSocket(server) {
    this.io = socketIO(server);
  }

   /**
   * Creating the user list array.
   */
  createUserList() {
    // Contains object: id, username, colour.
    this.userList = [];
  }

  /**
   * Gets the username from the userlist.
   * @param {string} id the socket.id
   * @return {string} Username.
   */
  getUser(id) {
    return this.userList.filter(user => user.id === id)[0];
  }

  listen() {
    this.io.on('connection', (socket) => {
      console.log('--- Socket connected ---');

      // Add user to user list when they connect.
      socket.on('onConnect', (userData) => {
        this.userList.push({
          id: socket.id,
          username: userData.username,
          colour: userData.colour
        });

        this.io.send({
          type: 'enter',
          username: userData.username,
        });
      });

      // Listen to send() messages from clients and broadcast back to everyone else.
      socket.on('message', (msg) => {
        this.io.send({
          type: 'chat',
          message: msg,
          username: this.getUser(socket.id).username,
          colour: this.getUser(socket.id).colour,
        });
      });

      socket.on('disconnect', (reason) => {
        if (this.userList.length > 0) {
          this.io.send({
            type: 'exit',
            username: this.getUser(socket.id).username,
          });
          // Delete disconnected user from the user list.
          this.userList.splice(this.userList.findIndex((user) => user.id === socket.id), 1);
        }
      });
    });
  }
}
