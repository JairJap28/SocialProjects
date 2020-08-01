import {
    ADD_PROJECT
} from '../types';

const initState = {
    projects: [
        {id: 1, title: 'help me find peach', content: 'blah blah blah'},
        {id: 2, title: 'collect all the stars', content: 'blah blah blah'},
        {id: 20, title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PROJECT:
            let maxId = Math.max.apply(Math, state.projects.map(project => project.id));
            let newProject = {
                id: maxId + 1,
                ...action.project
            };
            return {
                ...state,
                projects: [...state.projects, newProject]
            };
        default: return state;
    }
}

export default projectReducer;