import { GET_OFFERS } from "../types/offers"

const initialState = {
  offers: []
}

const offers = (state = initialState, action) => {
  switch (action.type) {
    case GET_OFFERS: {
      return Object.assign({}, state, { offers: action.offers })
    }

    default:
      return state
  }
}