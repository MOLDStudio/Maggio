const listElement = document.getElementById('faq-list');
const articlesContainer = document.querySelectorAll
('.article__container');
const articlesTitles = document.querySelectorAll('.article__title');

const removeClass = targetElement => {
    for (text of articlesContainer) {
        text.classlist.remove
        ('article__container--show');
    }
    for (title of articlesTitles) {
        title.classList.remove('article__title--rotate', 'article__title--bold')
    }

    
    
    targetElement.nextElementSibling.classlist.add
    ('article__container--show');
    targetElement.classList.add
    ('article__title--rotate');
    targetElement.classList.add
    ('article__title--bold');
};

listElement.addEventListener('click', e => {
    if (e.target.classList.contains('article__title')){  removeClass(e.target);
    }
    });