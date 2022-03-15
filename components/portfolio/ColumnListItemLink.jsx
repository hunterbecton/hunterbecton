export const ColumnListItemLink = ({ children, href, color }) => {
  return (
    <li className={`${color} font-base hover:underline`}>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    </li>
  );
};
