import { Remarkable } from 'remarkable';

const md = new Remarkable();

const markdownText = '# Hello, World!\n\nThis is some **Markdown** text.';
const htmlText = md.render(markdownText);

console.log(htmlText);
