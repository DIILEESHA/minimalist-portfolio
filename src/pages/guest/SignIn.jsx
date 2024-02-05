
const SignIn = () => {
    const logGoogleUser = async () => {
        try {
          const response = await signInWithGooglePopup();
          console.log("Google Sign-In Response:", response);
        } catch (error) {
          console.error("Google Sign-In Error:", error);
        }
      };
  return (
    <div>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};
export default SignIn;
