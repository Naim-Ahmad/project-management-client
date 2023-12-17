import { useProfileMutation } from "../redux/features/auth/authApi";

const useAuthCheck = () => {
  const [profile, { data, isError }] = useProfileMutation();


  return [profile, data, isError];
};

export default useAuthCheck;
