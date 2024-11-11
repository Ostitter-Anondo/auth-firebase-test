import Navbar from '../Components/Navbar';
import { useContext } from 'react';
import AuthContext from '../../AuthContext.jsx';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const {loginData, setLoginData, mojarkotha} = useContext(AuthContext);

  const heloUser = () =>{
    console.log(mojarkotha)
  }

  return (
    <>
      <header>
        <Navbar setLoginData={setLoginData} loginData={loginData} />
      </header>
      <main>
        <section className='flex flex-col items-center justify-between'>
          <h2 className='font-extrabold text-4xl text-center text-violet-500'>Welcome to GenjiBajar</h2>
          <button onClick={heloUser} className='btn btn-success my-12'>clickme!</button>
          <div>
            {
              loginData? 
                <>
                  {loginData.email}<br />
                  {loginData.displayName}
                  <img src={loginData.photoURL} alt="chobi" />
                </>
                :
                <>
                  tuike?
                </>
            }
          </div>
        </section>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Home;