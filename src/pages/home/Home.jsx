import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInFailure, signOut } from '../../redux/auth/Actions';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.user) {
      navigate('/');
    }
  }, [auth.user, navigate]);

  const handleLogout = async () => {
    try {
      const token = auth?.user?.token;
      console.log("Logout token:", token);

      if (token) {
        const response = await fetch("/api/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
          },
          credentials: "include"
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.warn("Logout API error:", errorData.message);
        }
      } else {
        console.warn("Token bulunamadı, direkt çıkış yapılıyor");
      }
      
      dispatch(signOut());
      navigate('/');
    } catch (error) {
      console.error("Logout error:", error);
      // Hata olsa bile kullanıcıyı çıkış yap
      dispatch(signOut());
      navigate('/');
    }
  };
  
  if (!auth.user) {
    return null; // Loading durumu
  }
  
  return (
    <div>
      <h1>Hoş geldiniz, {auth.user?.username}</h1>
      <button onClick={handleLogout}>Çıkış Yap</button>
    </div>
  )
}

export default Home;