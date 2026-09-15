function AuthResponse({ status }) {
  const render = () => {
    if (!status) {
      return null;
    }
    switch (status) {
      case 1:
        return (
          <img
            src="https://thumbs.dreamstime.com/b/big-smile-emoticon-26256350.jpg"
            alt="Smile"
          />
        );
      case 2:
        return (
          <div className="error" style={{ color: "blue" }}>
            Ivan not found
          </div>
        );
      default:
        return <div className="error">User not found</div>;
    }
  };
  return render();
}

export default AuthResponse;
