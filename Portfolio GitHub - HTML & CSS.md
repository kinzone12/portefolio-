# Portfolio GitHub - HTML & CSS

Un portfolio professionnel minimaliste créé en HTML et CSS pur, prêt à être déployé sur GitHub Pages.

## 📋 Contenu

Le portfolio inclut les sections suivantes :

- **Accueil** : Présentation avec call-to-action
- **Projets** : Galerie de projets avec cartes interactives
- **Compétences** : Grille de compétences techniques
- **À Propos** : Section de présentation personnelle
- **Contact** : Formulaire de contact
- **Footer** : Liens sociaux

## 🎨 Design

- **Philosophie** : Minimalisme Moderne Asymétrique
- **Navigation** : Latérale fixe (20% de la largeur)
- **Palette** : Monochrome blanc/noir avec accent bleu (#0066ff)
- **Typographie** : Inter (Google Fonts)
- **Responsive** : Optimisé pour mobile, tablette et desktop

## 📁 Structure

```
portfolio-simple/
├── index.html          # Page principale
├── css/
│   └── style.css       # Styles CSS
├── js/
│   └── main.js         # Interactions JavaScript
├── assets/             # Dossier pour images/ressources
└── README.md           # Ce fichier
```

## 🚀 Déploiement sur GitHub Pages

### Étape 1 : Créer un dépôt GitHub

1. Allez sur [GitHub.com](https://github.com)
2. Cliquez sur **New repository**
3. Nommez le dépôt `votre-username.github.io` (important pour GitHub Pages)
4. Cliquez sur **Create repository**

### Étape 2 : Pousser le code

```bash
cd portfolio-simple
git remote add origin https://github.com/votre-username/votre-username.github.io.git
git branch -M main
git push -u origin main
```

### Étape 3 : Activer GitHub Pages

1. Allez dans les **Settings** du dépôt
2. Cliquez sur **Pages** dans le menu de gauche
3. Sous "Source", sélectionnez **main** et **/root**
4. Cliquez sur **Save**

Votre portfolio sera accessible à `https://votre-username.github.io`

## 🔧 Personnalisation

### Modifier le contenu

Ouvrez `index.html` et modifiez :
- Le titre et la description
- Vos projets dans la section "Projets Récents"
- Vos compétences
- Votre biographie
- Vos liens sociaux

### Modifier les couleurs

Dans `css/style.css`, changez la couleur principale :
```css
/* Remplacer #0066ff par votre couleur */
--primary-color: #0066ff;
```

### Ajouter des images

1. Placez vos images dans le dossier `assets/`
2. Référencez-les dans `index.html` :
```html
<img src="assets/mon-image.jpg" alt="Description">
```

## 📱 Responsive Design

Le portfolio s'adapte automatiquement à :
- **Desktop** : 1024px et plus
- **Tablette** : 768px à 1024px
- **Mobile** : moins de 768px

## ✨ Fonctionnalités

- ✅ Navigation fluide avec scroll smooth
- ✅ Lien actif mis à jour au scroll
- ✅ Formulaire de contact fonctionnel
- ✅ Animations au scroll
- ✅ Hover effects interactifs
- ✅ Design responsive
- ✅ Optimisé pour les moteurs de recherche (SEO)

## 📝 Formulaire de Contact

Le formulaire valide les entrées et affiche un message de succès. Pour envoyer réellement les emails, vous devrez intégrer un service comme :
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

## 🌐 Domaine personnalisé

Pour utiliser votre propre domaine :

1. Achetez un domaine (ex: GoDaddy, Namecheap)
2. Dans les **Settings** du dépôt, allez à **Pages**
3. Sous "Custom domain", entrez votre domaine
4. Suivez les instructions pour configurer les DNS

## 📚 Ressources

- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📄 Licence

Ce projet est libre d'utilisation. Vous pouvez le modifier et l'utiliser comme bon vous semble.

## 💡 Conseils

- Mettez à jour régulièrement vos projets
- Testez le portfolio sur différents appareils
- Optimisez les images pour réduire le temps de chargement
- Ajoutez vos vrais liens sociaux
- Personnalisez le formulaire de contact

---

**Créé avec ❤️ en HTML et CSS pur**
