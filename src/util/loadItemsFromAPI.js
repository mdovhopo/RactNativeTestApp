import {loadItems}    from "../redux/actions/actions";

export function loadItemsFromAPI(url) {
  return (dispatch) => {

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(loadItems(items)))
      .catch((err) => console.log(err.message));
  };
}

export default loadItemsFromAPI;