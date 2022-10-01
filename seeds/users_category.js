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
            username: "kai0716",
            password: "123456"
          },
          {
            id: 2,
            avatar_url: "https//:locoalhost",
            username: "kai",
            password: "123456"
          }
        ]

      );
    })
    .then(() => {
      return knex('category').insert(
        [
          {
            title: "Entertainment",
            user_id: 1
          },
          {
            title: "Food and Drinks",
            user_id: 1
          },

          {
            title: "Housing",
            user_id: 1
          },

          {
            title: "Transportation",
            user_id: 1
          },
          {
            title: "Entertainment",
            user_id: 2
          },
          {
            title: "Food and Drinks",
            user_id: 2
          },

          {
            title: "Housing",
            user_id: 2
          },

          {
            title: "Transportation",
            user_id: 2
          },
          {
            title: "Lifestyle",
            user_id: 2
          },
          {
            title: "Lifestyle",
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
            amount: 200,
            note: 'Bus monthly pass',
            receipt: '/images/receipt-1.jpg',
            category: 'Transportation',
            date: new Date(2022, 7, 29).toISOString().slice(0, 19).replace('T', ' '),
            gst: 0,
            pst: 0
          },
          {
            user_id: 1,
            amount: 172.19,
            note: 'Buy clothes at Tommy',
            receipt: '/images/receipt-1.jpg',
            category: 'Lifestyle',
            date: new Date(2022, 8, 15).toISOString().slice(0, 19).replace('T', ' '),
            gst: 8.61,
            pst: 12.53
          },
          {
            user_id: 1,
            amount: 10.56,
            note: 'buy medicine',
            receipt: '/images/receipt-1.jpg',
            category: 'Lifestyle',
            date: new Date(2022, 7, 25).toISOString().slice(0, 19).replace('T', ' '),
            gst: 0.53,
            pst: 0.74
          },
          {
            user_id: 1,
            amount: 45.46,
            note: 'Buy sushi',
            receipt: '/images/receipt-1.jpg',
            category: 'Food and Drinks',
            date: caDate.toISOString().slice(0, 19).replace('T', ' '),
            gst: 2.27,
            pst: 3.18
          },

          {
            user_id: 1,
            amount: 455.46,
            note: 'Dentist',
            receipt: '/images/receipt-1.jpg',
            category: 'Lifestyle',
            date: new Date(2022, 7, 25).toISOString().slice(0, 19).replace('T', ' '),
            gst: 0,
            pst: 0
          },
          {
            user_id: 1,
            amount: 100.99,
            note: 'Electricity bill',
            receipt: '/images/receipt-1.jpg',
            category: 'Housing',
            date: new Date(2022, 8, 23).toISOString().slice(0, 19).replace('T', ' '),
            gst: 5.05,
            pst: 3.03
          },
          {
            user_id: 1,
            amount: 82.99,
            note: 'Gas',
            receipt: '/images/receipt-1.jpg',
            category: 'Housing',
            date: new Date(2022, 5, 12).toISOString().slice(0, 19).replace('T', ' '),
            gst: 4.15,
            pst: 0
          },
          {
            user_id: 1,
            amount: 450,
            note: 'Nintando Switch',
            receipt: '/images/receipt-1.jpg',
            category: 'Entertainment',
            date: new Date(2022, 8, 20).toISOString().slice(0, 19).replace('T', ' '),
            gst: 22.5,
            pst: 31.5
          },

          {
            user_id: 1,
            amount: 230,
            note: 'Family party dinner',
            receipt: '/images/receipt-1.jpg',
            category: 'Food and Drinks',
            date: new Date(2022, 8, 20).toISOString().slice(0, 19).replace('T', ' '),
            gst: 11.5,
            pst: 16.1
          },
          {
            user_id: 1,
            amount: 5.53,
            note: 'Milk, bread',
            receipt: '/images/receipt-1.jpg',
            category: 'Food and Drinks',
            date: new Date(2022, 8, 27).toISOString().slice(0, 19).replace('T', ' '),
            gst: 0.27,
            pst: 0.39
          },
          {
            user_id: 2,
            amount: 200,
            note: 'Water bill',
            receipt: '/images/receipt-1.jpg',
            category: 'Housing',
            date: new Date(2022, 8, 22).toISOString().slice(0, 19).replace('T', ' '),
            gst: 10,
            pst: 0
          },
          {
            user_id: 2,
            amount: 3.53,
            note: 'grocery, candy',
            receipt: '/images/receipt-1.jpg',
            category: 'Food and Drinks',
            date: new Date(2021, 8, 27).toISOString().slice(0, 19).replace('T', ' '),
            gst: 0.16,
            pst: 0.22
          },
          {
            user_id: 1,
            amount: 40.53,
            note: 'Uber Taxi',
            receipt: '/images/receipt-1.jpg',
            category: 'Transportation',
            date: new Date(2021, 5, 1).toISOString().slice(0, 19).replace('T', ' '),
            gst: 0,
            pst: 0
          },
          {
            user_id: 1,
            amount: 10.43,
            note: 'Bubble tea apple flavor',
            receipt: '/images/receipt-1.jpg',
            category: 'Food and Drinks',
            date: new Date(2022, 8, 26).toISOString().slice(0, 19).replace('T', ' '),
            gst: 1.42,
            pst: 0
          },
          {
            user_id: 1,
            amount: 10.43,
            note: 'Bubble tea peach flavor',
            receipt: '/images/receipt-1.jpg',
            category: 'Food and Drinks',
            date: new Date(2022, 8, 27).toISOString().slice(0, 19).replace('T', ' '),
            gst: 1.42,
            pst: 0
          },
          {
            user_id: 1,
            amount: 10.43,
            note: 'Bubble tea orange flavor',
            receipt: '/images/receipt-1.jpg',
            category: 'Food and Drinks',
            date: new Date(2022, 8, 25).toISOString().slice(0, 19).replace('T', ' '),
            gst: 1.42,
            pst: 0
          },
          {
            user_id: 1,
            amount: 28.43,
            note: 'Bubble tea',
            receipt: '/images/receipt-1.jpg',
            category: 'Food and Drinks',
            date: caDate.toISOString().slice(0, 19).replace('T', ' '),
            gst: 1.42,
            pst: 0
          }

        ]

      );
    })
};