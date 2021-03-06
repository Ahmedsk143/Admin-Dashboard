import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private AuthService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.AuthService.getToken();
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken),
    });
    return next.handle(authRequest).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log('Below is the error from the error handler...');
        console.log(err);
        if (err.status == 401) {
          this.AuthService.removeAuthData();
        }
        return throwError(() => err);
      })
    );
  }
  setErrors(err: HttpErrorResponse): string {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      if (err.status != 0) {
        errorMessage = err.error.message;
      }
    }
    return errorMessage;
  }
}
