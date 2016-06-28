module.exports = {
  'Product page CRUD': function(test) {
    test
      .open('http://localhost:3000/products')
      .query('[href="/products/add"]')
        .assert.exists('Create link for products is on the page')
        .assert.text().to.contain('Add', 'Create link contains "Add"')
      .query('[href="/products/edit/1"]')
        .assert.exists('Edit link for product 1 is on the page')
        .assert.text().to.contain('Edit', 'Create link contains "Edit"')
      .query('[href="/products/delete/1"]')
        .assert.exists('Delete link for product 1 is on the page')
        .assert.text().to.contain('Delete', 'Create link contains "Delete"')
      .done();
  }
};
