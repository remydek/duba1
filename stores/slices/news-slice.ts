// store/slices/news-slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsArticle } from '@/schemas/news';

interface NewsState {
  selectedArticle: NewsArticle | null;
}

const initialState: NewsState = {
  selectedArticle: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    selectArticle(state, action: PayloadAction<NewsArticle>) {
      state.selectedArticle = action.payload;
    },
    clearArticle(state) {
      state.selectedArticle = null;
    },
  },
});

export const { selectArticle, clearArticle } = newsSlice.actions;
export default newsSlice.reducer;
