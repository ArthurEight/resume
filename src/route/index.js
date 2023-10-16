// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  address: 'Ukraine, Kyiv, Arsenalna St, 5',
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ivan-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience 
            in development. Whenever I start to work on a new project I learn the 
            domain and try to understand the idea of the project. Good team player, 
            every colleague is a friend to me. `,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms 
            ( odds ) and sport statistics ( tournament position, goals etc), analyzing 
            by simple mathematics models and preparing probability for such events 
            like: money line - first win / draw / second win, totals etc. `,
      },
    },
    footer,
  })
})

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 7,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
        },
      ],

      hobbies: [
        {
          name: 'Непостійне',
          isMain: false,
        },
        {
          name: 'Інколи',
          isMain: false,
        },
        {
          name: 'Основне',
          isMain: true,
        },
      ],
    },
    footer,
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      certificates: [
        {
          name: 'Текст',
          id: 123,
        },
        {
          name: 'Чарівний текст',
          id: 213,
        },
        {
          name: 'Гарний текст',
          id: 321,
        },
      ],

      educations: [
        {
          name: 'School №58',
          isEnd: true,
        },
        {
          name: 'Igor Sikorsky Kyiv Polytechnic Institute',
          isEnd: false,
        },
      ],
    },
    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          project: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua',
              about: 'Сreated Resume-site Ivan Ivanov',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML',
                },
                {
                  name: 'Nodejs',
                },
              ],
              stackAmount: 8,
              awards: [
                {
                  name: 'Learned basic practical skills',
                },
                {
                  name: 'Standard search optimization',
                },
              ],
              awardAmount: 3,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
