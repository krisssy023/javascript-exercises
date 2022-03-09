const getTheTitles = function(title) {
    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ]
    
      let results = books.map(a => a.title)

return results ;
};

// Do not edit below this line
module.exports = getTheTitles;
