
  const UserLinks = ({ links }) => {

    const Icons = {
        Instagram: (
          <svg className="icon-instagram">{/* SVG de Instagram */}</svg>
        ),
        YouTube: (
          <svg className="icon-youtube">{/* SVG de YouTube */}</svg>
        ),
        Facebook: (
          <svg className="icon-facebook">{/* SVG de Facebook */}</svg>
        ),
        TikTok: (
          <svg className="icon-tiktok">{/* SVG de TikTok */}</svg>
        ),
        X: (
          <svg className="icon-x">{/* SVG de X */}</svg>
        ),
        Web: (
          <svg className="icon-web">{/* SVG de Web */}</svg>
        ),
        Spotify: (
          <svg className="icon-spotify">{/* SVG de Spotify */}</svg>
        ),
        AppleMusic: (
          <svg className="icon-apple-music">{/* SVG de Apple Music */}</svg>
        ),
      };
    
    return (
      <div className="user-links">
        {links.map(({ name, link }, index) => {
          const Icon = iconMapping[name];
          return (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="link-icon">
              {Icon ? <Icon /> : null}
              {name}
            </a>
          );
        })}
      </div>
    );
  };
  
  // Ejemplo de uso
  const userProfileLinks = [
    { link: "https://www.instagram.com/usuario", name: "Instagram" },
    { link: "https://www.youtube.com/usuario", name: "YouTube" },
    // Agrega más enlaces según sea necesario
  ];
  
  // En el renderizado de tu componente o aplicación:
  <UserLinks links={userProfileLinks} />
  