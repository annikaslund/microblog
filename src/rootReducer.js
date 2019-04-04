import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from "./actionTypes";
import uuid from "uuid/v4";

const DEFAULT_STATE = {
    posts: {}, //postId as key {postId: {...post, comments: {1: "wow", 2: ""...}}, ...}
};

function rootReducer(state = DEFAULT_STATE, action) {
    if (action.type === ADD_POST) {
        const postId = uuid();

        return {
            ...state,
            posts: { ...state.posts, [postId]: action.payload }
        }
    }

    if (action.type === EDIT_POST) {
        let postId = state.posts.postId;

        return {
            ...state,
            posts: { ...state.posts, [postId]: { ...action.payload } }
        }
    }

    if (action.type === DELETE_POST) {
        let stateCopy = { ...state }
        let postId = action.payload;

        delete stateCopy.posts[postId];

        return { ...stateCopy };
    }

    if (action.type === ADD_COMMENT) {
        const commentId = uuid();

        let postId = action.postId;
        let currPost = state.posts[postId];

        let result = {
            posts: {
                ...state.posts,
                [action.postId]: {
                    ...currPost,
                    comments: {
                        ...currPost.comments,
                        [commentId]: action.payload.comment
                    }
                }
            }
        }

        return result
    }

    if (action.type === DELETE_COMMENT) {
        console.log(action.postId, action.commentId)
        let stateCopy = { ...state }
        let postId = action.postId;
        let commentId = action.commentId;

        delete stateCopy.posts[postId].comments[commentId];

        return { ...stateCopy };
    }

    return { ...state };
}

export default rootReducer;
