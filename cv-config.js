import { SECTION_TYPES as TYPES } from './src/constants';

export default [
  {
    type: TYPES.STARTED,
    id: 'started-section',
    menuEntry: null,
    props: {
      avatarUrl: 'https://s.gravatar.com/avatar/be0092cca8e839e1c83b492dfb630d7c?s=200',
      email: 'tiago.bnobrega@gmail.com',
      site: 'http://tiagobnobrega.github.io',
      title: 'Tiago Nobrega',
      subtitle: 'Solution Architect | Full Stack Developer',
      social: [
        {
          iconClass: 'icon ion ion-social-facebook',
          url: 'https://www.facebook.com/tiago.nobrega.18',
          printed: '/tiago.nobrega.18',
        },
        { iconClass: 'icon ion ion-social-github', url: 'https://github.com/tiagobnobrega', printed: '/tiagobnobrega' },
        { iconClass: 'icon ion ion-social-twitter', url: 'https://twitter.com/tbnobrega', printed: '@tbnobrega' },
        { iconClass: 'icon ion ion-social-skype', url: 'skype:tiagobnobrega', printed: 'tiagobnobrega' },
      ],
    },
  },

  {
    type: TYPES.ABOUT,
    id: 'about-section',
    menuEntry: 'About',
    props: {
      birthday: '1987-06-07', // YYYY-MM-DD
      citizenship: 'Brazil',
      address: 'Av. General Felicíssimo Cardoso, 835',
      phones: ['+55 21 97273-4321'],
      email: 'tiago.bnobrega@gmail.com',
      job: 'Full Stack Developer',
      title: "Hello, I'm Tiago",
      paragraphs: [
        'Tech enthusiast, javascript fan & coffee addicted. I believe you can do anything with just a screwdriver and enough will power, but you can definitely do a better job with the right tool.',
        'Over twelve years acting as coffee to code transpiler.',
      ],
      donwloadUrl: '',
      contactUrl: '',
    },
  },

  {
    type: TYPES.SKILLS,
    id: 'skills-section',
    menuEntry: 'Skills',
    props: {
      skills: [
        {
          categoryName: 'Coding',
          iconClass: 'icon ion ion-code',
          items: [
            { title: 'Javascript (client)', value: 95 },
            { title: 'Javascript (Node.js)', value: 90 },
            { title: 'CSS', value: 95 },
            { title: 'Java', value: 90 },
            { title: 'SQL', value: 75 },
            { title: 'Shell', value: 75 },
          ],
        },
        {
          categoryName: 'Personal',
          iconClass: 'icon ion ion-person',
          items: [
            { title: 'Communication', value: 90 },
            { title: 'Team Work', value: 85 },
            { title: 'Proactive', value: 95 },
            { title: 'English', value: 85 },
            { title: 'Portuguese', value: 100 },
          ],
        },
        {
          categoryName: 'Front End Stack',
          iconClass: 'icon ion ion-social-html5-outline',
          items: [
            { title: 'ReactJS', value: 95 },
            { title: 'Redux', value: 90 },
            { title: 'SASS', value: 90 },
            { title: 'ES7', value: 95 },
            { title: 'Jest/Enzime', value: 80 },
          ],
        },
        {
          categoryName: 'Back End Stack',
          iconClass: 'icon ion ion-android-settings',
          items: [
            { title: 'Express', value: 90 },
            { title: 'Spring', value: 90 },
            { title: 'SQL', value: 75 },
            { title: 'MongoDB', value: 50 },
            { title: 'ElasticSearch', value: 60 },
            { title: 'Microservices Architecture', value: 70 },
          ],
        },
        {
          categoryName: 'Other',
          iconClass: 'icon ion ion-ios-infinite',
          items: [
            { title: 'Cognitive Services', value: 75 },
            { title: 'AWS', value: 60 },
            { title: 'Jenkins', value: 80 },
            { title: 'Docker', value: 50 },
            { title: 'Linux OS Admin', value: 40 },
            { title: 'Network', value: 70 },
            { title: 'Documentation', value: 40 },
          ],
        },
      ],
    },
  },

  {
    type: TYPES.EXPERIENCE,
    id: 'experiences-section',
    menuEntry: 'Experiences',
    props: {
      experiences: [
        {
          label: '2014-2018',
          title: 'Ninebee',
          location: 'Rio de Janeiro',
          subtitle: 'CTO',
          paragraphs: [
            'Solution architect for many projects in several languages. Implemented archetype using Spring Framework and ReactJs for single page apps.',
            'Boilerplate project using ReactJs, webpack and Express for NodeJs applications.',
            'CI/CD using jenkins to deploy maven and grails based java applications to Weblogic web container.',
            'Chatbot project using NodeJs botkitframework, IBM Watson cognitive services and Microsoft Teams.',
            'In-store map for product location with PostgreSQL, arcgis. Developed pathfinder algorithm base on A* in javascript.',
            'Developed Several apps for android and ios using ReactNative.',
            'Implemented log environment using ELK Stack(Elasticsearch, logstash and kibana).',
          ],
        },
        {
          label: '2013-2014',
          title: 'wdev (Ebix)',
          location: 'Rio de Janeiro',
          subtitle: 'Senior Full Stack Developer',
          paragraphs: [
            'Lotus Notes client and web application development. ',
            'For Bradesco Insurance: Worked developing new Doimno and Java applications. Developed application using IBM XPages framework in server-side javascript and java. Managed to change entire legacy application design with only sass in about 3 days.',
          ],
        },
        {
          label: '2012-2013',
          title: 'Lojas Americanas SA',
          location: 'Rio de Janeiro',
          subtitle: 'Senior Java Developer',
          paragraphs: [
            'Worked developing new applications using Spring framework. Also defined java development architecture used and created maven archetypes for the development team.',
          ],
        },
        {
          label: '2011-2012',
          title: 'wdev (Ebix)',
          location: 'Rio de Janeiro',
          subtitle: 'Senior Lotus Notes Developer',
          paragraphs: [
            'Lotus Notes client and web application development. ',
            'For Bradesco Insurance: Worked developing new Doimno application both for Lotus Notes Client R8 and web access. Developed application using XPages framework in server-side javascript and java. Also developed a C++ DSAPI (Domino Server API) to integrate google reCaptcha in Domino Authentication.',
          ],
        },
        {
          label: '2010-2011',
          title: 'ANP – Nation Oil Agency',
          location: 'Rio de Janeiro',
          subtitle: 'Senior Lotus Notes Developer',
          paragraphs: [
            'Worked developing new Doimno application both for Lotus Notes Client R7 and R8 and web access. Data modeling for ORACLE Database. Writing Queries in PL/SQL. Developed application using Dojo toolkit javascript framework.',
          ],
        },
        {
          label: '2009-2010',
          title: 'Quatro Seniors Informática',
          location: 'Rio de Janeiro',
          subtitle: 'Senior Lotus Notes Developer',
          paragraphs: [
            'Lotus Notes client and web application development.',
            'For Souza Cruz (British American Tobacco): Support for legacy applications developed in IBM Lotus Notes R6 for Lotus Notes Client and Web. Also worked creating new web applications and writing their documentation. Troubleshooting for integration in custom telephony solution between Domino/Cisco.',
            'For Wilson Sons Logistic: Support for legacy application applications developed in IBM Lotus Notes R6.',
            'For ANP – Nation Oil Agency: Developed a Domino application to serve file and manage access in a Linux server. Used for contingency plan in national seismic and oil data auction Project.',
          ],
        },
        {
          label: '2007-2009',
          title: 'Running',
          location: 'Rio de Janeiro',
          subtitle: 'Senior Lotus Notes Developer',
          paragraphs: [
            'Lotus Notes client and web application development.',
            'For Merk Pharmaceuticals: Support for legacy applications developed in IBM Lotus Notes R6 for Lotus Notes Client and Web. Also worked creating new web applications and writing their documentation',
          ],
        },
        {
          label: '2005-2006',
          title: 'Some Companies',
          location: 'Rio de Janeiro',
          subtitle: 'Lotus Notes Developer',
          paragraphs: [
            'Several past experiences with Lotus Notes on clients like: Golden Cross Insurance Brazil, Brascan Bank (BRKB), Merk Pharmaceuticals',
          ],
        },
      ],
    },
  },

  // {
  //   component: Services,
  //   id: 'services-section',
  //   menuEntry: 'Services',
  //   props: {
  //     services: [
  //       { iconClass: 'icon ion ion-gear-b', title: 'Service 1', abstract: 'Lorem ipsum' },
  //       { iconClass: 'icon ion ion-gear-b', title: 'Service 2', abstract: 'Lorem ipsum' },
  //       { iconClass: 'icon ion ion-gear-b', title: 'Service 3', abstract: 'Lorem ipsum' },
  //     ],
  //   },
  // },

  {
    type: TYPES.EDUCATION,
    id: 'education-section',
    menuEntry: 'Education',
    props: {
      educations: [
        {
          label: 'Always',
          title: 'YouTube, Tutorials, Stack Overflow & Podcasts',
          subtitle: 'Self-taught developer ;-)',
          paragraphs: '',
        },
        {
          label: '2014',
          title: 'Industrial Design — Visual Design',
          subtitle: 'Universidade Federal do Rio de Janeiro (Rio de Janeiro Federal College)',
          paragraphs: '',
        },
      ],
    },
  },
];

/*
  works: [
    // TODO
  ],
  clients: [ //TODO
    { avatarUrl: '', title: '', abstract: '' },
    { avatarUrl: '', title: '', abstract: '' },
    { avatarUrl: '', title: '', abstract: '' },
  ],
  pricing: [
    // TODO
  ],
  contact: {
    // TODO
  },
};
*/
