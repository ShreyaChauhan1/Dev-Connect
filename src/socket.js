import { io } from 'socket.io-client';

// Initialize socket only when the function is called
export const initSocket = async () => {
  const options = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };

  const socket = io('http://localhost:8090', options); // Ensure this URL matches the backend

  // Add a listener for successful connection
  socket.on('connect', () => {
    console.log('Connected to WebSocket server:', socket.id);
  });

  // Handle connection errors
  socket.on('connect_error', (err) => {
    console.error('Connection failed', err);
  });

  return socket; // Return the socket instance for use
};
