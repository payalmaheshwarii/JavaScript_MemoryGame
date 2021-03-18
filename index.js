document.addEventListener('DOMContentLoaded', () => {
    var cardArray = [
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'

        },
        {
            name: 'fries',
            img: 'images/fries.png'

        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'

        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'

        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'

        },
        {
            name: 'pizza',
            img: 'images/pizza.png'

        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'

        },
        {
            name: 'fries',
            img: 'images/fries.png'

        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'

        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'

        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'

        },
        {
            name: 'pizza',
            img: 'images/pizza.png'

        }
    ]
    cardArray.sort(() => Math.random() - 0.5)

    function createBoard() {
        for (i = 0; i < cardArray.length; i++) {
            const card = document.createElement("img");
            card.src = 'images/blank.png'
            card.id = i
            card.addEventListener('click', click)
            document.getElementById('grid').appendChild(card);
        }


    };
    createBoard();
    var cardChoosen = []
    var cardChoosenId = []
    var alreadyChoosen = []
    var cards = document.querySelectorAll("img")
    var score = 0
    var attempt = 0
    function click() {
        this.src = cardArray[this.id].img
        cardChoosen.push(cardArray[this.id].name);
        cardChoosenId.push(this.id)
        if (cardChoosen.length == 2) {
            setTimeout(checkForMatch, 500)
        }


    }

    function checkForMatch() {
        attempt += 1
        var id1 = cardChoosenId[0];
        var id2 = cardChoosenId[1];
        if (id1 == id2) {
            alert("Your have selected the same element")
            cards[id1].src = "images/blank.png"
            cards[id2].src = "images/blank.png"
        }
        if (score == 6) {
            alert("Game Over!!" + "<br> Play Again")
            return location.reload()
        }
        // if (id1 in alreadyChoosen || id2 in alreadyChoosen) {
        //     alert("Already Selected element choosen")
        //     console.log(alreadyChoosen)
        //     console.log(id1,id2)
        // }
        else if (cardChoosen[0] === cardChoosen[1]) {
            score += 1
            alreadyChoosen.push(id1)
            alreadyChoosen.push(id2)
 
            document.getElementById('result').innerHTML = score + "/6"
        }
        else {
            cards[id1].src = "images/blank.png"
            cards[id2].src = "images/blank.png"
            console.log("inelse")
        }
        document.getElementById('attempts').innerHTML = attempt
        cardChoosen = []
        cardChoosenId = []

    };


});