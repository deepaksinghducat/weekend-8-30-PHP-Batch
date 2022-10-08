class Products {
    products = [
        {
            name: "fadsfasffdasdfadsf",
            image: "https://via.placeholder.com/150",
            description: "fasdfasdfasfd"
        },
        {
            name: "fadsfasf",
            image: "https://via.placeholder.com/150",
            description: "fasdfasdfasfd"
        },
        {
            name: "fadsfasf",
            image: "https://via.placeholder.com/150",
            description: "fasdfasdfasfd"
        },
        {
            name: "fadsfasf",
            image: "https://via.placeholder.com/150",
            description: "fasdfasdfasfd"
        },
    ]

    render() {
        const app = document.getElementById('app');

        for (const product of this.products) {

            const parentEL = new Product(product);

            const parentDiv = parentEL.render();

            app.appendChild(parentDiv);
        }
    }
}

class Product {
    constructor(product){
        this.name = product.name;
        this.description = product.description;
        this.image = product.image;
    }


    render() {
        const parentDiv = document.createElement('div');
        parentDiv.className = "card mx-4";
        parentDiv.style.width = "18rem";

        const img = document.createElement('img');
        img.src = this.image;
        img.className = "card-img-top"

        const innerDiv = document.createElement('div');
        innerDiv.className = "card-body"

        const h5 = document.createElement('h5');
        h5.className = "card-title"
        h5.innerHTML = this.name

        const p = document.createElement('p');
        p.className = "card-text"
        p.innerHTML = this.description

        innerDiv.appendChild(h5);
        innerDiv.appendChild(p);

        parentDiv.appendChild(img);
        parentDiv.appendChild(innerDiv);

        return parentDiv;
    }
}

const products = new Products();

products.render();

