const fs = require("fs");
const path = require('path');

const input_path = path.join(__dirname, 'pages');
const pages_folder = fs.readdirSync(input_path);

const head_path = path.join(__dirname, 'head.html');
const head_file = fs.readFileSync(head_path, 'utf8');

const navbar_path = path.join(__dirname, 'navbar.html');
const navbar_file = fs.readFileSync(navbar_path, 'utf8');

function tokenize(str) {

}

function find_tag(str, tag) {

}

function update_tag(page, tag, content) {
    let text_list = tokenize(page);
    let tag_pos = find_tag(text_list, tag);
}

pages_folder.forEach((page) => {
    const page_path = path.join(__dirname, 'pages/' + page);
    let page_text = fs.readFileSync(page_path, 'utf8');

    console.log(page_text);
    let new_head = update_tag(page, "head", head_file);
    let new_nav = update_tag(page, "nav", navbar_file);
    console.log(new_head);
    console.log(new_nav);
})