import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { AppState } from "../store";
import { CommentType, CommentsSliceState } from "./types";
import { fetchComments } from "./asyncAction";

const initialState: CommentsSliceState = {
  data: [],
  status: Status.LOADING,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<CommentType>) => {
      const { UF_PARENT_ID } = action.payload;
      if (!UF_PARENT_ID) {
        // Если UF_PARENT_ID отсутствует, добавляем комментарий в корень
        state.data.unshift(action.payload);
      } else {
        // Иначе находим родительский комментарий по UF_PARENT_ID
        const parentComment = findCommentById(state.data, UF_PARENT_ID);
        if (parentComment) {
          // Если родительский комментарий найден, добавляем текущий комментарий к нему
          if (!parentComment.ANSWERS) {
            parentComment.ANSWERS = [];
          }
          parentComment.ANSWERS.push(action.payload);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.status = Status.LOADING;
      state.data = initialState.data;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.data = action.payload.reverse();
    });
    builder.addCase(fetchComments.rejected, (state) => {
      state.status = Status.ERROR;
      state.data = initialState.data;
    });
  },
});

// Вспомогательная функция для поиска комментария по ID
const findCommentById = (
  comments: CommentType[],
  id: string
): CommentType | undefined => {
  for (const comment of comments) {
    if (comment.ID === id) {
      return comment;
    }
    if (comment.ANSWERS) {
      const nestedComment = findCommentById(comment.ANSWERS, id);
      if (nestedComment) {
        return nestedComment;
      }
    }
  }
  return undefined;
};

export const selectComments = (state: AppState) => state.comments;

export const { addComment } = commentsSlice.actions;

export default commentsSlice.reducer;
