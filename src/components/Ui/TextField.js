const TextField = ({ onChange, value, placeholder, type, name }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      style={styles.input}
      value={value}
      placeholder={placeholder}
      name={name}
    />
  );
};

const styles = {
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
};

export default TextField;
