const Form = ({ setUser, handleSubmit }) => {
  const handleChange = (event) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <div className="mb-3 form-check ps-0">
          <label className="form-label">Full Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 form-check ps-0">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
