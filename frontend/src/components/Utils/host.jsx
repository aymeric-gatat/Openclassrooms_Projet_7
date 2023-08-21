function Host({ location }) {
  return (
    <div className="section-host">
      <img src={location.host.picture} alt={location.host.name} />
      <p>{location.host.name}</p>
    </div>
  );
}

export default Host;
