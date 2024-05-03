const Card = ({ name, username, address, phone, email }) => {
  return (
    <div
      className="card mb-3"
      style={{
        width: "18rem",
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <hr />
        <p className="card-text">{`Username : ${username}`}</p>
        <p className="card-text">{`Phone : ${phone}`}</p>
        <p className="card-text">{`Email : ${email}`}</p>
        <p className="card-text">{`Address : ${address?.suite}, ${address?.street}, ${address?.city}`}</p>
        <p className="card-text">{`Zipcode : ${address?.zipcode}`}</p>
      </div>
      <div className="buttons d-flex gap-2 justify-content-center mb-3">
        <button
          className="btn btn-primary"
          style={{
            width: "5rem",
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          style={{
            width: "5rem",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
