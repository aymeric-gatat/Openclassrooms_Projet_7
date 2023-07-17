<h1>Contraintes techniques</h1>
<h2>React :</h2>
Il est impératif d’utiliser ces éléments de React pour un code de qualité :
<ul>
<li>Découpage en composants modulaires et réutilisables ;</li> 
<li> Un composant par fichier ;</li> 
<li> Structure logique des différents fichiers ;</li> 
<li> Utilisation des props entre les composants ;</li> 
<li> Utilisation du state dans les composants quand c'est nécessaire ;</li> 
<li> Gestion des événements ;</li> 
<li> Listes : React permet de faire des choses vraiment intéressantes avec
les listes, en itérant dessus, par exemple avec map. Il faut les utiliser
autant que possible.</li> 
</ul>
Il est également recommandé, mais pas imposé, d’utiliser des composants
fonctionnels plutôt que des composants classes.

<h2>React Router :</h2>
● Les paramètres des routes sont gérés par React Router dans l'URL
pour récupérer les informations de chaque logement.
● Il existe une page par route.
● La page 404 est renvoyée pour chaque route inexistante, ou si une
valeur présente dans l’URL ne fait pas partie des données
renseignées.
● La logique du routeur est réunie dans un seul fichier.
Général :
● Le code ne doit pas produire d'erreur ou de warning dans la console.
