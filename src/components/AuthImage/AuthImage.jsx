const AuthImage = ({ image }) => {
  return (
    <div className="relative overflow-hidden md:flex w-1/2 hidden">
      <img src={image} alt="" />
    </div>
  );
};

export default AuthImage;
