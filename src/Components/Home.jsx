import { useOutletContext } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  const {loginData, setLoginData} = useOutletContext();

  const heloUser = () =>{
    console.log(loginData.email)
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
      </main>
    </>
  );
};

export default Home;