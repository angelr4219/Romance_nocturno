// Single random roll per page load — imported by Layout so every page shares it.
export const theme = Math.random() < 0.5
  ? { "--navy": "#a32035", "--red": "#10183a" }
  : {};
