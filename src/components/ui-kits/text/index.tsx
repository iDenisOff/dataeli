import classNames from 'classnames';
import styles from './style.module.scss';

type MainTextProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  size?: 's' | 'm' | 'l' | 'xl';
  color?: 'primary' | 'secondary';
};

export function Text({
  children,
  size = 'm',
  color = 'primary',
  ...props
}: MainTextProps): React.ReactElement {
  const className = `${styles.container} ${styles[size]} ${styles[color]}`;
  return (
    <span className={classNames(className, props.className)}>{children}</span>
  );
}
