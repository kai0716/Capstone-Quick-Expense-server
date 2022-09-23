/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert(
        [
          {
            id: 1,
            avatar_url: "https//:locoalhost",
            username: "Kevin",
            password: "123456"
          }
        ]

      );
    })
    .then(() => {
      return knex('category').insert(
        [
          {
            id: 1,
            title: "Entertainment",
            user_id: 1
          },
          {
            id: 2,
            title: "Income",
            user_id: 1
          }
        ]

      );
    })

    .then(() => {
      var date = new Date();
      var utcDate = new Date(date.toUTCString());
      utcDate.setHours(utcDate.getHours() - 7);
      var caDate = new Date(utcDate);
      return knex('expenses').insert(
        [
          {
            user_id: 1,
            amount: 10.99,
            note: '',
            receipt: '/images/receipt-1663880651216-14689012',
            category: 'rent',
            date: caDate.toISOString().slice(0, 19).replace('T', ' '),
            recurring: 'Never'
          },
          {
            user_id: 1,
            amount: 100.99,
            note: 'Buy clothes at GAP',
            receipt: '/images/receipt-1663880651216-14689012',
            category: 'Cloth',
            date: caDate.toISOString().slice(0, 19).replace('T', ' '),
            recurring: 'Never'
          },
          {
            user_id: 1,
            amount: 1000.99,
            note: '',
            receipt: '/images/receipt-1663880651216-14689012',
            category: 'Technology',
            date: caDate.toISOString().slice(0, 19).replace('T', ' '),
            recurring: 'Never'
          },
          {
            user_id: 1,
            amount: 1000.99,
            note: '',
            receipt: '/images/receipt-1663880651216-14689012',
            category: 'Bill',
            date: caDate.toISOString().slice(0, 19).replace('T', ' '),
            recurring: 'Never'
          }

        ]

      );
    })
};