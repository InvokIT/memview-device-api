import express from "express";

const CACHE_PATH = process.env.CACHE_PATH || process.cwd();
const DEVICE_ID = process.env.DEVICE_ID;

// Listen for any GET requests
// Return 404 if file is not found
// return the contents of file at the PATH specified

// Listen for PUT requests
// Save the file contents at PATH
// Return 201 on success
