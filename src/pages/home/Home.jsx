import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInFailure, signOut } from '../../redux/auth/Actions';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      const token = auth?.user?.token;
      console.log("Logout token:", token);

      if (!token) {
        throw new Error('Oturum bilgisi bulunamadı');
      }

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
        throw new Error(errorData.message || 'Çıkış işlemi başarısız');
      }
      dispatch(signOut());
      navigate('/');
    } catch (error) {
      console.error("Logout error:", error);
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div>
      <h1>Hoş geldiniz, {auth.user?.username}</h1>
      <button onClick={handleLogout}>Çıkış Yap</button>
    </div>
  )
}

export default Home;