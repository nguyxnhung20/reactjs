import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../feature/count/count";

export default configureStore({
  // reducer là một bộ máy dùng để phân tích và tính toán cập nhật lại state
  reducer: {
    counter: counterSlice,
    // more reducer...
  },
});
