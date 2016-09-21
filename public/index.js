const request = require('superagent')

document.addEventListener('DOMContentLoaded', () => {
  const url = 'http://thecatapi.com/api/images/get'
  let html = 'oh noes! An error!'
  request
    .get(url)
    .query({api_key: 'MTIwMzc1'})
    .query({category: 'space'})
    .query({format: 'html'})
    .query({size: 'med'})
    .query({results_per_page: '100'})
    .end((err, res) => {
      if(!err) {
        html = res.text
        console.log(res)
      }
        document.getElementById('catpic').innerHTML = html
    })
})
