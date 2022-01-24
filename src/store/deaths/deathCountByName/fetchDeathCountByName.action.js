import breakingBadApi from '../../../apis/breakingBad.api'
import constants from '../../constants'

const { fulfilled, rejected } = constants.status
const { FETCH_DEATH_COUNT_BY_NAME } = constants.type.deaths

export default function fetchDeathCountByName(characterName) {
  return async function (dispatch) {
    try {
      const response = await breakingBadApi.get(`/death-count?name=${characterName}`)
      dispatch({
        type: FETCH_DEATH_COUNT_BY_NAME,
        payload: {
          status: fulfilled,
          data: response.data,
          paramsPassed: { characterName },
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_DEATH_COUNT_BY_NAME,
        payload: {
          status: rejected,
          error: `There was an error. Please try again later (API returned: "${error.message}")`,
        },
      })
    }
  }
}
