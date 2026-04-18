/**
 * Per-skill icons from Devicon (SVG on jsDelivr). Each skill has a unique asset — no shared “fallback” look.
 * @see https://github.com/devicons/devicon/tree/master/icons
 *
 * Optional: set `iconUrl` on a skill in data to override (e.g. custom PNG).
 */

const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

/** Full URL per display name (keys must match `constants.js` exactly) */
const SKILL_ICON_URLS = {
  HTML: `${BASE}/html5/html5-original.svg`,
  CSS: `${BASE}/css3/css3-original.svg`,
  SCSS: `${BASE}/sass/sass-original.svg`,
  JavaScript: `${BASE}/javascript/javascript-original.svg`,
  TypeScript: `${BASE}/typescript/typescript-original.svg`,
  'React Js': `${BASE}/react/react-original.svg`,
  'Next Js': `${BASE}/nextjs/nextjs-original.svg`,
  'Tailwind CSS': `${BASE}/tailwindcss/tailwindcss-original.svg`,
  'Material UI': `${BASE}/materialui/materialui-original.svg`,
  'React Native': `${BASE}/reactnative/reactnative-original.svg`,
  Redux: `${BASE}/redux/redux-original.svg`,
  'Node Js': `${BASE}/nodejs/nodejs-original.svg`,
  'Express Js': `${BASE}/express/express-original.svg`,
  MySQL: `${BASE}/mysql/mysql-original.svg`,
  PostgreSQL: `${BASE}/postgresql/postgresql-original.svg`,
  MongoDB: `${BASE}/mongodb/mongodb-original.svg`,
  'Prisma ORM': `${BASE}/prisma/prisma-original.svg`,
  AWS: `${BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  'Microsoft Azure': `${BASE}/azure/azure-original.svg`,
  Firebase: `${BASE}/firebase/firebase-plain.svg`,
  'C++': `${BASE}/cplusplus/cplusplus-original.svg`,
  Python: `${BASE}/python/python-original.svg`,
  /** Atlassian-branded assets often 403 on jsDelivr; Confluence is a close stand-in for “Agile” tooling */
  'Agile Methodology': `${BASE}/confluence/confluence-original.svg`,
  Jira: `${BASE}/jira/jira-original.svg`,
  Git: `${BASE}/git/git-original.svg`,
  GitHub: `${BASE}/github/github-original.svg`,
  Netlify: `${BASE}/netlify/netlify-original.svg`,
  'VS Code': `${BASE}/vscode/vscode-original.svg`,
  Postman: `${BASE}/postman/postman-original.svg`,
  Docker: `${BASE}/docker/docker-original.svg`,
};

/** Last resort only — avoids every failed img looking identical */
export const SKILL_ICON_FALLBACK = `${BASE}/devicon/devicon-original.svg`;

/**
 * @param {string} name - Skill label from constants
 * @returns {string} URL to SVG
 */
export function getSkillIconUrl(name) {
  return SKILL_ICON_URLS[name] ?? SKILL_ICON_FALLBACK;
}
