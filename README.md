# Limited-scope OpenAPI schema validator.

- Run `npm run test` to run all of the tests
- Run `npm i && npm run test:watch` to install deps and develop (TDD recommended)
- You can find some TODOs/comments in the code.


### TODOs
- Enforce the validator interface in validateSchema function - currently it is enforced just by convention 
- Move to class approach and leverage the delegation pattern with the validator interface and batch init of registered validators