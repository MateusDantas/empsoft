import { fromJS } from 'immutable';

const initialState = fromJS({
  users: [
    {
      id: 0,
      name: 'Michel Temer',
      service: 'Encanador',
      photo: "http://portaltudo.com.br/wp-content/uploads/2017/05/michel-temer.jpg",
      rating: 4.0,
      location: 'Campina Grande',
      bio: "Encanador com 12 anos de experiência.",
      lastJobs: 14,
      comments: [
        {
          id: 0,
          name: 'Dilma',
          text: 'Muito Bom!',
          rating: 5.0,
        },
        {
          id: 1,
          name: 'Lula',
          text: 'ja vi melhores',
          rating: 2.3,
        },
      ],
    },
    {
      id: 1,
      name: 'Joesley Batista',
      service: 'Jardineiro',
      photo: "http://s2.glbimg.com/os-AekyXVEENcPwmirte0Ro_rvo=/560x800/top/e.glbimg.com/og/ed/f/original/2017/05/19/ep773640.jpg",
      rating: 4.5,
      location: 'Campina Grande',
      bio: "Jardineiro de confiança de muitas famílias importantes já há décadas.",
      lastJobs: 11,
      comments: [
        {
          id: 2,
          name: 'José Serra',
          text: 'Serviço muito ruim!',
          rating: 1.6,
        },
        {
          id: 3,
          name: 'Cicero Almeida',
          text: 'Péssimo!',
          rating: 2.4,
        },
        {
          id: 4,
          name: 'Aécio Neves',
          text: 'Ótimo',
          rating: 4.3,
        },
      ],
    },
    {
      id: 2,
      name: 'Eduardo Cunha',
      service: 'Eletricista',
      photo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Eduardo_Cunha_em_1%C2%BA_de_junho_de_2015.jpg",
      rating: 5.0,
      location: 'Campina Grande',
      bio: "Técnico eletricista altamente qualificado e com anos de experiência.",
      lastJobs: 16,
      comments: [
        {
          id: 5,
          name: 'Veneziano',
          text: 'Fez o que devia ter feito!',
          rating: 3.6,
        },
      ],
    },
    {
      id: 3,
      name: 'Aecio Neves',
      service: 'Pedreiro',
      photo: "https://ep00.epimg.net/brasil/imagenes/2016/05/03/politica/1462228800_933117_1462229465_noticia_normal.jpg",
      rating: 4.3,
      location: 'Campina Grande',
      bio: "Pedreiro experiente, meu lugar favorito é em construções, eu respiro cal como oxigênio.",
      lastJobs: 5,
      comments: [
        {
          id: 6,
          name: 'Eduardo Cunha',
          text: 'Bom',
          rating: 4.2,
        },
        {
          id: 7,
          name: 'Trump',
          text: 'You can do better',
          rating: 2.8,
        },
      ],
    },
    {
      id: 4,
      name: 'Cassio Cunha Lima',
      service: 'Diarista',
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Foto_oficial_de_C%C3%A1ssio_Cunha_Lima.jpg/200px-Foto_oficial_de_C%C3%A1ssio_Cunha_Lima.jpg",
      rating: 3.5,
      location: 'Campina Grande',
      bio: "Diarista honesto que já trabalhou em centenas de casas e nunca teve nenhuma reclamação.",
      lastJobs: 5,
      comments: [
        {
          id: 8,
          name: 'Marechal Deodoro',
          text: 'Regular...',
          rating: 3.1,
        },
        {
          id: 9,
          name: 'Shia LaBeouf',
          text: 'Just do it!',
          rating: 2.3,
        },
        {
          id: 10,
          name: 'Sarney',
          text: 'Muito ruim!',
          rating: 1.4,
        },
      ],
    },
    {
      id: 5,
      name: 'Jose Sarney',
      service: 'Marceneiro',
      photo: "http://josesarney.org/wp-content/uploads/2011/11/FOTO-17-1024x671.jpg",
      rating: 3.9,
      location: 'Campina Grande',
      bio: "Marceneiro com com mais de 30 anos de experiência, não há nada em que eu não dê um jeito.",
      lastJobs: 40,
      comments: [
        {
          id: 11,
          name: 'Joaquim Barbosa',
          text: 'Excelente!',
          rating: 5.0,
        },
      ],
    },
    {
      id: 6,
      name: 'Paulo Maluf',
      service: 'Pedreiro',
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Paulo_Maluf_em_setembro_de_2015.jpg/200px-Paulo_Maluf_em_setembro_de_2015.jpg",
      rating: 2.5,
      location: 'Campina Grande',
      bio: "Pedreiro altamente qualificado. Não tenho problemas com a lei, sou procurado pela Interpol por razões desimportantes para quem quiser me contratar.",
      lastJobs: 50,
      comments: [
        {
          id: 12,
          name: 'Delman',
          text: 'Serviço bom, profissional competente',
          rating: 4.3,
        },
      ],
    },
    {
      id: 999,
      name: 'Mateus Dantas',
      service: 'Desenvolvedor',
      photo: "http://portaltudo.com.br/wp-content/uploads/2017/05/michel-temer.jpg",
      rating: 5.0,
      location: 'Campina Grande',
      bio: "Desenvolvedor com 10 anos de experiência.",
      lastJobs: 14,
      comments: [
        {
          id: 13,
          name: 'Larry Page',
          text: 'Muito Bom!',
          rating: 5.0,
        },
        {
          id: 14,
          name: 'Mark Zuckerberg',
          text: 'Nao existe melhor!',
          rating: 5.0,
        },
      ],
    },
  ],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}

export default appReducer;
