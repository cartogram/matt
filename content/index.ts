export const title = 'Matt Seccafien';
export const firstName = 'Matt';
export const lastName = 'Seccafien';

interface Post {
  slug: string;
  title: string;
  tags?: Tag[];
  date: string;
  permalink?: string;
  label?: string;
  onGoing?: boolean;
  content?: string;
  heading?: string;
  color?: string;
}

enum Tag {
  Project = 'project',
  Writing = 'writing',
  Owner = 'my thing',
}

export const posts: Post[] = [
  {
    slug: 'fondfolio',
    title: 'Fondfolio',
    tags: [Tag.Project],
    date: '2017-04-01',
    onGoing: true,
    content: require(`./fondfolio.md`).default,
    color: '#88ffc8',
    permalink: 'https://fondfolio.com',
  },
  {
    slug: 'lamas',
    title: 'Lamas',
    tags: [Tag.Project],
    date: '2017-01-19',
    content: require(`./lamas.md`).default,
    permalink: 'https://lamas.us',
  },

  {
    slug: '',
    title: 'Embracing Constraint with CSS Modules',
    tags: [Tag.Writing],
    permalink:
      'https://medium.com/cartogram/embracing-constraint-with-css-modules-89ba3bbcb95d',
    date: '2016-09-20',
  },
  {
    slug: 'consciously-coupling',
    title: 'Consciously Coupling',
    tags: [Tag.Project],
    date: '2016-10-19',
  },
  {
    slug: '',

    title: 'Using Arrays as CSS config and Immutable Reverse',
    tags: [Tag.Writing],
    permalink:
      'https://medium.com/@crtogrm/quick-tip-using-arrays-as-css-config-and-immutable-reverse-4bad11d8768',
    date: '2016-12-22',
  },
  {
    slug: '',

    title: 'Lauren Wickware',
    tags: [Tag.Project],
    date: '2015-01-16',
    permalink: 'http://laurenwickware.com',
  },
];

export const cvLink = '';

export const oneLiner = `
  Canadian front-end developer and designer`;

export const currently = `
  Currently working at Shopify`;

export const twoLiner = `Toronto-based <strike>designer</strike> developer,<br/>builder of interfaces, usually for screens, sometimes command lines.`;

export const links = [
  // {
  //   title: 'projects',
  //   permalink: 'http://cartogram.ca',
  // },
  {
    title: 'Download my CV',
    permalink: 'static/cv.pdf',
    label: 'pdf',
  },
  {
    title: 'Look at my code',
    permalink: 'https://github.com/cartogram',
    label: 'github',
  },
  // {
  //   title: 'writing',
  //   permalink: 'https://www.medium.com/crtogrm',
  // },
  {
    title: 'Get in touch',
    permalink: 'mailto:mseccafien@gmail.com',
    label: 'email',
  },
  // {
  //   title: 'tel',
  //   permalink: 'tel:+1',
  // },
];
