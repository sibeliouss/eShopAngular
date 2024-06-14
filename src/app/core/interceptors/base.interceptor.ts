import { HttpInterceptorFn } from '@angular/common/http';

export const baseInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("HTTP Interceptor tetiklendi...")
  let cloneRequest=req.clone({setHeaders:{Authorization:'Sedat'}})
  return next(cloneRequest);
};
