export * from './filters';

export function loadDataFromHero(dispatch) {
  
  dispatch({
    type: "LOADING"
  });
  
  // Call api
  const proxy = 'http://localhost:1337';
  const endpoint = 's3-us-west-1.amazonaws.com/hero-engineering-public/interview/fe-code-challenge.json';
  return dispatch => { fetch(proxy+'/'+endpoint).then(
    response => response.json()
  ).then( data => {
      dispatch({
        type: "LOADING SUCCESS",
        payload: data.cards
      })
    }
  ).catch( error => {
      dispatch( {
        type: "LOADING FAILED",
        error
      })
    }
  )};
  
}

export function mapStateToProps(state) {
  return { state };
}
