function collectDOMStat(root) {
    const result = {
        tags: {},
        classes: {},
        texts: 0,
    };

    // console.log(root.childNodes);
    for (const node of root.childNodes) {
        if (node.nodeType == 1) {
            // console.log(node);
            const tagName = node.tagName;

            if (result.tags.hasOwnProperty(tagName)) {
                result.tags[tagName]++;
            } else {
                result.tags[tagName] = 1;
            }

            for (const className of node.classList) {
                if (result.classes.hasOwnProperty(className)) {
                    result.classes[className]++;
                } else {
                    result.classes[className] = 1;
                }
            }
        }
        if (node.nodeType == 3) {
            result.texts++;
        }
    }

    return result;
}

let Cr = require('create-elements')(); // creates a new Cr-document using Cr-node.js
const randomstring = require('randomstring');

const rndstr = randomstring.generate;
const document = Cr.doc;

let where = document.createElement('div');
let class1 = `class-${Math.random()}`;
let class2 = `class-${Math.random()}-${Math.random()}`;
let text1 = rndstr();
let text2 = rndstr();

// let result;

// console.log(where.childNodes);
where.innerHTML = `<p class="${class1}"><b>${text1}</b> <b class="${class1} ${class2}">${text2}</b></p>`;

// result = collectDOMStat(where);

// console.log(result);