module.exports = {
  'Product page route': function(test) {
    test
      .open('http://localhost:3000/products')
      .assert.url('http://localhost:3000/products', 'Products route exists')
      .assert.title().to.contain('Product', 'Has Product in the title')
      .assert.text('h1').to.contain('Product', 'Has a "Product" heading')
      .done();
  },
  'Categories page route':  function(test) {
    test
    .open('http://localhost:3000/categories')
    .done();
  }
};
