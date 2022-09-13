//Blocos começão com { e temina com }
{
    console.log('Passo #01'); 
    console.log('Passo #02')
    console.log('Passo #03')
}

{
    {
        {
            //Posso ter blocos dentro de blocos, mas eles tem que ser fechados dentro do bloco anterior
            console.log('sentença bloco 3')
        }
        // posos ter sentenças dentro dos blocos sem problemas.
        console.log('sentença bloco 2')
    }
}