type Server = {
  port: number;
};

export const server: Server = {
  port: Number(process.env.PORT) ?? 3333,
};
