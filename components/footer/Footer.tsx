export const Footer = () => {
  const nav = [
    { href: 'https://dribbble.com/HunterBecton', text: 'dribbble' },
    { href: 'https://www.linkedin.com/in/huntergarrett/', text: 'linkedin' },
    { href: 'https://twitter.com/HunterBecton', text: 'twitter' },
    { href: 'https://youtube.com/skillthrive', text: 'youtube' },
  ];

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id='nav' className='bg-stone-100'>
      <nav className='mx-auto flex max-w-6xl flex-wrap items-center gap-y-6 py-8 px-4 md:px-8'>
        <button
          type='button'
          onClick={handleScrollToTop}
          className='text-2xl font-medium text-stone-900 focus:outline-none focus-visible:text-orange-600 focus-visible:underline'
        >
          Hunter Becton
        </button>
        <ul className='ml-auto flex  w-full justify-start gap-x-8 md:w-auto'>
          {nav.map((item) => (
            <li key={item.text} className='relative flex items-center'>
              <a
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-base font-normal text-stone-700 no-underline hover:underline focus:outline-none focus-visible:text-orange-600 focus-visible:underline'
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
