FROM denoland/deno:2.7.5

EXPOSE 10900

WORKDIR /app

USER deno

COPY . .
RUN deno cache server.ts

CMD ["run", "--allow-net", "server.ts"]
