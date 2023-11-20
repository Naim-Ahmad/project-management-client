import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import useAuthCheck from "./hooks/useAuthCheck";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/auth/authSlice";

const App = () => {
  const [profile, data, isError] = useAuthCheck();
  const dispatch = useDispatch();
  useEffect(() => {
    profile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (data?._id) {
      dispatch(setUser(data));
    }
    if (isError) {
      dispatch(setUser(null));
    }
  }, [data, dispatch, isError]);

  return <RouterProvider router={router} />;
};

export default App;
