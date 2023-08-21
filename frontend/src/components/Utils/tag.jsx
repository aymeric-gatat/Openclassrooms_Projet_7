function Tag({ location }) {
  return (
    <div className="container-tag">
      {location.tags.map((tag, index) => (
        <p key={index} className="tag">
          {tag}
        </p>
      ))}
    </div>
  );
}

export default Tag;
