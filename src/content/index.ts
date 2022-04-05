import {formatDate} from '../utlities/formatDate';

// eslint-disable-next-line no-process-env
export const title = process.env.NAME;
export const firstName = 'Matt';
export const lastName = 'Seccafien';

export interface Post {
  slug: string;
  video?: string;
  title: string;
  tags?: Tag[];
  date: string;
  icon?: string;
  permalink?: string;
  label?: string;
  onGoing?: boolean;
  content?: string;
  heading?: string;
  color?: string;
  more?: string;
}

export enum Tag {
  Project = 'project',
  Writing = 'writing',
  Owner = 'my thing',
}

export const posts: Post[] = [
  // {
  //   slug: 'learning-from-incidents',
  //   title: 'Learning From Incidents',
  //   tags: [Tag.Writing],
  //   date: '2020-04-24',
  //   content: require(`./rca.md`).default,
  // },
  // {
  //   slug: 'resiliency',
  //   title: 'On moving to resiliency',
  //   tags: [Tag.Writing],
  //   date: '2020-04-20',
  //   content: require(`./resiliency.md`).default,
  //   color: '#41aeff36',
  // },
  {
    slug: 'pawzzles',
    title: 'Distance Over Time',
    // icon: '🐱',
    tags: [Tag.Owner],
    date: '2022-04-01',
    onGoing: true,
    content: require(`./distance-over-time.md`).default,
    color: '#41aeff36',
  },
  {
    slug: 'pawzzles',
    title: 'Pawzzles',
    // icon: '🐱',
    tags: [Tag.Owner],
    date: '2017-04-01',
    onGoing: true,
    content: require(`./pawzzles.md`).default,
    color: '#41aeff36',
  },
  {
    slug: 'fondfolio',
    title: 'Fondfolio',
    // icon: '📖',
    tags: [Tag.Owner],
    date: '2017-04-01',
    onGoing: true,
    content: require(`./fondfolio.md`).default,
    video: 'fondfolio.mp4',
    color: '#41aeff36',
  },
  {
    slug: 'lamas',
    title: 'Lamas',
    tags: [Tag.Project],
    date: '2017-01-19',
    color: '#ff414140',
    content: require(`./lamas.md`).default,
    more: 'https://lamas.us',
    video: 'lamas.mp4',
    // permalink: ,
  },

  {
    slug: 'consciously-coupling',
    title: 'Consciously Coupling',
    tags: [Tag.Project],
    date: '2016-10-19',
    more: 'http://consciouslycoupling.com/',
    content: require(`./consciously-coupling.md`).default,
    video: 'consciously-coupling.mp4',
  },

  {
    slug: 'lauren-wickware',

    title: 'Lauren Wickware',
    tags: [Tag.Project],
    date: '2015-01-16',
    more: 'http://laurenwickware.com',
    content: require(`./lauren-wickware.md`).default,
    video: 'lauren-wickware.mp4',
  },
];

export const cvLink = '';

export const oneLiner = `
  Canadian front-end developer and designer`;

export const currently = `
  Currently working at Shopify`;

export const twoLiner = `Berlin-based <strike>designer</strike> developer,<br/>builder of interfaces, usually for screens.`;
// export const twoLiner = `Toronto-based <strike>designer</strike> developer,<br/>builder of interfaces, usually for screens, sometimes command lines.`;

export const links = [
  {
    title: 'Full CV',
    permalink: 'cv.pdf',
  },
  {
    title: 'Contact',
    permalink: 'mailto:mseccafien@gmail.com',
    // label: 'email',
  },

  {
    title: 'Codes',
    permalink: 'https://github.com/cartogram',
    // label: 'github',
  },
  {
    title: 'Grams',
    permalink: 'https://www.instagram.com/cartogram/',
  },
];

export const tags = [Tag.Writing, Tag.Project, Tag.Owner];
export const dates = posts
  .reduce<string[]>((acc, post) => {
    if (post.date) {
      acc.push(post.date);
    }

    return acc;
  }, [])
  .filter(x => x);

export const formatedDates = dates.map(date => formatDate(date));
