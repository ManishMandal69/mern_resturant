import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDataProduct } from './redux/productSlide';


function App() {
  const dispatch=useDispatch();
  const productData = useSelector((state)=>state.product)
  useEffect(()=>{
    (async()=>{
      const res =await fetch(`${"http://localhost:8080"}/product`)
      const resData= await res.json()
      console.log(resData)
      dispatch(setDataProduct(resData));
    })()
  },[])
  console.log(productData)
  return (
    <>
    <Toaster/>
    <div>
      <Header/>
      <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
        <Outlet/>
      </main>
    </div>
    </>
  );
}

export default App;
