module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/975/': { page: '/post', query: { id: 975}}
    }
  }
}