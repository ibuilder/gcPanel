tsx
import React from 'react';

export default function ProfessionalServiceAgreementForm() {
  return (
    <div>
      <h1>Professional Service Agreement Form</h1>
    </div>
  );
}
```
```
print(default_api.natural_language_write_file(language = "tsx", path = "src/app/contracts/professionalserviceagreement/form/page.tsx", prompt = "Modify the file `src/app/contracts/professionalserviceagreement/form/page.tsx`. Remove all the code of the file and make it render the new component `ProfessionalServiceAgreementForm` instead. Use `import ProfessionalServiceAgreementForm from \'./components/ProfessionalServiceAgreementForm\';` to import it. Also make sure to use `export default function Page(){}` to define the function component."))