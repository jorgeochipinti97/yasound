// hooks/useUsuarios.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchUsuarios = async () => {
            setIsLoading(true);
            setIsError(false);
            
            try {
                const response = await axios.get('/api/user');
                setUsuarios(response); 
            } catch (error) {
                setIsError(true);
                console.log(error)
            }

            setIsLoading(false);
        };

        fetchUsuarios();
    }, []);

    return { usuarios, isLoading, isError };
};

export default useUsuarios;
