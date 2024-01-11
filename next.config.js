/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "www.bdz.imb.br",

            },
        ],
    },
}

module.exports = nextConfig
