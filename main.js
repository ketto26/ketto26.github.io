const main = document.querySelector('main');


const h1 = document.createElement('h1');
h1.append('Nio Book Shop');
main.append(h1);

const h1Subtitle = document.createElement('h1');
h1Subtitle.append('Enjoy reading your favourite books!');
main.append(h1Subtitle);
h1Subtitle.classList.add('h1Subtitle');

const cartButton = document.createElement('div');
cartButton.append('CHECKOUT');
main.append(cartButton);
cartButton.classList.add('cartButton');

cartButton.addEventListener('click', (event) => {
        
    cartButton = window.open(src="delivery_main.html");
      });






var shoppingCart = (function() {

    cart = [];
        
    function Item(name, price, count) {
        his.name = title;
        this.price = price;
        this.count = count;
    }

    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
      }

      function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
      }
      if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
      }
  
      var obj = {};
  
      // Add to cart
      obj.addItemToCart = function(name, price, count) {
        for(var item in cart) {
          if(cart[item].name === name) {
            cart[item].count ++;
            saveCart();
            return;
          }
        }
        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
      }
      // Set count from item
      obj.setCountForItem = function(name, count) {
        for(var i in cart) {
          if (cart[i].name === name) {
            cart[i].count = count;
            break;
          }
        }
      };

     // Remove item from cart
  obj.removeItemFromCart = function(name) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count --;
        if(cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
  }
  saveCart();
}


 // Remove all items from cart
 obj.removeItemFromCartAll = function(name) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }
// List cart
obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

})


const shopCart = document.createElement('div');
shopCart.append('CART');
main.append(shopCart);
shopCart.classList.add('shopCart');

shopCart.addEventListener('click', (event) =>{
    shopCart = window.open(shoppingCart, "hello", "width=800, height=300");
} )



const stuff = [
    {
        "author": "Douglas Crockford",
        "imageLink1": "./Rectangle   ",
        "title": "JavaScript: The Good Parts",
        "price": 30,
        "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
    },
    {
        "author": "David Herman",
        "imageLink2": "./covers/cover_2.jpg",
        "title": "68 Specific Ways to Harness the Power of JavaScript",
        "price": 22,
        "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
    },
    {
        "author": "David Flanagan",
        "imageLink3": "./covers/cover_3.jpg",
        "title": "JavaScript: The Definitive Guide",
        "price": 40,
        "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
    },
    {
        "author": " Eric Elliott",
        "imageLink4": "./covers/cover_4.jpg",
        "title": "Programming JavaScript Applications",
        "price": 19,
        "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
    },
    {
        "author": "Addy Osmani",
        "imageLink5": "./covers/cover_5.jpg",
        "title": "Learning JavaScript Design Patterns",
        "price": 32,
        "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
    },
    {
        "author": "Boris Cherny",
        "imageLink6": "./covers/cover_6.jpg",
        "title": "Programming TypeScript",
        "price": 28,
        "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
    },
    {
        "author": "Alex Banks, Eve Porcello",
        "imageLink7": "./covers/cover_7.jpg",
        "title": "Learning React, 2nd Edition",
        "price": 25,
        "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
    },
    {
        "author": "Bradley Meck Alex Young and Mike Cantelon",
        "imageLink8": "./covers/cover_8.jpg",
        "title": "Node.js in Action",
        "price": 38,
        "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
    },

];


for (let i = 0; i < stuff.length; i++) {

    const books = document.querySelector("#books");

    const book = document.createElement('div');
    book.classList.add('book-square');

    //////
    const top = document.createElement('div');
    top.classList.add('top');

    const author = document.createElement('p');
    author.append(stuff[i].author);
    author.classList.add('author');
    top.append(author);

    const title = document.createElement('h4');
    title.append(stuff[i].title);
    title.classList.add('title');
    top.append(title);

    book.append(top);


    /////
    const myImage = new Image();
    myImage.classList.add('imageLink1');
    book.append(myImage);

    ////
    const bottom = document.createElement('div')
    bottom.classList.add('bottom');

    const price = document.createElement('h5');
    price.append(`${stuff[i].price}$`);
    price.classList.add('price');
    bottom.append(price);

    const info = document.createElement('p');
    info.append("info");
    info.setAttribute('id', 'description');
    info.classList.add('info');
    bottom.append(info);

   
    info.addEventListener('click', (event) => {
        
    info = window.open(stuff[i].description, "hello", "width=800, height=300");
      });



    const buy = document.createElement('p');
    buy.append("Buy");
    buy.classList.add('info');
    bottom.append(buy);
    buy.addEventListener('click', (event) => {
        buy.textContent = `ADDED`;
      });

    book.append(bottom);




    books.append(book);
    main.append(books);
}
