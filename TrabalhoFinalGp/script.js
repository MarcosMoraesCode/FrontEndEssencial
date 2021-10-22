
const urlPesquisa ="https://randomuser.me/api/?results=5"


const consultarDados = () => {
    fetch(urlPesquisa)
      .then((resposta) => resposta.json())
      .then((resultado) => {
        
        a=5;
        b=10;

        for (let i = 0; i < resultado.results.length; i++) {
            
            const nome = resultado.results[i].name.first
            const sobrenome = resultado.results[i].name.last
            const nomeCompleto = `<h5 class="card-title">${nome + ' ' + sobrenome} </h5>`
            document.getElementById(i).innerHTML = nomeCompleto;

            const img = `<img src="${resultado.results[i].picture.large}" class="card-img-top" alt= ${"candidato" + i} />`;
            document.getElementById(a).innerHTML = img;
            a++
            
                    
            const desc = resultado.results[i].location.timezone.description
            const replaceDesc = `<p class="card-text" >${"Localidade: " + desc}</p>`
            document.getElementById(b).innerHTML = replaceDesc;
            b++


        }
        
        
        });
    };


       