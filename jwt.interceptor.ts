

// EJEMPLO DE USO DE INTERCEPTOR PARA AUTORIZACION DE USUARIO
// Esto se puede guardar en la carpeta helpers
//otro ejemplo: https://jasonwatmore.com/post/2019/06/22/angular-8-jwt-authentication-example-tutorial#jwt-interceptor-ts

// APP MODULE:
// providers: [
//   { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

// ],





import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map, catchError} from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private router: Router
    ) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const jwt_token = localStorage.getItem('jwt_token');
      if (jwt_token) {
          request = request.clone({
              setHeaders: {
                Authorization: `Bearer ${jwt_token}` //Authorization
              }
          });
      }

      return next.handle(request).pipe(tap(
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            // console.log(err);
            if (err.status === 401) {
              this.router.navigate(['/home']);
            }
          }
        }
      ));

    }
}
