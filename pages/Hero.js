import React from "react"


export default function Hero (){
    return(
        <section className="hero">
  		<div class="image-grid">
				<img src="cake.jpg"  alt="grid" />
				<img src="chocolate cake.JPG" alt="grid" />
				<img src="chocolate cupcake.jpg" alt="grid" />
				<img src="strawberry cupcake.jpg" alt="grid" /> 
  		</div>
            <h1 className="hero--title">Marys Baking</h1>
            <p className="hero--text">Shop for what your taste buds desire all from the comfort of your own home!</p>
    </section>
    )
}