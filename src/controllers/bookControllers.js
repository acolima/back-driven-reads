import db from "../db.js"

export async function getBook(req, res) {
  const { isbn } = req.params
  try {
    const book = await db.collection("books").findOne({ ISBN: isbn })
    res.send(book)
  } catch {
    res.sendStatus(500)
  }
}

export async function getBooks(req, res){
  try{ 
    db.collection("books").insertMany([
      {
        "author": "Arthur Conan Doyle",
        "title": "Sherlock Holmes",
        "subtitle": "",
        "description": "Em 1887, o escritor escocês sir Arthur Conan Doyle criou Sherlock Holmes, o infalível detetive a quem os agentes da Scotland Yard recorriam para solucionar os mistérios mais intrigantes da Inglaterra vitoriana. Desde então, as aventuras do mestre da investigação atraem leitores ávidos por chegar à última página e ver o enigma desvendado. Esta obra completa reúne os quatro romances e os 56 contos sobre as aventuras do detetive mais famoso do mundo e de seu fiel companheiro, o dr. Watson. Para desvendar mistérios, o faro e a astúcia de Sherlock Holmes levam às fontes menos óbvias, às informações mais precisas. Um modelo que influencia até hoje a literatura policial e revela fôlego para impressionar gerações de leitores através dos tempos",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/51NjUyqABrL._SX446_BO1,204,203,200_.jpg",
        "price": "73,90",
        "pages": "1808",
        "publisher": "HarperCollins",
        "ISBN": "9788595080836",
        "category": "Coleções"
      },
      {
        "author": "Rick Riordan",
        "title": "Percy Jackson e os Olimpianos",
        "subtitle": "",
        "description": "Combinando mitologia grega e muita aventura, a saga do menino Percy Jackson, que aos 12 anos descobre que é um semideus, filho de Poseidon, tornou-se um fenômeno mundial. Foram mais de 15 milhões de livros vendidos em todo o mundo e quase um milhão no Brasil, além da adaptação para o cinema que atraiu 1,8 milhão de espectadores no país.",
        "coverUrl": "https://livrariaflorence.fbitsstatic.net/img/p/livro-box-percy-jackson-e-os-olimpianos-riordan-intrinseca-216323/402674.jpg?w=660&h=660&v=no-change&qs=ignore",
        "price": "133,90",
        "pages": "1816",
        "publisher": "Intrínseca",
        "ISBN": "9788580574623",
        "category": "Coleções"
      },
      {
        "author": "Suzanne Collins",
        "title": "Jogos Vorazes",
        "subtitle": "",
        "description": "Box especial comemorativo do aniversário de 10 anos do lançamento de Jogos Vorazes no Brasil. O conjunto traz caixa rígida com os primeiros três livros da série em capa dura, com acabamento soft touch e papel offwhite (o amarelinho). Acompanha brinde especial: um livreto com uma entrevista inédita e exclusiva da autora Suzanne Collins sobre o universo da saga Jogos Vorazes. Ambientada num futuro sombrio, a saga Jogos Vorazes foi pioneira de uma tendência que ganhou força na literatura jovem nos últimos anos: a dos romances distópicos e pós-apocalípticos. A obra rendeu à autora Suzanne Collins lugar na badalada lista de 100 personalidades mais influentes do ano da revista Time antes mesmo de estourar nos cinemas. Inspirada pelo mito grego de Teseu e o Minotauro e pelo que há de melhor na ficção científica, Suzanne Collins faz uma dura crítica à sociedade do espetáculo e prende a atenção do leitor do primeiro ao último livro da saga – composta pelos volumes Jogos Vorazes, Em chamas e A esperança – com uma trama envolvente e perturbadora.Formada por uma suntuosa Capital cercada de 12 distritos periféricos, a nação de Panem se ergueu sobre as ruínas de um lugar anteriormente conhecido como América do Norte.",
        "coverUrl": "https://cf.shopee.com.br/file/7bf28620c432540b8f70314aed2ee0ab",
        "price": "177,90",
        "pages": "1408",
        "publisher": "Rocco",
        "ISBN": "9786556670140",
        "category": "Coleções"
      },
      {
        "author": "Stephenie Meyer",
        "title": "Crepúsculo",
        "subtitle": "",
        "description": "A irresistível narrativa da paixão entre a jovem Bella Swan e o vampiro Edward Cullen resgata o fascínio que esses seres fantásticos são capazes de despertar. Fenômeno também nas telonas, a primeira adaptação da série para o cinema (Crepúsculo, 2008), foi uma das maiores bilheterias do período no país, com cerca de 2 milhões de espectadores, e bateu o recorde norte-americano de faturamento em uma primeira semana de exibição. A sequência, lançada em 2009, inspirada no livro Lua nova, foi recordista de vendas antecipadas nos cinemas dos Estados Unidos.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/413H9QfdWuL._SX339_BO1,204,203,200_.jpg",
        "price": "148,90",
        "pages": "1856",
        "publisher": "Intrínseca",
        "ISBN": "9788598078496",
        "category": "Coleções"
      },
      {
        "author": "Lucy Maud Montgomery",
        "title": "Anne De Green Gables",
        "subtitle": "",
        "description": "Conheça a encantadora história de Anne Shirley, uma órfã de cabelos ruivos que conquista a todos por onde passa, luta pelo o que acredita e sempre dá escopo para a imaginação. Nessa seleção especial estão oito livros de Lucy Maud Montgomery que se passam no Universo de Anne: Anne de Green Gables, Anne de Avonlea, Anne da Ilha, Anne de Windy Poplars, Anne e a Casa dos Sonhos, Anne de Ingleside, Vale do Arco-Íris e Rilla de Ingleside.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/71sTkbq6KoL.jpg",
        "price": "99,90",
        "pages": "2400",
        "publisher": "Editora Ciranda Cultural",
        "ISBN": "6250005912073",
        "category": "Coleções"
      },
      {
        "author": "Andrzej Sapkowski",
        "title": "The Witcher",
        "subtitle": "",
        "description": "Box contendo os 8 volumes da série The Witcher (capa clássica) Livro 1 - O Último Desejo, Livro 2 - A Espada do Destino, Livro 3 - O Sangue dos Elfos, Livro 4 - Tempo do Desprezo, Livro 5 - Batismo de Fogo, Livro 6 - A Torre da Andorinha, Livro 7 - A Senhora do Lago, Prelúdio - Tempo de Tempestade",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/41CjEBJ2bcL._SX258_BO1,204,203,200_.jpg",
        "price": "303,05",
        "pages": "3140",
        "publisher": "WMF Martins Fontes",
        "ISBN": "9786586016253",
        "category": "Coleções"
      },
      {
        "author": "David Nicholls ",
        "title": "Um Dia",
        "subtitle": "Vinte anos, duas pessoas",
        "description": "Dexter Mayhew e Emma Morley se conheceram em 1988. Ambos sabem que no dia seguinte, após a formatura na universidade, deverão trilhar caminhos diferentes. Mas, depois de apenas um dia juntos, não conseguem parar de pensar um no outro. Os anos se passam e Dex e Em levam vidas isoladas - vidas muito diferentes daquelas que eles sonhavam ter.Porém, incapazes de esquecer o sentimento muito especial que os arrebatou naquela primeira noite, surge uma extraordinária relação entre os dois.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/41nn5x73HhL._SX258_BO1,204,203,200_.jpg",
        "price": "30,90",
        "pages": "416",
        "publisher": "Intrínseca",
        "ISBN": "9788580570458",
        "category": "Romance"
      },
      {
        "author": "Casey McQuiston",
        "title": "Vermelho, branco e sangue azul",
        "subtitle": "",
        "description": "Quando sua mãe foi eleita presidenta dos Estados Unidos, Alex Claremont-Diaz se tornou o novo queridinho da mídia norte-americana. Bonito, carismático e com personalidade forte, Alex tem tudo para seguir os passos de seus pais e conquistar uma carreira na política, como tanto deseja. Mas quando sua família é convidada para o casamento real do príncipe britânico Philip, Alex tem que encarar o seu primeiro desafio diplomático: lidar com Henry, irmão mais novo de Philip, o príncipe mais adorado do mundo, com quem ele é constantemente comparado ― e que ele não suporta. O encontro entre os dois sai pior do que o esperado, e no dia seguinte todos os jornais do mundo estampam fotos de Alex e Henry caídos em cima do bolo real, insinuando uma briga séria entre os dois.Para evitar um desastre diplomático, eles passam um fim de semana fingindo ser melhores amigos e não demora para que essa relação evolua para algo que nenhum dos dois poderia imaginar ― e que não tem nenhuma chance de dar certo.Ou tem?",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/41QaXCahKrL._SX345_BO1,204,203,200_.jpg",
        "price": "27,90",
        "pages": "392",
        "publisher": "Seguinte",
        "ISBN": "9788555340949",
        "category": "Romance"
      },
      {
        "author": "Adam Silvera",
        "title": "Os Dois Morrem No Final",
        "subtitle": "",
        "description": "No dia 5 de setembro, pouco depois da meia-noite, Mateo Torrez e Rufus Emeterio recebem uma ligação da Central da Morte. A notícia é devastadora: eles vão morrer naquele mesmo dia. Os dois não se conhecem, mas, por motivos diferentes, estão à procura de um amigo com quem compartilhar os últimos momentos, uma conexão verdadeira que ajude a diminuir um pouco a angústia e a solidão que sentem.Por sorte, existe um aplicativo para isso, e é graças a ele que Rufus e Mateo vão se encontrar para uma última grande aventura: viver uma vida inteira em um único dia.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/41je53g7uSL._SY497_BO1,204,203,200_.jpg",
        "price": "41,83",
        "pages": "416",
        "publisher": "Intrínseca",
        "ISBN": "9786555603026",
        "category": "Romance"
      },
      {
        "author": "David Levithan",
        "title": "O caderninho de desafios de Dash & Lily",
        "subtitle": "",
        "description": "O Natal está quase chegando, o que é motivo de grande alegria para Lily, que sente que chegou a hora, finalmente, de se apaixonar. Para encontrar sua cara-metade de forma nada óbvia, ela montou, junto de seu irmão, um plano: deixou um caderninho vermelho repleto de tarefas em uma das prateleiras de sua livraria favorita – e mais caótica, vale ressaltar – da cidade, na expectativa de que o cara certo apareça e aceite o desafio. Dash, que não é exatamente um fã do período natalino, encontra o caderninho na sua também favorita livraria e decide – por que não? – topar a missão.Intrigado e curioso, ele completa as primeiras tarefas, e os dois passam a se comunicar e conhecer um ao outro utilizando como ponte o caderninho, que é deixado e resgatado, a cada vez, em um ponto diferente de Manhattan. Mas Dash é mesmo o cara certo?",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/51Y05ZZHzEL._SX335_BO1,204,203,200_.jpg",
        "price": "31,90",
        "pages": "256",
        "publisher": "Galera",
        "ISBN": "9786555871746",
        "category": "Romance"
      },
      {
        "author": "Dhonielle Clayton",
        "title": "Blackout",
        "subtitle": "O amor também brilha no escuro",
        "description": "Uma onda de calor causa um apagão em Nova York. Multidões se formam nas ruas, o metrô para de funcionar e o trânsito fica congestionado. Conforme o sol se põe e a escuridão toma conta da cidade, seis jovens casais veem outro tipo de eletricidade surgir no ar… Um primeiro encontro ao acaso.Amigos de longa data.Ex - namorados ressentidos.Duas garotas feitas uma para a outra.Dois garotos escondidos sob máscaras.Um namoro repleto de dúvidas. Quando as luzes se apagam, os sentimentos se acendem.Relacionamentos se transformam, o amor desperta e novas possibilidades surgem ― até que a noite atinge seu ápice numa festa a céu aberto no Brooklyn.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/51DguzEMjeS._SX331_BO1,204,203,200_.jpg",
        "price": "26,90",
        "pages": "272",
        "publisher": "Seguinte",
        "ISBN": "9788555341700",
        "category": "Romance"
      },
      {
        "author": "Solaine Chioro",
        "title": "Reticências",
        "subtitle": "",
        "description": "Davi e Joana se conheceram online e, desde que se falaram pela primeira vez, não conseguiram mais parar. Os dois passam madrugadas conversando, assistem a filmes juntos, desabafam sobre o dia a dia e discutem questões existenciais. O único problema é que eles não sabem a verdadeira identidade um do outro. Para Davi, Joana é @vidaspretas, a ilustradora incrível com quem entrou em contato para um trabalho.Para Joana, Davi é o @caradaprefeitura, que mandou mensagem convidando - a para uma campanha de Dia da Consciência Negra.Tudo o que sabem um sobre o outro(e tudo o que importa) é que se gostam e estabeleceram uma conexão real, possível apenas porque o anonimato da internet permitiu que não tivessem medo de se abrir.O que eles não sabem, no entanto, é que estão muito mais próximos do que imaginam...",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/71h9Rk1i7TS.jpg",
        "price": "22,45",
        "pages": "176",
        "publisher": "Alt",
        "ISBN": "9786588131305",
        "category": "Romance"
      },
      {
        "author": "Itamar Vieira Junior",
        "title": "Torto arado",
        "subtitle": "",
        "description": "Nas profundezas do sertão baiano, as irmãs Bibiana e Belonísia encontram uma velha e misteriosa faca na mala guardada sob a cama da avó. Ocorre então um acidente. E para sempre suas vidas estarão ligadas ― a ponto de uma precisar ser a voz da outra. Numa trama conduzida com maestria e com uma prosa melodiosa, o romance conta uma história de vida e morte, de combate e redenção.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/41fQpp33yUL._SX327_BO1,204,203,200_.jpg",
        "price": "37,72",
        "pages": "264",
        "publisher": "Todavia",
        "ISBN": "9786580309313",
        "category": "Fantasia"
      },
      {
        "author": "Holly Black",
        "title": "O príncipe cruel",
        "subtitle": "(Vol. 1 O Povo do Ar)",
        "description": "O prínicipe cruel é o primeiro volume da série best-seller O Povo do Ar. Jude tinha apenas sete anos quando seus pais foram brutalmente assasinados e ela e as irmãs levadas para viver no traiçoeiro Reino das Fadas. Dez anos depois, tudo o que Jude quer é se encaixar, mesmo sendo uma garota mortal. Mas todos os feéricos parecem desprezar os humanos... Especialmente o príncipe Cardan, o mais jovem e mais perverso dos filhos do Grande Rei de Elfhame.Para conquistar o tão desejado lugar na Corte, Jude precisa desafiar o príncipe - e enfrentar as consequências do ato.A garota passa, então, a se envolver cada vez mais nos jogos e intrigas do palácio, e acaba descobrindo a própria vocação para trapaças e derramamento de sangue. Mas quando uma traição ameaça afogar o Reindo das Fadas em violência, Jude precisará arriscar tudo em uma perigosa aliança para salvar suas irmãs - e a própria Elfhame.Cercada por mentiras e pessoas que desejam destruí-la , Jude terá que descobrir o verdadeiro significado da palavra poder antes que seja tarde demais.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/51BSHmTVwsS._SX335_BO1,204,203,200_.jpg",
        "price": "25,90",
        "pages": "322",
        "publisher": "Galera",
        "ISBN": "9788501115553",
        "category": "Fantasia"
      },
      {
        "author": "Aldous Leonard Huxley",
        "title": "Admirável mundo novo",
        "subtitle": "",
        "description": "Um clássico moderno, o romance distópico de Aldous Huxley é incontornável para quem procura um dos exemplos mais marcantes da tematização de estados autoritários, ao lado de 1984, de George Orwell. Ele mostra uma sociedade inteiramente organizada segundo princípios científicos, na qual a mera menção das antiquadas palavras “pai” e “mãe” produzem repugnância.Um mundo de pessoas programadas em laboratório, e adestradas para cumprir seu papel numa sociedade de castas biologicamente definidas já no nascimento.Um mundo no qual a literatura, a música e o cinema só têm a função de solidificar o espírito de conformismo.Um universo que louva o avanço da técnica, a linha de montagem, a produção em série, a uniformidade, e que idolatra Henry Ford.Essa é a visão desenvolvida no clarividente romance Huxley.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/41IKTYiymKL._SX334_BO1,204,203,200_.jpg",
        "price": "20,80",
        "pages": "312",
        "publisher": "Biblioteca Azul",
        "ISBN": "9788525056009",
        "category": "Fantasia"
      },
      {
        "author": "Stephen King",
        "title": "Misery",
        "subtitle": "Louca obsessão",
        "description": "Paul Sheldon é um escritor famoso, reconhecido por uma série de best-sellers protagonizados pela mesma personagem: Misery Chastain. Annie Wilkes é uma enfermeira aposentada, leitora voraz e obcecada pela história de Misery. Quando Paul sofre um acidente de carro em uma nevasca, ele é resgatado justamente por Annie, e esse encontro entre fã e autor é o ponto de partida de uma das tramas mais aterrorizantes de Stephen King. Insatisfeita com o final do último livro da série, a fã isola o autor debilitado em um quarto em sua casa.Com torturas, ameaças e uma vigilância persistente, ela faz de tudo para obrigá- lo a reescrever a narrativa com o final que ela considera apropriado.Considerada uma das vilãs mais assustadoras e complexas do universo King e interpretada por Kathy Bates no filme que se tornou um clássico, Annie Wilkes é a figura que faz de Misery um livro essencial.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/51U2I+1cVTL._SX349_BO1,204,203,200_.jpg",
        "price": "23,65",
        "pages": "328",
        "publisher": "Suma",
        "ISBN": "9788581052144",
        "category": "Fantasia"
      },
      {
        "author": "J.R.R. Tolkien",
        "title": "O Hobbit",
        "subtitle": "",
        "description": "Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos. Esta jornada fará Bilbo, Gandalf e 13 anãos atravessarem a Terra- média, passando por inúmeros perigos, sejam eles, os imensos trols, as Montanhas Nevoentas infestadas de gobelins ou a muito antiga e misteriosa Trevamata, até chegarem(se conseguirem) na Montanha Solitária.Lá está um incalculável tesouro, mas há um porém.Deitado em cima dele está Smaug, o Dourado, um dragão malicioso que...bem, você terá que ler e descobrir.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/511+-lOOtsL._SX319_BO1,204,203,200_.jpg",
        "price": "29,00",
        "pages": "336",
        "publisher": "HarperCollins",
        "ISBN": "9788595084742",
        "category": "Fantasia"
      },
      {
        "author": "Charlie Donlea",
        "title": "A garota do lago",
        "subtitle": "",
        "description": "Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada.Duas semanas atrás, a estudante de direito Becca Eckersley foi brutalmente assassinada em uma dessas casas. Filha de um poderoso advogado, Becca estava no auge de sua vida. Atraída instintivamente pela notícia, a repórter Kelsey Castle vai até a cidade para investigar o caso. ...E LOGO SE ESTABELECE UMA CONEXÃO ÍNTIMA QUANDO UM VIVO CAMINHA NAS MESMAS PEGADAS DOS MORTOS...E enquanto descobre sobre as amizades de Becca, sua vida amorosa e os segredos que ela guardava, a repórter fica cada vez mais convencida de que a verdade sobre o que aconteceu com Becca pode ser a chave para superar as marcas sombrias de seu próprio passado.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/516VOgxwg2L._SX339_BO1,204,203,200_.jpg",
        "price": "16,90",
        "pages": "296",
        "publisher": "Faro Editorial",
        "ISBN": "9788562409882",
        "category": "Fantasia"
      },
      {
        "author": "Paulo Caroli",
        "title": "Lean Inception",
        "subtitle": "Como alinhar pessoas e construir o produto certo",
        "description": "Não importa o tamanho ou a área da empresa, todas se deparam com dúvidas e obstáculos na hora de lançar um novo produto: Por onde começar? Onde e por quem o produto será usado? O que é realmente útil para o usuário? Quais dessas funções são possíveis? Esses são exemplos de algumas das questões que surgem durante o processo. Porém existe uma resposta para todas as dúvidas de modo rápido e extremamente eficaz: a Lean Inception! Após mais de uma década trabalhando com inceptions, Paulo desenvolveu o método que vai auxiliar você e sua equipe a colocar as ideias em ação!",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/41bO5e-g6wL._SX345_BO1,204,203,200_.jpg",
        "price": "29,34",
        "pages": "160",
        "publisher": "Editora Caroli",
        "ISBN": "9788594377067",
        "category": "Programação"
      },
      {
        "author": "Martin Fowler",
        "title": "Refatoração",
        "subtitle": "Aperfeiçoando o Design de Códigos Existentes",
        "description": "Por mais de vinte anos, programadores experientes no mundo inteiro contaram com o livro Refatoração de Martin Fowler para aperfeiçoar o design de códigos existentes e melhorar a manutenibilidade do software, assim como para deixar o código existente mais fácil de entender. Essa nova edição ansiosamente esperada foi atualizada por completo para refletir mudanças vitais no domínio da programação. Refatoração 2ª edição contém um catálogo atualizado das refatorações e inclui exemplos de código JavaScript bem como novos exemplos funcionais que demonstram a refatoração sem classes. Assim como na edição original, este livro explica o que é refatoração, por que você deve refatorar, como reorganizar um código que precise de refatoração e como fazer isso de forma bem-sucedida, independentemente da linguagem usada.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/4125lRe2M9L._SX347_BO1,204,203,200_.jpg",
        "price": "87,88",
        "pages": "456",
        "publisher": "Novatec Editora",
        "ISBN": "9788575227244",
        "category": "Programação"
      },
      {
        "author": "Mary Provinciatto",
        "title": "Sprint a Sprint",
        "subtitle": "Erros e acertos na transformação cultural de um time ágil",
        "description": "“Este livro vai mudar a sua visão sobre como trabalhar dentro de um time ágil!” É com essa frase que Annelise Gripp abre o prefácio da obra de Mary Provinciatto e Paulo Caroli! Os autores juntaram seus anos de experiência em diferentes cargos e empresas para compor um livro completo e ideal para todos os profissionais que já trabalham ou que desejam trabalhar dentro de um time ágil. O sucesso de um projeto acontece ao se conectar pessoas, com talentos e habilidades diferentes, que trabalham em rumo ao mesmo objetivo: a entrega do melhor produto possível!",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/41Ag2LRYrjL._SX332_BO1,204,203,200_.jpg",
        "price": "30,03",
        "pages": "200",
        "publisher": "Editora Caroli",
        "ISBN": "9786586660005",
        "category": "Programação"
      },
      {
        "author": "Aditya Y. Bhargava",
        "title": "Entendendo Algoritmos",
        "subtitle": "Um Guia Ilustrado Para Programadores e Outros Curiosos",
        "description": "Um algoritmo nada mais é do que um procedimento passo a passo para a resolução de um problema. Os algoritmos que você mais utilizará como um programador já foram descobertos, testados e provados. Se você quer entendê-los, mas se recusa a estudar páginas e mais páginas de provas, este é o livro certo. Este guia cativante e completamente ilustrado torna simples aprender como utilizar os principais algoritmos nos seus programas.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/517I6z9QK4L._SX357_BO1,204,203,200_.jpg",
        "price": "55,97",
        "pages": "264",
        "publisher": "Novatec Editora",
        "ISBN": "9788575225639",
        "category": "Programação"
      },
      {
        "author": "José Augusto N. G. Manzano",
        "title": "Algoritmos",
        "subtitle": "Lógica Para Desenvolvimento de Programação de Computadores",
        "description": "Este livro abrange os principais conceitos de programação de computadores, incluindo a norma ISO 5807:1985 (E) e importantes fundamentos, como entrada, processamento, saída, tipos de dados, variáveis, constantes, operadores aritméticos e expressões aritméticas. Explica tomada de decisão, laços condicional e incondicional, programação com matrizes, técnicas de ordenação e busca, uso de registros e uma maneira de incorporar - em uma única matriz - dados de tipos diferentes.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/51snbPl-GAL._SX352_BO1,204,203,200_.jpg",
        "price": "70,40",
        "pages": "368",
        "publisher": "Editora Érica",
        "ISBN": "9788536531458",
        "category": "Programação"
      },
      {
        "author": "Jason Schreier",
        "title": "Sangue, suor e pixels",
        "subtitle": "Os dramas, as vitórias e as curiosas histórias por trás dos videogames",
        "description": "'É que fazer um jogo é como construir um edifício durante um terremoto.Ou tentar conduzir um trem enquanto uma pessoa fica correndo na sua frente colocando os trilhos enquanto avança.' Os bastidores da criação e desenvolvimento de jogos de videogame são tão desafiadores e complexos quanto os jogos em si, como um labirinto infinito ou um abismo sem fundo. Examinando alguns dos jogos mais bem-sucedidos e falhas mais infames do mercado de games, Jason Schreier imerge os leitores no inferno que é o processo criativo que se transforma em entretenimento.   Sangue, suor e pixels é uma jornada em busca do sucesso, mas também uma homenagem aos entusiastas hiperdedicados e heróis sem nome que escalam montanhas e enfrentam epopeias perigosas na vida real para criar os melhores jogos de todos os tempos.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/51fwk9AOcvL._SX335_BO1,204,203,200_.jpg",
        "price": "24,95",
        "pages": "304",
        "publisher": "HarperCollins",
        "ISBN": "9788595082595",
        "category": "Programação"
      },
      {
        "author": "Machado de Assis",
        "title": "Dom Casmurro",
        "subtitle": "",
        "description": "Com Dom Casmurro, Machado de Assis encerra a chamada “trilogia realista”, depois de Memórias póstumas de Brás Cubas e Quincas Borba. Neste grande clássico da literatura brasileira, Bento Santiago, o Dom Casmurro, decide escrever suas memórias desde a mocidade. A narrativa se dá durante o Segundo Império, no Rio de Janeiro, e tem como personagens centrais o próprio Bentinho, sua esposa Capitu e o amigo Escobar. Ao longo do livro, o narrador relata suas suspeitas a respeito de sua esposa e Escobar, apresentando indícios da suposta traição de Capitu e pondo em dúvida a paternidade do filho do casal. Dom Casmurro trata de questões tão universais como o amor, o ciúme, a imaginação, a incerteza de nossas convicções e de nossa própria memória. Este é um romance magistral de Machado de Assis que não cessa de instigar os seus leitores. Edição em papel pólen, com diagramação e fonte otimizadas para maior conforto na leitura.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/61ynyaqN9DL._SX332_BO1,204,203,200_.jpg",
        "price": "29,90",
        "pages": "266",
        "publisher": "PanaPaná",
        "ISBN": "9788568082027",
        "category": "Literatura Nacional"
      },
      {
        "author": "Aluísio Azevedo",
        "title": "O Cortiço",
        "subtitle": "",
        "description": "Se O Cortiço é dos romances mais contundentes da literatura brasileira, este volume possui atributos que o convertem na melhor edição do clássico de Aluísio Azevedo. Além de texto estabelecido conforme a última edição em vida do autor, contém iconografia histórica e notas de rodapé por Leila Guenther. O ensaio de apresentação foi escrito por Paulo Franchetti, que, revisando noções consagradas, oferece argumentos para uma nova leitura do romance. Prefácio Paulo Franchetti Notas Leila Guenther Ilustrações Carlos Clémen",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/41nVa4A-+KL._SX331_BO1,204,203,200_.jpg",
        "price": "29,00",
        "pages": "384",
        "publisher": "Ateliê Editorial",
        "ISBN": "9788574805795",
        "category": "Literatura Nacional"
      },
      {
        "author": "Ailton Krenak",
        "title": "Ideias para adiar o fim do mundo",
        "subtitle": "",
        "description": "Ailton Krenak nasceu na região do vale do rio Doce, um lugar cuja ecologia se encontra profundamente afetada pela atividade de extração mineira. Neste livro, o líder indígena critica a ideia de humanidade como algo separado da natureza, uma “humanidade que não reconhece que aquele rio que está em coma é também o nosso avô”. Essa premissa estaria na origem do desastre socioambiental de nossa era, o chamado Antropoceno.Daí que a resistência indígena se dê pela não aceitação da ideia de que somos todos iguais.Somente o reconhecimento da diversidade e a recusa da ideia do humano como superior aos demais seres podem ressignificar nossas existências e refrear nossa marcha insensata em direção ao abismo.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/41aP0NDM7XL._SX342_BO1,204,203,200_.jpg",
        "price": "24,90",
        "pages": "64",
        "publisher": "Companhia das Letras",
        "ISBN": "9788535932416",
        "category": "Literatura Nacional"
      },
      {
        "author": "Clarice Lispector",
        "title": "A Hora da Estrela",
        "subtitle": "",
        "description": "Concebida para celebrar o quadragésimo aniversário de sua publicação, esta edição especial de A hora da estrela reproduz pela primeira vez diversos manuscritos originais de Clarice Lispector. Traz, ainda, uma série de textos de referência, de estudiosos e ensaístas brasileiros e estrangeiros. Paloma Vidal se debruçou sobre os manuscritos propriamente ditos, ao passo que Hélène Cixous, Colm Tóibín, Florencia Garramuño, Nádia Battella Gotlib, Clarisse Fukelman e Eduardo Portella focalizaram todos os diferentes aspectos deste que foi o último livro escrito por Clarice. Uma obra de perfil único e original, conciliando habilmente a inovação estilística com os problemas sociais vividos por aqueles que, como a desventurada Macabéa, são obrigados a abandonar o Nordeste natal em busca de melhores condições de vida em outras paragens, nem sempre hospitaleiras. Clarice Lispector dispensa apresentação, já foi consagrada, há muito, como uma das melhores escritoras de língua portuguesa de todos os tempos. Seu talento invulgar se manifestou nos mais diversos campos literários, do romance ao conto, da crônica ao livro infantil, do ensaio à tradução, sempre com um toque distintivo e único, inimitável e difícil de classificar. Clarice é tão única que pode ser descrita apenas como Clarice, assim como Machado de Assis é apenas Machado, prescindindo de sobrenome, apêndices acadêmicos e filiação a escolas e grupos literários. Clarice é, claro, um enigma. Um mistério que amamos decifrar, mesmo sabendo que toda conclusão é apenas provisória e forçosamente parcial, diante de seu talento poliédrico e original.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/41Fc0mMLSFL._SX258_BO1,204,203,200_.jpg",
        "price": "63,94",
        "pages": "224",
        "publisher": "Rocco",
        "ISBN": "9788532530660",
        "category": "Literatura Nacional"
      },
      {
        "author": "Eliana Alves Cruz",
        "title": "Água de Barrela",
        "subtitle": "",
        "description": "As muitas mulheres negras presentes no romance Água de barrela, de Eliana Alves Cruz encontram no lavar, passar, enxaguar e quarar das roupas das patroas e sinhás brancas um modo de sobrevivência em quase trezentos anos de história, desde o Brasil na época da colônia até o início do século XX. O título do romance remete a esse procedimento utilizado por essas mulheres negras de diferentes gerações e que garantiu o sustento e a existência de seus filhos e netos em situações de exploração, miséria e escravidão. A narrativa inicia-se com a comemoração do aniversário de umas das personagens após viver um século de muitas lutas, perdas, alegrias, tristezas e principalmente resiliência. Damiana, personagem central para a narrativa, cansada das batalhas constante e ininterruptamente travadas pela liberdade, se vê rodeada por sua família e se recorda dos tempos de lavadeira.​",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/51fs5A-ajjL._SX337_BO1,204,203,200_.jpg",
        "price": "40,53",
        "pages": "322",
        "publisher": "MALÊ",
        "ISBN": "9788592736408",
        "category": "Literatura Nacional"
      },
      {
        "author": "Mari Carrara",
        "title": "Se Deus me chamar não vou",
        "subtitle": "",
        "description": "Quem vai te contar essa história é uma criança de 11 anos. O olhar fresco e bem humorado de quem ainda vê a vida como mistério está aqui, mas vá por mim: não subestime a solidão de Maria Carmem. A aprendiz de escritora, enfrentando as angústias da “pior idade do universo”, irá te provar que é possível, sim, que uma menina seja mais solitária do que um velho. Ao menos uma menina que, como ela, cresce e cria suas perguntas entre os objetos de uma “loja de velhos”. Ali elas já nascem antigas, frescas e pesadas, doce feito da mais dura poesia. Maria Carmem nasceu no fim. Sendo assim, do que interessa a idade? Como ela mesma diz, “é possível que um lápis pareça estar novo, mas todo quebrado por dentro”. É assim, toda quebrada por dentro, que ela desconstrói o mundo diante de si, o mundo adulto que cria regras e não as obedece, o mundo escolar, tudo: “na aula de matemática o problema dizia que um menino e uma menina precisavam calcular quantas laranjas levar ao parque se os convidados meninos comiam tantas e as meninas só mais tantas cada uma. E eu escrevi que não era pra levar nenhuma, que tudo é mentira, ninguém vai junto a parque nenhum nessa vida”. É também assim que ela junta e faz pergunta e faz poesia com tudo o que se ergue e desmorona, os pais, deus, o amor, o corpo, a morte, o difícil que é entender o amor dos outros. Quando crescer, Maria Carmem vai ser escritora. Mas Maria Carmem já cresceu e já é. Esse livro é uma generosidade de sua poesia. Uma oportunidade de a gente crescer com ela.",
        "coverUrl": "https://images-na.ssl-images-amazon.com/images/I/51cYk9ZF6nL._SX327_BO1,204,203,200_.jpg",
        "price": "27,60",
        "pages": "120",
        "publisher": "Editora Nós",
        "ISBN": "9788569020455",
        "category": "Literatura Nacional"
      }
    ])
    
    const books = await db.collection("books").find({}).toArray();
    res.send({ books })
  } catch {
    res.sendStatus(500)
  }
};


export async function searchBook(req, res) {
  try {
    const { text } = req.params;

    const searchedBooks = await db.collection("books").find({ $or: [
       { "title": new RegExp(text, 'i') },
       { "author": new RegExp(text, 'i') }
     ] } ).toArray()


    res.send({ searchedBooks });
  } catch {
    res.sendStatus(500);
  }
}

