// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get("/user/:userId", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]));
  }),
  rest.get("/stories", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([{id: "1", text: "this is story 1", up: 1000, title: 'story 1', userId: 1}]));
  }),
  rest.post("/stories", (req, res, ctx) => {
    const body = req.body as any
    return res(
      ctx.status(200),
      ctx.json({id: body.id, text: body.text, up: 0, title: body.title, userId: 1})
    );
  }),
];
