function Button({ text, color = "black", children }) {
  console.log(children);
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
}

export default Button;
