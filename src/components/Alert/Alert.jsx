import Alert from "@mui/material/Alert";

const MyAlert = ({ message, type = "success", setShowAlert }) => {
  return (
    <>
      <Alert
        style={{
          position: "absolute",
          right: 10,
          top: 75,
          zIndex: 100,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          textTransform:'capitalize'
        }}
        severity={type}
        onClose={() => setShowAlert(false)}
      >
        {message}
      </Alert>
    </>
  );
};

export default MyAlert;
