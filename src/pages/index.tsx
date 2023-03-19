import Navbar from '../../components/navigation/Navbar';
import Bio from '../../components/header/Bio';
import Footer from '../../components/footer/Footer';

export default function Home() {
  return (
   <div className='main'>
      <Navbar/>
      <Bio/>
      <Footer/>
   </div>
  )
}
