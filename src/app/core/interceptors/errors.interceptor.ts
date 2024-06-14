import { HttpInterceptorFn } from '@angular/common/http';

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  let cloneRequest=req.clone;

  return next(req);
};
