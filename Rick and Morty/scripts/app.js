 const header =document.querySelector('header')
       .innerHTML=`
       <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contacts</a>

        </nav>
        <style>
        header nav{
             background: turquoise;
             height: 4rem;
             display: flex;
             align-items: center;
             justify-content: center;
             margin: 0;
             margin-bottom: 10%;
             text-align:center;

         }
         a{
             display: inline-block;
             text-decoration: none;
             color: #fff;
             margin-left: 1rem;
             font-size: 1.3rem;
         }
         a:hover{
             color: #000;
         }
     </style>
       `
       document.querySelector('.p')
       .innerHTML =`
       Sejam Bem vindos éste é um site apenas que eu <br>
        fiz para prticar o conseito de consumir uma API <br>
        No exemplo usei uma API gratis que mostra os dados de uma serie <br>
        vinda de um servidor <a href="https://rickandmortyapi.com/">Site Da api Aqui</a> 

        <style>
            p{
                font-size:1rem
                text-align:center;
                display:flex;
                align-items:center;
                justify-content:center;
                // margin-left:50%;
                // margin-right:50%;
              

            }
        </style>
       `
       async function Api (){
            const Pro = await fetch('https://rickandmortyapi.com/api/character')
            const response =await Pro.json()

           let container = document.querySelector('.container')
        console.log(response)
            response.results.map((results)=>{
                container.innerHTML+=`
                <div>
                    <style>
        *{
            font-family: sans-serif;

        }
        .container{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
        .container div{
            margin-left: 1rem;
        }

    </style>

                    <img src=`+ results.image+`> <br>
                <strong>`+results.name+`</strong> <br>
                <span>`+results.species+`</span> <br>
                <span>`+results.status+`</span> <br>
                <span>`+results.type+`</span> <br>

                </div>
                `

                
            })

        }

        Api();

 
        document.querySelector('footer')
       .innerHTML=`
       &copy Code by Adilson CAculo
       <style>
          footer{background:turquoise;
          font-size:1.2rem;
          text-align:center;
          height:3rem;
        }
       `