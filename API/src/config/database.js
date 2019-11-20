module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "consys",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
