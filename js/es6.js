const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// to the languages array
// declared as `const`
const name = 'steven';
const email = 'steven.hampton415@gmail.com';
const languages = ['html', 'css', 'javascript'];
users.push({
  name,
  email,
  languages
});

let emails = [];
let names = [];

users.forEach(user =>{
emails.push(user.email);
names.push(user.name);
});

let developers = [];
users.forEach(({name, email, languages}) => {
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
    developers.push(`${name}'s email is ${email}.  ${name} knows ${languages.join(', ')}`);
});

let list = '<ul>';
for (const developer of developers) list += `<li>${developer}</li>`;
list += '</ul>';

