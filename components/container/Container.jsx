import { classNames } from 'utils';

export const Container = ({ children, padding, customClassName }) => {
  return (
    <div className={classNames('w-full', padding, customClassName)}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  customClassName: '',
  padding: 'py-12',
};
