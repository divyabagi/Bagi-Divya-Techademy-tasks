function defaultp(language = "English", theme = "Light", notifications = true) {
  let preferences = {
    language: language,
    theme: theme,
    notifications: notifications,
  };
  return preferences;
}

console.log(defaultp("Hindi", "Dark", false));
console.log(defaultp());
