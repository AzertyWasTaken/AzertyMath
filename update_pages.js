const fs = require("fs");
const path = require('path');

const input_path = path.join(__dirname, 'pages');
const pages_folder = fs.readdirSync(input_path);

const head_path = path.join(__dirname, 'head.html');
const head_file = fs.readFileSync(head_path, 'utf8');

const navbar_path = path.join(__dirname, 'navbar.html');
const navbar_file = fs.readFileSync(navbar_path, 'utf8');

function update_head(page, content) {
    console.log(content);
}

function update_navbar(page, content) {
    console.log(content);
}

pages_folder.forEach((page) => {
    const page_path = path.join(__dirname, 'pages/' + page);
    let page_text = fs.readFileSync(page_path, 'utf8');

    console.log(page_text);
    update_head(page, head_file)
    update_navbar(page, navbar_file)
})