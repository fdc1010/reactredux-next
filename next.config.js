/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"]
  },
  env: {
    API_ENDPOINT:"https://jsonplaceholder.typicode.com"
  }
}

module.exports = nextConfig
