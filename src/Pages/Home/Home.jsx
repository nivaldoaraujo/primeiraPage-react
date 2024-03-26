
//import styles from './Home.css' //className
import './Home.css' //.class
function Home(){
    return(
        <>
        <section class="container" >
            <div class="apresentacao">
                <p class="parag">
                    Olá seja bem vindo! <br />
                    <span>Nivaldo Araújo</span> <br />
                    Dev Frontend
                </p>
                <button class="btn">Saiba mais sobre mim!!</button>
            </div>
            <figure>
                <img class="img" src="../../../public/imagem.jpg" alt="" />
            </figure>
        </section>
        </>
    )
}

export default Home