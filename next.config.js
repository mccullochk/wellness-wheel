module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/wheel',
        permanent: true
      }
    ]
  }
}
