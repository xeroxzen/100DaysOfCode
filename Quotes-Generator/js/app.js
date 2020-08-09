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
            quote: "God save me from my friends. I can protect myself from my enemies.",
            author: "Claude Louis Hector de Villars "
        },
        {
            quote: "The price of anything is the amount of life you exchange for it.",
            author: "David Thoreau"
        },
        {
            quote: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
            author: "Charles Lindbergh"
        },
        {
            quote: "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
            author: " Tyne Daly"
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