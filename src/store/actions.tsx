export const CHARACTERS = "GET_CHARACTERS";

export const getCharacter = (data: object) => {
  return {
    type: CHARACTERS,
    payload: {
      list: data,
    }
  }
};
