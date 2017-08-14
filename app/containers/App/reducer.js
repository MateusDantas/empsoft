import { fromJS } from 'immutable';

const initialState = fromJS({
  users: [
    {
      id: 0,
      name: 'Michel Temer',
      service: 'Encanador',
      detailedDescription: 'Quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      rating: 4.0,
      location: 'Campina Grande',
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
      detailedDescription: 'Quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      rating: 4.5,
      location: 'Campina Grande',
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
      detailedDescription: 'Quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      rating: 5.0,
      location: 'Campina Grande',
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
      detailedDescription: 'Quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      rating: 4.3,
      location: 'Campina Grande',
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
      detailedDescription: 'Quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      rating: 3.5,
      location: 'Campina Grande',
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
      detailedDescription: 'Quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      rating: 3.9,
      location: 'Campina Grande',
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
      detailedDescription: 'Quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      rating: 2.5,
      location: 'Campina Grande',
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
  ],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}

export default appReducer;
