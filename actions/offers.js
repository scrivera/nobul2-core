import { GET_OFFERS } from '../types/offers';

// action 
export const getOffers = (offers) => {
  return {
    type: GET_OFFERS,
    offers
  }
}

// actions creators
export const fetchOffers = () => {
  return (dispatch) => {
    
    // here call to api
    return [
      {id: 1, consumerId: 1, agentId: 1},
      {id: 2, consumerId: 2, agentId: 2},
      {id: 3, consumerId: 3, agentId: 3},
      {id: 4, consumerId: 4, agentId: 4}
    ]
  }
}