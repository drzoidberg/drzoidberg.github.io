import constants from '../../constants'

const { pending } = constants.status
const { FETCH_CHARACTER_ATTRIBUTES } = constants.type.characters

export default function characterAttributes(
  state = {
    status: pending,
    error: '',
    data: [],
    /** when debugging and showing the state, having the 'meta'
     * indicating that the action still hasn't been dispatched
     * facilitates comprehension */
  },
  action,
) {
  switch (action.type) {
    case FETCH_CHARACTER_ATTRIBUTES:
      return action.payload
    default:
      return state
  }
}
