const Button = ({ children, onClick }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

export default Button;
