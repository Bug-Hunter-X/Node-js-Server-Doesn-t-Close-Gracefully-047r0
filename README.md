# Node.js Server Doesn't Close Gracefully

This repository demonstrates a common issue in Node.js where a server, created using `http.createServer`, doesn't automatically close when the main script completes execution.  This can lead to resource leaks and prevent the application from exiting cleanly.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a solution using the `server.close()` method with an event listener for a graceful shutdown.

## Problem

The provided `http.createServer` instance, once started, will continue running indefinitely, even after the script has seemingly finished. This can be a significant problem in production environments, potentially leading to resource exhaustion and unexpected behavior.

## Solution

The solution involves properly handling the server's lifecycle by listening to the `'close'` event before exiting. The implementation details are in `bugSolution.js`.

This simple example highlights the importance of careful resource management in Node.js applications.