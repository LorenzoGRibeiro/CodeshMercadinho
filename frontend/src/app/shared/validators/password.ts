import { AbstractControl, FormGroup } from '@angular/forms';

export const PassWordMatchValidator = (
  passwordControlNmae: string,
  confirmPassowordControlName: string
) => {
  const validator = (form: AbstractControl) => {
    const passwordControl = form.get(passwordControlNmae);
    const confirmpasswordControl = form.get(confirmPassowordControlName);

    if (!passwordControl || !confirmpasswordControl) return;

    if (passwordControl.value !== confirmpasswordControl.value) {
      confirmpasswordControl.setErrors( {notMatch: true} );

    } else {
      const errors = confirmpasswordControl.errors;
      if(!errors)
      return;

      delete errors.notMatch;
      confirmpasswordControl.setErrors(errors)
    }
  }
  return validator;
}
