import './App.css';
import NavBar from './components/NavBar/NavBar';
// eslint-disable-next-line no-unused-vars
import Header from './components/Header/Header';
import UserCard from "./components/UserCard/UserCard";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
   
  return (
  <> 
       <div className="app">

    <NavBar /> 
    <ItemListContainer greeting="" />
      <Header />
         <h2>Elegi tu remera Geek</h2>
          <h3>Nuestros modelos mas vendidos <b>20 % off</b> </h3>
   
        <div className="userSection">

           <UserCard name="Nombre de modelo " date="se unio en enero de 2021"
            description="Breve descricion del producto" img="https://somoskudasai.com/wp-content/uploads/2021/01/image-34.png" /> 

           <UserCard name="Nombre de modelo " date="se unio en enero de 2021" 
             description="Breve descricion del producto" img="https://www.omegacenter.es/blog/wp-content/uploads/2016/10/kirito.jpg"/>
           <UserCard name="Nombre de modelo " date="se unio en enero de 2021" 
            description="Breve descricion del producto" img="http://omegacenter.es/blog/wp-content/uploads/2016/10/rem.png"/>
          
           <UserCard name="Nombre de modelo " date="se unio en enero de 2021" 
             description="Breve descricion del producto" img="https://statics.viralizalo.com/virs/2016/06/VIR_254843_20134_adivina_estos_personajes_de_anime.jpg?cb=169443"/>

           <UserCard name="Nombre de modelo " date="se unio en enero de 2021"
             description="Breve descricion del producto" img="https://as.com/meristation/imagenes/2021/04/08/reportajes/1617868658_605828_1617869565_sumario_normal.jpg"/>
           <UserCard name="Nombre de modelo " date="se unio en enero de 2021" 
              description="Breve descricion del producto" img="https://i.blogs.es/04b04a/maxresdefault-50/840_560.jpeg"/>
           <UserCard name="Nombre de modelo " date="se unio en enero de 2021" 
             description="Breve descricion del producto" img="https://www.dondeir.com/wp-content/uploads/2020/05/anime-streaming-plataformas.jpg"/>
                     
           <UserCard name="Nombre de modelo " date="se unio en enero de 2021" 
              description="Breve descricion del producto" img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/top-10-heroinas-anime-sailor-moon-1550509700.jpg"/>     
        </div>
       
    </div>
  </> 
  );
  
}


export default App;
