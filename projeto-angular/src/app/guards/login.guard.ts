import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)

  const username = sessionStorage.getItem("username")

  if (!username) {
    alert("O usuário não está autenticado!")
    router.navigate([""])
    return false
  } else {
    return true;
  }
};
