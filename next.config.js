/** @type {import('next').NextConfig} */
require('dotenv').config() 

const nextConfig = {
  reactStrictMode: true,
  env: { // Follow this pattern to use variables  
    API_URL: process.env.API_URL
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
}

module.exports = nextConfig
