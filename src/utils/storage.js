const storageManager = {
  setData: (
    key,
    value
  ) => {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  },

  getData: (key) => {
    const storedData =
      localStorage.getItem(
        key
      );

    if (!storedData) {
      return null;
    }

    return JSON.parse(
      storedData
    );
  },

  removeData: (key) => {
    localStorage.removeItem(
      key
    );
  },

  clearStorage: () => {
    localStorage.clear();
  },
};

export default storageManager;