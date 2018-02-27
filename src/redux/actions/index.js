const EDIT_NOTE = 'EDIT_NOTE';
const SAVE_NOTE = 'SAVE_NOTE';
const TOGGLE_PAGE = 'TOGGLE_PAGE';
const SYNC_ACTION = 'SYNC_ACTION';
const GET_QUESTIONS = 'GET_QUESTIONS';
export const editNote = payload => ({
  type: EDIT_NOTE,
  payload,
});

export const saveNote = payload => ({
  type: SAVE_NOTE,
  payload,
});

export const togglePage = () => ({
  type: TOGGLE_PAGE,

});

export const syncAction = payload => ({
  type: SYNC_ACTION,
  payload,

});
export const getQuestions = payload => ({
  type: GET_QUESTIONS,
  payload,
});
