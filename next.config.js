module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/wellness',
        permanent: true
      }
    ]
  }
}
