module.exports = {
  'Sales pages routes': function(test) {
    test
      .open('http://localhost:3000/sales/week1')
      .assert.url('http://localhost:3000/sales/week1', 'Sales / week 1 route exists')
      .open('http://localhost:3000/sales/week2')
      .assert.url('http://localhost:3000/sales/week2', 'Sales / week 2 route exists')
      .open('http://localhost:3000/sales/week3')
      .assert.url('http://localhost:3000/sales/week3', 'Sales / week 3 route exists')
      .open('http://localhost:3000/sales/week4')
      .assert.url('http://localhost:3000/sales/week4', 'Sales / week 4 route exists')
      .done();
  }
};
