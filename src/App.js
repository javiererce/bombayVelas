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
         <h2>Tienda de velas artesanales</h2>
          <h3>Nuestros modelos mas vendidos 20 % off</h3>
   
        <div className="userSection">

           <UserCard name="Nombre del modelos de vela " date="se unio en enero de 2021"
            description="Breve descricion del producto" img="https://somoskudasai.com/wp-content/uploads/2021/01/image-34.png" /> 

           <UserCard name="Nombre del modelos de vela " date="se unio en enero de 2021" 
             description="Breve descricion del producto" img="https://www.omegacenter.es/blog/wp-content/uploads/2016/10/kirito.jpg"/>
           <UserCard name="Nombre del modelos de vela " date="se unio en enero de 2021" 
            description="Breve descricion del producto" img="http://omegacenter.es/blog/wp-content/uploads/2016/10/rem.png"/>
          
           <UserCard name="Nombre del modelos de vela " date="se unio en enero de 2021" 
             description="Breve descricion del producto" img="https://statics.viralizalo.com/virs/2016/06/VIR_254843_20134_adivina_estos_personajes_de_anime.jpg?cb=169443"/>

           <UserCard name="Nombre del modelos de vela " date="se unio en enero de 2021"
             description="Breve descricion del producto" img="https://somoskudasai.com/wp-content/uploads/2021/01/image-34.png"/>
           <UserCard name="Nombre del modelos de vela " date="se unio en enero de 2021" 
              description="Breve descricion del producto" img="https://www.omegacenter.es/blog/wp-content/uploads/2016/10/kirito.jpg"/>
           <UserCard name="Nombre del modelos de vela " date="se unio en enero de 2021" 
             description="Breve descricion del producto" img="http://omegacenter.es/blog/wp-content/uploads/2016/10/rem.png"/>
                     
           <UserCard name="Nombre del modelos de vela " date="se unio en enero de 2021" 
              description="Breve descricion del producto" img="https://statics.viralizalo.com/virs/2016/06/VIR_254843_20134_adivina_estos_personajes_de_anime.jpg?cb=169443"/>     
        </div>
       
    </div>
  </> 
  );
}


export default App;
