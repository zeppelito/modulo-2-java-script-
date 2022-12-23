         //funcao padrao
        let soma = function (a, b){
            return a+b;
        }
        console.log(soma(2, 2));

        //arrow function 
        let soma2 = (a, b) => {
            return a + b;
        }
        console.log(soma(2, 5));

        //retorno implícito 
        let soma3 = (a, b) => a + b; 
        console.log(soma(2, 3));

        //funcao com um parâmetro 
        let saudacao = nome => {
            return `Olá ${nome}`; 
        }
        console.log(saudacao("Pedro")); 

        //funcao com sem parâmetro 
        let saudacao2 = () => {
            return `Olá`; 
        }
        console.log(saudacao2());

        let nomes = ["Joao", "Maria", "Pedro"];
        nomes.map((nome) => {    
        console.log(nome);
         });
