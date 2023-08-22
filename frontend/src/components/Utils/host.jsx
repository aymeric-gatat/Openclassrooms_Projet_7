function Host({ location }) {
  return (
    <div className="host-info">
      <img src={location.host.picture} alt={location.host.name} />
      <p>{location.host.name}</p>
    </div>
  );
}

export default Host;
