export interface IIconWrapper {
  IconComponent: React.ElementType;
}

export function IconWrapper({ IconComponent, ...props }: IIconWrapper) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <IconComponent {...props} />;
}
