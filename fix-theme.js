const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('page.tsx')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const replacements = [
  { search: /bg-gradient-to-br from-navy via-navy-light to-navy-lighter/g, replace: 'bg-gradient-to-br from-slate-50 via-white to-slate-100' },
  { search: /bg-gradient-to-t from-navy to-transparent/g, replace: 'bg-gradient-to-t from-white to-transparent' },
  { search: /bg-gradient-to-t from-navy\/90 via-navy\/60 to-transparent/g, replace: 'bg-gradient-to-t from-white\/90 via-white\/60 to-transparent' },
  { search: /from-navy-light via-navy-lighter to-navy-light/g, replace: 'from-slate-100 via-white to-slate-100' },
  { search: /bg-navy-light/g, replace: 'bg-slate-50' },
  { search: /bg-navy/g, replace: 'bg-white' },
  { search: /text-white/g, replace: 'text-slate-900' },
  { search: /text-slate-300/g, replace: 'text-slate-600' },
  { search: /text-slate-400/g, replace: 'text-slate-500' },
  { search: /bg-white\/5/g, replace: 'bg-slate-900/5' },
  { search: /border-white\/10/g, replace: 'border-slate-200' },
  { search: /border-white\/5/g, replace: 'border-slate-100' },
  { search: /bg-white\/10/g, replace: 'bg-slate-900/10' },
];

const files = walkSync('src/app');
files.forEach(file => {
  if (file.replace(/\\/g, '/') === 'src/app/page.tsx') return; 
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(({ search, replace }) => {
    content = content.replace(search, replace);
  });
  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
