function displayForm(formNum){
  var form = document.getElementsByClassName('nF')[formNum],
    formToClose = document.getElementsByClassName('nF')[Number(!formNum)];
  formToClose.style.transform = "translate(0, -100%)";
  formToClose.style.marginTop = "";
  if(!form.style.marginTop) {
    form.style.transform = "translate(0, 0)";
    form.style.marginTop = "23px";
  }else{
    form.style.transform = "translate(0, -100%)";
    form.style.marginTop = "";
  }
}
//asterisk ban check close clock
function checkEmail(input){
  var errors = [], warns = [], invalidChars = [], email = input.value, atAt = email.indexOf('@'),
    localPart = email.slice(0, atAt > -1 ? atAt : email.length), errorText = '',
    domain = atAt == -1 ? '' : email.slice(atAt + 1), ats = 0, domainName = domain,
    domainDots = 0,
    validDomainChars = '-.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0124356789',
    validLocalChars = '!#$%&*+/=?^_`{|}~' + validDomainChars;
  //Whole email
  if(email == '') warns.push('Ingresa tu correo electrónico.');
  if(atAt == 0) errors.push('El correo no puede comenzar con una arroba.');
  // Local part
  if(atAt == -1) warns.push('El correo debe contener una arroba.');
  if(localPart.indexOf('.') == 0)
    errors.push('La parte local no puede empezar con un punto.');
  else if(localPart.lastIndexOf('.') == atAt - 1 && localPart.lastIndexOf('.') > -1)
    errors.push('La parte local no puede terminar con un punto.');
  for(var i = 0; i < localPart.length; i++){
    if(validLocalChars.indexOf(localPart.charAt(i)) == -1)
      invalidChars.push(localPart.charAt(i) == ' ' ? 'espacio' : localPart.charAt(i));
    if(localPart.charAt(i) == '.' && i < localPart.length - 1)
      if(localPart.charAt(i+1) == '.')
        errors.push('La parte local no puede contener dos o más puntos consecutivos.');
  }
  if(invalidChars.length){
    for(i in invalidChars){
      errorText += invalidChars[i];
    }
    errors.push((invalidChars.length > 1 ? 'Los caracteres' : 'El caracter') + ' <b>' + errorText + '</b> no ' + (invalidChars.length > 1 ? 'están permitidos' : 'está permitido') + ' en la parte local.');
    invalidChars = [];
  }
  if(localPart.length > 64) errors.push('La parte local no puede tener más de 64 caracteres.');
  // Domain
  if(domain == '') warns.push('Ingresa el dominio.');
  else{
    if(domain.lastIndexOf('.') == domain.length - 1){
      warns.push('Ingresa un subdominio.');
      errors.push('El dominio no puede terminar con un punto.')
    }
    if(domain.indexOf('.') == 0) errors.push('El dominio no puede empezar con un punto.');
    for(var i = 0; i < domain.length; i++){
      if(validDomainChars.indexOf(domain.charAt(i)) == -1)
        invalidChars.push(domain.charAt(i) == ' ' ? 'espacio' : domain.charAt(i));
      if(domain.charAt(i) == '.' && i < domain.length){
        if(domain.charAt(i+1) == '.') errors.push('El dominio no puede tener dos o más puntos consecutivos.');
        domainDots++;
      }
    }
    if(invalidChars.length){
      for(i in invalidChars){
        errorText += invalidChars[i];
      }
      errors.push((invalidChars.length > 1 ? 'Los caracteres' : 'El caracter') + ' <b>' + errorText + '</b> no ' + (invalidChars.length > 1 ? 'están permitidos' : 'está permitido') + ' en el dominio.');
    }
    for(var i = 0; i < domainDots + 1; i++) {
      for(var ind = 0; ind < i; ind++){
        domainName = domainName.slice(domainName.indexOf('.') + 1);
      }
      domainName = domainName.slice(0, domainName.indexOf('.') > -1 ? domainName.indexOf('.') : domainName.length);
      if(domainName.length > 63 && domainDots)
        errors.push('El subdominio ' + domainName + ' no debe contener mas de 63 caracteres.');
      if(domainName.indexOf('-') == 0)
        errors.push('El ' + (domainDots == 0 ? 'dominio' : 'subdominio "' + domainName + '"') + ' no puede empezar con un guión.');
      if(domainName.lastIndexOf('-') == domainName.length - 1 && domainName)
        errors.push('El ' + (domainDots == 0 ? 'dominio' : 'subdominio "' + domainName + '"') + ' no puede terminar con un guión.');
      domainName = domain;
      }
    if(domain.length > 255) errors.push("El dominio no puede contener mas de 255 caracteres.");
  }
  //Whole email
  for(var i = 0; i < email.length; i++){
    if(email.charAt(i) == '@') ats++;
  }
  if(ats > 1) errors.push('El correo no puede contener mas de una arroba.');
  if(email.length > 320) errors.push('El correo no debe contener mas de 320 caracteres.');
  for(i in warns){
    console.log(warns[i]);
  }
}
