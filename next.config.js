/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      domains: ['cdn.myanimelist.net'],
    },
  }  
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net"
            },
            {
                hostname: "avatars.githubusercontent.com"
            }
        ]
    }
}