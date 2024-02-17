// hooks/useUsuarios.js
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const useUsuarios = () => {
  const { user } = useAuth0();
  const [usuario, setUsuario] = useState();
  const [usuarios, setUsuarios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUsuarios = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await axios.get("/api/user");
        setUsuarios(response.data.data);

        const createuser = response.data.data.filter(
          (e) => e.email == user.email
        );
        createuser && setUsuario(createuser[0]);

      } catch (error) {
        setIsError(true);
        console.log(error);
      }

      setIsLoading(false);
    };

    user && fetchUsuarios();
  }, [user]);

  return { usuarios, isLoading, isError, usuario };
};

export default useUsuarios;
