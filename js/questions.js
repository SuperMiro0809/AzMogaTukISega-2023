(function (){
    const questionsArr = Array.from(document.getElementsByClassName('question'));

    for(let i = 0; i < questionsArr.length; i++) {
        const question = questionsArr[i];

        question.addEventListener('click', function(e) {
            const target = e.target;
            const parent = target.parentElement;

            if(parent.classList.contains('question')) {
                
                if(parent.children[1].classList.contains('inner-text')) {
                    parent.children[1].classList.remove('inner-text');
                    parent.children[0].classList.add('open');
                }else {
                    parent.children[1].classList.add('inner-text');
                    parent.children[0].classList.remove('open');
                }
            }else {
                const secondParent = parent.parentElement;

                if(secondParent.children[1].classList.contains('inner-text')) {
                    secondParent.children[1].classList.remove('inner-text');
                    parent.classList.add('open');
                }else {
                    secondParent.children[1].classList.add('inner-text');
                    parent.classList.remove('open');
                }
            }
        });
    }
}())