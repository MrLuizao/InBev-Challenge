import { HeroDetailsModel } from 'src/app/Models/hero-details.model';
import * as SetActions from '../actions/object.actions';

export type Action = SetActions.All;

/// Default app state
const defaultState: HeroDetailsModel = {
    id: null,
    name:'',
    slug:'',
    appearance: {
        eyeColor: null,
        gender: '',
        hairColor: '',
        height: [],
        race: '',
        weight: []
    },
    biography: {
        aliases: [],
        alignment: '',
        alterEgos: '',
        firstAppearance: '',
        fullName: '',
        placeOfBirth: '',
        publisher: '',
    },
    connections: {
        groupAffiliation: '',
        relatives: '',
    },
    images: {
        lg: '',
        md: '',
        sm: '',
        xs: '',
    },
    powerstats: {
        combat: null,
        durability: null,
        intelligence: null,
        power: null,
        speed: null,
        strength: null
    },
    work: {
        base:'',
        occupation: ''
    }
}

/// Helper function to create new state object
const newState = (state, newData) => {
  return Object.assign({}, state, newData)
}


export function setReducer(state: HeroDetailsModel = defaultState, action: Action) {

	switch (action.type) {
  		case SetActions.OBJECT_STORE:
  		return newState(state, { payload: action.payload });

		case SetActions.OBJECT_UPDATE:
        return newState(state, { new: state });

  		default:
  		return state;
	}
}
