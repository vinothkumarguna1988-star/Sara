#!/usr/bin/env node

import * as dotenv from 'dotenv';
import { MCPServer } from './mcp-server';

// Load environment variables
dotenv.config();

// Initialize and start the MCP server
const server = new MCPServer();

server.start().catch((error) => {
  console.error('Failed to start MCP server:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down...');
  await server.stop();
  process.exit(0);
});
