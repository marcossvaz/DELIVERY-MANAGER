import * as z from 'zod';

z.config({
    customError: (iss) => {
        if(iss.code === "invalid_type") {
            return "tipo inválido";
        }

        return "Erro de validação";
    },
});