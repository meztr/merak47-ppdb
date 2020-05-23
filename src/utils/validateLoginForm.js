export default function validate(credentials, isPanitia) {
  let errors = {};
 
  if (isPanitia) {
    // Checking if email is not empty
    if (!credentials.email) {
      errors.emailIsEmpty = 'alamat email pian kada boleh kosong';
    }
    // Checking if email format is valid
    if (credentials.email && !/\S+@\S+\.\S+/.test(credentials.email)) {
      errors.emailFormatInvalid = 'uuyy bu, format email pian tu tesalah';
    }

    if (!credentials.password) {
      errors.passIsEmpty = 'password pian tatinggal di isi';
    }
    return errors;
  } else {

    // Checking if email is not empty
    if (!credentials.email) {
      // errors.kodePendaftaranIsEmpty = 'No. Pendaftaran tidak boleh kosong';
      errors.emailIsEmpty = 'No. Pendaftaran tidak boleh kosong';
    }

    // Checking if password is not empty
    if (!credentials.password) {
      // errors.nisnIsEmpty = 'NISN tidak boleh kosong';
      errors.passIsEmpty = 'NISN tidak boleh kosong';
    }
    return errors;
  }


  
  // Checking if password is strong enough
  // let strengthCheck = /^(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])(?=.*[0-9])(?=.*[a-z]).{8,250}$/;
  // if (credentials.password && !credentials.password.match(strengthCheck))
  //   errors.passIsStrong = "You need a stronger password aaa";

  // return errors;
}