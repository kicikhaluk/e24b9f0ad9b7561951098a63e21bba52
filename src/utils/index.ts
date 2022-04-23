export const renderComponent = (
  component: React.ReactNode | (() => JSX.Element)
) => {
  if (typeof component === 'function') {
    return component();
  } else {
    return component;
  }
};
