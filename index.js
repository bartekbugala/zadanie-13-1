'use strict';
//const wrapper = document.getElementsByClassName('.wrapper');

(function () {
    const data = [
        {
            id: 'box1',
            title: 'First box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'special-header', 'important']
        },
        {
            id: 'box2',
            title: 'Second box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['special-header', 'important']
        },
        {
            id: 'box3',
            title: 'Third box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted', 'important']
        },
        {
            id: 'box4',
            title: 'Fourth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: ['highlighted']
        },
        {
            id: 'box5',
            title: 'Fifth box',
            content: '<p>Lorem ipsum dolor sit amet!</p>',
            categories: []
        },
    ];

    
    

    function createBox(boxId, boxTitle, boxContent, boxClasses) {
        let htmlExpression;
        htmlExpression = '<div id="' + boxId + '" class="' + boxClasses + '">' + '<header>' + boxTitle + '</header>' + boxContent + '</div>';
        return htmlExpression;
    }


    function arrayIntoString(array) {
        let string = array[0] || '';
        for (let i = 0; i < array.length - 1; i++) {
            string += ' ' + array[i+1];
        }
        return string;
    }

    let fullHtmlExp = '';

    for (let i = 0; i < data.length; i++) {
        let boxId = data[i]['id'];
        let boxTitle = data[i]['title'];
        let boxContent = data[i]['content'];
        let boxClasses = arrayIntoString(data[i]['categories']);
        let htmlExp = createBox(boxId, boxTitle, boxContent, boxClasses);
        fullHtmlExp += htmlExp;
    }
    console.log(fullHtmlExp);
    document.body.innerHTML = fullHtmlExp;
    


})();


