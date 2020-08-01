import { RequestHandler } from "express";

export const asyncHandler = (fn: RequestHandler) => {
  const asyncWrap: RequestHandler = async (req, res, next) => {
      try {
          await fn(req, res, next);
      }
      catch(error) {
          res.statusCode = 500;
          res.send({ success: false, errors: [ error ]});
      }
  }
  return asyncWrap;
}