import { fromJS } from 'immutable';

const initialState = fromJS({
  users: [
    {
      id: 0,
      name: 'Michel Temer',
      service: 'Encanador',
      rating: 4.0,
      location: 'Campina Grande',
      lastJobs: 14,
    },
    {
      id: 1,
      name: 'Joesley Batista',
      service: 'Jardineiro',
      rating: 4.5,
      location: 'Campina Grande',
      lastJobs: 11,
    },
    {
      id: 2,
      name: 'Eduardo Cunha',
      service: 'Eletricista',
      rating: 5.0,
      location: 'Campina Grande',
      lastJobs: 16,
    },
    {
      id: 3,
      name: 'Aecio Neves',
      service: 'Pedreiro',
      rating: 4.3,
      location: 'Campina Grande',
      lastJobs: 5,
    },
    {
      id: 4,
      name: 'Cassio Cunha Lima',
      service: 'Diarista',
      rating: 3.5,
      location: 'Campina Grande',
      lastJobs: 5,
    },
    {
      id: 5,
      name: 'Jose Sarney',
      service: 'Marceneiro',
      rating: 3.9,
      location: 'Campina Grande',
      lastJobs: 40,
    },
    {
      id: 6,
      name: 'Paulo Maluf',
      service: 'Pedreiro',
      rating: 2.5,
      location: 'Campina Grande',
      lastJobs: 50,
    },
  ],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
}

export default appReducer;
