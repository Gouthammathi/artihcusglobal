const { spawn } = require('child_process');
const path = require('path');

// Start the backend server
const backend = spawn('node', ['Server.js'], {
  stdio: 'inherit'
});

// Start the frontend development server
const frontend = spawn('npm', ['start'], {
  stdio: 'inherit'
});

// Handle process termination
process.on('SIGINT', () => {
  backend.kill();
  frontend.kill();
  process.exit();
}); 