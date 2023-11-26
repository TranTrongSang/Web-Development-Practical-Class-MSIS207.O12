class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    fillIn(dictionary) {
        return Object.entries(dictionary).reduce((result, [key, value]) => {
            const pattern = new RegExp(`{{${key}}}`, 'g');
            return result.replace(pattern, value);
        }, this.template);
    }
}

// Test Cases
const template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
const dateTemplate = new TemplateProcessor(template);

const dictionary = { month: 'July', day: '1', year: '2016' };
let str = dateTemplate.fillIn(dictionary);
console.assert(
    str === 'My favorite month is July but not the day 1 or the year 2016',
    'Test Case 1 Failed'
);

const dictionary2 = { day: '1', year: '2016' };
str = dateTemplate.fillIn(dictionary2);
console.assert(
    str === 'My favorite month is but not the day 1 or the year 2016',
    'Test Case 2 Failed'
);
