const BaseUrl = () => {
  const url = window.location.origin;
  console.log(url);
  return url;
};

export const baseUrl = BaseUrl();
