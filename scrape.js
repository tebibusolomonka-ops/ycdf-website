const https = require('https');
const http = require('http');
const fs = require('fs');

http.get('http://www.ycdfet.org', (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
        const matches = [...data.matchAll(/https?:\/\/[^\s\'\"<>]+\.(?:jpg|jpeg|png)/g)];
        const urls = [...new Set(matches.map(m => m[0]))];
        console.log('Found ' + urls.length + ' images.');
        
        // Filter out tiny icons or logos, try to get actual photos (usually wp-content/uploads)
        const photoUrls = urls.filter(u => u.includes('wp-content/uploads')).slice(0, 5);
        
        let count = 1;
        photoUrls.forEach(url => {
            console.log('Downloading: ' + url);
            const proto = url.startsWith('https') ? https : http;
            proto.get(url, (r) => {
                const file = fs.createWriteStream(`d:/ycdf/public/gallery${count}.jpg`);
                r.pipe(file);
            });
            count++;
        });
    });
});
