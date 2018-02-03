export default function search(state = {}, action) {
  switch (action.type) {
    case 'LOADING SUCCESS':
      return { externalDataStatus: "SUCCESS", cards: action.payload, ...state };
    case 'LOADING FAILED':
      return { externalDataStatus: "ERROR", externalDataError: action.error, ...state };
    case 'LOADING':
      return { externalDataStatus: "LOADING"};
    default:
      return state;
  }
}
