function Error() {
  const title = "Erreur 404";
  document.title = title;

  return (
    <div className="main-error">
      <div className="container-error">
        <h1 className="title404">Oups! La page que vous demandez n'existe pas.</h1>
        <p className="error404">404</p>
      </div>
      <a href="/">Retourner sur la page d’accueil</a>
    </div>
  );
}

export default Error;
