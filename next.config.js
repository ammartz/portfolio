/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  env: {
    'MYSQL_HOST': '127.0.0.1',
    'MYSQL_PORT': '3306',
    'MYSQL_DATABASE': 'test_db',
    'MYSQL_USER': 'root',
    'MYSQL_PASSWORD': 'aA@816953719',
  }
  
}

module.exports = nextConfig
