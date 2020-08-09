//immediate invoked function expression
(function() {
    const quotes = [{
            quote: "I have no dress except the one I wear every day. If you are going to be kind enough to give me one, please let it be practical and dark so that I can put it on afterwards to go to the laboratory.",
            author: " Marie Curies"
        },
        {
            quote: "Life's most persistent and urgent question is, 'What are you doing for others?'",
            author: "Martin Luther King, Jr"
        },
        {
            quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
            author: "Buddha "
        },
        {
            quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
            author: "MArilyn Monroe"
        },
        {
            quote: "Be yourself; everyone else is already taken.",
            author: "Oscar Wilde"
        },
        {
            quote: "So many books, so little time.",
            author: " Frank Zappa"
        },
        {
            quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
            author: "Bernard M. Baruch"
        },
        {
            quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
            author: "Dr. Seuss"
        },
        {
            quote: "In three words I can sum up everything I've learned about life: it goes on.",
            author: "Robert Frost"
        },
        {
            quote: "Don't walk in front of me… I may not follow. Don 't walk behind me… I may not lead. Walk beside me… just be my friend ",
            author: "Albert Camus"
        },
        {
            quote: "If you tell the truth, you don't have to remember anything.",
            author: "Mark Twain"
        },
        {
            quote: "I 've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
            author: "Maya Angelou"
        },
        {
            quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
            author: "Martine Luther King, Jr"
        },
        {

            quote: "I’m a mirror. If you’re cool with me, I’m cool with you, and the exchange starts. What you see is what you reflect. If you don’t like what you see, then you’ve done something. If I’m standoffish, that’s because you are.",
            author: "Jay-Z"
        },
        {

            quote: "As kids we didn’t complain about being poor; we talked about how rich we were going to be and made moves to get the lifestyle we aspired to by any means we could. And as soon as we had a little money, we were eager to show it.",
            author: "Jay-Z"
        },
        {
            quote: "When something is important enough, you do it even if the odds are not in your favor.",
            author: "Elon Musk"
        },
        {
            quote: "My biggest mistake is probably weighing too much on someone’s talent and not someone’s personality. I think it matters whether someone has a good heart",
            author: "Elon Musk"
        }


    ];

    const btn = document.getElementById("generate-btn");

    btn.addEventListener("click", function() {
        let random = Math.floor(Math.random() * quotes.length);
        console.log(random);

        document.getElementById("quote").textContent = quotes[random].quote;
        document.querySelector(".author").textContent = quotes[random].author;
    });
})();