let parent = document.getElementById('main_food');

async function getFood(){
    try{
        let res = await fetch(`www.themealdb.com/api/json/v1/1/search.php?f=a`)

        let data = await res.json();

        console.log(data)
        showFood(data)
    }catch(e){
        console.log("error",e);
    }
}




function showFood(food){
    food.forEach((f)=>{
        let div = document.createElement("div");
        div.setAttribute("class", 'inner_Div')

        let image = document.createElement("img");
        image.src=f.image;

        let price = document.createElement("p");
        price.innerText=f.price;

        let description = document.createElement("p");
        description.innerText=f.des;

        let cart_btn = document.createElement("button");
        cart_btn.innerText="Add to Cart";

        
        div.append(image,price,description,cart_btn);
        parent.append(div)
    })
}
getFood();