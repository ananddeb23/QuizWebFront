
const defaultState = {
  questions: [],
  page: 'login',
  uname: '',
  notescount: 0,
  defText: '',
  defTitle: '',
  status: '',
};


export default (state = defaultState, action) => {
  switch (action.type) {
    case 'EDIT_NOTE': {
      //   notescount: noteid - 1, page: 'addnote', defText: notetext, defTitle: notetitle
      return {
        ...state, page: 'addnote', notescount: action.payload.noteid - 1, defText: action.payload.notetext, defTitle: action.payload.notetitle,
      };
    }
    case 'SAVE_NOTE': {
      const newnote = state.notes.slice();
      // console.log(notesrecieved.notesid, this.state.notes.length);
      if (action.payload.notesid - 1 < state.notes.length) {
        newnote[action.payload.notesid - 1] = action.payload;
        return {
          ...state, notes: newnote, page: 'shownote', notescount: state.notes.length, defText: '', defTitle: '',
        };
      }
      newnote.push(action.payload);
      return {
        ...state, notes: newnote, page: 'shownote', notescount: state.notes.length + 1, defText: '', defTitle: '',
      };
    }
    case 'TOGGLE_PAGE': {
      return { ...state, page: 'addnote' };
    }
    case 'SYNC_ACTION': {
      return { ...state, page: action.payload, status: 'last sync successful' };
    }
    case 'GET_QUESTIONS': {
      console.log(action.payload);
      return {
        ...state, questions: action.payload.questions, page: 'showquestions', uname: action.payload.uname,
      };
      // return state;
    }
    default: {
      return state;
    }
  }
};
